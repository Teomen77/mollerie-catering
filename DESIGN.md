---
name: mollerie
description: An invitation on uncoated paper for buffets and catering in Köln-Ehrenfeld.
colors:
  beet: "oklch(0.4 0.112 27)"
  beet-hover: "oklch(0.4 0.112 27 / 0.9)"
  selection: "oklch(0.4 0.112 27 / 0.22)"
  paper: "oklch(0.975 0.007 92)"
  paper-deep: "oklch(0.935 0.014 86)"
  ink: "oklch(0.27 0.024 55)"
  ink-soft: "oklch(0.38 0.024 52)"
  hairline: "oklch(0.27 0.024 55 / 0.16)"
  field-line: "oklch(0.27 0.024 55 / 0.25)"
  destructive: "oklch(0.45 0.15 25)"
typography:
  display:
    fontFamily: "Petrona, serif"
    fontSize: "clamp(2.5rem, 4.8vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Petrona, serif"
    fontSize: "clamp(2.2rem, 4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Petrona, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: "2.5rem"
    letterSpacing: "-0.03em"
  wordmark:
    fontFamily: "Petrona, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: "2rem"
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
    fontFeature: '"kern" 1, "liga" 1'
  ui:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  gutter: "1.25rem"
  gutter-wide: "2rem"
  gutter-page: "2.5rem"
  section: "7rem"
  section-wide: "9rem"
  header: "4rem"
  control: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.beet}"
    textColor: "{colors.paper}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "{spacing.control}"
  button-primary-hover:
    backgroundColor: "{colors.beet-hover}"
    textColor: "{colors.paper}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "{spacing.control}"
  button-compact:
    backgroundColor: "{colors.beet}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
  button-compact-hover:
    backgroundColor: "{colors.beet-hover}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0"
    height: "{spacing.control}"
  link-companion:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
  link-quiet:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  nav-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.wordmark}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "{spacing.header}"
  paper-band:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "2rem 1.25rem"
  map-slip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "2.5rem 1.25rem"
---

# Design System: mollerie

## Overview

**Creative North Star: "Uncoated Paper"**

mollerie reads as an invitation printed on a warm sheet. The page ground is uncoated paper. A food photograph may fill a field, and a paper band or a paper slip crosses it. Invitation lines are Petrona. Facts, navigation, captions, and fields are Figtree. Both faces stay at regular weight, so size, family, and tracking do the work of hierarchy.

Beet ink is scarce. It fills the action that asks for an offer or places a call. Headings and facts stay warm ink, with a softer ink for support. Corners are square. Sections sit far apart. Depth is the edge of paper over a picture, or a full-width band of pressed paper. The hero band carries one soft upward wash so the photograph does not meet the type on a hard cut. No other surface is shadowed.

The visitor is addressed in formal Sie. The wordmark is the lowercase name. Photographs are full-bleed and unframed. A stand-in food picture says so in a caption. The location image is stitched OpenStreetMap tiles and keeps the contributor line.

**Key Characteristics:**

- Uncoated paper as the ground, pressed paper only as a full-width band
- Beet ink only on filled enquiry actions
- Petrona for invitation lines, Figtree for facts, both at regular weight
- Square corners
- Depth by overlap, with one soft wash on the hero band
- Wide gaps between sections and between offer masses
- Formal Sie, and a lowercase wordmark

## Colors

The palette is a warm sheet, warm ink, and one beet accent.

### Primary

- **Beet Ink** (`beet`): Filled enquiry actions only. The offer request, the header call, the control that opens the visitor's mail program, and the way back from a missing page. Text selection uses the selection wash. The text caret is beet. Hover uses beet at nine tenths.

### Neutral

- **Uncoated Paper** (`paper`): Page ground, header, footer, the hero band, the map slip, and cards that are really just the sheet showing through.
- **Pressed Paper** (`paper-deep`): The full-width band that holds the enquiry steps. It is a change of sheet, not a second accent.
- **Warm Ink** (`ink`): Headings, the wordmark, body on legal pages, contact values, and text links.
- **Soft Ink** (`ink-soft`): Supporting facts, captions, navigation at rest, field hints, and the map credit.
- **Hairline** (`hairline`): The header rule, the footer rule, the mobile-menu rule, and the rule above the quieter catering block.
- **Field Baseline** (`field-line`): The single bottom edge of a text field.
- **Error Ink** (`destructive`): Form errors only, at label size. It is not a second brand accent.

