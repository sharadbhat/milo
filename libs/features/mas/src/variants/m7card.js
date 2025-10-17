import { html, css } from 'lit';
import { VariantLayout } from './variant-layout.js';
import { CSS } from './m7card.css.js';

export const M7CARD_AEM_FRAGMENT_MAPPING = {
    mnemonics: {
        size: 'l',
    },
    badge: {
        tag: 'div',
        slot: 'badge',
        default: '',
    },
    title: {
        tag: 'h3',
        slot: 'heading-xs',
        maxCount: 250,
        withSuffix: true,
    },
    prices: {
        tag: 'p',
        slot: 'price',
    },
    ctas: {
        slot: 'cta',
        size: 'M',
    },
    description: {
        tag: 'div',
        slot: 'body-m',
        maxCount: 2000,
        withSuffix: false,
    },
    link: {
        tag: 'a',
        slot: 'body-link',
    },
    appIcons: {
        tag: 'div',
        slot: 'app-icons',
    },
    appIconsText: {
        tag: 'div',
        slot: 'app-icons-text',
    },
    featureBullets: {
        tag: 'div',
        slot: 'feature-bullets',
    },
    footerLink: {
        tag: 'a',
        slot: 'footer-link',
    },
    backgroundImage: {
        tag: 'div',
        slot: 'image',
    },
    size: ['hero-image'],
};

export class M7card extends VariantLayout {
    getGlobalCSS() {
        return CSS;
    }

    get aemFragmentMapping() {
        return M7CARD_AEM_FRAGMENT_MAPPING;
    }

    renderLayout() {
        return html`
            <slot name="badge"></slot>
            <div class="xl-container">
                <div class="image-section">
                    <slot name="image"></slot>
                </div>
                <div class="main-content">
                    <div class="top-section">
                        <div class="product-header">
                            <slot name="icons"></slot>
                            <slot name="heading-xs"></slot>
                        </div>
                        <div class="actions">
                            <div class="cta-wrapper">
                                <slot name="cta"></slot>
                            </div>
                            <div class="price-wrapper">
                                <slot name="price"></slot>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="content-section">
                        <div class="description">
                            <slot name="body-m"></slot>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static variantStyle = css`
        :host([variant='m7card']) {
            --merch-card-m7card-padding: 32px;
            --merch-card-m7card-border-radius: 16px;
            --merch-card-m7card-gap: 16px;
            min-width: 378px;
            width: 100%;
            min-height: auto;
            background: var(--spectrum-gray-50);
            border-radius: var(--merch-card-m7card-border-radius);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: var(--merch-card-m7card-padding);
            gap: var(--merch-card-m7card-gap);
            box-sizing: border-box;
            position: relative;
            container-type: inline-size;
        }

        :host([variant='m7card']) slot[name='badge']::slotted(*) {
            position: absolute;
            top: 0;
            right: 32px;
            z-index: 1;
        }

        :host([variant='m7card']) .xl-container {
            display: flex;
            flex-direction: column;
            gap: var(--merch-card-m7card-gap);
            flex: 1;
            width: 100%;
            box-sizing: border-box;
        }

        :host([variant='m7card']) .image-section {
            display: none;
        }

        :host([variant='m7card']) .main-content {
            display: flex;
            flex-direction: column;
            gap: var(--merch-card-m7card-gap);
            flex: 1;
            width: 100%;
            box-sizing: border-box;
        }

        :host([variant='m7card'][size='hero-image']) {
            padding: 0;
            overflow: hidden;
        }

        :host([variant='m7card'][size='hero-image']) .xl-container {
            flex-direction: row;
            gap: 0;
            width: 100%;
        }

        :host([variant='m7card'][size='hero-image']) .image-section {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 25%;
            min-width: 0;
            overflow: hidden;
        }

        :host([variant='m7card'][size='hero-image'])
            .image-section
            ::slotted(*) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        :host([variant='m7card'][size='hero-image']) .main-content {
            flex: 0 0 75%;
            min-width: 0;
            padding: var(--merch-card-m7card-padding);
            box-sizing: border-box;
        }

        @container (max-width: 756px) {
            :host([variant='m7card'][size='hero-image']) .xl-container {
                flex-direction: column;
            }

            :host([variant='m7card'][size='hero-image']) .image-section {
                display: none;
            }

            :host([variant='m7card'][size='hero-image']) .main-content {
                flex: 1;
                width: 100%;
            }
        }

        :host([variant='m7card']) .top-section {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        :host([variant='m7card']) .product-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 12px;
        }

        :host([variant='m7card']) .actions {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
        }

        :host([variant='m7card']) .cta-wrapper {
            display: flex;
            flex-direction: column;
            flex: 0 0 auto;
        }

        :host([variant='m7card']) .price-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            flex: 0 0 auto;
        }

        :host([variant='m7card']) .divider {
            width: 100%;
            height: 1px;
            background-color: var(--spectrum-gray-300);
            margin: 0;
        }

        :host([variant='m7card']) .content-section {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        :host([variant='m7card']) .description {
            display: flex;
            flex-direction: column;
        }
    `;
}
