import dotenv from 'dotenv';
dotenv.config({ override: true });

export interface GHLSubAccountConfig {
  id: string;
  name: string;
  locationId: string;
  pitToken: string;
  purpose: string;
  category: 'core' | 'compliance' | 'client' | 'ministry';
}

export const CONFIG = {
  ghl: {
    agency: {
      pit: process.env.GHL_AGENCY_PIT || '',
      relationshipNumber: process.env.GHL_RELATIONSHIP_NUMBER || '0-908-802',
      clientId: process.env.GHL_CLIENT_ID || '',
      clientSecret: process.env.GHL_CLIENT_SECRET || '',
      versionId: process.env.GHL_VERSION_ID || '',
      baseUrl: 'https://services.leadconnectorhq.com',
    },
    subaccounts: [
      {
        id: 'rj-business-solutions',
        name: 'RJ Business Solutions',
        locationId: process.env.GHL_SUB_RJ_LOCATION || '',
        pitToken: process.env.GHL_SUB_RJ_PIT || '',
        purpose: 'Primary Business & Automation Infrastructure Hub',
        category: 'core'
      },
      {
        id: 'smart-fcra',
        name: 'SMART FCRA',
        locationId: process.env.GHL_SUB_FCRA_LOCATION || '',
        pitToken: process.env.GHL_SUB_FCRA_PIT || '',
        purpose: 'Credit Technology, FCRA Compliance & Audit Pipeline',
        category: 'compliance'
      },
      {
        id: 'eugene',
        name: 'Eugene Subaccount',
        locationId: process.env.GHL_SUB_EUGENE_LOCATION || '',
        pitToken: process.env.GHL_SUB_EUGENE_PIT || '',
        purpose: 'Client Operations & Lead Automation',
        category: 'client'
      },
      {
        id: 'contracting-preacher',
        name: 'Contracting Preacher',
        locationId: process.env.GHL_SUB_PREACHER_LOCATION || '',
        pitToken: process.env.GHL_SUB_PREACHER_PIT || '',
        purpose: 'Ministry, Community Outreach & Service Workflows',
        category: 'ministry'
      },
      {
        id: 'tasty-licka',
        name: 'Tasty Licka™ Catering & Mobile Bar',
        locationId: process.env.GHL_SUB_TASTYLICKA_LOCATION || '',
        pitToken: process.env.GHL_SUB_TASTYLICKA_PIT || '',
        purpose: 'DFW Mobile Craft Cocktail Bar & Spirit-Infused Wing Catering (Angel Lewis)',
        category: 'client'
      }
    ] as GHLSubAccountConfig[]
  },
  cloudflare: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
    apiToken: process.env.CLOUDFLARE_API_TOKEN || '',
    r2: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
      endpoint: process.env.R2_ENDPOINT || '',
      bucketName: process.env.R2_BUCKET_NAME || 'rj-brand-assets'
    }
  },
  ai: {
    mistral: {
      apiKey: process.env.MISTRAL_API_KEY || '',
      sid: process.env.MISTRAL_SID || '',
      clientSecret: process.env.MISTRAL_CLIENT_SECRET || '',
      baseUrl: 'https://api.mistral.ai/v1'
    },
    nvidia: {
      apiKey: process.env.NVIDIA_API_KEY || '',
      baseUrl: 'https://integrate.api.nvidia.com/v1'
    },
    elevenLabs: {
      apiKey: process.env.ELEVENLABS_API_KEY || '',
      baseUrl: 'https://api.elevenlabs.io/v1',
      defaultVoiceId: '21m00Tcm4TlvDq8ikWAM' // Rachel / Professional default
    },
    replicate: {
      apiToken: process.env.REPLICATE_API_TOKEN || '',
      baseUrl: 'https://api.replicate.com/v1'
    },
    runway: {
      apiKey: process.env.RUNWAY_API_KEY || '',
      baseUrl: 'https://api.dev.runwayml.com/v1'
    },
    genspark: {
      apiKey: process.env.GENSPARK_API_KEY || '',
      baseUrl: 'https://api.genspark.ai/v1'
    },
    base44: {
      apiToken: process.env.BASE44_API_TOKEN || '',
      agentId: process.env.BASE44_AGENT_ID || '',
      baseUrl: process.env.BASE44_BASE_URL || ''
    },
    huggingface: {
      apiToken: process.env.HUGGINGFACE_API_TOKEN || '',
      baseUrl: 'https://huggingface.co/api',
      inferenceUrl: 'https://api-inference.huggingface.co/models'
    },
    gemini: {
      apiKey: process.env.GEMINI_API_KEY || '',
      baseUrl: 'https://generativelanguage.googleapis.com/v1beta'
    },
    jev: {
      apiKey: process.env.JEV_API_KEY || '',
      baseUrl: 'https://api.jev.ai/v1'
    }
  },
  webAgents: {
    rtrvr: {
      apiKey: process.env.RTRVR_API_KEY || '',
      baseUrl: 'https://api.rtrvr.ai'
    }
  },
  dataScience: {
    kaggle: {
      apiToken: process.env.KAGGLE_API_TOKEN || '',
      baseUrl: 'https://www.kaggle.com/api/v1'
    }
  },
  github: {
    token: process.env.GITHUB_TOKEN || '',
    owner: process.env.GITHUB_OWNER || 'rjbizsolution23-wq',
    baseUrl: 'https://api.github.com'
  },
  leadGen: {
    apify: {
      token: process.env.APIFY_API_TOKEN || '',
      userId: process.env.APIFY_USER_ID || '',
      baseUrl: 'https://api.apify.com/v2'
    },
    apollo: {
      apiKey: process.env.APOLLO_API_KEY || '',
      baseUrl: 'https://api.apollo.io/v1'
    },
    builtwith: {
      apiKey: process.env.BUILTWITH_API_KEY || '',
      baseUrl: 'https://api.builtwith.com'
    },
    phyllo: {
      apiKey: process.env.PHYLLO_API_KEY || '',
      baseUrl: 'https://api.getphyllo.com/v1'
    },
    brightdata: {
      apiKey: process.env.BRIGHTDATA_API_KEY || '',
      baseUrl: 'https://api.brightdata.com'
    }
  },
  telephony: {
    twilio: {
      accountSid: process.env.TWILIO_ACCOUNT_SID || '',
      authToken: process.env.TWILIO_AUTH_TOKEN || '',
      phoneNumber: process.env.TWILIO_PHONE_NUMBER || '+18667524618'
    }
  },
  brand: {
    name: 'RJ Business Solutions',
    principal: 'Rick Jefferson',
    website: 'https://rjbusinesssolutions.org',
    supportEmail: 'support@rjbusinesssolutions.org',
    logoUrl: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg',
    address: '1342 NM 333, Tijeras, New Mexico 87059'
  }
};
