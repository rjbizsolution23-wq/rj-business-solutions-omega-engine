import { mistralService } from '../services/mistralService';
import { elevenLabsService } from '../services/elevenLabsService';
import { r2StorageService } from '../services/r2StorageService';
import { ghlService } from '../services/ghlService';
import { twilioService } from '../services/twilioService';
import { CONFIG } from '../config/credentials';

export interface LeadPayload {
  firstName: string;
  lastName?: string;
  phone?: string;
  email?: string;
  notes?: string;
  targetLocationId?: string;
  triggerVoiceMemo?: boolean;
  tags?: string[];
  customFields?: Array<{ id: string; key?: string; field_value: any }>;
  source?: string;
}

export async function processInboundLead(lead: LeadPayload) {
  const targetLocationId = lead.targetLocationId || CONFIG.ghl.subaccounts[0].locationId;

  // 1. AI Analysis & Scoring via Mistral
  const aiEvaluation = await mistralService.scoreAndEnrichLead(lead);

  // 2. Synthesize Personalized Voice Memo if requested / available
  let voiceMemoUrl = '';
  if (lead.triggerVoiceMemo && aiEvaluation.personalizedVoiceScript) {
    try {
      const audioBuffer = await elevenLabsService.textToSpeech(aiEvaluation.personalizedVoiceScript);
      const audioKey = `voice-memos/${Date.now()}-${lead.firstName.toLowerCase()}.mp3`;
      const uploadRes = await r2StorageService.uploadAsset(
        audioKey,
        Buffer.from(audioBuffer),
        'audio/mpeg'
      );
      voiceMemoUrl = uploadRes.url;
    } catch (err: any) {
      console.warn('Voice memo generation failed (continuing pipeline):', err.message);
    }
  }

  // Build custom fields array including AI score/memo if available
  const mergedCustomFields = [...(lead.customFields || [])];
  if (aiEvaluation.score) {
    mergedCustomFields.push({ id: 'hrzoQOhSplgz1CBXG5O9', field_value: aiEvaluation.score });
  }
  if (aiEvaluation.intent) {
    mergedCustomFields.push({ id: 'F9wOZLcWGfoVJC4fhpX3', field_value: aiEvaluation.intent });
  }
  if (voiceMemoUrl) {
    mergedCustomFields.push({ id: 'WF4qt9zWXih7y74589Iw', field_value: voiceMemoUrl });
  }

  // 3. Upsert Contact into Target GHL Location
  const upsertRes = await ghlService.upsertContact(targetLocationId, {
    firstName: lead.firstName,
    lastName: lead.lastName,
    phone: lead.phone,
    email: lead.email,
    tags: [
      'ai-engaged',
      aiEvaluation.score > 75 ? 'high-value-prospect' : 'standard-lead',
      ...(lead.tags || []),
      ...(aiEvaluation.recommendedTags || [])
    ],
    customFields: mergedCustomFields,
    source: lead.source || 'RJ Omega Edge Automation'
  });

  // 4. Send SMS Notification / Response via Twilio if phone provided
  let twilioStatus = null;
  if (lead.phone) {
    try {
      const smsBody = `Hi ${lead.firstName}, Rick Jefferson's team at RJ Business Solutions received your inquiry. We are reviewing your requirements.`;
      twilioStatus = await twilioService.sendSMS(lead.phone, smsBody, voiceMemoUrl ? [voiceMemoUrl] : undefined);
    } catch (err: any) {
      console.warn('Twilio dispatch failed (non-blocking):', err.message);
    }
  }

  return {
    success: true,
    evaluation: aiEvaluation,
    contact: upsertRes,
    voiceMemoUrl,
    twilioStatus: twilioStatus ? 'sent' : 'skipped_or_failed'
  };
}
