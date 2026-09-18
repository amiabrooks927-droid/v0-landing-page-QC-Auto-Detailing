# Implementation Plan: Dark & Premium Visuals Update

**Project**: Quality Control Auto Detailing Landing Page  
**Document**: `IMPLEMENTATION_update_visuals.md`  
**Status**: Planned (Awaiting execution)

---

## 1. Overview & Vision

Transform the Quality Control Auto Detailing single-page landing page into a cohesive, high-converting, dark-luxury automotive experience. The page will feature deep obsidian/black tones, electric blue accents (`#0052FF` / `#3B82F6`), modern Inter typography, smooth scrolling, responsive layout down to 375px, and direct Calendly booking integration across all CTAs.

---

## 2. Design System & Global Tokens

- **Color Palette**:
  - Background: Obsidian Black (`#080808` / `#0A0A0C`) with subtle dark slate cards (`#121316` / `#16181D`)
  - Accent / Primary: Electric Blue (`#0052FF` / `#2563EB` / `#3B82F6`) with glowing borders (`rgba(0, 82, 255, 0.4)`)
  - Typography: Crisp White (`#FFFFFF`), Muted Slate (`#94A3B8`), Dimmed Gray (`#64748B`)
  - Status / Badges: Electric Blue tint (`rgba(0, 82, 255, 0.15)`) with electric blue borders
- **Typography**:
  - Transition from `Geist` to `Inter` (via `next/font/google` in `app/layout.tsx`).
- **Global Behaviors**:
  - `html { scroll-behavior: smooth; }`
  - Fully responsive from 375px mobile viewport to ultra-wide desktop.
  - Universal Calendly link configuration with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 3. Architecture & Centralized Configuration

To ensure maintainability across future updates and agents, create a centralized constants file:
- **`lib/constants.ts`**:
  - `CALENDLY_URL`: Default booking URL (e.g., `https://calendly.com/qcautodetailing` or customizable via env `NEXT_PUBLIC_CALENDLY_URL`).
  - `CONTACT_INFO`: Phone `(804) 300-6441`, Email `info@qcautodetailing.com`, Address/Location `Richmond, VA`.
  - `PRICING_MATRIX`: Matrix structure for the Quote Calculator and Package cards.
  - `ADD_ONS`: Array of 13 add-on services.
  - `FAQS`: Complete list of 10 questions and detailed answers.
  - `SERVICE_AREAS`: Richmond, Henrico, Chesterfield, Hanover, Midlothian, Short Pump, Mechanicsville, Glen Allen, etc.

---

## 4. Section-by-Section Implementation Details

### 4.1 Sticky Navbar (`components/navbar.tsx`)
- **Visuals**:
  - Initial state: Transparent with crisp logo and white nav links.
  - Scrolled state (`window.scrollY > 20`): Blurred dark background (`bg-black/85 backdrop-blur-md border-b border-white/10`).
- **Features**:
  - Desktop nav links (Services, Quote Tool, Service Area, About, FAQ, Contact).
  - Prominent "Book Now" electric blue button linking to Calendly in a new tab.
  - Mobile hamburger toggle with smooth slide-down drawer containing all links and a full-width "Book Now" CTA.

### 4.2 Hero Section (`components/hero.tsx`)
- **Visuals**: Full-viewport height (`min-h-screen` or `100dvh`), high-resolution detailing background image with a dark vignette and gradient overlay for readability.
- **Components**:
  - Top Badge: `"Mobile Auto Detailing · Richmond, VA"` in electric blue pill style.
  - Bold Headline: `"Performance-Level Detailing, Delivered to Your Driveway."`
  - Subtitle: Highlighting professional mobile service directly at the client's home or office.
  - Dual CTAs:
    1. **Primary**: `"View Services"` (smooth scroll to `#services`)
    2. **Secondary**: `"Get a Fast Quote"` (smooth scroll to `#quote-calculator`)

### 4.3 Services & Packages (`components/services.tsx`)
- **Package Cards**:
  1. **Full Detail** (Center or highlighted): Features electric blue `"Most Popular"` badge, glowing border, comprehensive checkmark list of interior + exterior items, starting price, and Calendly "Book Now" CTA.
  2. **Interior Only**: Dedicated interior reset, checkmark feature list, starting price, Calendly CTA.
  3. **Exterior Only**: Hand wash, clay bar, ceramic spray sealant, tire/rim clean, starting price, Calendly CTA.
