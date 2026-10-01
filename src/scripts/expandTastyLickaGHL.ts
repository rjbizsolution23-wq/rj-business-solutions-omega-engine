/**
 * 🌟 TASTY LICKA™ — GHL ARCHITECTURE EXPANSION SCRIPT
 * Provisions newly required Custom Fields, Custom Values, and Segmentation Tags
 * Location ID: 0TOBkfBFSDF935BN8Fgr
 * PIT Token: pit-0b2bbaa9-1fd7-456d-9305-a615aa9d9749
 */

export {};

const LOCATION_ID = '0TOBkfBFSDF935BN8Fgr';
const PIT_TOKEN = 'pit-0b2bbaa9-1fd7-456d-9305-a615aa9d9749';
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

// 1. New Custom Fields to Create
const NEW_CUSTOM_FIELDS = [
  {
    name: 'Partner Agency Name',
    dataType: 'TEXT',
    placeholder: 'Sterling Events LLC',
    key: 'partnerAgency'
  },
  {
    name: 'Partner Role Title',
    dataType: 'TEXT',
    placeholder: 'Lead Luxury Wedding Planner',
    key: 'partnerRole'
  },
  {
    name: 'Partner Payout Method',
    dataType: 'TEXT',
    placeholder: 'Direct Bank Deposit / Zelle',
    key: 'partnerPayout'
  },
  {
    name: 'Corporate Retainer Frequency',
    dataType: 'TEXT',
    placeholder: 'Monthly Retainer / Quarterly VIP',
    key: 'corporateRetainer'
  },
  {
    name: 'Corporate Contract Tier',
    dataType: 'TEXT',
    placeholder: 'Cocktail & Bites / Full Craft Bar / Executive Gala',
    key: 'corporateTier'
  },
  {
    name: 'Retail Sauce Orders',
    dataType: 'TEXT',
    placeholder: 'Hennessy Glaze 12oz, Moonshine Pineapple Jar',
    key: 'retailSauceOrders'
  },
  {
    name: 'Target DFW Metro City',
    dataType: 'TEXT',
    placeholder: 'Frisco / Plano / Dallas / Fort Worth / Arlington',
    key: 'targetDfwCity'
  },
  {
    name: 'Order Delivery Address',
    dataType: 'LARGE_TEXT',
    placeholder: 'Street address, Suite, City, Zip',
    key: 'deliveryAddress'
  },
  {
    name: 'Order Tracking Number',
    dataType: 'TEXT',
    placeholder: 'TL-TRK-98214',
    key: 'orderTracking'
  }
];

// 2. New Custom Values to Create
const NEW_CUSTOM_VALUES = [
  { name: 'Sauce Store URL', value: 'https://tastylicka.com/sauces' },
  { name: 'Affiliate Partner URL', value: 'https://tastylicka.com/partners' },
  { name: 'Corporate Proposal URL', value: 'https://tastylicka.com/corporate' },
  { name: 'Geo Frisco URL', value: 'https://tastylicka.com/frisco-catering' },
  { name: 'Geo Plano URL', value: 'https://tastylicka.com/plano-catering' },
  { name: 'Geo Dallas URL', value: 'https://tastylicka.com/dallas-catering' },
  { name: 'Geo Fort Worth URL', value: 'https://tastylicka.com/fort-worth-catering' },
  { name: 'Gameday Tailgate URL', value: 'https://tastylicka.com/gameday' },
  { name: 'VIP Phone Booking Line', value: '(469) 555-5425' },
  { name: 'Angel Lewis Title Signature', value: 'Angel Lewis · Founder, Master Mixologist & CEO' }
];

// 3. New Segmentation Tags to Create
const NEW_TAGS = [
  'affiliate-partner-registered',
  'event-planner-referral',
  'referral-network-member',
  'corporate-b2b-retainer',
  'high-ticket-proposal',
  'corporate-contract-lock',
  'sauce-store-customer',
  'retail-jar-purchaser',
  'geo-frisco-lead',
  'geo-plano-lead',
  'geo-dallas-lead',
  'geo-fort-worth-lead',
  'geo-arlington-lead',
  'tailgate-box-order',
  'checkout-order-placed'
];

async function main() {
  console.log('🌟 [Tasty Licka] Starting Architecture Expansion...');
  const createdFieldMap: Record<string, string> = {};

  // Phase 1: Create New Custom Fields
  console.log('\n--- Phase 1: Provisioning New Custom Fields ---');
  for (const field of NEW_CUSTOM_FIELDS) {
    const res = await postGHL(`/locations/${LOCATION_ID}/customFields`, {
      name: field.name,
      dataType: field.dataType,
      placeholder: field.placeholder
    });

    if (res.ok && res.data?.customField?.id) {
      createdFieldMap[field.key] = res.data.customField.id;
      console.log(`✅ Custom Field created: ${field.name} (ID: ${res.data.customField.id})`);
    } else {
      console.log(`ℹ️ Custom Field (${field.name}): ${JSON.stringify(res.data?.message || res.status)}`);
    }
    await delay(400);
  }

  // Phase 2: Create New Custom Values
  console.log('\n--- Phase 2: Provisioning New Custom Values ---');
  for (const cv of NEW_CUSTOM_VALUES) {
    const res = await postGHL(`/locations/${LOCATION_ID}/customValues`, cv);
    if (res.ok) {
      console.log(`✅ Custom Value created: ${cv.name} -> "${cv.value}"`);
    } else {
      console.log(`ℹ️ Custom Value (${cv.name}): ${JSON.stringify(res.data?.message || res.status)}`);
    }
    await delay(400);
  }

  // Phase 3: Create New Tags
  console.log('\n--- Phase 3: Provisioning New Segmentation Tags ---');
  for (const tag of NEW_TAGS) {
    const res = await postGHL(`/locations/${LOCATION_ID}/tags`, { name: tag });
    if (res.ok) {
      console.log(`✅ Tag created: ${tag}`);
    } else {
      console.log(`ℹ️ Tag (${tag}): ${JSON.stringify(res.data?.message || res.status)}`);
    }
    await delay(400);
  }

  console.log('\n📋 Created Field Map:', JSON.stringify(createdFieldMap, null, 2));
}

main().catch(console.error);
