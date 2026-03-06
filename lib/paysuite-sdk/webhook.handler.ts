import crypto from 'crypto';
import { WebhookPayload } from './types';

export class WebhookHandler {
  private processedRequests = new Set<string>();
  
  constructor(private webhookSecret: string) {}

  verifySignature(payload: string, signature: string): boolean {
    const calculatedSignature = crypto
      .createHmac('sha256', this.webhookSecret)
      .update(payload)
      .digest('hex');

    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(calculatedSignature)
    );
  }

  async handle(
    payload: string,
    signature: string,
    handler: (event: WebhookPayload) => Promise<void>
  ): Promise<{ success: boolean; message: string }> {
    if (!this.verifySignature(payload, signature)) {
      console.error('[PaySuite Webhook] Invalid signature');
      return { success: false, message: 'Invalid signature' };
    }

    const webhook: WebhookPayload = JSON.parse(payload);

    if (this.processedRequests.has(webhook.request_id)) {
      console.log(`[PaySuite Webhook] Duplicate request: ${webhook.request_id}`);
      return { success: true, message: 'Already processed' };
    }

    try {
      await handler(webhook);
      this.processedRequests.add(webhook.request_id);
      console.log(`[PaySuite Webhook] Processed: ${webhook.event} - ${webhook.request_id}`);
      return { success: true, message: 'Processed' };
    } catch (error: any) {
      console.error(`[PaySuite Webhook] Error: ${error.message}`);
      return { success: false, message: error.message };
    }
  }

  clearProcessedRequests(): void {
    this.processedRequests.clear();
  }
}
