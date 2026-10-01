import { CONFIG } from '../config/credentials';
import { ghlService } from '../services/ghlService';

export interface SyncResult {
  locationId: string;
  name: string;
  success: boolean;
  fieldsCreated: string[];
  tagsCreated: string[];
  errors: string[];
}

export const STANDARD_FIELDS: Array<{
  name: string;
  dataType: 'TEXT' | 'LARGE_TEXT' | 'NUMERICAL';
  placeholder: string;
}> = [
  { name: 'AI Lead Score', dataType: 'NUMERICAL', placeholder: '1-100' },
  { name: 'AI Intent Category', dataType: 'TEXT', placeholder: 'credit_tech / automation / ministry' },
  { name: 'AI Lead Summary', dataType: 'LARGE_TEXT', placeholder: 'Autonomous synthesis of prospect needs' },
  { name: 'AI Voice Memo URL', dataType: 'TEXT', placeholder: 'R2 CDN link to generated voice note' },
  { name: 'FCRA Audit Stage', dataType: 'TEXT', placeholder: 'Unchecked / Audit Scheduled / Completed' },
  { name: 'Automation Status', dataType: 'TEXT', placeholder: 'Active / Paused / Human Escalated' }
];

export const STANDARD_TAGS = [
  'ai-engaged',
  'high-value-prospect',
  'needs-human-review',
  'voice-memo-sent',
  'smart-fcra-lead',
  'rj-core-client',
  'preacher-ministry'
];

export async function syncAllSubaccounts(): Promise<SyncResult[]> {
  const results: SyncResult[] = [];

  for (const sub of CONFIG.ghl.subaccounts) {
    const res: SyncResult = {
      locationId: sub.locationId,
      name: sub.name,
      success: true,
      fieldsCreated: [],
      tagsCreated: [],
      errors: []
    };

    try {
      // 1. Sync Custom Fields
      let existingFields: any[] = [];
      try {
        const fieldsData = await ghlService.getCustomFields(sub.locationId);
        existingFields = fieldsData.customFields || [];
      } catch (err: any) {
        res.errors.push(`Could not fetch custom fields: ${err.message}`);
      }

      for (const field of STANDARD_FIELDS) {
        const alreadyExists = existingFields.some(
          (f: any) => f.name?.toLowerCase() === field.name.toLowerCase()
        );
        if (!alreadyExists) {
          try {
            await ghlService.createCustomField(sub.locationId, {
              name: field.name,
              dataType: field.dataType,
              placeholder: field.placeholder,
              model: 'contact'
            });
            res.fieldsCreated.push(field.name);
          } catch (err: any) {
            res.errors.push(`Failed creating field ${field.name}: ${err.message}`);
          }
        }
      }

      // 2. Sync Tags
      let existingTags: any[] = [];
      try {
        const tagsData = await ghlService.getTags(sub.locationId);
        existingTags = tagsData.tags || [];
      } catch (err: any) {
        res.errors.push(`Could not fetch tags: ${err.message}`);
      }

      for (const tag of STANDARD_TAGS) {
        const alreadyExists = existingTags.some(
          (t: any) => (typeof t === 'string' ? t : t.name)?.toLowerCase() === tag.toLowerCase()
        );
        if (!alreadyExists) {
          try {
            await ghlService.createTag(sub.locationId, tag);
            res.tagsCreated.push(tag);
          } catch (err: any) {
            res.errors.push(`Failed creating tag ${tag}: ${err.message}`);
          }
        }
      }
    } catch (err: any) {
      res.success = false;
      res.errors.push(`Subaccount sync failed: ${err.message}`);
    }

    results.push(res);
  }

  return results;
}
