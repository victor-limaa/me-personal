---
name: Kinetic Performance System
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#adc6ff'
  on-secondary: '#002e69'
  secondary-container: '#4b8eff'
  on-secondary-container: '#00285c'
  tertiary: '#ffffff'
  on-tertiary: '#303033'
  tertiary-container: '#e4e1e5'
  on-tertiary-container: '#656467'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#e4e1e5'
  tertiary-fixed-dim: '#c8c6c9'
  on-tertiary-fixed: '#1b1b1e'
  on-tertiary-fixed-variant: '#47464a'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  stats-md:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base-unit: 4px
  margin-mobile: 20px
  gutter-mobile: 12px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for high-intensity utility and peak performance. It targets fitness enthusiasts who require a focused, "heads-up" interface that remains legible under the physical stress of a workout.

The aesthetic is a fusion of **Modern Minimalism** and **Glassmorphism**. It utilizes a dark, immersive "Obsidian" environment to reduce eye strain in gym lighting, punctuated by high-chroma "Electric" accents that signal action and progress. The emotional response is one of precision, energy, and relentless momentum.

## Colors

This design system utilizes a high-contrast dark palette to create a "performance cockpit" feel.

- **Primary (Volt):** A searing neon green used exclusively for primary actions, completion states, and active progress indicators. It represents energy and "go" signals.
- **Secondary (Electric Blue):** Used for interactive elements, links, and secondary data visualizations. It provides a cool counterbalance to the heat of the primary color.
- **Background (Obsidian):** A deep Zinc/Slate base (#09090B) provides the foundation, ensuring the vibrant accents "pop" with maximum luminance.
- **Surface (Slate):** Subtle, semi-transparent layers used for cards and containers to create depth without breaking the dark-mode immersion.

## Typography

Typography is prioritized for immediate glanceability. **Inter** is used for its exceptional legibility and neutral, modern character. For headlines and display text, heavy weights (Bold/ExtraBold) and tight letter spacing create a sense of strength and urgency.

**JetBrains Mono** is introduced specifically for numeric data, timers, and repetitions. The monospaced nature ensures that numbers don't "jump" when timers are running, maintaining a stable visual layout during active tracking.

## Layout & Spacing

The layout follows a strict 4px grid system to ensure mathematical harmony. On mobile, the system uses a flexible 4-column grid with generous 20px outer margins to prevent accidental touches near screen edges during movement.

Vertical rhythm is driven by "stacking" logic:

- **Stack-sm (8px):** Related elements (Label + Input).
- **Stack-md (16px):** Distinct content blocks within a card.
- **Stack-lg (32px):** Spacing between major section groups or cards.

Interactive targets (buttons, toggles) must maintain a minimum height of 48px to accommodate sweaty or moving hands.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** rather than traditional drop shadows. This maintains the sleek, futuristic aesthetic of the design system.

- **Level 0 (Floor):** Pure Obsidian (#09090B).
- **Level 1 (Cards):** Semi-transparent Zinc (#18181B at 60% opacity) with a 12px Backdrop Blur and a subtle 1px inner border (white at 10% opacity) to define the edge.
- **Level 2 (Modals/Popovers):** Higher opacity Zinc with a more pronounced white top-edge highlight to simulate a light source from above.

Avoid heavy black shadows; instead, use "Glows" (outer blurs of the primary color) to indicate active states or significant achievements.

## Shapes

The design system utilizes a "Rounded" language to feel approachable and ergonomic.

- **Primary Radius:** 16px (1rem) for all main containers, cards, and large buttons.
- **Large Radius:** 24px (1.5rem) for bottom sheets and feature tiles.
- **Full Radius:** Used for progress bar caps and status chips to create a "pill" shape.

This high degree of roundedness contrasts with the sharp, technical typography, creating a balanced "Human-Tech" feel.

## Components

### Buttons

- **Primary:** Solid Volt (#CCFF00) background with Black text. 16px radius. High impact, reserved for "Start Workout" or "Finish Set".
- **Secondary:** Ghost style with 1px border of Electric Blue and subtle blue-tinted glass background.

### Cards & Workouts

- Workout cards use the Level 1 Glassmorphism style.
- Headers within cards should use `label-caps` for exercise names to provide clear visual hierarchy.

### Inputs

- Numeric inputs for weight/reps should use `stats-md` (JetBrains Mono).
- Backgrounds are dark and recessed with a 2px bottom-border highlight that glows Volt when focused.

### Progress & Status

- **Progress Bars:** Thick 12px tracks with rounded caps. The background track is 10% white; the fill is a gradient from Electric Blue to Volt.
- **Status Indicators:** A simple solid circle. Volt for "Completed", Electric Blue for "In Progress", and a hollow ring for "Pending".

### Tactile Feedback

- All components should be designed with large hit states. Sliders for weight adjustment should have oversized handles for easier manipulation during a session.
