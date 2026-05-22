/**
 * Centralized image sources for the landing page.
 *
 * ── HOW TO REPLACE ──
 * Swap the `src` values below with your own licensed imagery (nursing /
 * behavioral-health / calm clinical environments). Keep the `alt` text
 * descriptive for accessibility. Images render with plain <img> tags so they
 * stay compatible with the static export (images.unoptimized) used for
 * GitHub Pages — no next/image server optimization required.
 *
 * The current URLs are royalty-free Unsplash placeholders. Verify each one
 * looks right for your brand before launch and replace as needed. Every image
 * sits on top of a gradient panel, so the layout still looks intentional even
 * if a URL is changed or temporarily unavailable.
 */

export const siteImages = {
  heroClinician: {
    src: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1100&q=80",
    alt: "Behavioral-health nurse reviewing shift notes on a tablet in a calm clinical setting",
  },
  painCare: {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    alt: "Nurse spending focused time with a patient on a behavioral-health unit",
  },
} as const

export type SiteImageKey = keyof typeof siteImages
