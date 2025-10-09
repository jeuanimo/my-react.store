// Product data with image configuration
// This file centralizes all product information and makes it easy to manage

export const productData = [
  {
    id: 1,
    slug: "headphones",
    title: "Premium Wireless Headphones",
    price: 99.99,
    description:
      "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery",
      "Quick charge",
      "Premium sound quality",
    ],
    category: "Audio",
  },
  {
    id: 2,
    slug: "smartwatch",
    title: "Smart Fitness Watch",
    price: 199.99,
    description:
      "Advanced fitness tracking with heart rate monitor, GPS, and smartphone connectivity.",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Water Resistant",
      "7-day battery",
    ],
    category: "Wearables",
  },
  {
    id: 3,
    slug: "speaker",
    title: "Bluetooth Speaker",
    price: 49.99,
    description:
      "Portable wireless speaker with 360-degree sound and waterproof design.",
    features: [
      "360° Sound",
      "Waterproof",
      "12-hour battery",
      "Voice Assistant",
    ],
    category: "Audio",
  },
  {
    id: 4,
    slug: "mouse",
    title: "Wireless Mouse",
    price: 29.99,
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life.",
    features: [
      "Ergonomic Design",
      "Precision Tracking",
      "Long Battery Life",
      "Silent Clicks",
    ],
    category: "Accessories",
  },
  {
    id: 5,
    slug: "keyboard",
    title: "Gaming Keyboard",
    price: 79.99,
    description:
      "Mechanical gaming keyboard with RGB backlighting and programmable keys.",
    features: [
      "Mechanical Switches",
      "RGB Backlighting",
      "Programmable Keys",
      "Gaming Mode",
    ],
    category: "Gaming",
  },
  {
    id: 6,
    slug: "usb-hub",
    title: "USB-C Hub",
    price: 39.99,
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and fast charging support.",
    features: [
      "Multiple Ports",
      "4K HDMI Output",
      "Fast Charging",
      "Compact Design",
    ],
    category: "Accessories",
  },
];

// Function to get product image path from public folder
export const getProductImagePath = (slug, useRealImages = true) => {
  const basePath = "/images/products/";
  const extension = useRealImages ? ".jpg" : ".svg"; // Now defaulting to .jpg
  return `${basePath}${slug}${extension}`;
};

// Export individual products for easy access
export const products = {
  headphones: productData[0],
  smartwatch: productData[1],
  speaker: productData[2],
  mouse: productData[3],
  keyboard: productData[4],
  usbHub: productData[5],
};

export default productData;
