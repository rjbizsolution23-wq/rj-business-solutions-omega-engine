/**
 * 🍸 TASTY LICKA™ — GOHIGHLEVEL SUBACCOUNT ARCHITECTURE & BLUEPRINT
 * Mobile Craft Cocktail Bar & Spirit-Infused Wing Catering (Dallas-Fort Worth)
 * Founder & CEO: Angel Lewis · https://tastylicka.com/
 */

export interface CustomFieldBlueprint {
  name: string;
  key: string;
  dataType: 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL' | 'DATE' | 'MONETARY' | 'SINGLE_OPTIONS' | 'MULTIPLE_OPTIONS';
  placeholder: string;
  options?: string[];
  description: string;
}

export interface CustomValueBlueprint {
  name: string;
  key: string;
  value: string;
  description: string;
}

export interface PipelineStageBlueprint {
  name: string;
  color: string;
  description: string;
}

export interface SubaccountBlueprint {
  locationName: string;
  tagline: string;
  founder: string;
  website: string;
  phone: string;
  email: string;
  headquarters: string;
  tabcLicense: string;
  brandColors: {
    gold: string;
    wine: string;
    charcoal: string;
    white: string;
  };
  customFields: CustomFieldBlueprint[];
  customValues: CustomValueBlueprint[];
  tags: {
    category: string;
    items: string[];
  }[];
  pipelines: {
    name: string;
    stages: PipelineStageBlueprint[];
  }[];
  workflowTriggers: {
    name: string;
    trigger: string;
    actions: string[];
  }[];
}

