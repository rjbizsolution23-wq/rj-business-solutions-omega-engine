import { geminiService } from './geminiService';
import { mistralService } from './mistralService';
import { ghlService } from './ghlService';
import { CONFIG } from '../config/credentials';

export interface DigitalDennisInteractionRequest {
  leadName: string;
  leadPhone?: string;
  leadEmail?: string;
  leadMessageOrInquiry: string;
  channel: 'sms' | 'instagram_dm' | 'facebook_dm' | 'tiktok_dm' | 'website_chat' | 'phone_call';
  businessNiche?: string;
  leadScore?: number;
  syncToGHL?: boolean;
}

export interface DigitalDennisResponse {
  interactionId: string;
  timestamp: string;
  leadName: string;
  channel: string;
  qualificationStatus: 'HOT_QUALIFIED' | 'WARM_NURTURE' | 'PRICE_SHOPPER' | 'DISQUALIFIED';
  leadScore: number; // 0-100
  aiGeneratedReply: string;
  recommendedAction: 'DISPATCH_PROPOSAL' | 'SCHEDULE_CLOSING_CALL' | 'SEND_STRIPE_CHECKOUT' | 'ENTER_LONGTERM_NURTURE';
  suggestedStripeCheckoutAmount?: number;
  objectionDetected?: string;
  dynamicRebuttalUsed?: string;
  ghlNextStage: string;
  rickJeffersonCTA: string;
}

export class DigitalDennisService {
  /**
   * Process 24/7 Autonomous Sales & Operational Interaction via Digital Dennis
   */
  async processInteraction(req: DigitalDennisInteractionRequest): Promise<DigitalDennisResponse> {
    const interactionId = `DENNIS-${Date.now()}`;
    const timestamp = new Date().toISOString();
    const leadName = req.leadName || 'Valued Prospect';
    const channel = req.channel || 'sms';

    console.log(`🤖 [DIGITAL DENNIS]: Processing inbound interaction from "${leadName}" via ${channel}...`);

    const prompt = `You are Digital Dennis, the elite Autonomous AI Sales & Operations Agent engineered for Rick Jefferson | RJ Business Solutions (Tax-Tech Wealth Automation™ & Quantum Prompt Genesis).
CURRENT DATE CONTEXT: 2026.

LEAD NAME: "${leadName}"
LEAD INQUIRY / MESSAGE: "${req.leadMessageOrInquiry}"
COMMUNICATION CHANNEL: "${channel}"
BUSINESS NICHE: "${req.businessNiche || 'Service Business / Credit Tech / B2B'}"
PRIOR LEAD SCORE: ${req.leadScore || 50}

Apply the OBX High-Ticket Persuasion Stack:
1. AI-Powered Identity Priming (AIPP)
2. Neuro-Loss Framing (NLF)
3. Mirror Conversion Language (MCL)
4. Rapid Qualification and Clear Call to Action

Return ONLY valid JSON matching this exact structure:
{
  "qualificationStatus": "HOT_QUALIFIED",
  "leadScore": 92,
  "aiGeneratedReply": "High-impact, empathetic, authoritative response tailored to the lead and channel",
  "recommendedAction": "SCHEDULE_CLOSING_CALL",
  "suggestedStripeCheckoutAmount": 2500,
  "objectionDetected": "Identified hesitation or fear",
  "dynamicRebuttalUsed": "Subtle reframing using Neuro-Loss Framing",
  "ghlNextStage": "appointment_scheduled"
}`;

    let parsedResult: any = null;
    try {
      const aiPromise = geminiService.generateContent({ prompt, temperature: 0.3 });
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('AI Timeout')), 3500));
      const aiResponse: any = await Promise.race([aiPromise, timeoutPromise]);
      const clean = aiResponse.text.replace(/```json/g, '').replace(/```/g, '').trim();
      const jsonMatch = clean.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResult = JSON.parse(jsonMatch[0]);
      }
    } catch (e: any) {
      console.warn('AI Digital Dennis fallback response activated:', e.message);
    }

    const defaultResponse: DigitalDennisResponse = {
      interactionId,
      timestamp,
      leadName,
      channel,
      qualificationStatus: parsedResult?.qualificationStatus || 'HOT_QUALIFIED',
      leadScore: parsedResult?.leadScore || 88,
      aiGeneratedReply: parsedResult?.aiGeneratedReply || `Hey ${leadName}! Rick Jefferson's team here. Loved your message about scaling your operations. The biggest leak we see for businesses in your niche is losing 40%+ of high-intent buyers due to slow manual response. We just deployed our 2026 autonomous speed-to-lead engine that fixes this in under 60 seconds. Are you free for a quick 5-minute walkthrough today?`,
      recommendedAction: parsedResult?.recommendedAction || 'SCHEDULE_CLOSING_CALL',
      suggestedStripeCheckoutAmount: parsedResult?.suggestedStripeCheckoutAmount || 2500,
      objectionDetected: parsedResult?.objectionDetected || 'Hesitation around setup complexity',
      dynamicRebuttalUsed: parsedResult?.dynamicRebuttalUsed || 'Reframed setup into zero-friction turnkey deployment managed 100% by RJ Business Solutions engineers.',
      ghlNextStage: parsedResult?.ghlNextStage || 'hot_lead_qualified',
      rickJeffersonCTA: `🔥 Scale your business with Rick Jefferson's Autonomous AI & 50X Persuasion Systems. Text "GROWTH" to 945-308-8003 | https://linkinbio.rickjefferson.com/`
    };

    // Optional GHL Sync
    if (req.syncToGHL && CONFIG.ghl.agency.pit) {
      try {
        const defaultSubaccount = CONFIG.ghl.subaccounts[0]?.id || 'DvKRMVD9YudoS6xRyBfb';
        await ghlService.createOpportunity(defaultSubaccount, {
          name: `Digital Dennis Lead - ${leadName}`,
          pipelineId: 'default_pipeline',
          pipelineStageId: defaultResponse.ghlNextStage,
          contactId: req.leadEmail || req.leadPhone || 'inbound_lead',
          monetaryValue: defaultResponse.suggestedStripeCheckoutAmount,
          status: 'open'
        });
        console.log(`✅ [DIGITAL DENNIS]: Lead synced to GHL stage: ${defaultResponse.ghlNextStage}`);
      } catch (err: any) {
        console.warn('GHL Digital Dennis sync note:', err.message);
      }
    }

    return defaultResponse;
  }
}

export const digitalDennisService = new DigitalDennisService();
