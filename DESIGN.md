---
name: Cimientos
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#42474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#73777f'
  outline-variant: '#c2c7cf'
  surface-tint: '#3a6188'
  primary: '#002541'
  on-primary: '#ffffff'
  primary-container: '#0b3b60'
  on-primary-container: '#7fa6d0'
  inverse-primary: '#a3caf6'
  secondary: '#ba0514'
  on-secondary: '#ffffff'
  secondary-container: '#df2b2a'
  on-secondary-container: '#fffbff'
  tertiary: '#312000'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d3400'
  on-tertiary-container: '#d49700'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e4ff'
  primary-fixed-dim: '#a3caf6'
  on-primary-fixed: '#001d35'
  on-primary-fixed-variant: '#1f496f'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000c'
  tertiary-fixed: '#ffdeaa'
  tertiary-fixed-dim: '#ffba2c'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 30px
  section-gap: 80px
---

## Brand & Style
The brand personality is rooted in institutional trust, Peruvian engineering excellence, and the emotional security of a family home. The design system adopts a **Corporate / Modern** style with a high-trust, professional veneer. It balances the "heavy" nature of construction with "light" and "warm" digital experiences.

The visual narrative focuses on safety, precision, and human connection. To bridge the gap between technical authority and domestic accessibility, the UI uses structured layouts paired with soft interactive affordances—such as subtle scaling on hover and refined glows that mimic modern architectural lighting. This creates an environment that feels both industrial-grade and personally welcoming.

## Colors
The palette is a direct reflection of construction signals and structural integrity.
- **Primary (Deep Royal Blue):** Used for headers, primary actions, and branding to establish authority.
- **Secondary (Construction Red):** Reserved for urgent calls to action, safety highlights, and critical "Live" statuses.
- **Accent (Solar Yellow):** Used sparingly for attention-grabbing elements, warnings, or premium project highlights.
- **Freshness (Meadow Green):** Applied to sustainability badges, completed project markers, and success states.
- **Backgrounds:** A mix of pure White for content clarity and Soft Light Gray to define distinct architectural sections within the layout.

## Typography
Typography is split between the geometric strength of **Montserrat** for headlines and the systematic clarity of **Inter** for data-heavy content and body text. 

Headlines utilize tighter letter spacing and bold weights to mimic the impact of architectural signage. Body text is prioritized for high legibility, using generous line heights to ensure that technical details and contract information are easily digestible. Uppercase labels are used for categories and metadata to maintain a professional, organized hierarchy.

## Layout & Spacing
The system utilizes a **Fluid Grid** for internal components and a **Fixed Grid** for main content containers to ensure stability on ultra-wide screens. 

- **Desktop:** 12-column grid with a 1280px max-width. Large 80px gaps between major sections allow the professional photography of construction sites to breathe.
- **Tablet:** 8-column grid with 24px margins. Elements begin to stack vertically.
- **Mobile:** 4-column grid with 16px margins. Touch targets are prioritized, and horizontal scrolling is used for project galleries to maximize vertical real estate.

Spacing follows a strict 8px base unit rhythm, ensuring that every element—from the smallest icon to the largest project card—feels engineered and intentional.

## Elevation & Depth
Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

Surfaces that sit "above" the base background (like cards or navigation menus) use a very soft, diffused shadow tinted with the primary blue (`rgba(11, 59, 96, 0.08)`). This provides depth without appearing heavy. 

Interactive elements utilize **Glows**: when a user hovers over a primary project card or button, it should exhibit a subtle "neon" outer glow in the primary blue or secondary red, signaling that the element is active and ready for engagement. This mimics the modern LED lighting found in contemporary Peruvian architecture.

## Shapes
The design system uses **Soft (Level 1)** roundedness. 

Corners are slightly rounded (4px to 12px) to soften the industrial nature of the brand while maintaining a professional, geometric edge. This "soft-square" approach strikes the balance between the rigid lines of a construction site and the comfortable, safe feeling of a home. 

Buttons and input fields use the standard `rounded` (4px) setting, while large image containers and cards use `rounded-lg` (8px) to frame visual content more elegantly.

## Components
- **Buttons:** Primary buttons are solid Deep Royal Blue with white Montserrat text. Hover states trigger a 1.02x scale and a soft primary-colored glow.
- **Project Cards:** High-quality imagery on top, with a 2px Meadow Green border on the bottom for "Completed" projects. Subtle shadow on hover.
- **Input Fields:** Clean white backgrounds with 1px Soft Light Gray borders. Active states use a 2px Primary Blue border.
- **Chips:** Used for project status (e.g., "In Progress," "Delivered"). These use the freshness green and construction red with 10% opacity backgrounds and full-saturation text.
- **Navigation:** A sticky top header with a slight backdrop blur (Glassmorphism) to keep the user oriented as they scroll through long project portfolios.
- **Interactive Floorplans:** An custom component featuring SVG hotspots that scale and glow when hovered, providing a tactile experience for prospective homeowners.