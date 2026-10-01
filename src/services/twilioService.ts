import twilio from 'twilio';
import { CONFIG } from '../config/credentials';

export class TwilioService {
  private client: twilio.Twilio;
  private fromNumber: string;

  constructor() {
    this.client = twilio(
      CONFIG.telephony.twilio.accountSid,
      CONFIG.telephony.twilio.authToken
    );
    this.fromNumber = CONFIG.telephony.twilio.phoneNumber;
  }

  // Send SMS Message
  public async sendSMS(to: string, body: string, mediaUrl?: string[]) {
    return this.client.messages.create({
      from: this.fromNumber,
      to,
      body,
      mediaUrl
    });
  }

  // Get Account Details
  public async getAccountDetails() {
    return this.client.api.v2010.accounts(CONFIG.telephony.twilio.accountSid).fetch();
  }

  // List recent messages
  public async listMessages(limit = 20) {
    return this.client.messages.list({ limit });
  }
}

export const twilioService = new TwilioService();
