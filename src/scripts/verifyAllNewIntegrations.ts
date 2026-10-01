import { rtrvrService } from '../services/rtrvrService';
import { apolloService } from '../services/apolloService';
import { builtwithService } from '../services/builtwithService';
import { geminiService } from '../services/geminiService';
import { phylloService } from '../services/phylloService';
import { brightdataService } from '../services/brightdataService';
import { jevService } from '../services/jevService';

async function runLiveVerification() {
  console.log('==============================================================================');
  console.log('🏛️ RJ BUSINESS SOLUTIONS — LIVE INTEGRATION SUITE VERIFICATION');
  console.log('==============================================================================\n');

  // 1. Rtrvr.ai Verification
  try {
    console.log('🔍 Testing 1: Rtrvr.ai Web Browser Agent...');
    const rtrvrRes = await rtrvrService.runAgent({
      input: 'Extract the title and main headline of the page',
      urls: ['https://rjbusinesssolutions.org'],
      verbosity: 'final'
    });
    console.log('✅ Rtrvr.ai Success:');
    console.log('   Credits Remaining:', rtrvrRes.credits_remaining ?? 'Active');
    console.log('   Response preview:', JSON.stringify(rtrvrRes).slice(0, 180), '...\n');
  } catch (err: any) {
    console.log('⚠️ Rtrvr.ai Notice:', err.message, '\n');
  }

  // 2. Apollo.io Verification
  try {
    console.log('🔍 Testing 2: Apollo.io B2B Enrichment...');
    const apolloRes = await apolloService.matchPerson({
      first_name: 'Rick',
      last_name: 'Jefferson',
      domain: 'rjbusinesssolutions.org'
    });
    console.log('✅ Apollo.io Success:');
    console.log('   Status/Data preview:', JSON.stringify(apolloRes).slice(0, 180), '...\n');
  } catch (err: any) {
    console.log('⚠️ Apollo.io Notice:', err.message, '\n');
  }

  // 3. BuiltWith Verification
  try {
    console.log('🔍 Testing 3: BuiltWith Tech Stack Profiler...');
    const bwRes = await builtwithService.getTechnologySummary('rjbusinesssolutions.org');
    console.log('✅ BuiltWith Success:');
    console.log('   Domain:', bwRes.domain);
    console.log('   Technologies found:', bwRes.technologies.length, 'technologies');
    console.log('   Categories:', Object.keys(bwRes.categories).slice(0, 5), '...\n');
  } catch (err: any) {
    console.log('⚠️ BuiltWith Notice:', err.message, '\n');
  }

  // 4. Gemini AI Verification
  try {
    console.log('🔍 Testing 4: Google Gemini AI...');
    const geminiRes = await geminiService.generateContent({
      prompt: 'Summarize RJ Business Solutions in 1 powerful sentence.'
    });
    console.log('✅ Gemini AI Success:');
    console.log('   Output:', geminiRes.text.trim(), '\n');
  } catch (err: any) {
    console.log('⚠️ Gemini AI Notice:', err.message, '\n');
  }

  // 5. Phyllo Creator Verification
  try {
    console.log('🔍 Testing 5: Phyllo Creator Economy API...');
    const phylloRes = await phylloService.getWorkPlatforms();
    console.log('✅ Phyllo Success:');
    console.log('   Work platforms available:', Array.isArray(phylloRes.data) ? phylloRes.data.length : 'Connected', '\n');
  } catch (err: any) {
    console.log('⚠️ Phyllo Notice:', err.message, '\n');
  }

  // 6. Bright Data Verification
  try {
    console.log('🔍 Testing 6: Bright Data Web Intelligence...');
    const brightRes = await brightdataService.scrapeUrl({
      url: 'https://example.com'
    });
    console.log('✅ Bright Data Success:');
    console.log('   Status:', brightRes.status);
    console.log('   Content Length:', brightRes.content.length, 'bytes\n');
  } catch (err: any) {
    console.log('⚠️ Bright Data Notice:', err.message, '\n');
  }

  // 7. Jev AI Verification
  try {
    console.log('🔍 Testing 7: Jev AI Workflow Task...');
    const jevRes = await jevService.runTask({
      prompt: 'Validate workflow connection for RJ Business Solutions'
    });
    console.log('✅ Jev AI Success:');
    console.log('   Response preview:', JSON.stringify(jevRes).slice(0, 180), '...\n');
  } catch (err: any) {
    console.log('⚠️ Jev AI Notice:', err.message, '\n');
  }

  console.log('==============================================================================');
  console.log('🏁 ALL INTEGRATION CHECKS COMPLETE');
  console.log('==============================================================================');
}

runLiveVerification();
