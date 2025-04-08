/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Add this to suppress hydration warnings in development
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Add this to suppress hydration warnings
  experimental: {
    // This will help with hydration issues
    optimizeCss: true,
    // Disable React strict mode at the framework level
    strictNextHead: false,
    // Add this to help with hydration
    esmExternals: 'loose',
    // Disable React's hydration warnings
    suppressHydrationWarning: true,
  }
}

module.exports = nextConfig 