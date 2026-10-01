import { googleMapsHunterPipeline } from '../workflows/googleMapsHunterPipeline';

async function testGoogleMapsHunter() {
  console.log('==============================================================================');
  console.log('🗺️ RJ BUSINESS SOLUTIONS — GOOGLE MAPS BUSINESS HUNTER & PROPOSAL ENGINE');
  console.log('==============================================================================\n');

  console.log('🔍 Searching Google Maps for "Roofers in Dallas TX"...');
  const report = await googleMapsHunterPipeline.runHunter('Roofers in Dallas TX', 'Dallas, TX', 4);

  console.log(`\n✅ Google Maps Hunter Scan Completed:`);
  console.log(`   Businesses Scanned: ${report.businessesScanned}`);
  console.log(`   Proposals Generated: ${report.proposalsGenerated.length}`);
  console.log(`   GHL Subaccount Synced: ${report.ghlSyncSummary.locationId} (${report.ghlSyncSummary.syncedCount} contacts upserted)\n`);

  report.proposalsGenerated.forEach((p, idx) => {
    console.log(`------------------------------------------------------------------------------`);
    console.log(`🏢 [Proposal #${idx + 1}] ${p.businessName} (${p.targetCategory})`);
    console.log(`   📍 Address: ${p.address} | 📱 Phone: ${p.phone}`);
    console.log(`   ⚡ Opportunity Score: ${p.opportunityScore}% | 💸 Est. Missed Revenue: $${p.missedRevenueEstimateMonthly.toLocaleString()}/mo`);
    console.log(`   🔎 Audit Summary: ${p.auditSummary}`);
    console.log(`   📦 Solutions Built:`);
    console.log(`      1. Web: ${p.coreSolutions.websiteAndMobile}`);
    console.log(`      2. SEO: ${p.coreSolutions.localSEOAndGoogleRanking}`);
    console.log(`      3. Automation: ${p.coreSolutions.automationAndSpeedToLead}`);
    console.log(`   💰 Recommended Tier: ${p.pricingTiers[1]?.name} -> $${p.pricingTiers[1]?.price} + $${p.pricingTiers[1]?.monthlyRecurring}/mo`);
    console.log(`   💬 SMS Ready Pitch: "${p.smsOutreachMessage}"`);
    console.log(`   🔗 Interactive Proposal URL: ${p.proposalUrl}`);
  });

  console.log('\n==============================================================================');
  console.log('🏁 GOOGLE MAPS HUNTER TEST COMPLETED SUCCESSFULLY');
  console.log('==============================================================================');
}

testGoogleMapsHunter();
