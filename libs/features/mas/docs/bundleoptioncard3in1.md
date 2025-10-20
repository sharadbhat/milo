# BundleOptionCard3In1 Variant

## Overview

The `bundleoptioncard3in1` variant is a vertical product card designed for showcasing bundle offerings with detailed feature lists, customizable badges, and prominent pricing. It's optimized for displaying comprehensive product information with a "What you get" section featuring checkmarked items.

**Figma Design**: [CME-1 Growth Tests](https://www.figma.com/design/s9UB3EqW3JD6lVc1ORRQjn/CME-1-Growth-Tests?node-id=6135-11052&m=dev)

## Features

-   **Flexible sizing**: Four size options (s, m, l, xl) via single-letter mnemonics
-   **Responsive height**: Auto-adjusts to content with fixed 42px spacing before pricing
-   **Customizable badge**: Optional top-right badge with custom background color
-   **Product header**: Icon and product name
-   **Rich content**: Description, "What you get" section with checkmarked features
-   **Dynamic pricing**: Bottom-aligned pricing with trial text support
-   **Call-to-action link**: "See what's included" or similar links

## Implementation Details

### Key Design Requirements

✅ **Height**: Responsive to content (auto-height)  
✅ **Width**: Controlled by `size` attribute (s/m/l/xl)  
✅ **Layout**: Vertical layout for all sizes  
✅ **Badge**: Top-right positioned, customizable via `badge-background-color` and `badge-color` attributes  
✅ **Content-to-Price Gap**: Fixed 42px spacing between content and pricing section  
✅ **Feature Bullets**: Checkmark-style bullets for feature list

### Size Options

All sizes have a consistent width behavior:

-   **min-width**: 365px
-   **max-width**: 100%
-   **width**: 100%

The card will grow to fill available space up to 100% width, while maintaining a minimum width of 365px.

| Size | Mnemonic | Layout   | Use Case                         |
| ---- | -------- | -------- | -------------------------------- |
| `s`  | s        | Vertical | Default, mobile-friendly layouts |
| `m`  | m        | Vertical | Medium screen layouts            |
| `l`  | l        | Vertical | Large screen, detailed view      |
| `xl` | xl       | Vertical | Extra large, prominent display   |

**Note**: The size attribute is primarily used for AEM authoring and variant selection. All sizes share the same flexible width behavior.

## Usage Example

### Basic HTML Structure

```html
<merch-card
    variant="bundleoptioncard3in1"
    size="s"
    badge-text="Best value"
    badge-background-color="#378E5C"
    badge-color="#FFFFFF"
>
    <!-- Badge (optional) -->
    <merch-badge slot="badge">Best value</merch-badge>

    <!-- Product Icon -->
    <merch-icon
        slot="icons"
        size="m"
        src="https://www.adobe.com/content/dam/cc/icons/creative-cloud.svg"
        alt="Creative Cloud"
    >
    </merch-icon>

    <!-- Product Title -->
    <h3 slot="heading-xs">Creative Cloud Pro</h3>

    <!-- Description -->
    <div slot="body-m">
        <p>
            Get ultimate toolkit for a new era in creativity, including Adobe
            Firefly creative AI for images, video, and audio.
        </p>
    </div>

    <!-- "What you get:" heading -->
    <div slot="body-xs">What you get:</div>

    <!-- Feature Bullets -->
    <div slot="body-xl">
        <ul>
            <li>
                20+ app including Photoshop and Illustrator, plus 100GB of cloud
                storage
            </li>
            <li>Unlimited access to standard AI image features</li>
            <li>
                4000 monthly generative credits for premium AI video and audio
                features like Text to Video
            </li>
        </ul>
    </div>

    <!-- Link -->
    <a slot="body-xxl" href="#see-included">See what's included</a>

    <!-- Price Details (trial text) -->
    <p slot="priceDetails">7-day free trial, then</p>

    <!-- Pricing -->
    <div slot="price">
        <span is="inline-price" data-wcs-osi="..."> </span>
    </div>
</merch-card>
```

## Slot Reference

| Slot Name      | Type  | Description                          | Required |
| -------------- | ----- | ------------------------------------ | -------- |
| `badge`        | badge | Top-right badge (e.g., "Best value") | No       |
| `icons`        | icon  | Product icon in header (32×32px)     | Yes      |
| `heading-xs`   | h3    | Product name/title (18px, bold)      | Yes      |
| `body-m`       | div   | Main description text (14px)         | Yes      |
| `body-xs`      | div   | "What you get:" heading (14px, bold) | No       |
| `body-xl`      | div   | Feature list with checkmarks         | No       |
| `body-xxl`     | a     | Link (e.g., "See what's included")   | No       |
| `priceDetails` | p     | Trial/discount text above price      | No       |
| `price`        | div   | Pricing display (bottom-aligned)     | Yes      |

## Size Examples

### Small (Default)

```html
<merch-card variant="bundleoptioncard3in1" size="s">
    <!-- content -->
</merch-card>
```

### Medium

```html
<merch-card variant="bundleoptioncard3in1" size="m">
    <!-- content -->
</merch-card>
```

### Large

```html
<merch-card variant="bundleoptioncard3in1" size="l">
    <!-- content -->
</merch-card>
```

### Extra Large

```html
<merch-card variant="bundleoptioncard3in1" size="xl">
    <!-- content -->
</merch-card>
```

## Badge Customization

The badge is positioned at the top-right and supports custom colors:

```html
<merch-card
    variant="bundleoptioncard3in1"
    badge-text="Best value"
    badge-background-color="#378E5C"
    badge-color="#FFFFFF"
>
    <merch-badge slot="badge">Best value</merch-badge>
</merch-card>
```

**Spectrum Badge Colors:**

The badge color is fully customizable using Adobe Spectrum color tokens. Authors can select from the variant picker dropdown to apply different badge colors:

-   **Green (Best value)**: `spectrum-green-800` or `#378E5C`
-   **Blue (Popular)**: `spectrum-blue-600` or `#1473E6`
-   **Red (Limited time)**: `spectrum-red-600` or `#E34850`
-   **Purple (New)**: `spectrum-purple-600` or `#9256D9`
-   **Orange (Featured)**: `spectrum-orange-600` or `#DA7B11`
-   **Gray (Standard)**: `spectrum-gray-800` or `#2C2C2C`

**Spectrum Color Reference:**

| Color Family | Token Name          | Hex Value | Common Use Case    |
| ------------ | ------------------- | --------- | ------------------ |
| Gray         | spectrum-gray-800   | #2C2C2C   | Standard/Default   |
| Gray         | spectrum-gray-700   | #464646   | Secondary          |
| Blue         | spectrum-blue-600   | #1473E6   | Popular/Featured   |
| Blue         | spectrum-blue-700   | #0D66D0   | Info               |
| Red          | spectrum-red-600    | #E34850   | Limited/Urgent     |
| Red          | spectrum-red-700    | #D7373F   | Alert              |
| Orange       | spectrum-orange-600 | #DA7B11   | Attention          |
| Orange       | spectrum-orange-700 | #CB6F10   | Warning            |
| Green        | spectrum-green-800  | #378E5C   | Best value/Success |
| Green        | spectrum-green-700  | #44934E   | Confirmed          |
| Purple       | spectrum-purple-600 | #9256D9   | New/Premium        |
| Purple       | spectrum-purple-700 | #8346C3   | Special            |

**Text Color:** Typically `#FFFFFF` (white) or `spectrum-gray-50` for dark backgrounds

## AEM Fragment Mapping

The variant includes automatic mapping for AEM fragments:

```javascript
{
    mnemonics: { size: 'xl' },
    badge: { slot: 'badge' },
    badgeBackgroundColor: { attribute: 'badge-background-color' },
    badgeColor: { attribute: 'badge-color' },
    badgeText: { attribute: 'badge-text' },
    icons: { slot: 'icons' },
    title: { slot: 'heading-xs', maxCount: 250 },
    description: { slot: 'body-m', maxCount: 2000 },
    whatYouGetHeading: { slot: 'body-xs' },
    featureBullets: { slot: 'body-xl' },
    link: { slot: 'body-xxl' },
    priceDetails: { slot: 'priceDetails' },
    prices: { slot: 'price' },
    ctas: { slot: 'footer', size: 'L' },
}
```

## Styling Notes

-   Width: min-width `365px`, max-width `100%`, width `100%`
-   Background: `spectrum-gray-50`
-   Border radius: `2px`
-   Padding: `20px`
-   Content gap: `10px`
-   Content-to-price gap: `42px` (fixed spacing)
-   Badge: Rounded bottom corners (5px), positioned top-right
-   Product icon: 32×32px
-   Typography: Adobe Clean font family
-   Feature bullets: Checkmark (`✓`) in `spectrum-gray-800`
-   Link color: `spectrum-blue-600`

## Layout Structure

### Vertical Layout (all sizes)

```
┌─────────────────────────────────────────┐ ← Card Container (min 365px, max 100%)
│                          ┌──────────┐   │
│                          │Best value│   │ ← Badge (top-right)
│                          └──────────┘   │
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │  🎨 Creative Cloud Pro          │ ← Product Icon + Name (18px, bold)
│  │                                 │    │
│  │  Get ultimate toolkit for a     │ ← Description text (14px)
│  │  new era in creativity...       │
│  │                                 │
│  │  What you get:                  │ ← Heading (14px, bold)
│  │                                 │
│  │  ✓ 20+ app including...         │ ← Feature 1 (checkmark)
│  │                                 │
│  │  ✓ Unlimited access to...       │ ← Feature 2 (checkmark)
│  │                                 │
│  │  ✓ 4000 monthly generative...   │ ← Feature 3 (checkmark)
│  │                                 │
│  │  See what's included →          │ ← Link (blue)
│  │                                 │
│  │                                 │ ← Content area ends
│  │                                 │
│  │         (42px gap)               │ ← Fixed 42px spacing
│  │                                 │
│  │  7-day free trial, then         │ ← Price details (14px)
│  │  US$  69.99/mo                  │ ← Pricing (24px, bold)
│  │                                 │
│  └─────────────────────────────────┘
│                                         │
└─────────────────────────────────────────┘
```

## Key Spacing

-   **Product header to description**: 10px
-   **Description to "What you get"**: 10px
-   **Feature items**: 10px gap between each
-   **Last feature to link**: 10px
-   **Content to pricing section**: 42px (fixed)
-   **Price details to price**: 4px

## Browser Support

-   Chrome/Edge: Latest 2 versions
-   Firefox: Latest 2 versions
-   Safari: Latest 2 versions

## Dependencies

-   `lit` - Web component framework
-   `VariantLayout` - Base variant class
-   `merch-badge` - Badge component (optional)
-   `merch-icon` - Icon component
-   Spectrum design tokens

## Files

-   `/libs/features/mas/src/variants/bundleoptioncard3in1.js` - Component logic
-   `/libs/features/mas/src/variants/bundleoptioncard3in1.css.js` - Component styles
-   `/libs/features/mas/src/variants/variants.js` - Variant registration
-   `/libs/features/mas/docs/bundleoptioncard3in1.md` - This documentation

## Design Considerations

### Content Flexibility

The card is designed to accommodate variable content lengths while maintaining consistent spacing:

-   Product name can wrap to multiple lines
-   Description text flows naturally
-   Feature list can have 1-5 items (3 is typical)
-   Pricing section always maintains 42px gap from content

### Badge Position

The badge is positioned at the top-right (not top-left like some variants) to draw attention without interfering with the product icon and name on the left.

### Layout Adaptability

-   **All sizes (s, m, l, xl)**: Consistent vertical layout with flexible width (min 365px, max 100%)
-   Cards automatically adapt to their container width while maintaining minimum readability
-   Ideal for responsive grids, comparison layouts, and promotional sections across all screen sizes

### Typography Hierarchy

1. **Product name** (18px, bold) - Primary focus
2. **Pricing** (24px, bold) - Secondary focus
3. **"What you get:"** (14px, bold) - Section heading
4. **Body text** (14px, regular) - Supporting content

### Use Cases

-   Bundle product offerings (e.g., Creative Cloud All Apps)
-   Subscription plans with multiple features
-   Premium tier comparisons
-   Limited-time promotional offers
-   "Best value" or "Most popular" plan highlights
-   Landing page feature highlights
