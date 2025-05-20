/**
 * Sticky WhatsApp Button Script
 * Opens the correct WhatsApp chat URL based on device type
 */

document.addEventListener('DOMContentLoaded', function () {
  const phoneNumber = StickyWhatsAppData.phone;

  // Detect if the user is on a mobile device
  const isMobile = /iPhone|Android|iPad|Mobile/i.test(navigator.userAgent);

  // Build the correct WhatsApp URL
  const whatsappURL = isMobile
    ? `https://wa.me/${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  // Assign the generated URL to the button
  const button = document.getElementById('whatsapp-btn');
  if (button) {
    button.setAttribute('href', whatsappURL);
  }
});
/**
 * Sticky WhatsApp Button Script
 * Opens the correct WhatsApp chat URL based on device type
 */