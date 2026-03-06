import { PaySuiteClient } from './client';
import { PaymentService } from './payment.service';
import { PayoutService } from './payout.service';
import { RefundService } from './refund.service';
import { WebhookHandler } from './webhook.handler';
import { PaySuiteConfig } from './types';

export class PaySuiteSDK {
  public payments: PaymentService;
  public payouts: PayoutService;
  public refunds: RefundService;
  public webhooks: WebhookHandler;

  constructor(config: PaySuiteConfig) {
    const client = new PaySuiteClient(config);
    
    this.payments = new PaymentService(client);
    this.payouts = new PayoutService(client);
    this.refunds = new RefundService(client);
    this.webhooks = new WebhookHandler(config.webhookSecret);
  }
}

export * from './types';
