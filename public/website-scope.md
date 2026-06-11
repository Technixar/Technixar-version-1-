# Technixar Website Scope & Project Specification

## Executive Summary
Technixar is a modern, professional corporate website designed to showcase software engineering and technology consulting services. The objective is to build trust, present technical competence, and drive lead generation through seamless messaging and automated consultation booking flows.

## Brand Identity
- **Name**: Technixar
- **Primary Colors**:
  - Charcoal / Black: `#111111` (for text, heavy accents, and high-contrast elements)
  - Technixar Yellow: `#FFCC00` (for primary actions, highlights, and the brand mark)
- **Typography**: Clean, professional sans-serif fonts tailored for readable technical corporate communication.
- **Tone**: Professional, authoritative, tech-forward, and accessible.

## Target Audience
- Enterprise clients looking for custom software development.
- Startups needing technical partnerships.
- Businesses requiring digital transformation, cloud infrastructure, or consulting services.

## Core Features & Functionality

### 1. Corporate Marketing Pages
- **Home**: A high-impact landing page summarizing offerings and displaying a clear call-to-action (CTA).
- **Services**: Categorized technical capabilities.
- **Technologies**: Displays tools, cloud providers, and frameworks Technixar specializes in.
- **Industries**: Custom solutions targeted at specific market verticals.
- **Portfolio**: Case studies and past project highlights.
- **Insights**: Publications and technical articles.
- **About Us**: Background on the company, its mission, and its engineering philosophy.

### 2. Contact & Lead Generation
The Contact page functions as the primary conversion point, offering two explicit pathways:
- **Direct Messaging**: A form that collects user details (Name, Email, Company, Service, Budget, Project Description) and processes it into an automated email draft to `githubtechnixar@gmail.com`.
- **Consultation Booking**: An automated scheduling flow.

### 3. Consultation Booking Engine
- **Authentication**: Users must authenticate via Google securely via OAuth to grant calendar access.
- **Scheduling**: Users can select from a predefined list of dates and time slots.
- **Automation**: Upon confirmation, an event is automatically created on the user's primary Google Calendar, generating an invite sent to `info@technixar.com` immediately securing the time slot on both ends.

## User Flows

**Scenario 1: Organic Discovery & Inquiry**
1. User lands on the Home page.
2. User browses Services and Technologies.
3. Convinced of competence, the user navigates to the Contact page.
4. User selects to "Send Message", fills out the project details, and sends an email.

**Scenario 2: Direct Booking**
1. User already wants to speak with Technixar and clicks "Book a Free Consultation".
2. User selects the "Book Appointment" tab on the Contact page.
3. User signs in with Google.
4. User picks an available slot (e.g., Tomorrow at 10:00).
5. User confirms the booking. They see a success screen, and `info@technixar.com` receives a calendar invite.

## Technical Constraints & Standards
- **Responsive Design**: The interface must adapt perfectly across mobile, tablet, and desktop viewports. Touch targets must be sized appropriately for mobile devices.
- **Accessibility**: High contrast ratios and readable text sizes must be maintained.
- **Performance**: The SPA must load quickly and navigate smoothly with no hard page reloads.
