# Project Instructions: Quick Maxi Website (quickmaxi.com.au)

## Overview
Build a high-converting, modern, mobile-responsive single-page website for **Quick Maxii Cabs** — Melbourne's #1 Maxi Taxi, NDIS Transport, and Wheelchair Accessible Taxi service operating 24/7 across all Melbourne suburbs, South-East suburbs (Clyde/Clyde North, Dandenong, Frankston), and all Victorian airports (Tullamarine & Avalon).

The site will be hosted for FREE on GitHub Pages with zero external dependencies or heavy frameworks.

---

## Technical Constraints & Stack
- **HTML:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS:** Clean CSS3 using CSS variables, Flexbox, CSS Grid, and mobile-first media queries (`style.css`).
- **JavaScript:** Plain vanilla JS (`script.js`) for mobile menu toggle, booking form handling, instant SMS/Call launcher, and interactive fare estimator.
- **Performance:** Zero heavy external libraries (no React, jQuery, or Bootstrap). Ensure fast load times on 4G/5G mobile networks.
- **Deployment:** Fully compatible with GitHub Pages out of the box.

---

## Visual Design & Theme
- **Color Palette:** 
  - Primary: Deep Taxi Amber/Yellow (`#F59E0B` or `#EAB308`)
  - Secondary: Charcoal / Slate Obsidian (`#1E293B` or `#0F172A`)
  - Accent/CTA: Vibrant Green (`#16A34A` for Call/WhatsApp)
  - Background: Off-white (`#F8FAFC`)
- **Typography:** Modern, clean sans-serif system fonts (`system-ui`, `-apple-system`, `Segoe UI`, `Roboto`).
- **Layout:** High contrast, large click targets for mobile phones, sticky header with quick phone dial buttons.

---

## Content & Layout Structure (Copied & Adapted for Melbourne)

### 1. Sticky Header / Navigation
- **Logo:** `Quick Maxii Cabs` (with a stylish taxi/shield badge icon).
- **Navigation Links:** `Services`, `NDIS`, `Coverage Areas`, `Reviews`, `Contact`.
- **Action Buttons:** 
  - Direct Call: `📞 0491 727 278` (or direct `tel:` link)
  - `Book Now` button scrolling to the Quote Form.

### 2. Hero Section
- **Badge:** "Melbourne's #1 Maxi & NDIS Transport"
- **Headline:** "Melbourne's Most Trusted Maxi Taxi Service"
- **Subheadline:** "Wheelchair accessible, NDIS-registered, airport transfers & group travel — available 24/7 across all Melbourne suburbs. Professional, punctual, affordable."
- **CTAs:** `📅 Book a Ride` | `📞 Call Now`
- **Trust Highlights (Badges):**
  - 24/7 Always Available
  - 4.9★ Google Rating
  - NDIS Registered Provider
  - ♿ Wheelchair Accessible (Ramps & lifts available)

### 3. NDIS Highlight Banner
- **Title:** "Registered NDIS Transport Provider"
- **Subtitle:** "We accept NDIS plan-managed and self-managed funding."
- **Pills/Badges:** `Plan Managed` • `Self Managed` • `Invoice Provided` • `Wheelchair Vans` • `Support Worker Friendly`

### 4. What We Offer (Our Services)
Grid of 6 core service cards with icons:
1. ♿ **Wheelchair Taxi Melbourne:** Fully equipped wheelchair-accessible vehicles with ramps and hydraulic lifts. Safe, dignified transport across all Melbourne suburbs.
2. 🏥 **NDIS Transport:** Registered NDIS provider offering transport support for participants. We accept plan-managed and self-managed funding and provide detailed invoices for claims.
3. ✈️ **Airport Transfers:** Reliable, punctual pick-ups and drop-offs at Melbourne Airport (Tullamarine) & Avalon Airport. Flight tracking, no hidden fees.
4. 👥 **Group & Maxi Cab:** 5 to 11 passenger maxi cabs for corporate events, sports outings (MCG, Marvel Stadium), family events, and large group travel.
5. 💍 **Wedding Transfers:** Stress-free wedding transport. Comfortable, elegant vehicles at standard taxi rates.
6. 👶 **Taxi with Baby Seat:** Complimentary baby capsules, booster seats, and infant car seats with government-approved anchor points.

