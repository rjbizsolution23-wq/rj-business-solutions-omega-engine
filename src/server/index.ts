import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { CONFIG } from '../config/credentials';
import { ghlService } from '../services/ghlService';
import { mistralService } from '../services/mistralService';
import { nvidiaService } from '../services/nvidiaService';
import { elevenLabsService } from '../services/elevenLabsService';
import { replicateService } from '../services/replicateService';
import { runwayService } from '../services/runwayService';
import { base44Service } from '../services/base44Service';
import { apifyService } from '../services/apifyService';
import { twilioService } from '../services/twilioService';
import { r2StorageService } from '../services/r2StorageService';
import { huggingfaceService } from '../services/huggingfaceService';
import { kaggleService } from '../services/kaggleService';
import { githubService } from '../services/githubService';
import { rtrvrService } from '../services/rtrvrService';
import { apolloService } from '../services/apolloService';
import { builtwithService } from '../services/builtwithService';
import { phylloService } from '../services/phylloService';
import { brightdataService } from '../services/brightdataService';
import { jevService } from '../services/jevService';
import { geminiService } from '../services/geminiService';
import { syncAllSubaccounts } from '../workflows/subaccountSync';
import { processInboundLead } from '../workflows/leadEnrichmentPipeline';
import { socialOmniSalesEngine } from '../workflows/socialOmniSalesEngine';
import { b2bHunterPipeline } from '../workflows/b2bHunterPipeline';
import { fcraAuditPipeline } from '../workflows/fcraAuditPipeline';
import { eventVenuePipeline } from '../workflows/eventVenuePipeline';
import { googleMapsHunterPipeline } from '../workflows/googleMapsHunterPipeline';
import { dirgeReconService } from '../services/dirgeReconService';
import { marketDominationService } from '../services/marketDominationService';
import { nexusArchitectService } from '../services/nexusArchitectService';
import { fiftyXSalesDominationService } from '../services/fiftyXSalesDominationService';
import { digitalDennisService } from '../services/digitalDennisService';
import { supremeBlogDominationService } from '../services/supremeBlogDominationService';
import { supremeLuxuryWebsiteBuilderService } from '../services/supremeLuxuryWebsiteBuilderService';
import { supremeAISuperAgentService } from '../services/supremeAISuperAgentService';




import fs from 'fs';
import path from 'path';

const app = new Hono();

app.use('*', cors());

// GHL Custom CSS Endpoint
app.get('/api/ghl/branding/custom.css', (c) => {
  try {
    const cssPath = path.resolve(process.cwd(), 'ghl-branding/rj-agency-custom.css');
    const content = fs.readFileSync(cssPath, 'utf-8');
    c.header('Content-Type', 'text/css');
    return c.body(content);
  } catch (err: any) {
    return c.text('/* Error loading CSS */', 500);
  }
});

// GHL Custom JS Endpoint
app.get('/api/ghl/branding/custom.js', (c) => {
  try {
    const jsPath = path.resolve(process.cwd(), 'ghl-branding/rj-agency-custom.js');
    const content = fs.readFileSync(jsPath, 'utf-8');
    c.header('Content-Type', 'application/javascript');
    return c.body(content);
  } catch (err: any) {
    return c.text('// Error loading JS', 500);
  }
});

// Tasty Licka Custom CSS Endpoint
app.get('/api/ghl/branding/tasty-licka.css', (c) => {
  try {
    const cssPath = path.resolve(process.cwd(), 'ghl-branding/tasty-licka-custom.css');
    const content = fs.readFileSync(cssPath, 'utf-8');
    c.header('Content-Type', 'text/css');
    return c.body(content);
  } catch (err: any) {
    return c.text('/* Error loading CSS */', 500);
  }
});

// Tasty Licka Custom JS Endpoint
app.get('/api/ghl/branding/tasty-licka.js', (c) => {
  try {
    const jsPath = path.resolve(process.cwd(), 'ghl-branding/tasty-licka-custom.js');
    const content = fs.readFileSync(jsPath, 'utf-8');
    c.header('Content-Type', 'application/javascript');
    return c.body(content);
  } catch (err: any) {
    return c.text('// Error loading JS', 500);
  }
});

