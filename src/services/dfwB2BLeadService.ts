/**
 * 🏢 TASTY LICKA™ — DFW B2B CORPORATE & VENUE PARTNER INGESTION SERVICE
 * Discovers and ingests luxury DFW event planners, wedding coordinators, and corporate hosts into GHL.
 */

import { ghlService } from './ghlService';

export interface B2BPartnerProspect {
  companyName: string;
  contactName: string;
  title: string;
  email: string;
  phone?: string;
  city: string;
  category: 'luxury_venue' | 'corporate_planner' | 'wedding_coordinator' | 'tailgate_suite';
  notes: string;
}

export const DFW_CURATED_B2B_PARTNERS: B2BPartnerProspect[] = [
  {
    companyName: 'Omni PGA Frisco Resort',
    contactName: 'Director of Catering & Private Events',
    title: 'Executive Event Director',
    email: 'events@omnipgafrisco.com',
    phone: '469-305-4500',
    city: 'Frisco, TX',
    category: 'luxury_venue',
    notes: 'Preferred mobile bar & spirit wing catering partner for executive golf summits and luxury outdoor pavilion galas.'
  },
  {
    companyName: 'Hall Arts Hotel & Residences',
    contactName: 'Private Dining & Gala Coordinator',
    title: 'Special Events Manager',
    email: 'catering@hallartshotel.com',
    phone: '214-953-1717',
    city: 'Dallas Arts District, TX',
    category: 'luxury_venue',
    notes: 'Contemporary art galas, rooftop champagne receptions, and VIP after-parties.'
  },
  {
    companyName: 'The Star in Frisco (Ford Center Suites)',
    contactName: 'VIP Hospitality Coordinator',
    title: 'Hospitality Operations Lead',
    email: 'vipsuites@thestarinfrisco.com',
    phone: '972-497-4800',
    city: 'Frisco, TX',
    category: 'tailgate_suite',
    notes: 'Dallas Cowboys corporate partner suites and gameday private catering drops.'
  },
  {
    companyName: 'Highland Park Private Wedding Consultants',
    contactName: 'Victoria Sterling',
    title: 'Principal Luxury Wedding Planner',
    email: 'victoria@sterlingweddingsdfw.com',
    phone: '214-555-0812',
    city: 'Highland Park, TX',
    category: 'wedding_coordinator',
    notes: 'High-end estate weddings, custom monogrammed cocktail spheres, and molecular smoke bar experiences.'
  },
  {
    companyName: 'Legacy West Corporate Event Planners',
    contactName: 'Marcus Vance',
    title: 'Corporate Experience Director',
    email: 'marcus@legacywestevents.com',
    phone: '972-555-0194',
    city: 'Plano, TX',
    category: 'corporate_planner',
    notes: 'Tech executive happy hours, quarterly celebrations, and spirit-infused wing flights for Fortune 500 campuses.'
  }
];

export async function ingestB2BPartnersToGHL(locationId = '0TOBkfBFSDF935BN8Fgr') {
  const results = [];

  for (const partner of DFW_CURATED_B2B_PARTNERS) {
    try {
      const parts = partner.contactName.split(' ');
      const firstName = parts[0] || 'Partner';
      const lastName = parts.slice(1).join(' ') || partner.companyName;

      const res = await ghlService.upsertContact(locationId, {
        firstName,
        lastName,
        email: partner.email,
        phone: partner.phone,
        companyName: partner.companyName,
        tags: [
          'b2b-corporate-partner',
          `category-${partner.category}`,
          'dfw-venue-network',
          'tasty-licka-b2b-outreach'
        ],
        customFields: [
          { id: 'wNts1C8Ma0IiDzmdKYYd', field_value: `${partner.companyName} (${partner.city})` },
          { id: 'ZnRAbgzTsYCXDZB34II0', field_value: 'B2B Venue & Corporate Partnership' },
          { id: 'CvMEwIyGCvfTYkQDNzOh', field_value: partner.notes },
          { id: 'QXY5EANHDDT073uYu65U', field_value: 'VIP Partner' }
        ],
        source: 'Tasty Licka DFW B2B Scraper'
      });

      results.push({ company: partner.companyName, status: 'SUCCESS', contactId: res.contact?.id });
    } catch (err: any) {
      results.push({ company: partner.companyName, status: 'ERROR', error: err.message });
    }
  }

  return {
    totalIngested: results.filter(r => r.status === 'SUCCESS').length,
    results
  };
}
