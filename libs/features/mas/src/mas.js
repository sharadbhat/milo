import '../../../utils/lana.js';
import './commerce.js';
import './merch-card.js';
import './merch-icon.js';
import './merch-addon.js';
import './merch-gradient.js';
import './merch-mnemonic-list.js';
import './merch-offer-select.js';
import './merch-offer.js';
import './merch-quantity-select.js';
import './merch-badge.js';
import './merch-whats-included.js';
import './mas-mnemonic.js';

import { registerVariant } from './variants/variants.js';

// Import m7card
import { M7CARD_AEM_FRAGMENT_MAPPING, M7card } from './variants/m7card.js';

//Import bundleoptioncard3in1
import {
    BUNDLEOPTION3IN1_AEM_FRAGMENT_MAPPING,
    BundleOption3In1Card,
} from './variants/bundleoptioncard3in1.js';

// Import ccd variants
import {
    CCD_SUGGESTED_AEM_FRAGMENT_MAPPING,
    CCDSuggested,
} from './variants/ccd-suggested.js';
import {
    CCD_SLICE_AEM_FRAGMENT_MAPPING,
    CCDSlice,
} from './variants/ccd-slice.js';

// import ah-try-buy-widget variant
import {
    AH_TRY_BUY_WIDGET_AEM_FRAGMENT_MAPPING,
    AHTryBuyWidget,
} from './variants/ah-try-buy-widget.js';

//Import ah-promoted-plans
import {
    AH_PROMOTED_PLANS_AEM_FRAGMENT_MAPPING,
    AHPromotedPlans,
} from './variants/ah-promoted-plans.js';

//Import fries
import { FRIES_AEM_FRAGMENT_MAPPING, FriesCard } from './variants/fries.js';

// Register dynamic variants
registerVariant(
    'm7card',
    M7card,
    M7CARD_AEM_FRAGMENT_MAPPING,
    M7card.variantStyle,
);
registerVariant(
    'ccd-suggested',
    CCDSuggested,
    CCD_SUGGESTED_AEM_FRAGMENT_MAPPING,
    CCDSuggested.variantStyle,
);
registerVariant(
    'ccd-slice',
    CCDSlice,
    CCD_SLICE_AEM_FRAGMENT_MAPPING,
    CCDSlice.variantStyle,
);
registerVariant(
    'ah-try-buy-widget',
    AHTryBuyWidget,
    AH_TRY_BUY_WIDGET_AEM_FRAGMENT_MAPPING,
    AHTryBuyWidget.variantStyle,
);
registerVariant(
    'ah-promoted-plans',
    AHPromotedPlans,
    AH_PROMOTED_PLANS_AEM_FRAGMENT_MAPPING,
    AHPromotedPlans.variantStyle,
);
registerVariant(
    'fries',
    FriesCard,
    FRIES_AEM_FRAGMENT_MAPPING,
    FriesCard.variantStyle,
);
registerVariant(
    'bundleoptioncard3in1',
    BundleOption3In1Card,
    BUNDLEOPTION3IN1_AEM_FRAGMENT_MAPPING,
    BundleOption3In1Card.variantStyle,
);