// 1. Health & Configuration Summary
app.get('/api/health', (c) => {
  return c.json({
    status: 'online',
    system: 'RJ Business Solutions · Omega Multi-Location Automation Engine',
    timestamp: new Date().toISOString(),
    agency: {
      relationshipNumber: CONFIG.ghl.agency.relationshipNumber,
      subaccountsTracked: CONFIG.ghl.subaccounts.length
    },
    integrations: {
      cloudflareR2: !!CONFIG.cloudflare.r2.accessKeyId,
      mistralAI: !!CONFIG.ai.mistral.apiKey,
      nvidiaNIM: !!CONFIG.ai.nvidia.apiKey,
      elevenLabs: !!CONFIG.ai.elevenLabs.apiKey,
      replicate: !!CONFIG.ai.replicate.apiToken,
      runway: !!CONFIG.ai.runway.apiKey,
      huggingface: !!CONFIG.ai.huggingface.apiToken,
      geminiAI: !!CONFIG.ai.gemini.apiKey,
      jevAI: !!CONFIG.ai.jev.apiKey,
      rtrvrAI: !!CONFIG.webAgents.rtrvr.apiKey,
      kaggle: !!CONFIG.dataScience.kaggle.apiToken,
      github: !!CONFIG.github.token,
      base44: !!CONFIG.ai.base44.apiToken,
      apify: !!CONFIG.leadGen.apify.token,
      apollo: !!CONFIG.leadGen.apollo.apiKey,
      builtwith: !!CONFIG.leadGen.builtwith.apiKey,
      phyllo: !!CONFIG.leadGen.phyllo.apiKey,
      brightdata: !!CONFIG.leadGen.brightdata.apiKey,
      twilio: !!CONFIG.telephony.twilio.accountSid
    }
  });
});

// 2. Subaccounts Overview & Health Check
app.get('/api/subaccounts', async (c) => {
  const audit = await ghlService.auditAllSubaccounts();
  return c.json({ subaccounts: audit });
});

