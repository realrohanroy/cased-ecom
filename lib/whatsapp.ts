// WhatsApp utility functions for catalog ordering
// Store phone number - replace with actual store WhatsApp number
export const STORE_WHATSAPP_NUMBER = '919619617221'; // Format: country code + number without +

interface OrderMessage {
  productName: string;
  phoneModel?: string;
  color?: string;
  quantity?: number;
  customMessage?: string;
}

/**
 * Generate WhatsApp message for product inquiry
 */
export function generateOrderMessage({
  productName,
  phoneModel,
  color,
  quantity = 1,
  customMessage,
}: OrderMessage): string {
  let message = `Hi! I'm interested in ordering:\n\n`;
  message += `Product: ${productName}\n`;
  
  if (phoneModel) {
    message += `Phone Model: ${phoneModel}\n`;
  }
  
  if (color) {
    message += `Color: ${color}\n`;
  }
  
  if (quantity > 1) {
    message += `Quantity: ${quantity}\n`;
  }
  
  if (customMessage) {
    message += `\nNote: ${customMessage}\n`;
  }
  
  message += `\nPlease provide pricing and delivery options.`;
  
  return message;
}

/**
 * Get WhatsApp chat URL with prefilled message
 */
export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp chat with prefilled message
 */
export function openWhatsAppChat(orderMessage: OrderMessage): void {
  const message = generateOrderMessage(orderMessage);
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank');
}

/**
 * Get WhatsApp API URL for sharing
 */
export function getWhatsAppShareUrl(productName: string, link: string): string {
  const message = `Check out this ${productName} on our catalog: ${link}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/?text=${encodedMessage}`;
}
