/**
 * 🏛️ RJ BUSINESS SOLUTIONS — CORE GHL SUBACCOUNT PROVISIONER
 * Subaccount: DvKRMVD9YudoS6xRyBfb
 * PIT Token: pit-c04bf7cf-69e6-44b1-b7a6-7bcaf255b609
 */

export {};

const LOCATION_ID = 'DvKRMVD9YudoS6xRyBfb';
const PIT_TOKEN = 'pit-c04bf7cf-69e6-44b1-b7a6-7bcaf255b609';
const GHL_API_BASE = 'https://services.leadconnectorhq.com';

const HEADERS = {
  'Authorization': `Bearer ${PIT_TOKEN}`,
  'Version': '2021-07-28',
  'Content-Type': 'application/json'
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function postGHL(endpoint: string, body: any) {
  try {
    const res = await fetch(`${GHL_API_BASE}${endpoint}`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({ status: res.status }));
    return { ok: res.ok, status: res.status, data };
  } catch (err: any) {
    return { ok: false, error: err.message };
  }
}

// Brand Universe Custom Values for RJ Business Solutions
const RJBS_CUSTOM_VALUES = [
  { name: 'Brand Name', value: 'RJ Business Solutions' },
  { name: 'Founder Name', value: 'Rick Jefferson' },
  { name: 'Founder Title', value: 'Credit Technology Architect, AI Systems Builder, CEO' },
  { name: 'Support Email', value: 'support@rjbusinesssolutions.org' },
  { name: 'Direct Phone', value: '+1 (414) 732-7474' },
  { name: 'Official Website', value: 'https://rjbusinesssolutions.org' },
  { name: 'Agency Portal URL', value: 'https://ghl.rjbusinesssolutions.org' },
  { name: 'Headquarters Address', value: '1342 NM 333, Tijeras, New Mexico 87059' },
  { name: 'LinkedIn Profile', value: 'https://www.linkedin.com/in/rick-jefferson-314998235' },
  { name: 'TikTok Handle', value: 'https://www.tiktok.com/@rick_jeff_solution' },
  { name: 'Twitter X Profile', value: 'https://twitter.com/ricksolutions1' },
  { name: 'GitHub Organization', value: 'https://github.com/rjbizsolution23-wq' },
  { name: 'Official Logo URL', value: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg' },
  { name: 'Brand Primary Blue', value: '#2563eb' },
  { name: 'Brand Secondary Sky', value: '#0ea5e9' },
  { name: 'Brand Dark Navy', value: '#0f172a' },
  { name: 'Compliance Disclaimer', value: 'RJ Business Solutions provides software and automation technology. Not financial or legal advice.' }
];

async function main() {
  console.log('🏛️ [RJ Business Solutions] Provisioning Brand Universe Custom Values in GHL (DvKRMVD9YudoS6xRyBfb)...');

  for (const cv of RJBS_CUSTOM_VALUES) {
    const res = await postGHL(`/locations/${LOCATION_ID}/customValues`, cv);
    if (res.ok) {
      console.log(`✅ Custom Value created: ${cv.name} -> "${cv.value}"`);
    } else {
      console.log(`ℹ️ Custom Value (${cv.name}): ${JSON.stringify(res.data?.message || res.status)}`);
    }
    await delay(350);
  }

  console.log('\n🎉 [RJ Business Solutions] Custom Values successfully provisioned!');
}

main().catch(console.error);
