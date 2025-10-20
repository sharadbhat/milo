import { TABLET_UP, DESKTOP_UP } from '../media.js';

export const CSS = `
:root {
  --consonant-merch-card-bundleoptioncard3in1-min-width: 365px;
}

/* Grid styles for bundleoptioncard3in1 variant */
.one-merch-card.bundleoptioncard3in1,
.two-merch-cards.bundleoptioncard3in1,
.three-merch-cards.bundleoptioncard3in1,
.four-merch-cards.bundleoptioncard3in1 {
    grid-template-columns: minmax(var(--consonant-merch-card-bundleoptioncard3in1-min-width), 1fr);
}

/* Tablet */
@media screen and ${TABLET_UP} {
    .two-merch-cards.bundleoptioncard3in1,
    .three-merch-cards.bundleoptioncard3in1,
    .four-merch-cards.bundleoptioncard3in1 {
        grid-template-columns: repeat(2, minmax(var(--consonant-merch-card-bundleoptioncard3in1-min-width), 1fr));
    }
}

/* Desktop */
@media screen and ${DESKTOP_UP} {
    .three-merch-cards.bundleoptioncard3in1 {
        grid-template-columns: repeat(3, minmax(var(--consonant-merch-card-bundleoptioncard3in1-min-width), 1fr));
    }

    .four-merch-cards.bundleoptioncard3in1 {
        grid-template-columns: repeat(4, minmax(var(--consonant-merch-card-bundleoptioncard3in1-min-width), 1fr));
    }
}

/* All sizes have min-width 365px and max-width 100% */
merch-card[variant="bundleoptioncard3in1"] {
    min-width: var(--consonant-merch-card-bundleoptioncard3in1-min-width);
    max-width: 100%;
}

/* Badge styling for bundleoptioncard3in1 */
merch-card[variant="bundleoptioncard3in1"] merch-badge {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 8px 0 5px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
}

/* Icon styling */
merch-card[variant="bundleoptioncard3in1"] merch-icon {
    width: 32px;
    height: 32px;
}

/* Text styling */
merch-card[variant="bundleoptioncard3in1"] [slot="heading-xs"] {
    font-size: 18px;
    line-height: 23px;
    font-weight: 700;
    color: var(--spectrum-gray-900);
    margin: 0;
}

merch-card[variant="bundleoptioncard3in1"] [slot="body-m"] {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: var(--spectrum-gray-800);
    margin: 0;
}

/* Feature list checkmarks */
merch-card[variant="bundleoptioncard3in1"] [slot="body-xl"] ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

merch-card[variant="bundleoptioncard3in1"] [slot="body-xl"] ul li {
    padding-left: 22px;
    position: relative;
    margin-bottom: 10px;
}

merch-card[variant="bundleoptioncard3in1"] [slot="body-xl"] ul li:last-child {
    margin-bottom: 0;
}

merch-card[variant="bundleoptioncard3in1"] [slot="body-xl"] ul li::before {
    content: '✓';
    position: absolute;
    left: 0;
    font-weight: 700;
    color: var(--spectrum-gray-800, #2c2c2c);
}

/* Price formatting */
merch-card[variant="bundleoptioncard3in1"] [slot="price"] {
    display: flex;
    align-items: baseline;
    gap: 4px;
}

merch-card[variant="bundleoptioncard3in1"] [slot="price"] .price-currency-symbol {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
}

merch-card[variant="bundleoptioncard3in1"] [slot="price"] .price-integer,
merch-card[variant="bundleoptioncard3in1"] [slot="price"] .price-decimals-delimiter,
merch-card[variant="bundleoptioncard3in1"] [slot="price"] .price-decimals,
merch-card[variant="bundleoptioncard3in1"] [slot="price"] .price-recurrence {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
}

`;
