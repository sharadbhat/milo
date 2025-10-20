import { html, css } from 'lit';
import { VariantLayout } from './variant-layout.js';
import { CSS } from './bundleoptioncard3in1.css.js';

export const BUNDLEOPTION3IN1_AEM_FRAGMENT_MAPPING = {
    mnemonics: {
        size: 'xl',
    },
    badge: {
        slot: 'badge',
        default: '',
    },
    badgeBackgroundColor: {
        attribute: 'badge-background-color',
    },
    badgeColor: {
        attribute: 'badge-color',
    },
    badgeText: {
        attribute: 'badge-text',
    },
    icons: {
        slot: 'icons',
    },
    title: {
        tag: 'h3',
        slot: 'heading-xs',
        maxCount: 250,
    },
    description: {
        tag: 'div',
        slot: 'body-m',
        maxCount: 2000,
    },
    whatYouGetHeading: {
        tag: 'div',
        slot: 'body-xs',
    },
    featureBullets: {
        tag: 'div',
        slot: 'body-xl',
    },
    link: {
        tag: 'a',
        slot: 'body-xxl',
    },
    priceDetails: {
        tag: 'p',
        slot: 'priceDetails',
    },
    prices: {
        tag: 'div',
        slot: 'price',
    },
};

export class BundleOption3In1Card extends VariantLayout {
    getGlobalCSS() {
        return CSS;
    }

    get aemFragmentMapping() {
        return BUNDLEOPTION3IN1_AEM_FRAGMENT_MAPPING;
    }

    renderLayout() {
        return html`
            <slot name="badge"></slot>
            <div class="bundleoption3in1-container">
                <div class="content-wrapper">
                    <div class="product-header">
                        <slot name="icons"></slot>
                        <slot name="heading-xs"></slot>
                    </div>
                    <slot name="body-m"></slot>
                    <div class="features-section">
                        <slot name="body-xs"></slot>
                        <slot name="body-xl"></slot>
                    </div>
                    <slot name="body-xxl"></slot>
                </div>
                <div class="price-section">
                    <slot name="priceDetails"></slot>
                    <slot name="price"></slot>
                </div>
            </div>
        `;
    }

    static variantStyle = css`
        :host([variant='bundleoptioncard3in1']) {
            min-width: 365px;
            max-width: 100%;
            width: 100%;
            min-height: auto;
            background: var(--spectrum-gray-50, #fff);
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: 20px;
            box-sizing: border-box;
            position: relative;
            font-family: var(--merch-body-font-family, 'Adobe Clean');
        }

        /* Badge positioning - top right */
        :host([variant='bundleoptioncard3in1']) slot[name='badge']::slotted(*) {
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 0 8px 0 5px;
            padding: 6px 12px;
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
            z-index: 1;
        }

        /* Container */
        :host([variant='bundleoptioncard3in1']) .bundleoption3in1-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex: 1;
            width: 100%;
            box-sizing: border-box;
        }

        /* Content wrapper */
        :host([variant='bundleoptioncard3in1']) .content-wrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex: 1;
        }

        /* Product Header (icon + title) */
        :host([variant='bundleoptioncard3in1']) .product-header {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        :host([variant='bundleoptioncard3in1']) slot[name='icons']::slotted(*) {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
        }

        :host([variant='bundleoptioncard3in1'])
            slot[name='heading-xs']::slotted(*) {
            font-size: 18px;
            font-weight: 700;
            line-height: 23px;
            color: var(--spectrum-gray-800, #2c2c2c);
            margin: 0;
        }

        /* Description */
        :host([variant='bundleoptioncard3in1'])
            slot[name='body-m']::slotted(*) {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            color: var(--spectrum-gray-800, #2c2c2c);
            margin: 0;
        }

        /* Features section */
        :host([variant='bundleoptioncard3in1']) .features-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        /* "What you get:" heading */
        :host([variant='bundleoptioncard3in1'])
            slot[name='body-xs']::slotted(*) {
            font-size: 14px;
            font-weight: 700;
            line-height: 21px;
            color: var(--spectrum-gray-800, #2c2c2c);
            margin: 0;
        }

        /* Feature bullets */
        :host([variant='bundleoptioncard3in1'])
            slot[name='body-xl']::slotted(ul) {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        :host([variant='bundleoptioncard3in1'])
            slot[name='body-xl']::slotted(ul li) {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            color: var(--spectrum-gray-800, #2c2c2c);
            padding-left: 22px;
            position: relative;
        }

        :host([variant='bundleoptioncard3in1'])
            slot[name='body-xl']::slotted(ul li)::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--spectrum-gray-800, #2c2c2c);
            font-weight: 700;
        }

        /* Link */
        :host([variant='bundleoptioncard3in1'])
            slot[name='body-xxl']::slotted(a) {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            color: var(--spectrum-blue-600, #1473e6);
            text-decoration: none;
        }

        :host([variant='bundleoptioncard3in1'])
            slot[name='body-xxl']::slotted(a:hover) {
            text-decoration: underline;
        }

        /* Price section - fixed 42px gap from content */
        :host([variant='bundleoptioncard3in1']) .price-section {
            margin-top: 42px;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        :host([variant='bundleoptioncard3in1'])
            slot[name='priceDetails']::slotted(*) {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            color: var(--spectrum-gray-800, #2c2c2c);
            margin: 0;
        }

        :host([variant='bundleoptioncard3in1']) slot[name='price']::slotted(*) {
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            color: var(--spectrum-gray-800, #2c2c2c);
            margin: 0;
        }

        /* Footer / CTA */
        :host([variant='bundleoptioncard3in1']) slot[name='footer'] {
            margin-top: 16px;
        }
    `;
}
