/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Spotify only accepts loopback IPs (not "localhost") as http redirect URIs.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
