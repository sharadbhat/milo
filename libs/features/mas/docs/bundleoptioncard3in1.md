# BundleOptionCard3In1 Variant

## Overview

The `bundleoptioncard3in1` variant is a vertical product card designed for showcasing bundle offerings with detailed feature lists, customizable badges, and prominent pricing. It's optimized for displaying comprehensive product information with a "What you get" section featuring checkmarked items.

**Figma Design**: [CME-1 Growth Tests](https://www.figma.com/design/s9UB3EqW3JD6lVc1ORRQjn/CME-1-Growth-Tests?node-id=6135-11052&m=dev)

## Features

-   **Flexible sizing**: Four size options (s, m, l, xl) via single-letter mnemonics
-   **Responsive height**: Auto-adjusts to content with fixed 42px spacing before pricing
-   **Horizontal layout**: XL size features hero image on left, content on right
-   **Customizable badge**: Optional top-right badge with custom background color
-   **Product header**: Icon and product name
-   **Rich content**: Description, "What you get" section with checkmarked features
-   **Dynamic pricing**: Bottom-aligned pricing with trial text support
-   **Call-to-action link**: "See what's included" or similar links

## Implementation Details

### Key Design Requirements

✅ **Height**: Responsive to content (auto-height)  
✅ **Width**: Controlled by `size` attribute (s/m/l/xl)  
✅ **Layout**: Vertical for s/m/l, horizontal (with hero image) for xl  
✅ **Badge**: Top-right positioned, customizable via `badge-background-color` and `badge-color` attributes  
✅ **Content-to-Price Gap**: Fixed 42px spacing between content and pricing section  
✅ **Feature Bullets**: Checkmark-style bullets for feature list

### Size Options

| Size | Width  | Layout     | Use Case                                   |
| ---- | ------ | ---------- | ------------------------------------------ |
| `s`  | 318px  | Vertical   | Default, mobile-friendly layouts           |
| `m`  | 480px  | Vertical   | Medium screen layouts                      |
| `l`  | 640px  | Vertical   | Large screen, detailed view                |
| `xl` | 1200px | Horizontal | Hero image (left) + content (right) layout |

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
| `image`        | div   | Hero image (visible only in xl size) | No       |
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

### Extra Large (Horizontal Layout)

```html
<merch-card variant="bundleoptioncard3in1" size="xl">
    <!-- Hero Image (left side) -->
    <div slot="image">
        <img src="hero-image.jpg" alt="Product" />
    </div>

    <!-- Content (right side) -->
    <!-- All other slots as usual -->
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

**Common Badge Colors:**

-   Best value: `#378E5C` background (green), `#FFFFFF` text
-   Popular: `#1473E6` background (blue), `#FFFFFF` text
-   Limited time: `#E34850` background (red), `#FFFFFF` text

## AEM Fragment Mapping

The variant includes automatic mapping for AEM fragments:

```javascript
{
    mnemonics: { size: 's' },
    badge: { slot: 'badge' },
    backgroundImage: { slot: 'image' },
    title: { slot: 'heading-xs', maxCount: 250 },
    description: { slot: 'body-m', maxCount: 2000 },
    whatYouGetHeading: { slot: 'body-xs' },
    featureBullets: { slot: 'body-xl' },
    link: { slot: 'body-xxl' },
    prices: { slot: 'price' },
    priceDetails: { slot: 'priceDetails' },
    size: ['s', 'm', 'l', 'xl']
}
```

## Styling Notes

-   Background: `spectrum-gray-50`
-   Border radius: `8px`
-   Padding: `20px`
-   Content gap: `10px`
-   Content-to-price gap: `42px` (fixed spacing)
-   Badge: Rounded bottom corners (5px), positioned top-right
-   Product icon: 32×32px
-   Typography: Adobe Clean font family
-   Feature bullets: Checkmark (`✓`) in `spectrum-gray-800`
-   Link color: `spectrum-blue-600`

## Layout Structure

### Vertical Layout (s, m, l sizes)

```
┌─────────────────────────────────────────┐ ← Card Container (318px/480px/640px)
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

### Horizontal Layout (xl size)

```
┌───────────────────────────────────────────────────────────────────────────┐
│                                                    ┌──────────┐            │
│                                                    │Best value│ ← Badge    │
│                                                    └──────────┘            │
│  ┌─────────────────────┐  ┌─────────────────────────────────────────┐    │
│  │                     │  │                                         │    │
│  │                     │  │  🎨 Creative Cloud Pro                  │    │
│  │                     │  │                                         │    │
│  │     Hero Image      │  │  Get ultimate toolkit for a new era... │    │
│  │    (left 50%)       │  │                                         │    │
│  │                     │  │  What you get:                          │    │
│  │   600px max-width   │  │  ✓ 20+ app including...                │    │
│  │                     │  │  ✓ Unlimited access to...              │    │
│  │                     │  │  ✓ 4000 monthly generative...          │    │
│  │                     │  │  See what's included →                  │    │
│  │                     │  │                                         │    │
│  │                     │  │         (42px gap)                      │    │
│  │                     │  │                                         │    │
│  │                     │  │  7-day free trial, then                 │    │
│  │                     │  │  US$  69.99/mo                          │    │
│  └─────────────────────┘  └─────────────────────────────────────────┘    │
│   Image slot (order: -1)   Content wrapper (right 50%)                   │
└───────────────────────────────────────────────────────────────────────────┘
                          1200px total width
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

## Extra Large (XL) Size Details

The XL size transforms the card into a horizontal layout perfect for hero sections and landing pages.

### XL Layout Features

-   **Total width**: 1200px
-   **Min height**: 447px
-   **Image section**: Left 50% (max-width: 600px)
-   **Content section**: Right 50% with padding
-   **Image handling**: `object-fit: cover` for full coverage
-   **Border radius**: Left side rounded (8px 0 0 8px)

### XL Usage Example

```html
<merch-card
    variant="bundleoptioncard3in1"
    size="xl"
    badge-text="Best value"
    badge-background-color="#378E5C"
    badge-color="#FFFFFF"
>
    <!-- Hero Image (appears on left) -->
    <div slot="image">
        <img
            src="https://example.com/hero-creative-cloud.jpg"
            alt="Creative Cloud workspace"
        />
    </div>

    <merch-badge slot="badge">Best value</merch-badge>

    <merch-icon slot="icons" src="creative-cloud-icon.svg"></merch-icon>
    <h3 slot="heading-xs">Creative Cloud Pro</h3>

    <div slot="body-m">
        <p>Get ultimate toolkit for a new era in creativity...</p>
    </div>

    <div slot="body-xs">What you get:</div>

    <div slot="body-xl">
        <ul>
            <li>20+ app including Photoshop and Illustrator...</li>
            <li>Unlimited access to standard AI image features</li>
            <li>4000 monthly generative credits...</li>
        </ul>
    </div>

    <a slot="body-xxl" href="#">See what's included</a>

    <p slot="priceDetails">7-day free trial, then</p>
    <div slot="price">
        <span is="inline-price" data-wcs-osi="..."></span>
    </div>
</merch-card>
```

### Image Best Practices for XL Size

-   **Recommended dimensions**: 1200×800px or larger
-   **Aspect ratio**: 3:4 or 4:3 works well
-   **File format**: WebP for better performance, with JPEG fallback
-   **Alt text**: Always include descriptive alt text
-   **Content**: Show product in use, workspace, or lifestyle imagery

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

-   **Vertical (s, m, l)**: Content-focused, ideal for comparison grids
-   **Horizontal (xl)**: Visual-first, perfect for hero sections and feature highlights
-   Image slot is hidden for s/m/l sizes, only visible in xl

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
-   Hero sections with visual storytelling (xl size)
-   Landing page feature highlights (xl size)
