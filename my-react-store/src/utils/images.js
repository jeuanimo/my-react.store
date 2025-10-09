// Image utility functions for the store

/**
 * Product images in public folder
 * This makes it easy to manage and reference product images
 */

// Fallback image for missing products
const fallbackImage =
  "https://via.placeholder.com/400x400/4169E1/ffffff?text=Product+Image";

/**
 * Product images mapping
 * Maps product slugs to their respective public folder paths
 */
export const productImages = {
  headphones: "/images/products/headphones.jpg",
  smartwatch: "/images/products/smartwatch.jpg",
  speaker: "/images/products/speaker.jpg",
  mouse: "/images/products/mouse.jpg",
  keyboard: "/images/products/keyboard.jpg",
  "usb-hub": "/images/products/usb-hub.jpg",
};

/**
 * Get product image by slug
 * @param {string} slug - Product identifier
 * @returns {string} Image path or fallback
 */
export const getProductImage = (slug) => {
  return productImages[slug] || fallbackImage;
};

/**
 * Preload all product images for better performance
 */
export const preloadProductImages = () => {
  Object.values(productImages).forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
};

/**
 * Image optimization settings
 */
export const imageSettings = {
  defaultAlt: "Product Image",
  loadingStrategy: "lazy",
  sizes: {
    thumbnail: "200x200",
    card: "400x400",
    detail: "800x800",
  },
};

export default {
  productImages,
  getProductImage,
  preloadProductImages,
  imageSettings,
};
