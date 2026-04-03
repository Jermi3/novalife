# NovaLife Wellness — Funnel Conversion Design

## Overview
Convert the single-page marketing website into a lead-generation funnel targeting busy executives/professionals who have failed with diets, gym programs, and unsupervised peptide/GLP use.

## Target Audience
Busy executives who've tried everything — diets, gyms, peptides/GLPs — but keep failing because no one combined the pieces. They need structure, not another product.

## Coach
Larry Morales, RND (Registered Nutritionist-Dietitian), 10+ years fitness coaching.

## 3-Pillar Offering
1. Guided Peptide/GLP Protocol
2. Structured Workout Plan
3. Personalized Nutrition (by an actual RND)

## Funnel Emotional Arc
```
HOOK → PAIN → SOLUTION → PROOF → TRUST → CLOSE
```

## Section Structure (Top to Bottom)

### 1. Header (Simplified)
- Logo + single CTA button ("Book Free Consultation")
- No nav links (escape routes)
- Still fixed/sticky with glass effect on scroll

### 2. Hero (Hook)
- Badge: "For Executives Who've Tried Everything"
- Headline: "Stop Guessing. Start Transforming."
- Subheadline addressing failed diets/gyms/peptides
- Primary CTA → opens BookingModal
- Secondary → scrolls to Problem section
- Keep Larry's photo + floating stats

### 3. Problem (NEW — Pain Amplification)
- Headline: "Sound Familiar?"
- Three pain cards: Diet failure, Gym without direction, Peptides without guidance
- Bottom text: "The problem isn't your effort. It's that no one combined the pieces."
- CTA → opens BookingModal

### 4. Solution (Restructured Services — 3 Pillars)
- Headline: "The Complete System That Actually Works"
- Three pillar cards: Peptide Protocol, Workout Plan, Personalized Nutrition
- Emphasize they work TOGETHER, not in isolation
- CTA → opens BookingModal

### 5. Testimonials (Proof)
- Headline: "They Were Where You Are Now"
- Keep existing 3 testimonial cards
- CTA → opens BookingModal

### 6. About (Trust — Larry's Credentials)
- Headline: "Your Coach: Larry Morales, RND"
- 10+ years, 500+ clients, RND credential
- CTA → opens BookingModal

### 7. Final CTA (Close)
- Emerald gradient background (keep existing style)
- Headline: "Your Transformation Starts With One Conversation"
- INLINE full form (name, email, phone, message) — not modal
- Trust signals

### 8. Footer (Minimal)
- Logo, tagline, social links, copyright
- No link columns

## New Components
- **BookingModal.jsx** — Overlay modal triggered via custom DOM event `open-booking`
- **Problem.jsx** — Pain amplification section

## Technical Pattern: Booking Modal
```js
// Any component triggers:
window.dispatchEvent(new Event('open-booking'))

// BookingModal listens:
window.addEventListener('open-booking', () => setIsOpen(true))
```
No context/prop drilling needed. Modal submits to `/api/leads` (already built).

## Design System
Keep existing: emerald green, glassmorphism, blob decorations, fadeIn animations, card-hover effects.