// 3. Subaccounts Sync (Custom fields & tags across all 4 locations)
app.post('/api/subaccounts/sync', async (c) => {
  try {
    const results = await syncAllSubaccounts();
    return c.json({ success: true, results });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 4. Inbound Lead Automation Pipeline
app.post('/api/leads/process', async (c) => {
  try {
    const body = await c.req.json();
    const result = await processInboundLead(body);
    return c.json(result);
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 5. AI Chat / Reasoning (Mistral & NVIDIA)
app.post('/api/ai/chat', async (c) => {
  try {
    const { prompt, engine, model } = await c.req.json();
    if (engine === 'nvidia') {
      const res = await nvidiaService.generateCompletion(prompt, model);
      return c.json(res);
    } else {
      const res = await mistralService.chatCompletion([
        { role: 'user', content: prompt }
      ], { model });
      return c.json(res);
    }
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 6. Voice Generation (ElevenLabs + R2 Storage)
app.post('/api/ai/voice', async (c) => {
  try {
    const { text, voiceId } = await c.req.json();
    const audioBuffer = await elevenLabsService.textToSpeech(text, voiceId);
    const assetKey = `voice-memos/memo-${Date.now()}.mp3`;
    const uploadRes = await r2StorageService.uploadAsset(assetKey, Buffer.from(audioBuffer), 'audio/mpeg');
    return c.json({ success: true, assetKey, url: uploadRes.url });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 7. Creative Image Generation (Replicate + R2)
app.post('/api/ai/image', async (c) => {
  try {
    const { prompt } = await c.req.json();
    const repRes = await replicateService.generateImage(prompt);
    return c.json({ success: true, result: repRes });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 8. Video Generation (Runway Gen-3)
app.post('/api/ai/video', async (c) => {
  try {
    const body = await c.req.json();
    const videoRes = await runwayService.generateVideo(body);
    return c.json({ success: true, result: videoRes });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 9. Base44 Superagent Dialogue
app.post('/api/base44/chat', async (c) => {
  try {
    const { conversationId, message } = await c.req.json();
    let convId = conversationId;
    if (!convId) {
      const conv = await base44Service.createConversation();
      convId = conv.id;
    }
    const sendRes = await base44Service.sendMessage(convId, message);
    return c.json({ success: true, conversationId: convId, response: sendRes });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 10. Apify Scraper Trigger
app.post('/api/leadgen/scrape', async (c) => {
  try {
    const { actorId, input } = await c.req.json();
    const scrapeRes = await apifyService.runActor(actorId, input);
    return c.json({ success: true, run: scrapeRes });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 11. Hugging Face Hub & Models
app.get('/api/huggingface/whoami', async (c) => {
  try {
    const res = await huggingfaceService.getWhoAmI();
    return c.json({ success: true, user: res });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/huggingface/models', async (c) => {
  try {
    const q = c.req.query('q') || 'credit';
    const limit = Number(c.req.query('limit')) || 20;
    const models = await huggingfaceService.searchModels(q, limit);
    return c.json({ success: true, count: models.length, models });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/huggingface/datasets', async (c) => {
  try {
    const q = c.req.query('q') || 'credit';
    const limit = Number(c.req.query('limit')) || 20;
    const datasets = await huggingfaceService.searchDatasets(q, limit);
    return c.json({ success: true, count: datasets.length, datasets });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/huggingface/spaces', async (c) => {
  try {
    const q = c.req.query('q') || 'llm';
    const limit = Number(c.req.query('limit')) || 20;
    const spaces = await huggingfaceService.searchSpaces(q, limit);
    return c.json({ success: true, count: spaces.length, spaces });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.post('/api/huggingface/inference', async (c) => {
  try {
    const { modelId, inputs, parameters } = await c.req.json();
    const result = await huggingfaceService.runInference(modelId, inputs, parameters);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 12. Kaggle Hub & Datasets
app.get('/api/kaggle/datasets', async (c) => {
  try {
    const q = c.req.query('q') || 'credit';
    const page = Number(c.req.query('page')) || 1;
    const datasets = await kaggleService.searchDatasets(q, page);
    return c.json({ success: true, count: datasets.length, datasets });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/kaggle/models', async (c) => {
  try {
    const q = c.req.query('q') || 'gemma';
    const page = Number(c.req.query('page')) || 1;
    const models = await kaggleService.searchModels(q, page);
    return c.json({ success: true, count: models.length, models });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/kaggle/competitions', async (c) => {
  try {
    const q = c.req.query('q');
    const competitions = await kaggleService.listCompetitions(q);
    return c.json({ success: true, count: competitions.length, competitions });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 13. GitHub Hub & Repositories
app.get('/api/github/user', async (c) => {
  try {
    const user = await githubService.getUser();
    return c.json({ success: true, user });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/github/repos', async (c) => {
  try {
    const page = Number(c.req.query('page')) || 1;
    const perPage = Number(c.req.query('per_page')) || 20;
    const repos = await githubService.listRepositories(page, perPage);
    return c.json({ success: true, count: repos.length, repos });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.post('/api/github/create-repo', async (c) => {
  try {
    const { name, description, isPrivate } = await c.req.json();
    const repo = await githubService.createRepository(name, description, isPrivate);
    return c.json({ success: true, repo });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 14. Twilio SMS Dispatch
app.post('/api/telephony/sms', async (c) => {
  try {
    const { to, message, mediaUrl } = await c.req.json();
    const smsRes = await twilioService.sendSMS(to, message, mediaUrl ? [mediaUrl] : undefined);
    return c.json({ success: true, sid: smsRes.sid, status: smsRes.status });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 14b. Twilio Inbound SMS Webhook (Listens to +1-866-752-4618)
const handleTwilioInbound = async (c: any) => {
  try {
    const contentType = c.req.header('content-type') || '';
    let from = '';
    let body = '';
    let to = '';

    if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const form = await c.req.parseBody();
      from = (form['From'] as string) || '';
      body = (form['Body'] as string) || '';
      to = (form['To'] as string) || '';
    } else {
      const json = await c.req.json().catch(() => ({}));
      from = json.From || json.from || '';
      body = json.Body || json.body || '';
      to = json.To || json.to || '';
    }

    console.log(`📱 [Twilio Inbound SMS]: From=${from}, To=${to}, Body=${body}`);

    const upperBody = (body || '').trim().toUpperCase();
    let twimlMessage = '';

    // Route Tasty Licka keyword or default event response
    if (upperBody.includes('TASTY') || upperBody.includes('EVENT') || upperBody.includes('WAKANDA') || upperBody.includes('BAR') || upperBody.includes('WING')) {
      const locationId = '0TOBkfBFSDF935BN8Fgr'; // Tasty Licka GHL Subaccount
      const encodedPhone = encodeURIComponent(from);
      const eventSignupUrl = `https://tastylicka.com/event?phone=${encodedPhone}`;

      // Upsert into GHL subaccount immediately
      try {
        await ghlService.upsertContact(locationId, {
          phone: from,
          tags: [
            'twilio-sms-optin',
            'sms-keyword-tasty',
            'event-attendee-capture',
            'tasty-licka-inbound',
            'vip-lead'
          ],
          source: 'Twilio Inbound SMS (866-752-4618)'
        });
      } catch (err: any) {
        console.warn('GHL contact upsert error from Twilio SMS:', err.message);
      }

      twimlMessage = `🍸 Welcome to Tasty Licka VIP! Angel Lewis here. Tap below to claim your instant event perk + VIP tasting pass & tell us your favorite cocktail: ${eventSignupUrl}`;
    } else {
      twimlMessage = `Hi! Thanks for texting RJ Business Solutions. To claim Tasty Licka event perks & VIP passes, reply TASTY or visit https://tastylicka.com/event`;
    }

    const twiml = `<?xml version="1.0" encoding="UTF-8"?><Response><Message>${twimlMessage}</Message></Response>`;
    c.header('Content-Type', 'text/xml');
    return c.body(twiml);
  } catch (err: any) {
    console.error('Twilio inbound webhook error:', err);
    return c.text('<?xml version="1.0" encoding="UTF-8"?><Response><Message>Thanks for your message! Visit https://tastylicka.com/event</Message></Response>', 200, { 'Content-Type': 'text/xml' });
  }
};

app.post('/api/webhooks/twilio/inbound', handleTwilioInbound);
app.post('/api/webhooks/twilio/tasty-licka', handleTwilioInbound);
app.get('/api/webhooks/twilio/inbound', handleTwilioInbound);
app.get('/api/webhooks/twilio/tasty-licka', handleTwilioInbound);

// 12. R2 Asset Vault Listing
app.get('/api/storage/assets', async (c) => {
  try {
    const assets = await r2StorageService.listAssets();
    return c.json({ success: true, assets });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 15. Comprehensive GoHighLevel Webhooks Router
// Primary RJ Business Solutions Webhook: /api/webhooks/ghl/rj-business-solutions
// SMART FCRA Webhook: /api/webhooks/ghl/smart-fcra
// Universal Subaccount Webhook: /api/webhooks/ghl/:locationId
app.post('/api/webhooks/ghl/:locationSlugOrId?', async (c) => {
  try {
    const slugOrId = c.req.param('locationSlugOrId') || 'rj-business-solutions';
    const payload = await c.req.json();
    console.log(`⚡ [GHL Webhook Received - ${slugOrId}]:`, JSON.stringify(payload, null, 2));

    let locationId = CONFIG.ghl.subaccounts[0].locationId; // Default to RJ Business Solutions (DvKRMVD9YudoS6xRyBfb)
    if (slugOrId === 'smart-fcra') {
      locationId = CONFIG.ghl.subaccounts[1].locationId;
    } else if (slugOrId === 'eugene') {
      locationId = CONFIG.ghl.subaccounts[2].locationId;
    } else if (slugOrId === 'contracting-preacher') {
      locationId = CONFIG.ghl.subaccounts[3].locationId;
    } else if (slugOrId === 'tasty-licka') {
      locationId = CONFIG.ghl.subaccounts[4].locationId;
    } else if (slugOrId && slugOrId.length > 10) {
      locationId = slugOrId;
    }

    // Auto-process lead through AI pipeline if contact data exists
    let aiEnrichment = null;
    if (payload.email || payload.phone || payload.first_name || payload.firstName || payload.name) {
      try {
        let fullName = payload.name || '';
        let firstName = payload.first_name || payload.firstName || '';
        let lastName = payload.last_name || payload.lastName || '';
        if (!firstName && fullName) {
          const parts = fullName.trim().split(' ');
          firstName = parts[0];
          lastName = parts.slice(1).join(' ');
        }
        if (!firstName) firstName = 'Prospect';

        const customFields: Array<{ id: string; field_value: any }> = [];
        const tags: string[] = Array.isArray(payload.tags) ? [...payload.tags] : [];

        if (slugOrId === 'tasty-licka') {
          tags.push('tasty-licka-inbound', 'lead-catering');
          if (payload.eventDate || payload.date) {
            customFields.push({ id: 'VCCIOoZZkPQYUVcIBk97', field_value: payload.eventDate || payload.date });
          }
          if (payload.guestCount) {
            customFields.push({ id: 'b5CQTZJcsRwySmmeu2EI', field_value: Number(payload.guestCount) });
          }
          if (payload.eventType) {
            customFields.push({ id: 'ZnRAbgzTsYCXDZB34II0', field_value: payload.eventType });
            tags.push(`lead-${String(payload.eventType).toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
          }
          if (payload.eventLocation || payload.venue) {
            customFields.push({ id: 'wNts1C8Ma0IiDzmdKYYd', field_value: payload.eventLocation || payload.venue });
          }
          if (payload.selectedTier || payload.packageTier) {
            const tier = payload.selectedTier || payload.packageTier;
            customFields.push({ id: '3ZCN9cndjBbSN2OUN8By', field_value: tier });
            tags.push(`package-${tier}`);
          }
          if (payload.totalQuote || payload.estimatedSubtotal || payload.grandTotal) {
            customFields.push({ id: 'kTm3CnERsHSSHXk8I4NF', field_value: payload.totalQuote || payload.estimatedSubtotal || payload.grandTotal });
          }
          if (payload.notes || payload.specialRequests || payload.dietaryNotes) {
            customFields.push({ id: 'CvMEwIyGCvfTYkQDNzOh', field_value: payload.notes || payload.specialRequests || payload.dietaryNotes });
          }
          if (payload.isVIP || payload.promoCode === 'TASTYVIP10') {
            tags.push('vip-loyalty-tier', 'promo-claimed');
            customFields.push({ id: 'QXY5EANHDDT073uYu65U', field_value: 'VIP Gold' });
          }
        }

        const lead = {
          firstName,
          lastName,
          email: payload.email || '',
          phone: payload.phone || '',
          notes: payload.notes || payload.message || payload.body || JSON.stringify(payload),
          targetLocationId: locationId,
          triggerVoiceMemo: true,
          tags,
          customFields,
          source: payload.source || `RJ Omega ${slugOrId} Webhook`
        };
        aiEnrichment = await processInboundLead(lead);
      } catch (aiErr: any) {
        console.warn('AI Webhook Enrichment Error (non-blocking):', aiErr.message);
      }
    }

    return c.json({
      success: true,
      message: `GHL Webhook processed successfully for ${slugOrId}`,
      locationId,
      timestamp: new Date().toISOString(),
      aiEnrichment
    });
  } catch (err: any) {
    console.error('GHL Webhook error:', err);
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 16. Webhook Receiver for Base44 Superagent
app.post('/api/webhooks/base44', async (c) => {
  const rawBody = await c.req.text();
  console.log('🤖 Received Base44 Webhook:', rawBody);
  return c.body(null, 204);
});

// 17. Tasty Licka Full GHL Blueprint API
app.get('/api/tastylicka/blueprint', async (c) => {
  const { TASTY_LICKA_BLUEPRINT } = await import('../services/tastyLickaBlueprint');
  return c.json({ success: true, blueprint: TASTY_LICKA_BLUEPRINT });
});

// 18. Tasty Licka Luxury Proposal Generator API
app.post('/api/tastylicka/generate-proposal', async (c) => {
  try {
    const { generateTastyLickaProposal } = await import('../services/proposalGenerator');
    const body = await c.req.json();
    const proposal = generateTastyLickaProposal(body);
    return c.json({ success: true, proposal });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 19. Tasty Licka B2B Venue & Corporate Planner Ingestion API
app.post('/api/tastylicka/b2b-scrape-ingest', async (c) => {
  try {
    const { ingestB2BPartnersToGHL } = await import('../services/dfwB2BLeadService');
    const result = await ingestB2BPartnersToGHL();
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 20. Rtrvr.ai Autonomous Web Agent API
app.post('/api/rtrvr/agent', async (c) => {
  try {
    const body = await c.req.json();
    const result = await rtrvrService.runAgent(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.post('/api/rtrvr/extract', async (c) => {
  try {
    const { url, prompt } = await c.req.json();
    const result = await rtrvrService.extractFromUrl(url, prompt || 'Extract key contact, services, and business information');
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 21. Apollo.io B2B Lead Match & Search API
app.post('/api/apollo/match', async (c) => {
  try {
    const body = await c.req.json();
    const result = await apolloService.matchPerson(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.post('/api/apollo/search', async (c) => {
  try {
    const body = await c.req.json();
    const result = await apolloService.searchPeople(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/apollo/org', async (c) => {
  try {
    const domain = c.req.query('domain') || 'rjbusinesssolutions.org';
    const result = await apolloService.enrichOrganization(domain);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 22. BuiltWith Tech Stack Profiler API
app.get('/api/builtwith/domain', async (c) => {
  try {
    const domain = c.req.query('domain') || 'rjbusinesssolutions.org';
    const result = await builtwithService.lookupDomain(domain);
    return c.json({ success: true, domain, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/builtwith/summary', async (c) => {
  try {
    const domain = c.req.query('domain') || 'rjbusinesssolutions.org';
    const summary = await builtwithService.getTechnologySummary(domain);
    return c.json({ success: true, summary });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 23. Phyllo Creator & Social Analytics API
app.get('/api/phyllo/platforms', async (c) => {
  try {
    const platforms = await phylloService.getWorkPlatforms();
    return c.json({ success: true, platforms });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.post('/api/phyllo/user', async (c) => {
  try {
    const body = await c.req.json();
    const user = await phylloService.createUser(body);
    return c.json({ success: true, user });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.get('/api/phyllo/profiles', async (c) => {
  try {
    const userId = c.req.query('user_id');
    const profiles = await phylloService.getProfiles(userId);
    return c.json({ success: true, profiles });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 24. Bright Data Scraping & SERP API
app.post('/api/brightdata/scrape', async (c) => {
  try {
    const body = await c.req.json();
    const result = await brightdataService.scrapeUrl(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.post('/api/brightdata/serp', async (c) => {
  try {
    const { query, country } = await c.req.json();
    const result = await brightdataService.searchSerp(query, country);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 25. Jev AI Task API
app.post('/api/jev/task', async (c) => {
  try {
    const body = await c.req.json();
    const result = await jevService.runTask(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 26. Google Gemini AI Generation API
app.post('/api/gemini/generate', async (c) => {
  try {
    const body = await c.req.json();
    const result = await geminiService.generateContent(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 27. Ultimate Social Omni Sales Engine (Multi-Platform Scan & Buying Intent Extractor)
app.post('/api/social-omni/scan', async (c) => {
  try {
    const body = await c.req.json();
    const report = await socialOmniSalesEngine.runFullOmniScan(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

app.post('/api/social-omni/dispatch', async (c) => {
  try {
    const { lead, phoneNumberOverride } = await c.req.json();
    const result = await socialOmniSalesEngine.dispatchPitch(lead, phoneNumberOverride);
    return c.json(result);
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 28. B2B Tech Hunter Pipeline
app.post('/api/pipelines/b2b-hunter', async (c) => {
  try {
    const body = await c.req.json();
    const result = await b2bHunterPipeline.huntAndEnrich(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 29. SMART FCRA Credit Compliance & Dispute Pipeline
app.post('/api/pipelines/fcra-audit', async (c) => {
  try {
    const body = await c.req.json();
    const result = await fcraAuditPipeline.auditCreditReport(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 30. Tasty Licka Event & Venue Acquisition Pipeline
app.post('/api/pipelines/event-venue', async (c) => {
  try {
    const body = await c.req.json();
    const result = await eventVenuePipeline.runVenueAcquisition(body);
    return c.json({ success: true, result });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 31. Google Maps Local Business Hunter & Proposal Pipeline
app.post('/api/pipelines/google-maps-hunter', async (c) => {
  try {
    const { query, city, maxResults } = await c.req.json();
    const report = await googleMapsHunterPipeline.runHunter(query, city, maxResults);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 32. D.I.R.G.E. v8.0 Digital Intelligence Recon & Growth Engine
app.post('/api/dirge/recon', async (c) => {
  try {
    const body = await c.req.json();
    const report = await dirgeReconService.executeRecon(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 33. SUPREME Business Intelligence & Market Domination Warfare Engine
app.post('/api/domination/analyze', async (c) => {
  try {
    const body = await c.req.json();
    const report = await marketDominationService.executeDominationStrategy(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 34. NEXUS ARCHITECT AI Zero-Defect Full-Stack Builder
app.post('/api/nexus/build-system', async (c) => {
  try {
    const body = await c.req.json();
    const report = await nexusArchitectService.buildSystem(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 35. The 50X Sales Domination Transformation System
app.post('/api/sales/50x-domination', async (c) => {
  try {
    const body = await c.req.json();
    const report = await fiftyXSalesDominationService.generateTransformationPlan(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 36. Digital Dennis Autonomous AI Sales & Operations Agent
app.post('/api/sales/digital-dennis', async (c) => {
  try {
    const body = await c.req.json();
    const response = await digitalDennisService.processInteraction(body);
    return c.json({ success: true, response });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 37. Supreme Blog Domination Engine (July 2026 AI Overview Optimization)
app.post('/api/blog/generate-domination-post', async (c) => {
  try {
    const body = await c.req.json();
    const report = await supremeBlogDominationService.generateDominationPost(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 38. Supreme Ultra-Luxury Website Builder Agent (v3.0 - July 2026)
app.post('/api/websites/generate-luxury-build', async (c) => {
  try {
    const body = await c.req.json();
    const report = await supremeLuxuryWebsiteBuilderService.buildLuxuryWebsite(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// 39. SupremeAI Super-Agent & Brain Refresh Protocol v1.1
app.post('/api/supreme-ai/brain-refresh', async (c) => {
  try {
    const body = await c.req.json();
    const report = await supremeAISuperAgentService.executeBrainRefresh(body);
    return c.json({ success: true, report });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

// Export default for Cloudflare Worker runtime
export default app;

// If run explicitly via Node.js local dev server
if (typeof process !== 'undefined' && process.env && process.env.SERVE_NODE === 'true') {
  const port = Number(process.env.PORT) || 8787;
  serve({ fetch: app.fetch, port }, () => {
    console.log(`🚀 RJ Business Solutions Edge API Server running on port ${port}`);
  });
}


