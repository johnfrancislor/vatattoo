/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into /out.
  output: "export",
  trailingSlash: true,
  turbopack: { root: import.meta.dirname },
  images: {
    // Images are pre-optimized to WebP; no image server in a static export.
    unoptimized: true,
  },
};

export default nextConfig;
