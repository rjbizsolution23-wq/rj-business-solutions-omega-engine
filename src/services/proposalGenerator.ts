/**
 * 🍸 TASTY LICKA™ — LUXURY CATERING PROPOSAL & INVOICE GENERATOR
 * Generates structured executive catering proposals, deposit calculations, and TABC compliance summaries.
 */

export interface ProposalRequest {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  companyOrOccasion?: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  venueLocation: string;
  packageTier: 'kickoff' | 'celebration' | 'legacy';
  cocktailsSelected: string[];
  wingsSelected: string[];
  addOns?: {
    champagneWall?: boolean;
    extraBartenders?: number;
    customMonogramMedallions?: boolean;
    jarLineTequilaPickles?: boolean;
  };
}

export interface ProposalOutput {
  proposalId: string;
  generatedDate: string;
  clientSummary: {
    name: string;
    email: string;
    phone: string;
    eventType: string;
    eventDate: string;
    guestCount: number;
    venue: string;
  };
  pricingBreakdown: {
    tierName: string;
    ratePerGuest: number;
    baseSubtotal: number;
    addOnsTotal: number;
    itemizedAddOns: Array<{ name: string; cost: number }>;
    taxAmount: number;
    grandTotal: number;
    depositDueNow: number;
    balanceDue7DaysPrior: number;
  };
  menuSpecifications: {
    cocktailLineup: string[];
    wingFlightLineup: string[];
    barServiceSummary: string;
    tabcCertifiedStaff: number;
    insuranceCoverage: string;
  };
  legalDisclaimer: string;
}

export function generateTastyLickaProposal(req: ProposalRequest): ProposalOutput {
  const proposalId = `TL-PROP-${Date.now().toString().slice(-6)}`;
  
  const tierRates = {
    kickoff: { name: 'The Kickoff Tailgate & Mixer', rate: 28 },
    celebration: { name: 'Celebration Gala Experience', rate: 65 },
    legacy: { name: 'The Legacy Executive Experience', rate: 120 }
  };

  const selectedTier = tierRates[req.packageTier] || tierRates.celebration;
  const baseSubtotal = req.guestCount * selectedTier.rate;

  const itemizedAddOns: Array<{ name: string; cost: number }> = [];
  let addOnsTotal = 0;

  if (req.addOns?.champagneWall) {
    itemizedAddOns.push({ name: '8-Foot Illuminated Champagne Tower Wall (96 Flutes)', cost: 350 });
    addOnsTotal += 350;
  }
  if (req.addOns?.extraBartenders && req.addOns.extraBartenders > 0) {
    const cost = req.addOns.extraBartenders * 200;
    itemizedAddOns.push({ name: `Additional TABC Certified Mixologists (${req.addOns.extraBartenders})`, cost });
    addOnsTotal += cost;
  }
  if (req.addOns?.customMonogramMedallions) {
    itemizedAddOns.push({ name: 'Laser-Embossed Monogram Cocktail Medallions (100ct)', cost: 250 });
    addOnsTotal += 250;
  }
  if (req.addOns?.jarLineTequilaPickles) {
    itemizedAddOns.push({ name: 'Artisanal Moonshine & Tequila Pickle Jar Line Add-On', cost: 175 });
    addOnsTotal += 175;
  }

  const subtotal = baseSubtotal + addOnsTotal;
  const taxAmount = subtotal * 0.0825; // 8.25% Texas Sales Tax
  const grandTotal = subtotal + taxAmount;
  const depositDueNow = grandTotal * 0.30;
  const balanceDue7DaysPrior = grandTotal - depositDueNow;

  const baseBartenders = req.guestCount <= 75 ? 2 : Math.ceil(req.guestCount / 40);
  const totalBartenders = baseBartenders + (req.addOns?.extraBartenders || 0);

  return {
    proposalId,
    generatedDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    clientSummary: {
      name: req.clientName,
      email: req.clientEmail,
      phone: req.clientPhone,
      eventType: req.eventType,
      eventDate: req.eventDate,
      guestCount: req.guestCount,
      venue: req.venueLocation
    },
    pricingBreakdown: {
      tierName: selectedTier.name,
      ratePerGuest: selectedTier.rate,
      baseSubtotal,
      addOnsTotal,
      itemizedAddOns,
      taxAmount,
      grandTotal,
      depositDueNow,
      balanceDue7DaysPrior
    },
    menuSpecifications: {
      cocktailLineup: req.cocktailsSelected.length > 0 ? req.cocktailsSelected : ['Wakanda Juice', 'Midnight Train to Georgia'],
      wingFlightLineup: req.wingsSelected.length > 0 ? req.wingsSelected : ['Hennessy Glazed Wings', 'Lemon Pepper Patron Wings'],
      barServiceSummary: `Full Mobile Bar Station with Crystal Glassware, Fresh Purees, Organic Herbs, Ice Programs, and Custom LED Illumination.`,
      tabcCertifiedStaff: totalBartenders,
      insuranceCoverage: `$2,000,000 Commercial General & Liquor Liability Insurance (COI issued for venue).`
    },
    legalDisclaimer: `Tasty Licka™ is licensed and insured under Texas law. A 30% non-refundable date-lock deposit is required to secure the calendar date. The remaining balance is due 7 business days prior to event load-in.`
  };
}
