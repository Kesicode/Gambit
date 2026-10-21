// Back-end server API URL with production & development fallbacks
// IMPORTANT: Set NEXT_PUBLIC_API_URL in Vercel to your actual Render backend URL
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.API_URL ||
  (typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://gambit-chess-api.onrender.com");