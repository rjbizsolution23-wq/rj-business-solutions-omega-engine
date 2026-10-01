import { builtwithService } from '../services/builtwithService';
import { apolloService } from '../services/apolloService';
import { rtrvrService } from '../services/rtrvrService';
import { geminiService } from '../services/geminiService';
import { ghlService } from '../services/ghlService';
import { twilioService } from '../services/twilioService';
import { CONFIG } from '../config/credentials';

export interface B2BHunterParams {
  domain: string;
  targetRole?: string;
  triggerOutreach?: boolean;
}

export class B2BHunterPipeline {
  /**
   * Run tech stack audit, decision-maker discovery, website analysis,
   * and automated B2B solution proposal.
   */
  async huntAndEnrich(params: B2BHunterParams): Promise<any> {
    const domain = params.domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').trim();
    console.log(`🎯 [B2B Hunter Pipeline]: Profiling domain ${domain}...`);

    // 1. BuiltWith Tech Profiler
    let techSummary: any = { domain, technologies: [], categories: {} };
    try {
      techSummary = await builtwithService.getTechnologySummary(domain);
    } catch (err: any) {
      console.warn('BuiltWith lookup note:', err.message);
    }

    // 2. Apollo Decision Maker Enrichment
    let decisionMaker: any = null;
    try {
      const apolloRes = await apolloService.matchPerson({
        domain,
        name: params.targetRole || 'Owner'
      });
      decisionMaker = apolloRes.person || apolloRes;
    } catch (err: any) {
      console.warn('Apollo match note:', err.message);
    }

    // 3. Rtrvr Autonomous Web Crawl
    let webExtraction: any = null;
    try {
      webExtraction = await rtrvrService.extractFromUrl(
        `https://${domain}`,
        'Extract business name, key services, pricing model, and contact details'
      );
    } catch (err: any) {
      console.warn('Rtrvr extraction note:', err.message);
    }

    // 4. Gemini AI Tech Opportunity Analysis & Pitch Generator
    const techListStr = techSummary.technologies.slice(0, 15).join(', ') || 'Custom Web Stack';
    const auditPrompt = `You are the RJ Business Solutions Lead Systems Architect.
Analyze the target business domain "${domain}".
Known Technologies detected: [${techListStr}].
Business Web Profile: ${JSON.stringify(webExtraction || {})}.

1. Identify 2 critical tech gaps or missed conversion opportunities (e.g. no instant SMS booking, lacking speed-to-lead automation, no AI lead qualification).
2. Write a powerful, high-converting 3-sentence B2B solution pitch tailored for the business owner.
3. Recommend the exact RJ Business Solutions tier or automation pipeline.

Format as JSON: { "techGaps": string[], "solutionPitch": string, "recommendedPackage": string }`;

    let aiAnalysis: any = {
      techGaps: ['Lacks instant SMS speed-to-lead', 'Manual appointment scheduling'],
      solutionPitch: `Hey team at ${domain}, we noticed your site isn't capturing mobile inquiries with instant 60-second SMS follow-ups. We engineered an edge automation pipeline that boosts lead conversions by 40%.`,
      recommendedPackage: 'RJ Omega Edge Automation Infrastructure'
    };

    try {
      const geminiRes = await geminiService.generateContent({ prompt: auditPrompt, temperature: 0.3 });
      const clean = geminiRes.text.replace(/```json/g, '').replace(/```/g, '').trim();
      aiAnalysis = JSON.parse(clean);
    } catch (e) {
      console.warn('Gemini parsing note:', e);
    }

    // 5. Ingest into RJ Business Solutions GHL Subaccount
    const rjLocationId = CONFIG.ghl.subaccounts[0].locationId;
    let contactId = null;

    try {
      const contactRes = await ghlService.upsertContact(rjLocationId, {
        name: decisionMaker?.name || `Executive @ ${domain}`,
        email: decisionMaker?.email || `contact@${domain}`,
        phone: decisionMaker?.phone_numbers?.[0]?.raw_number || '',
        companyName: domain,
        tags: ['b2b-hunter-lead', 'tech-stack-audited', 'high-value-prospect'],
        customFields: [
          { id: 'CvMEwIyGCvfTYkQDNzOh', field_value: `Tech Gaps: ${aiAnalysis.techGaps?.join(', ')} | Rec: ${aiAnalysis.recommendedPackage}` },
          { id: '3ZCN9cndjBbSN2OUN8By', field_value: aiAnalysis.solutionPitch }
        ],
        source: 'RJ B2B Hunter Pipeline'
      });
      contactId = contactRes?.contact?.id || 'synced';
    } catch (err: any) {
      console.warn('GHL sync error:', err.message);
    }

    // 6. Optional Direct Outreach Dispatch
    let outreachStatus = 'Ready for dispatch';
    if (params.triggerOutreach && decisionMaker?.phone_numbers?.[0]?.raw_number) {
      try {
        await twilioService.sendSMS(decisionMaker.phone_numbers[0].raw_number, aiAnalysis.solutionPitch);
        outreachStatus = 'SMS Dispatched';
      } catch (err: any) {
        outreachStatus = `SMS Attempted: ${err.message}`;
      }
    }

    return {
      domain,
      techSummary,
      decisionMaker,
      webExtraction,
      aiAnalysis,
      ghlSync: {
        locationId: rjLocationId,
        contactId
      },
      outreachStatus
    };
  }
}

export const b2bHunterPipeline = new B2BHunterPipeline();
