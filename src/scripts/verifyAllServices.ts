import { CONFIG } from '../config/credentials';
import { ghlService } from '../services/ghlService';
import { mistralService } from '../services/mistralService';
import { nvidiaService } from '../services/nvidiaService';
import { elevenLabsService } from '../services/elevenLabsService';
import { apifyService } from '../services/apifyService';
import { twilioService } from '../services/twilioService';
import { r2StorageService } from '../services/r2StorageService';
import { base44Service } from '../services/base44Service';
import { huggingfaceService } from '../services/huggingfaceService';
import { kaggleService } from '../services/kaggleService';
import { githubService } from '../services/githubService';

async function runVerification() {
  console.log('================================================================');
  console.log('🏛️ RJ BUSINESS SOLUTIONS · LIVE SERVICE & CREDENTIAL AUDIT');
  console.log('================================================================\n');

  const results: Record<string, { status: 'PASS' | 'FAIL' | 'WARN'; detail: string }> = {};

  // 1. Cloudflare R2 S3 Storage
  try {
    process.stdout.write('Testing Cloudflare R2 S3 Object Storage... ');
    const testKey = `audit-checks/ping-${Date.now()}.json`;
    await r2StorageService.uploadAsset(testKey, JSON.stringify({ verified: true, time: new Date().toISOString() }), 'application/json');
    results['Cloudflare R2'] = { status: 'PASS', detail: `Successfully uploaded asset ${testKey}` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['Cloudflare R2'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 2. Mistral AI
  try {
    process.stdout.write('Testing Mistral AI (API Key & Chat Completion)... ');
    const res = await mistralService.chatCompletion([
      { role: 'user', content: 'Say "RJ Business Solutions Edge Online" in 5 words.' }
    ]);
    results['Mistral AI'] = { status: 'PASS', detail: res.content.trim() };
    console.log('✅ PASS');
  } catch (err: any) {
    results['Mistral AI'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 3. NVIDIA NIM
  try {
    process.stdout.write('Testing NVIDIA NIM LLM API... ');
    const res = await nvidiaService.generateCompletion('Confirm NVIDIA NIM connection for RJ Business Solutions.');
    results['NVIDIA NIM'] = { status: 'PASS', detail: res.content.slice(0, 80) + '...' };
    console.log('✅ PASS');
  } catch (err: any) {
    results['NVIDIA NIM'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 4. ElevenLabs Voice API
  try {
    process.stdout.write('Testing ElevenLabs Voice API... ');
    const user = await elevenLabsService.getUserInfo();
    results['ElevenLabs'] = { status: 'PASS', detail: `Tier: ${user?.subscription?.tier || 'active'}, Character Count: ${user?.subscription?.character_count ?? 'ok'}` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['ElevenLabs'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 5. Hugging Face Hub & ZeroGPU
  try {
    process.stdout.write('Testing Hugging Face Hub & Account... ');
    const whoami = await huggingfaceService.getWhoAmI();
    results['Hugging Face'] = { status: 'PASS', detail: `User: ${whoami.name} (${whoami.fullname || 'Active'}), Auth: ${whoami.auth?.type}` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['Hugging Face'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 6. Kaggle API & Datasets
  try {
    process.stdout.write('Testing Kaggle API & Datasets... ');
    const datasets = await kaggleService.searchDatasets('credit', 1);
    results['Kaggle Hub'] = { status: 'PASS', detail: `Found ${datasets.length} datasets (Sample: ${datasets[0]?.ref || 'Active'})` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['Kaggle Hub'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 7. GitHub Account & Repos
  try {
    process.stdout.write('Testing GitHub Account & Repos... ');
    const ghUser = await githubService.getUser();
    results['GitHub Org'] = { status: 'PASS', detail: `User: ${ghUser.login} (${ghUser.name || 'Active'})` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['GitHub Org'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 8. Base44 Superagent
  try {
    process.stdout.write('Testing Base44 Superagent API (App: 69c5ce00f40ed00efc194928)... ');
    const mem = await base44Service.listMemory();
    results['Base44 Superagent'] = { status: 'PASS', detail: `Connected to Superagent memory store` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['Base44 Superagent'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 6. Apify API
  try {
    process.stdout.write('Testing Apify Scraper API... ');
    const acc = await apifyService.getAccountInfo();
    results['Apify Lead Gen'] = { status: 'PASS', detail: `User: ${acc.username || acc.id}` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['Apify Lead Gen'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 7. Twilio Telephony
  try {
    process.stdout.write('Testing Twilio Telephony & SMS... ');
    const twAccount = await twilioService.getAccountDetails();
    results['Twilio Telephony'] = { status: 'PASS', detail: `Account Name: ${twAccount.friendlyName}, Status: ${twAccount.status}` };
    console.log('✅ PASS');
  } catch (err: any) {
    results['Twilio Telephony'] = { status: 'FAIL', detail: err.message };
    console.log(`❌ FAIL: ${err.message}`);
  }

  // 8. GoHighLevel Subaccounts Matrix
  console.log('\n--- Auditing GoHighLevel Subaccounts ---');
  for (const sub of CONFIG.ghl.subaccounts) {
    try {
      process.stdout.write(`Testing [${sub.name}] (${sub.locationId})... `);
      const loc = await ghlService.getLocation(sub.locationId);
      const locName = loc?.location?.name || loc?.name || sub.name;
      results[`GHL: ${sub.name}`] = { status: 'PASS', detail: `Location Verified: ${locName}` };
      console.log(`✅ PASS (${locName})`);
    } catch (err: any) {
      results[`GHL: ${sub.name}`] = { status: 'FAIL', detail: err.message };
      console.log(`❌ FAIL: ${err.message}`);
    }
  }

  console.log('\n================================================================');
  console.log('📊 AUDIT SUMMARY');
  console.log('================================================================');
  console.table(results);
}

runVerification().catch(console.error);
