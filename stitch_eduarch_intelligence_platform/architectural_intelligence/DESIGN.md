---
name: Architectural Intelligence
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-xs: 4px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style
The design system is engineered for **EduArch**, a platform where academic ambition meets data-driven precision. The brand personality is "The Precise Navigator"—authoritative yet accessible, combining the intellectual rigor of higher education with the streamlined efficiency of modern high-productivity software.

The visual style is a fusion of **Corporate Modern** and **Minimalism**, heavily influenced by the "Software-as-a-Document" aesthetic. It emphasizes:
- **Clarity over Clutter:** Every pixel must justify its existence.
- **Intellectual Trust:** High-contrast typography and a stable, cooling color palette to evoke confidence in complex decision-making.
- **Architectural Depth:** Using subtle borders and elevation to create a sense of structural integrity, mirroring the physical campuses the platform represents.

## Colors
This design system utilizes a high-clarity palette designed for long-duration research sessions.

- **Primary (Action Blue):** Used strictly for interactive elements, primary calls-to-action, and active states. 
- **Neutral (Deep Slate):** The bedrock of the system. Used for primary text to ensure maximum legibility and a premium, "ink-on-paper" feel.
- **Secondary (Muted Slate):** Used for metadata, labels, and secondary supporting text to create a clear visual hierarchy.
- **Success (Emerald):** Reserved for positive data trends, acceptance probabilities, and completed milestones.
- **Surface/Background:** A subtle off-white background (#FAFBFC) prevents eye strain, while pure white (#FFFFFF) is used for "Surface" containers to create a layered, physical effect.

## Typography
The typography strategy leverages **Geist** for its technical, monospaced-adjacent precision in headlines and UI labels, paired with **Inter** for body copy to ensure superior readability in data-heavy views.

- **Editorial Presence:** Display and Headline styles use tighter letter-spacing and generous leading to mimic high-end educational journals.
- **Data Clarity:** Label styles are used for statistics and button text, providing a sharp, functional contrast to flowing body text.
- **Hierarchy:** Maintain a strict "Top-Down" hierarchy. Avoid using more than two different type sizes on a single data card to prevent visual noise.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy for desktop to maintain editorial control over line lengths, transitioning to a **Fluid Grid** for mobile devices.

- **Grid System:** A 12-column grid is used for desktop (1280px max-width). Gaps are kept wide (24px) to emphasize the "Premium Spacing" requirement.
- **The 8px Rhythm:** All padding and margins must be multiples of 8px. 
- **Sectional Breathing:** Large sections of content should be separated by `stack-xl` (80px) to give the user "room to think" between different data sets.
- **Mobile Reflow:** On mobile, 12-column layouts collapse to a 4-column system with 16px side margins.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Ambient Shadows** rather than heavy gradients.

- **The Base:** The #FAFBFC background is the lowest level (Level 0).
- **The Card:** White (#FFFFFF) surfaces sit at Level 1, utilizing a very soft, diffused shadow: `0px 4px 20px rgba(15, 23, 42, 0.05)`.
- **The Interaction:** On hover, cards transition to Level 2. The shadow tightens and deepens: `0px 10px 30px rgba(15, 23, 42, 0.08)`, accompanied by a subtle 2px upward translation.
- **The Overlays:** Modals and dropdowns use Level 3 elevation with a primary-tinted shadow to indicate importance and focus.
- **The Border:** A 1px border of #E2E8F0 is used on all Level 1 surfaces to maintain structural definition against the light background.

## Shapes
The shape language is **Refined and Structured**.

- **Standard Radius:** 0.5rem (8px) is the default for buttons, input fields, and small cards. This provides a modern, approachable feel without appearing "bubbly."
- **Large Components:** College detail cards and hero sections use `rounded-lg` (16px) to anchor the page.
- **Interactive Indicators:** Small badges and tags use a full pill-shape (999px) to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid #2563EB with white text. High-contrast, no gradient.
- **Secondary:** Surface white with a 1px border of #E2E8F0. Text in #0F172A.
- **Ghost:** No background or border. Text in #64748B. On hover, a subtle #F1F5F9 background appears.

### Inputs & Search
- **Airbnb-Style Search:** A floating container with a subtle inner shadow, distinct segments for "College Name," "Location," and "Major." On focus, the border transitions to a 2px Primary Blue stroke.
- **Validation:** Use 12px Geist (Label-sm) for error messages in #EF4444, positioned exactly 4px below the input field.

### College Cards
- **Image:** 16:9 aspect ratio with a subtle grayscale-to-color transition on hover.
- **Zoom Effect:** On hover, the image should scale 1.05x within its container (overflow hidden).
- **Content:** Headline-md for college names, followed by body-sm for location.

### Data Visualization
- **Stats Cards:** Large Display-lg font for the primary metric. Use Success #10B981 for positive growth indicators.
- **Progress Bars:** 8px height, rounded-full. Background #F1F5F9, fill #2563EB.
- **Charts:** Use a monochromatic blue scale for data points to maintain the "Architectural" sobriety.

### Feedback & State
- **Skeleton Loaders:** Use a linear gradient shimmer from #F1F5F9 to #E2E8F0.
- **Badges:** Small, uppercase Geist font. Backgrounds should be 10% opacity of the status color (e.g., 10% Primary Blue for "Early Action").