### 5. Disability Transport Section (NDIS Deep Dive)
- **Title:** "NDIS Transport Provider Melbourne"
- **Description:** "We understand the unique needs of NDIS participants. Our trained drivers provide respectful, professional transport so you can live life with independence."
- **Key Features:**
  - 📋 **Plan & Self Managed Accepted:** Itemised invoices compatible with NDIS claiming requirements.
  - 🚐 **Wheelchair Accessible Vehicles:** Hydraulic lifts, ramp access, and secure restraint systems.
  - 🏥 **Medical & Therapy Appointments:** Regular recurring bookings for Monash Health, The Alfred, Royal Melbourne, and local specialist centers.
  - ❤️ **Trained & Compassionate Drivers:** All drivers are trained in disability awareness and support needs.
- **CTA:** `📞 Call for NDIS Bookings`

### 6. Why Choose Us (6-Point Grid)
1. **01 No Call-Out Fee:** Transparent pricing with no hidden charges. What you see is what you pay.
2. **02 Fixed or Meter Fare:** Choose between a fixed rate or metered fare — whatever suits your preference.
3. **03 Direct Driver Contact:** Speak directly to your driver. No call centers, no waiting on hold.
4. **04 Arrival SMS Alerts:** Get a text 10 minutes before your driver arrives so you're always ready.
5. **05 100% Insured Vehicles:** Every vehicle in our fleet is fully insured and regularly safety-inspected.
6. **06 Experienced Local Drivers:** Our drivers know Melbourne inside out — fastest routes, every suburb, every time.

### 7. Coverage Areas (Melbourne Locations Grid)
Locations grid covering:
- 📍 Melbourne CBD & Southbank
- 📍 Clyde & Clyde North
- 📍 Dandenong & Berwick
- 📍 Cranbourne & Frankston
- 📍 Glen Waverley & Clayton
- 📍 St Kilda & Brighton
- 📍 Mornington Peninsula
- 📍 Ringwood & Box Hill
- 📍 Epping & Craigieburn
- 📍 Werribee & Point Cook
- 📍 Melbourne Airport (Tullamarine)
- 📍 Avalon Airport

### 8. Interactive Booking & Quote Request Form
Form fields:
- **Your Name** (Text input)
- **Phone Number** (Tel input)
- **Email Address** (Email input)
- **Service Type** (Dropdown: Maxi Taxi, Wheelchair Taxi, NDIS Transport, Airport Transfer, Group Travel, Wedding Transfer, Baby Seat Taxi)
- **Pick-Up Location** (Text input)
- **Drop-Off Location** (Text input)
- **Pick-Up Date & Time** (Date/Time inputs)
- **Additional Notes** (Textarea)
- **Submit Button:** `📅 Request a Free Quote`

### 9. Reviews Section ("What Clients Say")
- **Rating Header:** "4.9 ★ Average Rating — Trusted by Melbourne Families"
- **Testimonial Cards:**
  - ★★★★★ *"Absolutely reliable and punctual every single time. The driver waited patiently and was incredibly understanding of my mum's needs. Highly recommend for accessible transport in Melbourne."* — **Wayne H.**
  - ★★★★★ *"We use Quick Maxii Cabs for our NDIS client regularly. Amazing service, always on time, friendly drivers, and easy itemised invoicing."* — **Jazmine W.**
  - ★★★★★ *"Can't recommend them enough! Clean vehicles, drivers are always early, and extremely accommodating for wheelchair passengers."* — **Julie-Anne H.**

### 10. Contact Section & Footer
- **Contact Details:**
  - 📞 **Phone:** 0491 727 278 (24/7 Call/Text)
  - ✉️ **Email:** info@quickmaxi.com.au
  - 📍 **Location:** Melbourne, Victoria (Serving all Greater Melbourne suburbs)
  - 🕐 **Hours:** Available 24 Hours, 7 Days a week
- **Footer Navigation Links & NDIS Declaration:**
  - "Melbourne's most trusted maxi taxi, wheelchair transport, and NDIS transport provider."
  - Copyright: `© 2026 Quick Maxii Cabs Melbourne. All rights reserved.`
  - `NDIS Registered Transport Provider | Victoria, Australia`

---

## Files to Output
- `index.html`
- `style.css`
- `script.js`