export const CSS = `
    merch-card[variant="m7card"] {
        width: 100%;
        background-color: var(--spectrum-gray-50);
        border-radius: 2px;
        min-height: auto;
    }

    /* Size variants */
    merch-card[variant="m7card"] {
        width: 100%;
        max-width: 100%;
    }

    merch-card[variant="m7card"][size="hero-image"] {
        width: 100%;
        max-width: 100%;
    }

    merch-card[variant='m7card'] [slot="body-m"] {
        letter-spacing: normal;
        color: var(--consonant-merch-card-body-m-color);
        font-size: var(--consonant-merch-card-body-m-font-size);
        line-height: var(--consonant-merch-card-body-m-line-height);
    }

    merch-card[variant='m7card'] [slot="body-m"] merch-icon {
        display: inline-flex;
        width: 20px;
        height: 20px;
        padding-inline-end: 6px;
    }

    merch-card[variant='m7card'] [slot="body-m"] .mnemonic-text {
        color: var(--spectrum-gray-900);
        font-size: var(--consonant-merch-card-body-xxs-font-size);
        line-height: var(--consonant-merch-card-body-xxs-line-height);
        font-weight: 400;
        letter-spacing: normal;
        display: inline-flex;
        vertical-align: super;
    }

    /* Badge */
    merch-card[variant='m7card'] [slot="badge"] {
        position: absolute;
        top: 0;
        right: 32px;
        font-weight: 700;
    }

    merch-card[variant='m7card'] [slot="badge"] merch-badge {
        border-radius: 0 0 5px 5px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 18px;
    }

    /* Product header icons */
    merch-card[variant='m7card'] [slot="icons"] {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    /* Product title */
    merch-card[variant='m7card'] [slot="heading-xs"] {
        font-size: 18px;
        line-height: 23px;
        font-weight: 700;
        color: var(--spectrum-gray-900);
        margin: 0;
    }

    /* CTA button */
    merch-card[variant='m7card'] [slot="cta"] {
        display: flex;
    }

    merch-card[variant='m7card'] [slot="cta"] a {
        text-decoration: none;
        background-color: var(--spectrum-blue-600);
        color: var(--spectrum-gray-50);
        padding: 8px 16px;
        border-radius: 16px;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
    }

    merch-card[variant='m7card'] [slot="cta"] a:hover {
        background-color: var(--spectrum-blue-700);
    }

    /* Pricing */
    merch-card[variant='m7card'] [slot="price"] {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: var(--spectrum-gray-800);
    }

    merch-card[variant='m7card'] [slot="price"] .price-currency-symbol {
        font-size: 14px;
        line-height: 18px;
        font-weight: 700;
        vertical-align: super;
    }

    merch-card[variant='m7card'] [slot="price"] .price-integer,
    merch-card[variant='m7card'] [slot="price"] .price-decimals-delimiter,
    merch-card[variant='m7card'] [slot="price"] .price-decimals {
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
    }

    merch-card[variant='m7card'] [slot="price"] .price-recurrence {
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
    }

    /* Description */
    merch-card[variant='m7card'] [slot="body-m"] {
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
        color: var(--spectrum-gray-800);
        margin: 0;
    }
`;
