# Technixar Website Architecture & Code Documentation

## Overview
This document outlines the technical architecture, codebase structure, and key components of the Technixar website. The application is a Single Page Application (SPA) built with React, Vite, and Tailwind CSS.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Database/Auth**: Firebase Authentication (for OAuth integration)
- **External APIs**: Google Calendar API

## Directory Structure
```
/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utility functions and external integrations
│   ├── pages/            # Top-level route components
│   ├── App.tsx           # Main application shell and routing
│   ├── index.css         # Global styles and Tailwind configuration
│   └── main.tsx          # Application entry point
├── firebase-applet-config.json # Firebase configuration
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite configuration
```

## Key Components (`/src/components`)
- **`Navbar.tsx`**: The top navigation bar, featuring the Technixar logo and links to primary pages. Includes responsive mobile menu handling.
- **`Footer.tsx`**: The site footer containing company information, quick links, and social icons.
- **`Logo.tsx`**: An SVG render of the Technixar logo (incorporating the #111111 and #FFCC00 brand colors).
- **`BookingForm.tsx`**: A complex component that handles Google OAuth sign-in and scheduling. It interacts with the Google Calendar API to dispatch calendar invitations.

## Pages (`/src/pages`)
- **`Home.tsx`**: The main landing page highlighting key value propositions and driving users to services.
- **`About.tsx`**: Company history, mission, and team information.
- **`Services.tsx`**: Detailed breakdown of technical services offered.
- **`Technologies.tsx`**: A matrix or listing of supported tech stacks.
- **`Industries.tsx`**: Vertical-specific use cases and case studies.
- **`Portfolio.tsx`**: Showcases of past work and success stories.
- **`Insights.tsx`**: Blog or thought-leadership content.
- **`Contact.tsx`**: Contains the dual-tab interface for either sending a direct message via `mailto:` or booking a direct consultation using the `BookingForm` component.

## Integrations

### Authentication & API Access (`/src/lib/auth.ts`)
The application uses Firebase Authentication purely as an OAuth bridge for Google Sign-In.
- Users authenticate via standard Google selection popups.
- The configuration requests `https://www.googleapis.com/auth/calendar.events` scope.
- The `accessToken` is extracted from the Firebase credential result and stored in memory for immediate API use.

### Google Calendar API
- Used in `BookingForm.tsx`.
- Formats date and time selections into RFC3339 constraints.
- Posts a new event to the `primary` calendar of the authenticated user.
- Explicitly adds `info@technixar.com` as an attendee with `sendUpdates=all` enabled so Technixar receives the booking email automatically.

## Deployment & Build
- The application uses `npm run build` to execute Vite's build pipeline.
- Environment configurations are managed dynamically during the build step.