### Named Rules

**The Beet Ink Rule.** Beet fills an enquiry action and nothing else: the offer request, the call, the control that opens the visitor's mail, and the way back when a page is missing. Headings, body copy, and text links stay warm ink.

## Typography

**Display Font:** Petrona (serif)
**Body Font:** Figtree (sans-serif)

**Character:** Petrona is the invitation. Figtree is the fact. The pairing stays at regular weight; the page does not climb a weight axis to make hierarchy.

### Hierarchy

- **Display** (400, `clamp(2.5rem, 4.8vw, 5.25rem)`, line-height 0.96, tracking -0.035em): The first invitation line on the home page.
- **Headline** (400, `clamp(2.2rem, 4vw, 3.5rem)`, line-height 1.05, tracking -0.03em): Section invitation lines. Legal and missing-page titles use the same face at 3rem with this tracking.
- **Title** (400, 2.25rem, line-height 2.5rem, tracking -0.03em): Offer names and the street on the map slip. The three enquiry steps use the same face at 1.875rem. The footer repeats the wordmark at that same 1.875rem size.
- **Wordmark** (400, 1.5rem, tracking -0.03em): The header lockup. Always lowercase.
- **Body** (400, 1.125rem, line-height 1.625): Fact paragraphs on the home page, held to roughly 38rem–65ch. Kerning and ligatures are on for the document.
- **UI** (400, 1rem, line-height 1.5): The main enquiry action, form values, the contact list, and legal copy.
- **Label** (400, 0.875rem): Navigation, captions, the photo disclaimer, field names, and quiet meta.

### Named Rules

**The Two Voices Rule.** Petrona sets the wordmark and every invitation line. Figtree sets facts, navigation, captions, and fields. Both stay at regular weight. A third face, or a bold cut of these two, is outside the system.

## Layout

The page is one column of wide masses inside a 72rem measure. Horizontal inset is 1.25rem, 2rem from the small breakpoint, and 2.5rem from the large breakpoint. The header is 4rem, sticky, and the document reserves 4.5rem of scroll padding beneath it. Section anchors use a 5rem scroll margin.

Home sections clear 7rem vertically, and 9rem from the medium breakpoint. Inside a section, the first offer follows the introduction by 5rem; later offers separate by 7rem. From the medium breakpoint, a photograph and its invitation share a 12-column grid (seven and five). The enquiry steps become three columns. Contact splits four and eight from the large breakpoint. Legal pages narrow to a 48rem measure.

The first viewport is the buffet photograph with the paper band overlapping its lower edge, by 4rem, and by 6rem from the small breakpoint. The heading, one fact, the offer action, and the landline sit in that band. The photograph is in the first paint and is not covered.

### Named Rules

**The Wide Interval Rule.** Home sections clear 7rem vertically, and 9rem from the medium breakpoint. Masses inside a section separate by a gap of that order. Services are not a row of equal cards.

## Elevation & Depth

Depth is overlap and a change of paper. The header, footer, and the quieter catering block use a hairline. The hero band overlaps the photograph and adds one upward wash, `box-shadow: 0 -28px 40px -24px oklch(0.27 0.024 55 / 0.45)`, plus a top edge of warm ink at 15% opacity. The map slip overlaps the map from the medium breakpoint and has no shadow; below that breakpoint it stacks under the map as the next paper block. Pressed paper marks the enquiry-step band in the normal flow.

The hero photograph eases from scale 1.06 to 1 over 18s with `cubic-bezier(0.16, 1, 0.3, 1)`, then holds. Document scroll is smooth. Both fall back when the visitor prefers reduced motion: the drift is still, and scroll is instant.

### Shadow Vocabulary

- **Hero wash** (`0 -28px 40px -24px oklch(0.27 0.024 55 / 0.45)`): Only under the paper band that crosses the hero photograph.

### Named Rules

**The Overlap Rule.** Depth is paper crossing a photograph, or a full-width band of pressed paper. Stacked and offset shadows are out. The hero band's upward wash is the only shadow, and it stays on that overlap.