- **Add-On Services Pill Grid**:
  - Pill grid of the 13 add-on services:
    1. Ceramic Sealant
    2. Carpet & Cloth Shampoo
    3. Pet Hair Removal
    4. Trim Restoration
    5. Odor Removal
    6. Engine Bay Cleaning & Restoration
    7. Headlight Restoration
    8. Clay Bar Treatment
    9. Water Spot Removal
    10. Interior Steam Cleaning
    11. Convertible Top Cleaning
    12. Rim Polishing
    13. Child Car Seat Cleaning
  - Interactive styling: Dark background pills with subtle borders that glow electric blue on hover.

### 4.4 Interactive Quote Calculator (`components/quote-calculator.tsx` [NEW])
- **Two-Step Selector**:
  - **Step 1: Select Service Package**
    - Full Detail
    - Interior Only
    - Exterior Only
  - **Step 2: Select Vehicle Type**
    - Sedan / Coupe
    - Small SUV / Crossover
    - Large SUV / Truck / Van
- **Pricing Matrix Engine**:
  - *Full Detail*: Sedan ($170–$280) · Small SUV ($210–$340) · Large SUV/Truck ($250–$420)
  - *Interior Only*: Sedan ($80–$130) · Small SUV ($100–$160) · Large SUV/Truck ($120–$200)
  - *Exterior Only*: Sedan ($100–$150) · Small SUV ($120–$180) · Large SUV/Truck ($140–$220)
  *(Range reflects Stage 1 standard reset to Stage 2 premium protection)*
- **Instant Result Display**:
  - Dynamic price range with animated number transition.
  - Clear disclaimer: *"Estimated price range based on standard condition. Final pricing may adjust for heavy soil, excessive pet hair, bio-hazards, or optional add-ons."*
  - Dedicated `"Book This Service on Calendly"` button pre-configured with selection details.

### 4.5 Service Area Glowing Banner (`components/service-area.tsx` [NEW / REFACTORED])
- **Visuals**: Dark container with glowing electric blue border and ambient neon drop shadow.
- **Content**:
  - Glowing MapPin icon.
  - Header: `"Service Area — Richmond, VA & Surrounding Communities"`
  - Pill list of primary coverage zones: Richmond, Henrico, Chesterfield, Hanover, Midlothian, Short Pump, Mechanicsville, Glen Allen, Bon Air.
  - Travel-fee callout: *"Mobile detailing travels directly to you. Locations beyond our standard Richmond radius are available with a nominal travel fee based on distance."*

### 4.6 About & 4 Key Pillars (`components/about.tsx`)
- **Visuals**: Dark luxury background (replacing the light/white background) with high-contrast typography.
- **Two-Column Layout**:
  - Left column: Business story, craftsman philosophy, and personal commitment to quality control.
  - Right column: Clean luxury interior photograph with subtle rounded border and glow.
- **2x2 Grid of 4 Key Pillars**:
  1. **Thorough** ("Real Details") — We clean every surface we can safely reach, including vents, seams, and jambs.
  2. **Mobile** ("We Come To You") — Fully equipped mobile service at your home, driveway, or workplace.
  3. **Care-Driven** ("Quality Work") — Performance-grade chemicals, scratch-free techniques, and surface protection.
  4. **Simple** ("Easy Booking") — Transparent pricing, hassle-free online scheduling, and prompt communication.

### 4.7 FAQ Accordion (`components/faq.tsx`)
- **Interaction**: Single-open accordion logic (`openIndex: number | null`). Opening one item automatically collapses any previously opened item.
- **Visuals**: Smooth animated chevron rotation (180°) with electric blue accent on expanded question header.
- **Curated 10 Questions**:
  1. Do I need to provide water and electricity?
  2. What type of locations can you service?
  3. Which areas do you serve, and is there a travel fee?
  4. How should I prepare my vehicle before my appointment?
  5. How long does a detail take?
  6. Do I need to be present during the service?
  7. What happens if it rains or the weather is unsafe?
  8. Can you remove scratches, swirl marks, or paint defects?
  9. Do you offer ceramic coating?
  10. How do I request a quote or book an appointment?

### 4.8 Booking Form & Contact Sidebar (`components/contact.tsx` / `components/booking-form.tsx`)
- **Two-Column Grid**:
  - **Sidebar (Contact Info & Preparation Checklist)**:
    - Phone link: `(804) 300-6441` with Phone icon
    - Email link: `info@qcautodetailing.com` with Mail icon
    - Direct Calendly button: `"Schedule Instantly via Calendly"`
    - **Crucial Callout Card**: Electric blue bordered warning badge for **Water & Outlet Notice**:
      > *"Before We Arrive: Please ensure access to an outdoor water source (hose hookup) and a standard 120V electrical outlet within 50–75 ft of the vehicle."*
  - **Booking Form**:
    - Fields: Full Name, Phone Number, Email, City/Area, Vehicle (Year/Make/Model), Service Requested, Preferred Date/Time Window, Condition Notes.
    - Client-side validation: Real-time feedback for required fields, phone formatting, and valid email syntax.
    - Inline Success State: Smooth animation revealing an inline confirmation card ("Thank you! We've received your request") with reset option, avoiding full page replacement.

