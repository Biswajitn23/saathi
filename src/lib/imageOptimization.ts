// Performance & Image Optimization Utilities

/**
 * Generate srcset for responsive images
 * @param basePath - Base path of the image
 * @param formats - Image formats to generate
 * @returns srcset string for img tag
 */
export const generateSrcSet = (basePath: string, sizes: number[] = [320, 640, 960, 1280]) => {
  return sizes.map((size) => `${basePath}?w=${size} ${size}w`).join(", ");
};

/**
 * Calculate optimal image dimensions maintaining aspect ratio
 * @param originalWidth - Original image width
 * @param originalHeight - Original image height
 * @param containerWidth - Target container width
 * @returns Object with calculated width and height
 */
export const calculateImageDimensions = (
  originalWidth: number,
  originalHeight: number,
  containerWidth: number
) => {
  const aspectRatio = originalWidth / originalHeight;
  return {
    width: containerWidth,
    height: Math.round(containerWidth / aspectRatio),
  };
};

/**
 * Preload critical images for better performance
 * @param imagePaths - Array of image URLs to preload
 */
export const preloadImages = (imagePaths: string[]) => {
  if (typeof document === "undefined") return;

  imagePaths.forEach((path) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = path;
    document.head.appendChild(link);
  });
};

/**
 * Detect if browser supports WebP format
 * @returns Promise resolving to boolean
 */
export const supportsWebP = async (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => resolve(webP.height === 2);
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAAA4AwCdASpAEgEPgEAgkEglgoCVlWHQiUDA/v3AgAA=";
  });
};

/**
 * Format image URL for optimization service (if using one)
 * @param url - Image URL
 * @param width - Desired width
 * @param quality - Quality 0-100
 * @returns Optimized image URL
 */
export const optimizeImageUrl = (url: string, width?: number, quality: number = 85) => {
  // This is a template - adjust based on your image service
  if (!url) return "";

  const params = new URLSearchParams({
    q: quality.toString(),
    ...(width && { w: width.toString() }),
  });

  return `${url}?${params.toString()}`;
};

export default {
  generateSrcSet,
  calculateImageDimensions,
  preloadImages,
  supportsWebP,
  optimizeImageUrl,
};
