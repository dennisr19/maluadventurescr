---
name: Malu Adventures
description: A bright Pacific adventure desk framed by sea and jungle.
colors:
  jungle-deep: "#063f39"
  jungle-action: "#0b6257"
  ocean-sky: "#8ddff0"
  ocean-sky-soft: "#b3edf8"
  jungle-mist: "#dff7f3"
  solar-star: "#ffd166"
  page: "#f7fcfb"
  surface: "#f7fffe"
  ink: "#0b332f"
  muted-ink: "#315f58"
  border: "#c9e9e4"
typography:
  display:
    fontFamily: "Manrope Variable, ui-sans-serif, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.055em"
  brand-script:
    fontFamily: "Caveat Variable, cursive"
    fontSize: "3.75rem"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Manrope Variable, ui-sans-serif, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope Variable, ui-sans-serif, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.08em"
rounded:
  control: "9999px"
  panel: "1rem"
  card: "1.35rem"
  feature: "2rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  gutter: "1.25rem"
  lg: "2rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.ocean-sky}"
    textColor: "{colors.jungle-deep}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.jungle-deep}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.25rem"
---

# Design System: Malu Adventures

## Overview

**Creative North Star: "The Pacific Adventure Desk"**

The destination supplies the energy while the interface acts as a bright, direct guide. Ocean
cyan, deep jungle green, and one solar accent create a lively Costa Rican identity without
reducing the page to tropical decoration. Photography stays decisive and full width; opaque
surfaces keep information legible.

**Key Characteristics:**

- A strong destination photograph in the first viewport.
- Expressive script reserved for the word Malu.
- Clear hierarchy with one maximum-weight WhatsApp action.
- Compact catalog typography beneath a more energetic hero.

## Colors

Sea-sky cyan and jungle green form a complementary cool palette. Solar yellow is a rare accent
for the hero star motif, while near-white aquatic surfaces carry the catalog.

### Primary

- **Sea-Sky Cyan** (`#8ddff0`): primary conversion fill and focus emphasis.
- **Deep Jungle** (`#063f39`): hero foundation, high-contrast text, and grounding color.

### Secondary

- **Jungle Mist** (`#dff7f3`): icon wells, hover surfaces, and quiet supporting fields.
- **Solar Star** (`#ffd166`): limited to small moments of warmth and proof emphasis.

### Neutral

- **Canopy White** (`#f7fffe`): navigation and hero trust surfaces.
- **Page Mist** (`#f7fcfb`): default page background.
- **Forest Ink** (`#0b332f`): primary body text.
- **Estuary Gray** (`#315f58`): secondary navigation and body text.

**The One Beacon Rule.** In the hero, the tour catalog action receives the single solar marker.
Trip planning remains a quieter text action.

## Typography

**Display Font:** Manrope Variable with a Caveat Variable script accent  
**Body Font:** Manrope Variable with a sans-serif fallback

The display pair combines the clarity of a contemporary guide with one handwritten brand
gesture. Caveat never carries paragraphs, controls, or full headings.

### Hierarchy

- **Hero Display** (800, 3.75rem, 0.88): the Malu Adventures title only.
- **Section Headline** (600, 2.25rem, tight): major catalog and contact headings.
- **Card Title** (600, 1.125rem, snug): tour names.
- **Body** (400, 0.875rem, 1.5): descriptions and supporting information.
- **Label** (700, 0.75rem, tracked): categories, proof, and compact metadata.

**The Signature Word Rule.** Caveat is reserved for Malu in the hero and brand mark.

## Layout

Every top-level section uses one `max-w-6xl` container. Mobile gutters are 20px, increasing to
32px at the small breakpoint. The hero centers its message and keeps both actions on one row;
its trust panel uses three equal columns. The catalog moves from one to two to three columns.

## Elevation & Depth

Depth is concentrated in the first viewport. The opaque navigation and trust panel use broad,
low-opacity jungle shadows to lift them from the photograph. Catalog surfaces remain flat at
rest and gain ambient depth only on hover.

**The Grounded Surface Rule.** Shadows indicate a surface crossing photography or reacting to
interaction; ordinary page sections rely on color and borders.

## Shapes

Navigation, actions, and compact controls are fully rounded. Trust panels use a 1rem radius,
catalog cards use 1.35rem, and the contact feature uses 2rem. Borders remain one pixel and cool
green-gray.

## Components

### Buttons

- **Primary:** solid white pill with deep-green text and a bold downward arrow.
- **Secondary:** transparent pill with a two-pixel white outline and a WhatsApp icon.
- **Focus:** a visible high-contrast ring with offset on photographic surfaces.

### Chips

- Filter chips use white outlined idle states and pale-green selected states.

### Cards / Containers

- Tour cards use white surfaces, cool borders, 1.35rem corners, and 20px internal padding.
- Category color remains supporting information and never competes with the main action.

### Inputs / Fields

- Search fields are white, pill shaped, and use a visible green focus treatment.

### Navigation

- The navigation is a floating white rounded box that leaves the hero landscape visible around it.
- The Malú signature sits left, followed by one horizontal row of links and compact utilities.
- Links use bold deep-green text with a solar underline.
- The Base UI language dropdown links to dedicated English and Spanish static routes.

### Hero Trust Panel

- Three factual signals sit in an opaque near-white panel below the actions.
- The star motif is decorative emphasis beside a factual tour count, not a customer rating.

## Do's and Don'ts

### Do:

- **Do** keep the ocean cyan and jungle green pairing visible in every key interaction.
- **Do** reserve the Caveat script for the Malu signature.
- **Do** use only verified facts in proof and trust patterns.
- **Do** keep both hero actions on one row while preserving primary and secondary weight.

### Don't:

- **Don't** invent ratings, reviews, social profiles, availability, or tour inclusions.
- **Don't** add another filled action beside WhatsApp.
- **Don't** introduce authored CSS files or component style blocks.
- **Don't** use different top-level container widths.
