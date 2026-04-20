# Wedding Menu

A modern Next.js menu showcase for a wedding event, built with Tailwind CSS and a searchable menu experience.

## Project Overview

This project displays a curated vegetarian wedding menu with categorized dishes, background styling, and a live search bar. It uses a client-side menu page that filters dishes as the user types.

## Key Features

- Search bar with instant filtering of menu items
- Category-based menu sections
- Responsive Tailwind CSS layout
- Elegant hero-style presentation with blurred glow accents

## Project Structure

- `app/menu/page.js` - Main menu page with search and filtered menu rendering
- `components/MenuSection.js` - Renders a section of menu items for a category
- `components/MenuItem.js` - Renders a single menu item card
- `data/menu.js` - Menu data source for dishes and categories
- `public/` - Dish images and assets used by the menu
- `app/globals.css` - Global styles and Tailwind imports

## Available Scripts

From the project root, run:

- `npm install` — install dependencies
- `npm run dev` — start Next.js development server
- `npm run build` — build production assets
- `npm run start` — start the production server after build
- `npm run lint` — run Next.js lint checks

## Requirements

- Node.js 18+ recommended
- npm

## Notes

- The menu page is a client component (`"use client"`) because it uses `useState` and `useMemo` for live search filtering.
- Images are stored in `public/` and referenced in component data.

## Getting Started

1. Clone or open the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000/menu` in your browser.

## Customization

- Update `data/menu.js` to change categories, item names, descriptions, or prices.
- Modify `components/MenuSection.js` and `components/MenuItem.js` to change presentation or layout.
- Adjust Tailwind classes in `app/menu/page.js` for new styling.

## License

This repository is private and intended for personal use.
