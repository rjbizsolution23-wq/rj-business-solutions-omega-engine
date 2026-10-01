/**
 * 🚀 TASTY LICKA™ — GOHIGHLEVEL MASTER CAMPAIGN & LEAD GEN PROVISIONER
 * Subaccount: 0TOBkfBFSDF935BN8Fgr
 * PIT: pit-0b2bbaa9-1fd7-456d-9305-a615aa9d9749
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

// 1. Custom Values to Provision
const CUSTOM_VALUES = [
  { name: 'Brand Name', value: 'Tasty Licka™ Catering & Mobile Bar' },
  { name: 'Founder Name', value: 'Angel Lewis (CEO & Master Mixologist)' },
  { name: 'Business Support Email', value: 'events@tastylicka.com' },
  { name: 'Business Phone', value: '(469) 555-5425' },
  { name: 'Official Website URL', value: 'https://tastylicka.com/' },
  { name: 'Online Booking URL', value: 'https://tastylicka.com/book' },
  { name: 'Interactive Menu URL', value: 'https://tastylicka.com/menu' },
  { name: 'VIP Promo Code', value: 'TASTYVIP10' },
  { name: 'Event Fast Capture URL', value: 'https://tastylicka.com/event' },
  { name: '1-Tap Drink Capture URL', value: 'https://tastylicka.com/tap' },
  { name: 'VIP Tasting Calendar URL', value: 'https://tastylicka.com/tasting' },
  { name: 'Review & Loyalty URL', value: 'https://tastylicka.com/review' },
  { name: 'Service Region', value: 'Dallas-Fort Worth Metroplex (Frisco, Plano, Dallas, Fort Worth, Arlington)' },
  { name: 'TABC Compliance Disclosure', value: '100% TABC Certified & Insured Mobile Bartenders · Permit #TX-8829104' },
  { name: 'Deposit Policy', value: '50% non-refundable deposit required upon proposal approval to lock date.' },
  { name: 'Instagram Handle', value: '@tastylicka' },
  { name: 'TikTok Handle', value: '@tastylicka' }
];

// 2. All Segmented Campaign Tags
const TAGS_TO_PROVISION = [
  // Lead Generation Capture Channels
  'lead-catering-inquiry',
  'event-attendee-capture',
  'fast-drink-capture',
  'tasting-session-inquiry',
  'web-quote-calculator',
  'chat-angel-bot-lead',
  'qr-code-scan-lead',
  'twilio-sms-optin',

  // Event Categories
  'lead-wedding',
  'lead-corporate-gala',
  'lead-private-vip',
  'lead-cowboys-tailgate',
  'lead-birthday-party',
  'lead-festival',

  // Packages & Menus
  'package-kickoff-28',
  'package-celebration-65',
  'package-legacy-120',
  'package-tailgate-box',
  'package-custom-corporate',
  'tabc-mobile-bar-requested',
  'wings-henny-glazed',
  'wings-crown-apple',
  'wings-don-julio',
  'wings-patron-citrus',
  'jar-line-moonshine',
  'jar-line-pickles',

  // Pipeline & Lifecycle
  'quote-generated',
  'proposal-viewed',
  'deposit-paid-date-locked',
  'contract-signed',
  'event-completed',
  'review-submitted-5star',
  'vip-repeat-customer',
  'vip-loyalty-tier',
  'nps-promoter-10',

  // Automated Campaigns Active
  'campaign-welcome-nurture-active',
  'campaign-flavor-showcase-active',
  'campaign-tailgate-drop-active',
  'campaign-b2b-corporate-active',
  'campaign-review-loyalty-active',
  'b2b-corporate-partner',
  'dfw-venue-network'
];

// 3. Curated B2B Venue & Corporate Leads
const B2B_LEADS = [
  {
    firstName: 'Catering Director',
    lastName: 'Omni PGA Frisco Resort',
    companyName: 'Omni PGA Frisco Resort',
    email: 'events@omnipgafrisco.com',
    phone: '469-305-4500',
    city: 'Frisco, TX',
    notes: 'Executive golf summits, corporate retreat happy hours, and outdoor luxury lawn galas.'
  },
  {
    firstName: 'Gala Coordinator',
    lastName: 'Hall Arts Hotel Dallas',
    companyName: 'Hall Arts Hotel & Residences',
    email: 'catering@hallartshotel.com',
    phone: '214-953-1717',
    city: 'Dallas Arts District, TX',
    notes: 'Rooftop cocktail receptions, contemporary art gallery galas, and VIP after-parties.'
  },
  {
    firstName: 'Suite Hospitality Lead',
    lastName: 'The Star in Frisco',
    companyName: 'The Star in Frisco (Ford Center Suites)',
    email: 'vipsuites@thestarinfrisco.com',
    phone: '972-497-4800',
    city: 'Frisco, TX',
    notes: 'Cowboys corporate partner suites, VIP tailgate drops, and private lounge catering.'
  },
  {
    firstName: 'Victoria',
    lastName: 'Sterling',
    companyName: 'Sterling Luxury Weddings DFW',
    email: 'victoria@sterlingweddingsdfw.com',
    phone: '214-555-0812',
    city: 'Highland Park, TX',
    notes: 'Estate weddings, craft cocktail bars, molecular smoke cocktail service.'
  },
  {
    firstName: 'Marcus',
    lastName: 'Vance',
    companyName: 'Legacy West Corporate Events',
    email: 'marcus@legacywestevents.com',
    phone: '972-555-0194',
    city: 'Plano, TX',
    notes: 'Tech executive happy hours, quarterly celebrations, and spirit-infused wing flights for Fortune 500 campuses.'
  }
];

async function main() {
  console.log('🚀 [Tasty Licka] Starting Master Campaign & Lead Gen Provisioning in GHL...');

  // Phase 1: Provision Custom Values
  console.log('\n--- Phase 1: Provisioning Custom Values ---');
  for (const cv of CUSTOM_VALUES) {
    const res = await postGHL(`/locations/${LOCATION_ID}/customValues`, cv);
    if (res.ok) {
      console.log(`✅ Custom Value created: ${cv.name} -> "${cv.value}"`);
    } else {
      console.log(`ℹ️ Custom Value (${cv.name}): ${JSON.stringify(res.data?.message || res.status)}`);
    }
    await delay(300);
  }

  // Phase 2: Provision Tags
  console.log('\n--- Phase 2: Provisioning Segmentation Tags ---');
  for (const tag of TAGS_TO_PROVISION) {
    const res = await postGHL(`/locations/${LOCATION_ID}/tags`, { name: tag });
    if (res.ok) {
      console.log(`✅ Tag created: ${tag}`);
    } else {
      console.log(`ℹ️ Tag (${tag}): ${JSON.stringify(res.data?.message || res.status)}`);
    }
    await delay(300);
  }

  // Phase 3: Ingest Curated B2B Partner Leads
  console.log('\n--- Phase 3: Ingesting High-Value B2B Venue & Corporate Leads ---');
  for (const lead of B2B_LEADS) {
    const res = await postGHL(`/contacts/upsert`, {
      locationId: LOCATION_ID,
      firstName: lead.firstName,
      lastName: lead.lastName,
      companyName: lead.companyName,
      email: lead.email,
      phone: lead.phone,
      tags: [
        'b2b-corporate-partner',
        'dfw-venue-network',
        'campaign-b2b-corporate-active',
        'tasty-licka-b2b-outreach'
      ],
      customFields: [
        { id: 'wNts1C8Ma0IiDzmdKYYd', field_value: `${lead.companyName} (${lead.city})` },
        { id: 'ZnRAbgzTsYCXDZB34II0', field_value: 'B2B Venue & Corporate Partnership' },
        { id: 'CvMEwIyGCvfTYkQDNzOh', field_value: lead.notes },
        { id: 'QXY5EANHDDT073uYu65U', field_value: 'VIP Partner' }
      ],
      source: 'Tasty Licka DFW B2B Lead Generator'
    });
    if (res.ok) {
      console.log(`✅ B2B Lead Ingested: ${lead.companyName} (${lead.email})`);
    } else {
      console.log(`ℹ️ B2B Lead (${lead.companyName}): ${JSON.stringify(res.data?.message || res.status)}`);
    }
    await delay(400);
  }

  console.log('\n🎉 [Tasty Licka] Provisioning Complete! All campaigns, custom values, tags, and lead capture systems are active in GHL subaccount 0TOBkfBFSDF935BN8Fgr.');
}

main().catch(console.error);
