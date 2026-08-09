# Coffee House — Café Landing Page Template

A reusable, high-performance, and configurable landing page template for cafés, restaurants, bakeries, and similar businesses. Built with React, Vite, TypeScript, and Tailwind CSS v4.

## Project Purpose

This is a **presentation & menu website template** — not a full-fledged ordering system. There is no cart, checkout, authentication, or backend. The template is designed to be rapidly customized for any food & beverage business strictly by changing configuration and data files, without touching React components.

## Key Features

- **Bilingual Architecture:** First-class support for English (LTR) and Arabic (RTL) across all components.
- **Design System:** Centralized `theme.ts` controlling typography and a Warm Premium color palette.
- **Dynamic Content:** Everything from branches and contact info to menu categories and highlights is driven by data files.
- **Feature Flags:** Toggle optional sections (Highlights, Gallery) cleanly.
- **Performance Optimized:** Built with Vite, utilizing smooth scrolling, lazy loading, asynchronous image decoding, and robust fallbacks for missing assets.

---

## Directory Structure

```text
src/
├── components/          # Modular UI components organized by section
│   ├── layout/          # Containers and wrappers
│   ├── navigation/      # Sticky Navbar and mobile drawer
│   ├── hero/            # Cinematic entry banner
│   ├── menu/            # Editorial menu system with ScrollSpy
│   ├── visit-us/        # Branch location and dynamic contact links
│   ├── highlights/      # Optional feature cards
│   ├── gallery/         # Optional masonry gallery with Lightbox
│   ├── ui/              # Reusable primitives (Button, Badge, etc.)
│   └── footer/          # Cohesive brand footer
│
├── config/              # Developer-controlled configuration
│   ├── siteConfig.ts    # Language, multi-branch mode, active branch
│   ├── theme.ts         # Color palette and font definitions
│   └── features.ts      # Feature flags for optional sections
│
├── context/             # React context providers
│   └── LocaleContext.tsx # Locale provider reading from siteConfig
│
├── data/                # Business-specific data files (The Content Layer)
│   ├── brand.ts         # Business name, logo, tagline, description
│   ├── menu.ts          # Menu categories and items
│   ├── branches.ts      # Branch/location details
│   ├── contact.ts       # Contact methods (Phone, WhatsApp)
│   ├── social.ts        # Social media links
│   ├── gallery.ts       # Gallery images (when feature is enabled)
│   └── highlights.ts    # Highlight/feature cards
│
├── hooks/               # Reusable React hooks
│   ├── useLocaleString.ts  # Resolves bilingual strings
│   ├── useScrollSpy.ts     # Tracks active menu category
│   └── useDocumentSetup.ts # Syncs dir, lang, title, and meta tags
│
├── types/               # Reusable TypeScript type definitions
├── App.tsx              # Application layout shell
├── main.tsx             # React DOM entry point
└── index.css            # Tailwind CSS v4 configuration and utilities
```

---

## Customizing for a New Business

Follow these steps to deploy the template for a different business:

### 1. Set the Active Language
Open `src/config/siteConfig.ts` and set the language.
```ts
export const siteConfig = {
  language: "en",  // Change to "ar" for Arabic (automatically applies RTL layout)
  // ...
};
```
*Note: There is no user-facing language switcher by design. The language dictates the entire application structure globally.*

### 2. Toggle Feature Flags
Open `src/config/features.ts` to enable or disable optional sections.
```ts
export const features = {
  highlights: true, // Set to true to show the highlights section
  gallery: true,    // Set to true to show the gallery & lightbox
};
```

### 3. Update Business Data
Modify the files in `src/data/` to inject real business content:
- **`brand.ts`**: Update the brand name, description, and logo path.
- **`menu.ts`**: Define menu categories and items. Ensure translations match the active language.
- **`branches.ts`**: Add branch locations, addresses, and Google Maps URLs.
- **`contact.ts` / `social.ts`**: Add phone numbers, WhatsApp URLs, and social media handles. Undefined links will automatically hide the corresponding UI buttons.

### 4. Update Images & Assets
Place all media files in the `public/images/` directory adhering to this convention:

- **Logo & Favicon:**
  - `public/images/brand/logo.png`
  - `public/images/brand/favicon.png`
- **Hero Image:**
  - `public/images/hero/hero.jpg`
- **Menu Thumbnails:** (Organized by category, 1-based, zero-padded)
  - `public/images/menu/coffee/001.png`
  - `public/images/menu/coffee/002.png`
- **Gallery Images:**
  - `public/images/gallery/01.png`

*Note: The UI includes robust fallback mechanisms. If an image is missing or the path is incorrect, the layout will degrade gracefully (e.g., menu items will simply hide the thumbnail and adjust spacing).*

### 5. Customize the Theme
Modify colors in `src/config/theme.ts`. The Tailwind v4 setup in `index.css` dynamically reads these variables to style the UI across components.
- `--color-primary`
- `--color-cream`
- `--color-accent` (Copper accents used for buttons, borders, and active states)

---

## Development & Build

Ensure you have Node.js installed.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run TypeScript validation
npx tsc -b

# Build for production
npm run build
```

The resulting `dist/` folder will contain the fully optimized production assets ready for deployment to Vercel, Netlify, or any static file host.
