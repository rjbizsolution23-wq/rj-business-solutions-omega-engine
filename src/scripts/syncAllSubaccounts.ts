import { syncAllSubaccounts } from '../workflows/subaccountSync';

async function main() {
  console.log('⚡ Initializing RJ Business Solutions Multi-Subaccount Sync...');
  const results = await syncAllSubaccounts();
  console.log('✅ Sync Completed. Results:');
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
