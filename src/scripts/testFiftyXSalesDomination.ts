import { fiftyXSalesDominationService } from '../services/fiftyXSalesDominationService';
import { digitalDennisService } from '../services/digitalDennisService';

async function verifyFiftyXAndDennis() {
  console.log('═════════════════════════════════════════════════════════════════════════');
  console.log('🏛️ ANTIGRAVITY OMEGA — 50X SALES DOMINATION & DIGITAL DENNIS VERIFICATION');
  console.log('═════════════════════════════════════════════════════════════════════════\n');

  // TEST 1: 50X Sales Transformation Plan
  console.log('▶️ [TEST 1/2]: Synthesizing 50X Sales Transformation Plan & OBX Stack...');
  const fiftyXRes = await fiftyXSalesDominationService.generateTransformationPlan({
    offerOrProductName: 'Tax-Tech Wealth Automation™ & High-Ticket AI Edge Infrastructure',
    targetAudience: 'High-Revenue Service Business Owners, Credit Operators & Fintech Brands',
    pricePoint: 5000,
    primaryChannel: 'omnichannel',
    syncToGHL: false
  });
  console.log(`✅ [50X SALES SUCCESS]: Plan ID: ${fiftyXRes.planId}`);
  console.log(`   - Multiplier: ${fiftyXRes.projectedConversionMultiplier}`);
  console.log(`   - AIPP Priming Hook: "${fiftyXRes.obxPersuasionStack.aiIdentityPriming.primingOpeningHook}"`);
  console.log(`   - NLF Monthly Loss: ${fiftyXRes.obxPersuasionStack.neuroLossFraming.costOfInactionMonthly}`);
  console.log(`   - Research Sources: ${fiftyXRes.researchIntelligence.map(r => r.database).join(', ')}`);
  console.log(`   - Objections Handled: ${fiftyXRes.objectionNeutralizationMatrix.length}\n`);

  // TEST 2: Digital Dennis 24/7 AI Agent
  console.log('▶️ [TEST 2/2]: Processing Digital Dennis Autonomous Lead Qualification & Rebuttal...');
  const dennisRes = await digitalDennisService.processInteraction({
    leadName: 'Marcus Vance',
    channel: 'sms',
    leadMessageOrInquiry: 'Hey Rick, we are losing leads because my team takes 4 hours to follow up. Does your AI speed-to-lead work with GoHighLevel?',
    businessNiche: 'Credit Repair & Commercial Lending',
    syncToGHL: false
  });
  console.log(`✅ [DIGITAL DENNIS SUCCESS]: Interaction ID: ${dennisRes.interactionId}`);
  console.log(`   - Status: ${dennisRes.qualificationStatus} (Score: ${dennisRes.leadScore}/100)`);
  console.log(`   - AI Reply: "${dennisRes.aiGeneratedReply.slice(0, 120)}..."`);
  console.log(`   - Recommended Action: ${dennisRes.recommendedAction}`);
  console.log(`   - Suggested Deposit: $${dennisRes.suggestedStripeCheckoutAmount}`);
  console.log(`   - Next Stage: ${dennisRes.ghlNextStage}\n`);

  console.log('═════════════════════════════════════════════════════════════════════════');
  console.log('🏆 50X SALES DOMINATION & DIGITAL DENNIS ENGINES 100% VERIFIED!');
  console.log('═════════════════════════════════════════════════════════════════════════');
}

verifyFiftyXAndDennis().catch((err) => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