### 4.9 Footer (`components/footer.tsx`)
- Dark sleek footer with border separator (`border-t border-white/10`).
- Left: Copyright `© 2026 Quality Control Auto Detailing. All rights reserved.`
- Center: Tagline `"Performance-Level Mobile Detailing in Richmond, VA"`.
- Right: Repeated navigation links (Services, Calculator, About, FAQ, Contact, Book Now).

---

## 5. Master Progress Checklist

Use this checklist to track progress across future sessions and agents:

```markdown
### Phase 1: Foundation & Typography
- [ ] 1.1 Update `app/layout.tsx` to import and configure the `Inter` font from `next/font/google`.
- [ ] 1.2 Update `app/globals.css` with dark theme variables, electric blue tokens, and smooth scroll behavior.
- [ ] 1.3 Create `lib/constants.ts` with Calendly URL, pricing matrix, add-ons list, and FAQs.

### Phase 2: Navigation & Hero
- [ ] 2.1 Update `components/navbar.tsx` with sticky scroll detection, blur effect, and mobile drawer.
- [ ] 2.2 Configure all "Book Now" buttons in navbar to open Calendly in a new tab.
- [ ] 2.3 Refactor `components/hero.tsx` with full-viewport height, badge, bold headline, and dual CTAs.

### Phase 3: Services & Pricing
- [ ] 3.1 Update `components/services.tsx` with the 3 package cards (Full Detail "Most Popular" badge).
- [ ] 3.2 Build the 13 Add-On Services pill grid with electric blue hover border interactions.
- [ ] 3.3 Create `components/quote-calculator.tsx` with 2-step interactive pricing engine, disclaimer, and CTA.

### Phase 4: Service Area & About
- [ ] 4.1 Implement `components/service-area.tsx` glowing banner with map pin, coverage pills, and travel-fee note.
- [ ] 4.2 Convert `components/about.tsx` to dark luxury styling with two-column layout and luxury interior image.
- [ ] 4.3 Integrate the 2x2 grid of the 4 key pillars (Thorough, Mobile, Care-Driven, Simple).

### Phase 5: FAQ & Booking
- [ ] 5.1 Refactor `components/faq.tsx` to strict single-open accordion with rotating chevrons and 10 questions.
- [ ] 5.2 Build two-column contact section in `components/contact.tsx` with sidebar (phone, email, Calendly, water/outlet alert).
- [ ] 5.3 Implement client-side validation and inline confirmation on form submission.

### Phase 6: Footer & Assembly
- [ ] 6.1 Update `components/footer.tsx` with copyright, tagline, and repeated nav links.
- [ ] 6.2 Assemble all components in `app/page.tsx` in the exact specified order.
- [ ] 6.3 Verify all booking buttons trigger Calendly in a new tab (`target="_blank" rel="noopener noreferrer"`).

### Phase 7: Verification & Testing
- [ ] 7.1 Verify build passes with zero TypeScript/lint errors (`npm run build`).
- [ ] 7.2 Verify responsive layout across mobile (375px, 414px), tablet (768px), and desktop (1024px, 1440px).
- [ ] 7.3 Verify all interactive states (calculator pricing calculation, accordion toggle, form validation, mobile drawer).
```

---

## 6. Verification & Validation Plan

1. **Automated Build Test**:
   - Run `npm run build` to ensure Next.js Turbopack build succeeds with zero errors or warnings.
2. **Interactive Elements Verification**:
   - Quote Calculator: Selecting each service + vehicle combination renders the exact matching price range.
   - Accordion: Opening item 2 automatically closes item 1; chevrons rotate smoothly.
   - Mobile Drawer: Opens and closes cleanly on hamburger tap.
   - Booking Form: Submitting with empty required fields triggers validation errors; submitting valid input shows inline confirmation.
3. **Calendly External Link Verification**:
   - Inspect all "Book Now" buttons to ensure `href` points to the configured Calendly link with `target="_blank"` and `rel="noopener noreferrer"`.
4. **Visual & Responsive Verification**:
   - Test viewport widths from 375px to 1440px to guarantee zero horizontal scroll, legible typography, and balanced card grids.
