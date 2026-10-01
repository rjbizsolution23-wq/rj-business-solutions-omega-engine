import { socialOmniSalesEngine } from '../workflows/socialOmniSalesEngine';
import { socialMediaScraperService } from '../services/socialMediaScraperService';

async function triggerLiveSocialRadar() {
  console.log('==============================================================================');
  console.log('📡 RJ BUSINESS SOLUTIONS — LIVE SOCIAL MEDIA SCRAPER & SALES RADAR');
  console.log('==============================================================================\n');

  console.log('🚀 1. Harvesting live social media posts across Reddit, TikTok, Instagram, YouTube, Facebook, LinkedIn...');
  const liveScraped = await socialMediaScraperService.scrapeAll({
    keywords: ['DFW Catering Mobile Bar', 'Speed to Lead CRM Automation', 'Credit Repair FCRA'],
    platforms: ['reddit', 'tiktok', 'instagram', 'youtube', 'facebook', 'linkedin'],
    limit: 3
  });

  console.log(`✅ Scraper harvest complete: ${liveScraped.length} social items extracted.\n`);
  liveScraped.forEach((post, i) => {
    console.log(`   [${i + 1}] (${post.platform.toUpperCase()}) ${post.author}: "${post.content.slice(0, 100)}..."`);
    if (post.contactInfo?.email) console.log(`       📧 Contact: ${post.contactInfo.email}`);
    if (post.contactInfo?.phone) console.log(`       📱 Phone: ${post.contactInfo.phone}`);
  });

  console.log('\n------------------------------------------------------------------------------');
  console.log('🧠 2. Running Social Omni Sales Engine & Intent Extractor...');
  console.log('------------------------------------------------------------------------------');

  const report = await socialOmniSalesEngine.runFullOmniScan({
    nicheOrTopic: 'Luxury Mobile Cocktail Bar & Event Catering',
    targetCityOrRegion: 'Dallas-Fort Worth, TX',
    platforms: ['tiktok', 'instagram', 'facebook', 'reddit', 'linkedin'],
    productCategory: 'tasty-licka'
  });

  console.log(`\n🎉 SCAN COMPLETE [Scan ID: ${report.scanId}]`);
  console.log(`📊 Platforms Audited: ${report.platformsAudited.join(', ')}`);
  console.log(`📥 Scraped Posts Processed: ${report.scrapedPostsCount}`);
  console.log(`🎯 Buyer Intent Leads Discovered: ${report.leadsDiscovered.length}`);
  console.log(`🏢 GHL Subaccount Synced: ${report.ghlSyncSummary.targetLocationId} (${report.ghlSyncSummary.syncedCount} contacts upserted)\n`);

  console.log('💡 Market Opportunity Synthesis:');
  console.log(`   ${report.marketOpportunitySummary}\n`);

  console.log('⚔️ Competitor Analysis & Exploitation Moves:');
  report.competitorsAudited.forEach((c, i) => {
    console.log(`   [${i + 1}] ${c.competitorName} (${c.engagementRating})`);
    console.log(`       Weakness: ${c.customerComplaints?.join(', ')}`);
    console.log(`       RJ Winning Move: ${c.opportunityForRJ}`);
  });

  console.log('\n🔥 High-Intent Buyer Leads & Generated Pitches:');
  report.leadsDiscovered.forEach((lead, i) => {
    console.log(`\n   --- [Lead #${i + 1}] ${lead.authorOrUsername} (${lead.platform}) ---`);
    console.log(`   Intent: ${lead.intentCategory} | Signal Score: ${lead.buyingSignalScore}%`);
    console.log(`   Pain Point: ${lead.painPointSummary}`);
    console.log(`   Recommended Solution: ${lead.recommendedSolution}`);
    console.log(`   Generated Pitch: "${lead.generatedPitch}"`);
    if (lead.contactInfo?.email) console.log(`   Email: ${lead.contactInfo.email}`);
    if (lead.contactInfo?.phone) console.log(`   Phone: ${lead.contactInfo.phone}`);
  });

  console.log('\n==============================================================================');
  console.log('🏁 LIVE SOCIAL RADAR EXECUTION & CRM INGESTION COMPLETED SUCCESSFULLY');
  console.log('==============================================================================');
}

triggerLiveSocialRadar();