## Shapes

Corners are square. Photographs are cropped by the rectangle of their frame, with no radius and no border. Buttons, fields, the paper band, and the map slip share that rectangle. Rules are 1px hairlines. Fields are a single baseline, not a closed box.

### Named Rules

**The Square Corner Rule.** Buttons, fields, photographs, the paper band, and the map slip are square (0). The unused 2px radius scale in the base theme is not a corner to apply.

## Components

### Buttons

Filled, square, beet on paper. Regular Figtree. Hover moves beet to nine tenths. Focus on an anchor action is a 2px beet outline, 3px outside the shape. There is no lift.

- **Shape:** Square (0).
- **Primary:** Beet fill, paper type, 3rem tall, 1.5rem side padding, 1rem type. Used for “Angebot anfragen” and the same rectangle on the enquiry submit and the missing page.
- **Compact:** The same fill at label size, 0.5rem by 1rem, for “Anrufen” in the header. The open mobile menu repeats it with 0.75rem of vertical padding.
- **Hover / Focus:** Fill at nine tenths. Anchor actions take the beet outline. The enquiry submit uses this same rectangle.

### Links

- **Companion:** Sits beside the primary action. Warm ink, always underlined, underline at 40% ink, full ink on hover, 4px offset.
- **Quiet:** Navigation, contact, footer, and legal links. Soft ink in the header, warm ink elsewhere. Underline appears on hover at a 4px offset. Header links also darken to warm ink.

### Inputs / Fields

- **Style:** Transparent, square, 3rem tall, no side padding, one bottom edge at the field baseline. Figtree at the UI size. Placeholder and supporting copy are soft ink. The caret is beet.
- **Label:** Figtree at label size, regular weight, 0.5rem above the baseline.
- **Focus:** The baseline becomes beet. The ring is cleared. The beet outline used on anchors is not repeated on the field.
- **Error:** Error ink at label size, under the field and in a single alert above the form. Empty required states are the only error this form draws.

### Named Rules

**The Underline Field Rule.** A field is a single baseline. The line is warm ink at a quarter strength. Focus turns that line beet and does not add a glow or a ring.

### Navigation

A 4rem paper bar, sticky, with a hairline along the bottom. The wordmark is Petrona at 1.5rem, lowercase, warm ink. Desktop links are label-size Figtree in soft ink, 1.75rem apart, with the compact beet call at the end. Below the medium breakpoint the links hide behind a square 2.5rem menu button; the open list is paper, separated by a hairline, with 1.125rem link type and the beet call under them.

### Paper band

The signature overlap. Full-bleed paper, top hairline of warm ink at 15% opacity, the hero wash, and a negative margin of 4rem (6rem from the small breakpoint) over the photograph. Invitation, fact, primary action, and companion phone number share one row from the medium breakpoint.

### Map slip

Paper over the map, square, no shadow, max width 24rem. From the medium breakpoint it sits 2.5rem from the bottom and 2rem from the left page edge (2.5rem from the large breakpoint). Title is the street in Petrona. A quiet underlined text link opens the larger map. The contributor line is the smallest Figtree on the page, at 0.75rem.

### Hero photograph

Full-bleed, uncovered, object-cover, square crop. It drifts once, as specified in Elevation & Depth. A stand-in caption in soft ink sits with the invitation, separate from the picture.

## Do's and Don'ts

### Do:

- **Do** keep the page on uncoated paper, and use pressed paper only for a full-width band.
- **Do** overlap a paper band or a paper slip on photography instead of framing the picture.
- **Do** set invitation lines in Petrona with tight negative tracking, and facts in Figtree.
- **Do** reserve beet for a filled enquiry action: 3rem tall, 1.5rem of side padding, square.
- **Do** caption a stand-in photograph in soft ink, and keep the OpenStreetMap credit on the map.

### Don't:

- **Don't** round corners or frame photographs. Leave the hero photograph uncovered.
- **Don't** color headings, body copy, or text links in beet, and leave sections on paper.
- **Don't** stack drop shadows or offset shadows, and leave services out of equal card rows.
- **Don't** place an eyebrow or a kicker above a heading.
- **Don't** change the lowercase wordmark, and keep the visitor address in formal Sie.
