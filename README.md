# Workshop Booking — UI Redesign

> A mobile-first React redesign of the [FOSSEE Workshop Booking](https://github.com/FOSSEE/workshop_booking) system, focused on performance, accessibility, responsiveness, and modern UI/UX.

---

## Table of Contents

- [Getting Started](#getting-started)
- [What Changed](#what-changed)
- [Design Principles](#design-principles)
- [Responsiveness](#responsiveness)
- [Performance & Trade-offs](#performance--trade-offs)
- [Accessibility & SEO](#accessibility--seo)
- [Challenges](#challenges)
- [Tech Stack](#tech-stack)
- [Before & After](#before--after)

---

## Getting Started

```bash
git clone https://github.com/Jyo-08/workshop-ui-redesign-fossee.git
cd workshop-ui-redesign-fossee
npm install
npm start
```

The app will run at `http://localhost:3000`.

---

## What Changed

The original Django-based frontend had a flat, unstyled layout with no mobile support and limited visual hierarchy. The redesign addresses this across several areas:

- **Workshop Cards** — Each workshop is displayed as a scannable card with title, date, and availability at a glance, replacing a dense plain list.
- **Hero Section** — A clear welcome banner at the top establishes context immediately and guides new users into the flow.
- **Seat Availability Bars** — A visual progress bar communicates remaining seats more intuitively than a raw number alone.
- **Simplified Booking Form** — Fields are grouped logically with clear labels, reducing cognitive load during registration.
- **Navigation Redesign** — Anchor-based navigation with smooth scrolling replaces abrupt page jumps.
- **Consistent Spacing & Typography** — A clear type scale and whitespace rhythm improves readability across all screen sizes.

---

## Design Principles

The redesign was guided by three core principles:

**1. Clarity over cleverness.** The primary users are students — many of whom may be visiting for the first time. Every design decision prioritised immediate comprehension over visual complexity. Buttons are labelled plainly, headings are descriptive, and actions have obvious affordances.

**2. Mobile-first layout.** Given that the target audience primarily accesses the site on smartphones, the layout was built from the smallest screen up. Components were designed to work at 320px wide before being scaled to larger viewports.

**3. Lightweight by default.** No animation libraries, no heavy UI frameworks. All styles are written in plain CSS to keep the bundle small and load time fast on slower mobile connections.

---

## Responsiveness

Responsiveness was achieved using a combination of CSS Flexbox, relative units, and media query breakpoints:

- **Flexbox wrapping** — Workshop cards are laid out in a flex container with `flex-wrap: wrap`, so they naturally stack into a single column on small screens and expand to multi-column on wider viewports.
- **Fluid sizing** — Font sizes and spacing use `rem` units so they scale with the user's browser settings, which also benefits accessibility.
- **Touch targets** — Buttons and form inputs have a minimum height of 44px, meeting Apple and Google guidelines for tap target size on touch devices.
- **Breakpoints** — Media queries at `480px`, `768px`, and `1024px` handle layout transitions across phone, tablet, and desktop.

---

## Performance & Trade-offs

**Animations skipped intentionally.** While entry animations and hover transitions would enhance the visual feel on desktop, they add JavaScript overhead and can cause jank on mid-range Android devices. The decision was made to keep interactions snappy over making them decorative.

**No external UI library.** Using a component library like Material UI or Ant Design would have sped up development, but would have added significant bundle weight. Since this is a focused booking interface with a limited number of components, handwritten CSS is more performant and easier to maintain.

**Static mock data.** The frontend is decoupled from the Django backend. Data is mocked in JS to allow independent development and testing. Connecting to the real API would require CORS configuration on the backend and is outside the scope of this task.

---

## Accessibility & SEO

**Accessibility improvements include:**

- Semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<article>`) used throughout, replacing generic `<div>` containers where appropriate.
- All images and icons include descriptive `alt` text.
- Form inputs are paired with explicit `<label>` elements using `htmlFor` to ensure screen reader compatibility.
- Colour contrast ratios checked to meet WCAG 2.1 AA guidelines — body text maintains at least a 4.5:1 ratio against backgrounds.
- Keyboard navigation works across all interactive elements in logical tab order.

**SEO improvements include:**

- Descriptive `<title>` and `<meta name="description">` tags added in `public/index.html`.
- Heading hierarchy (`h1` → `h2` → `h3`) is maintained consistently across pages so search engines can parse document structure.
- Semantic landmark regions help search bots understand page sections.
- `<meta name="viewport">` tag configured correctly for mobile indexing.

---

## Challenges

The most challenging aspect was restructuring the original flat layout into a component-based React architecture without losing any existing functionality. The original codebase had no component separation — everything was in one large template — so decomposing it into reusable pieces (NavBar, WorkshopCard, BookingForm, etc.) required carefully mapping the old DOM structure to new components.

Balancing visual improvement with restraint was also difficult. There's a temptation to add more — gradients, shadows, transitions — but each addition had to be justified against the performance and clarity goals. Keeping that discipline throughout was a deliberate design exercise.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI component framework |
| React Router DOM 7 | Client-side routing |
| Plain CSS | Styling (no external UI library) |
| Create React App | Project scaffolding and build tooling |

---

## Before & After

### Before — Original Django Version

| Login Page | Statistics Page |
|---|---|
| ![Before Login](screenshots/before/before1.png) | ![Before Stats](screenshots/before/before2.png) |

### After — Desktop (React Redesign)

| Hero Section | Workshop Cards | Booking Form |
|---|---|---|
| ![After Hero](screenshots/after/after1.png) | ![After Workshops](screenshots/after/after2.png) | ![After Booking](screenshots/after/after3.png) |

### After — Mobile (React Redesign)

| Hero | Workshops | More Workshops | Booking |
|---|---|---|---|
| ![Mobile Hero](screenshots/mobile/mobile1.png) | ![Mobile Workshops](screenshots/mobile/mobile2.png) | ![Mobile More](screenshots/mobile/mobile3.png) | ![Mobile Booking](screenshots/mobile/mobile4.png) |

---

## Submission Notes

This project is a front-end only redesign. The original Django backend has not been modified. The React app is intended to serve as a replacement frontend that could be connected to the existing API endpoints with minor configuration.