export const TASTY_LICKA_BLUEPRINT: SubaccountBlueprint = {
  locationName: 'Tasty Licka™ Catering & Mobile Bar',
  tagline: "Dallas-Fort Worth's Premier Craft Cocktail Bar & Spirit-Infused Wing Catering",
  founder: 'Angel Lewis (CEO & Founder)',
  website: 'https://tastylicka.com/',
  phone: '(469) 555-5425',
  email: 'events@tastylicka.com',
  headquarters: 'Frisco, Texas 75034 (DFW Metroplex)',
  tabcLicense: 'TABC Licensed & Insured · Permit #TX-8829104',
  brandColors: {
    gold: '#C69C3D',
    wine: '#1a0b10',
    charcoal: '#0e0608',
    white: '#ffffff'
  },

  customFields: [
    // Event Details
    {
      name: 'Event Date',
      key: 'contact.event_date',
      dataType: 'DATE',
      placeholder: 'YYYY-MM-DD',
      description: 'Scheduled date of the wedding, gala, or tailgate catering event.'
    },
    {
      name: 'Guest Count',
      key: 'contact.guest_count',
      dataType: 'NUMERICAL',
      placeholder: 'e.g. 75',
      description: 'Total number of expected attendees/guests.'
    },
    {
      name: 'Event Type',
      key: 'contact.event_type',
      dataType: 'SINGLE_OPTIONS',
      placeholder: 'Select event type',
      options: ['Wedding', 'Corporate Gala', 'Private VIP Event', 'Dallas Cowboys Tailgate', 'Birthday / Anniversary', 'Festival / Public Event'],
      description: 'Category of catering operation.'
    },
    {
      name: 'Event Venue & City',
      key: 'contact.event_venue_city',
      dataType: 'TEXT',
      placeholder: 'e.g. The Star in Frisco / Omni PGA Resort',
      description: 'Physical venue address and city in DFW.'
    },
    {
      name: 'Catering Package Tier',
      key: 'contact.catering_package_tier',
      dataType: 'SINGLE_OPTIONS',
      placeholder: 'Select package',
      options: ['Kickoff Package ($28/pp)', 'Celebration Package ($65/pp)', 'Legacy VIP Package ($120/pp)', 'Gameday Tailgate Box', 'Custom Corporate Suite'],
      description: 'Core menu package selected by customer.'
    },
    {
      name: 'Spirit-Infused Wing Flavors',
      key: 'contact.wing_flavors',
      dataType: 'MULTIPLE_OPTIONS',
      placeholder: 'Select wing flavors',
      options: ['Hennessy Glazed', 'Crown Apple BBQ', 'Don Julio Mango Habanero', 'Patron Citrus Gold', 'Sweet Bourbon Teriyaki', 'Ghost Pepper Tequila'],
      description: 'Selected signature liquor-infused wing sauces.'
    },
    {
      name: 'Mobile Bar Service Option',
      key: 'contact.mobile_bar_service',
      dataType: 'SINGLE_OPTIONS',
      placeholder: 'Select bar service',
      options: ['Full Mobile Bar + TABC Bartender', 'Signature Cocktail Dispenser Station', 'Signature Mocktails Only (Non-Alcoholic)', 'BYOB Bartending Service Only'],
      description: 'Level of mobile bartending and equipment required.'
    },
    {
      name: 'Signature Cocktails Selected',
      key: 'contact.signature_cocktails',
      dataType: 'MULTIPLE_OPTIONS',
      placeholder: 'Select cocktails',
      options: ['Dallas Gold Rush', 'Henny Passion Punch', 'Cowboy Tailgate Mule', 'Pineapple Moonshine Splash', 'Texas Peach Bourbon Smash'],
      description: 'Craft cocktails served at the mobile bar.'
    },
    {
      name: 'Jar Line Add-Ons',
      key: 'contact.jar_line_addons',
      dataType: 'MULTIPLE_OPTIONS',
      placeholder: 'Select jar line items',
      options: ['Pineapple Moonshine Jars (16oz)', 'Spiced Bourbon Pickles (16oz)', 'Signature Wing Glaze Bottles (12oz)', 'Gourmet Dip Trio'],
      description: 'Retail & souvenir jar additions.'
    },
    {
      name: 'Deposit Status',
      key: 'contact.deposit_status',
      dataType: 'SINGLE_OPTIONS',
      placeholder: 'Select deposit state',
      options: ['Unpaid', '50% Deposit Received (Date Locked)', 'Paid in Full', 'Refunded / Cancelled'],
      description: 'Financial lock status for calendar date.'
    },
    {
      name: 'Total Event Quote ($)',
      key: 'contact.total_event_quote',
      dataType: 'MONETARY',
      placeholder: '0.00',
      description: 'Total contracted revenue for the event.'
    },
    {
      name: 'TABC Bartender Count',
      key: 'contact.tabc_bartender_count',
      dataType: 'NUMERICAL',
      placeholder: '1-4',
      description: 'Number of certified bartenders dispatched.'
    },
    {
      name: 'Dietary & Allergy Notes',
      key: 'contact.dietary_notes',
      dataType: 'LARGE_TEXT',
      placeholder: 'Gluten-free, peanut allergy, kosher, etc.',
      description: 'Special kitchen handling notes.'
    },
    {
      name: 'AI Lead Score',
      key: 'contact.ai_lead_score',
      dataType: 'NUMERICAL',
      placeholder: '1-100',
      description: 'Automated intent and budget score calculated at ingestion.'
    },
    {
      name: 'AI Intent Category',
      key: 'contact.ai_intent_category',
      dataType: 'TEXT',
      placeholder: 'urgent_wedding / corporate_gala / gameday',
      description: 'Classification determined by LLM parser.'
    },
    {
      name: 'AI Voice Memo URL',
      key: 'contact.ai_voice_memo_url',
      dataType: 'TEXT',
      placeholder: 'https://.../memo.mp3',
      description: 'ElevenLabs synthesized personalized audio brief in R2.'
    },
    {
      name: 'VIP Loyalty Tier',
      key: 'contact.vip_loyalty_tier',
      dataType: 'SINGLE_OPTIONS',
      placeholder: 'Select tier',
      options: ['Bronze Taste', 'Silver Connoisseur', 'Gold VIP', 'Legacy Diamond Club'],
      description: 'Customer loyalty tier based on historical spend.'
    },
    {
      name: 'Special Setup & Access Instructions',
      key: 'contact.setup_instructions',
      dataType: 'LARGE_TEXT',
      placeholder: 'Loading dock instructions, gate code, power outlet location...',
      description: 'Onsite logistics instructions for event setup.'
    },
    {
      name: 'Partner Referral Code',
      key: 'contact.partner_referral_code',
      dataType: 'TEXT',
      placeholder: 'TL-VIP-123',
      description: 'Unique tracking code assigned to wedding/event planner partners.'
    },
    {
      name: 'Partner Agency Name',
      key: 'contact.partner_agency_name',
      dataType: 'TEXT',
      placeholder: 'Sterling Events LLC',
      description: 'Business or agency name of the referring partner.'
    },
    {
      name: 'Partner Role Title',
      key: 'contact.partner_role_title',
      dataType: 'TEXT',
      placeholder: 'Lead Luxury Wedding Planner',
      description: 'Title of the event planner or hospitality coordinator.'
    },
    {
      name: 'Partner Payout Method',
      key: 'contact.partner_payout_method',
      dataType: 'TEXT',
      placeholder: 'Direct Bank Deposit / Zelle',
      description: 'Commission payment method for the affiliate partner.'
    },
    {
      name: 'Corporate Retainer Frequency',
      key: 'contact.corporate_retainer_frequency',
      dataType: 'TEXT',
      placeholder: 'Monthly Retainer / Quarterly VIP',
      description: 'B2B recurring catering frequency.'
    },
    {
      name: 'Corporate Contract Tier',
      key: 'contact.corporate_contract_tier',
      dataType: 'TEXT',
      placeholder: 'Cocktail & Bites / Full Craft Bar / Executive Gala',
      description: 'Package tier chosen for corporate retainer.'
    },
    {
      name: 'Retail Sauce Orders',
      key: 'contact.retail_sauce_orders',
      dataType: 'TEXT',
      placeholder: 'Hennessy Glaze 12oz, Moonshine Pineapple Jar',
      description: 'Retail bottled sauces and jar line items ordered.'
    },
    {
      name: 'Target DFW Metro City',
      key: 'contact.target_geo_city',
      dataType: 'TEXT',
      placeholder: 'Frisco / Plano / Dallas / Fort Worth / Arlington',
      description: 'Target city within the DFW metroplex.'
    },
    {
      name: 'Order Delivery Address',
      key: 'contact.order_delivery_address',
      dataType: 'LARGE_TEXT',
      placeholder: 'Street address, Suite, City, Zip',
      description: 'Direct catering drop or retail shipping address.'
    },
    {
      name: 'Order Tracking Number',
      key: 'contact.order_tracking_number',
      dataType: 'TEXT',
      placeholder: 'TL-TRK-98214',
      description: 'Carrier or courier dispatch tracking number.'
    }
  ],

  customValues: [
    {
      name: 'Brand Name',
      key: 'custom_values.brand_name',
      value: 'Tasty Licka™ Catering & Mobile Bar',
      description: 'Official brand name'
    },
    {
      name: 'Founder / CEO',
      key: 'custom_values.founder_name',
      value: 'Angel Lewis',
      description: 'Founder and executive operator'
    },
    {
      name: 'Business Support Email',
      key: 'custom_values.business_email',
      value: 'events@tastylicka.com',
      description: 'Primary customer email'
    },
    {
      name: 'Business Phone',
      key: 'custom_values.business_phone',
      value: '(469) 555-5425',
      description: 'DFW local booking line'
    },
    {
      name: 'Official Website',
      key: 'custom_values.website_url',
      value: 'https://tastylicka.com/',
      description: 'Official public storefront'
    },
    {
      name: 'Online Booking URL',
      key: 'custom_values.booking_url',
      value: 'https://tastylicka.com/book',
      description: 'Instant calendar & quote calculator'
    },
    {
      name: 'Interactive Menu URL',
      key: 'custom_values.menu_url',
      value: 'https://tastylicka.com/menu',
      description: 'Live flavor and cocktail browser'
    },
    {
      name: 'Sauce Store URL',
      key: 'custom_values.sauce_store_url',
      value: 'https://tastylicka.com/sauces',
      description: 'Online store for bottles and signature glazes'
    },
    {
      name: 'Affiliate Partner URL',
      key: 'custom_values.affiliate_partner_url',
      value: 'https://tastylicka.com/partners',
      description: 'Event planner 10% commission partner portal'
    },
    {
      name: 'Corporate Proposal URL',
      key: 'custom_values.corporate_proposal_url',
      value: 'https://tastylicka.com/corporate',
      description: 'B2B executive catering proposal builder'
    },
    {
      name: 'VIP Loyalty Discount Code',
      key: 'custom_values.vip_promo_code',
      value: 'TASTYVIP10',
      description: '10% off code for repeat & survey respondents'
    },
    {
      name: 'Service Region',
      key: 'custom_values.service_region',
      value: 'Dallas-Fort Worth Metroplex (Frisco, Plano, Dallas, Fort Worth, Arlington)',
      description: 'Operating geography'
    },
    {
      name: 'TABC Certification Disclosure',
      key: 'custom_values.tabc_compliance_text',
      value: '100% TABC Certified & Insured Mobile Bartenders · Permit #TX-8829104',
      description: 'Legal alcohol service notice'
    },
    {
      name: 'Deposit Policy',
      key: 'custom_values.deposit_policy',
      value: '50% non-refundable deposit required upon proposal approval to lock date.',
      description: 'Booking guarantee terms'
    },
    {
      name: 'Instagram Handle',
      key: 'custom_values.instagram_handle',
      value: '@tastylicka',
      description: 'Official Instagram'
    },
    {
      name: 'TikTok Handle',
      key: 'custom_values.tiktok_handle',
      value: '@tastylicka',
      description: 'Official TikTok'
    }
  ],

  tags: [
    {
      category: 'Lead Type',
      items: [
        'lead-wedding',
        'lead-corporate-gala',
        'lead-private-vip',
        'lead-cowboys-tailgate',
        'lead-birthday-party',
        'lead-festival',
        'affiliate-partner-registered',
        'event-planner-referral',
        'corporate-b2b-retainer'
      ]
    },
    {
      category: 'Package Selection',
      items: [
        'package-kickoff-28',
        'package-celebration-65',
        'package-legacy-120',
        'package-tailgate-box',
        'package-custom-corporate',
        'high-ticket-proposal',
        'corporate-contract-lock'
      ]
    },
    {
      category: 'Service Requirements',
      items: [
        'tabc-mobile-bar-requested',
        'wings-henny-glazed',
        'wings-crown-apple',
        'wings-don-julio',
        'wings-patron-citrus',
        'jar-line-moonshine',
        'jar-line-pickles',
        'sauce-store-customer',
        'retail-jar-purchaser'
      ]
    },
    {
      category: 'Pipeline & Deal State',
      items: [
        'quote-generated',
        'proposal-viewed',
        'deposit-paid-date-locked',
        'contract-signed',
        'tabc-prep-staged',
        'event-completed',
        'review-submitted-5star',
        'nps-promoter-10'
      ]
    },
    {
      category: 'Geo Location & Campaigns',
      items: [
        'geo-frisco-lead',
        'geo-plano-lead',
        'geo-dallas-lead',
        'geo-fort-worth-lead',
        'geo-arlington-lead',
        'tailgate-box-order',
        'checkout-order-placed',
        'campaign-welcome-nurture-active',
        'campaign-flavor-showcase-active',
        'campaign-tailgate-drop-active',
        'campaign-b2b-corporate-active',
        'campaign-review-loyalty-active'
      ]
    },
    {
      category: 'AI & Automation',
      items: [
        'ai-scored-high-value',
        'voice-memo-sent',
        'sms-drip-active',
        'vip-repeat-customer',
        'angel-direct-attention'
      ]
    }
  ],

  pipelines: [
    {
      name: 'Catering & Mobile Bar Bookings',
      stages: [
        { name: '01. Inquiry Received', color: '#0ea5e9', description: 'Form or chat intake submitted' },
        { name: '02. AI Scored & Audio Sent', color: '#6366f1', description: 'Lead scored and ElevenLabs memo sent' },
        { name: '03. Proposal & Menu Customizer', color: '#C69C3D', description: 'Package quote and flavor sheet reviewed' },
        { name: '04. 50% Deposit Paid (Locked)', color: '#10b981', description: 'Date reserved on Angel\'s master calendar' },
        { name: '05. TABC & Kitchen Staging', color: '#f59e0b', description: 'Liquor infusion batches and staff assigned' },
        { name: '06. Event Execution Day', color: '#8b5cf6', description: 'Mobile bar on site delivering luxury service' },
        { name: '07. Review & VIP Loyalty', color: '#ec4899', description: 'NPS survey sent and TASTYVIP10 unlocked' }
      ]
    },
    {
      name: 'Gameday Tailgate & Retail Drops',
      stages: [
        { name: '01. Tailgate Order Received', color: '#0ea5e9', description: 'Online gameday box purchase' },
        { name: '02. Payment Confirmed', color: '#10b981', description: 'Stripe transaction cleared' },
        { name: '03. Kitchen Infusion Batching', color: '#f59e0b', description: 'Wings fried and glazed fresh' },
        { name: '04. Out for Delivery / Ready for Pickup', color: '#8b5cf6', description: 'Courier dispatched to stadium or venue' },
        { name: '05. Delivered & Game Ready', color: '#10b981', description: 'Completed' }
      ]
    }
  ],

  workflowTriggers: [
    {
      name: 'Instant Catering Lead Intake & Audio Memo',
      trigger: 'Form Submission / Webhook received from tastylicka.com',
      actions: [
        'Apply tag: lead-catering-inquiry',
        'Score lead with NVIDIA NIM (DeepSeek-v4.1-flash)',
        'Synthesize ElevenLabs audio memo from Angel Lewis',
        'Upload MP3 to Cloudflare R2 Vault',
        'Send SMS to prospect with personalized audio quote link',
        'Create deal in "Catering & Mobile Bar" Pipeline'
      ]
    },
    {
      name: '50% Deposit Confirmed & Date Lock Protocol',
      trigger: 'Stripe / GHL Payment received for event deposit',
      actions: [
        'Update Custom Field "Deposit Status" -> "50% Deposit Received"',
        'Apply tag: deposit-paid-date-locked',
        'Move deal to Stage 04 in Pipeline',
        'Send branded Welcome Packet & TABC guidelines via email',
        'Block calendar slot on Angel\'s master event schedule'
      ]
    },
    {
      name: 'Post-Event Review & VIP Card Generation',
      trigger: '24 hours after Event Execution Day',
      actions: [
        'Send SMS: "Thank you from Angel & the Tasty Licka team!"',
        'Request 5-star Google & Facebook review',
        'Issue digital VIP Wallet Card with code TASTYVIP10',
        'Tag customer: vip-repeat-customer'
      ]
    }
  ]
};
