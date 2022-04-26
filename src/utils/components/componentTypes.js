import {
  headlineBlackComponent,
  headlineWhiteComponent,
  headlineGoldComponent,
  subtitleComponent,
  categoryComponent,
  titlesComponent,
  paragraphsComponent,
  groupHeadlineComponent,
  finePrintComponent,
  TestComponent,
} from "./domComponents/fontComponents";

import { primaryButtonComponent, 
  secondaryButtonComponent, 
  TertiaryButtonComponent, 
  DestructiveActionButtonComponent,
  IconButtonComponent,
  SecWhiteButtonComponent,
  secondaryHeroButtonComponent,
 } from "./domComponents/buttonComponents";

import {
  fiftyFiftyVerticalComponent,
  fiftyFiftyHorizontalComponent,
  fullWidthInnerGridComponent,
  fullWidthOuterGridComponent,
  fiftyFiftySplitComponent,
  oneThirdSmallImageLeftComponent,
  oneThirdSmallImageRightComponent,
} from "./domComponents/layoutComponts";
import { bulletListComponent, listItemComponent, numberListComponent } from "./domComponents/listComponents";
import { spacer_lComponent, spacer_mComponent, spacer_sComponent, spacer_xlComponent, spacer_xxlComponent } from "./domComponents/spacerComponents";
import { canadaFooterComponent } from "./domComponents/footerComponents";
import { groupedHeadlineHorizontal , groupedHeadlineVertical} from "./domComponents/headlinesComponents";

export const addComponentTypes = (editor) => {
  editor.DomComponents.addType("headline-black-component", {
    model: {
      defaults: {
        attributes: { class: "headline-black" }, // is needed for Template building?
        components: headlineBlackComponent,
        styles: ``,
      },
    },
  });
  editor.DomComponents.addType("headline-white-component", {
    model: {
      defaults: {
        attributes: { class: "headline-white" },
        components: headlineWhiteComponent,
        styles: `

          `,
      },
    },
  });
  editor.DomComponents.addType("headline-gold-component", {
    model: {
      defaults: {
        attributes: { class: "headline-gold" },
        components: headlineGoldComponent,
        styles: `

        `,
      },
    },
  });
  editor.DomComponents.addType("subtitle-component", {
    model: {
      defaults: {
        attributes: { class: "subtitle" },
        components: subtitleComponent,
        styles: `

          `,
      },
    },
  });
  editor.DomComponents.addType("category-component", {
    model: {
      defaults: {
        attributes: { class: "category" },
        components: categoryComponent,
        styles: `

          `,
      },
    },
  });
  editor.DomComponents.addType("titles-component", {
    model: {
      defaults: {
        attributes: { class: "titles" },
        components: titlesComponent,
        styles: `

          `,
      },
    },
  });
  editor.DomComponents.addType("paragraphs-component", {
    model: {
      defaults: {
        attributes: { class: "paragraphs" },
        components: paragraphsComponent,
        styles: `
 
          `,
      },
    },
  });
  editor.DomComponents.addType("group-headline-component", {
    model: {
      defaults: {
        attributes: { class: "group-headline" },
        components: groupHeadlineComponent,
        styles: `

          `,
      },
    },
  });
  editor.DomComponents.addType("fine-print-component", {
    model: {
      defaults: {
        attributes: { class: "fine-print" },
        components: finePrintComponent,
        styles: `

          `,
      },
    },
  });

  // ================================================================== buttons

  editor.DomComponents.addType("primary-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--primary" },
        components: primaryButtonComponent,
        styles: `
 
          `,
      },
    },
  });
  editor.DomComponents.addType("secondary-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--secondary" },
        components: secondaryButtonComponent,
        styles: `
 
          `,
      },
    },
  });
  editor.DomComponents.addType("Tertiary-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--Tertiary" },
        components: TertiaryButtonComponent,
        styles: `
 
          `,
      },
    },
  });
  editor.DomComponents.addType("DestructiveAction-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--DestructiveAction" },
        components: DestructiveActionButtonComponent,
        styles: `
 
          `,
      },
    },
  });
  editor.DomComponents.addType("IconButton-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--IconButton" },
        components: IconButtonComponent,
        styles: `
 
          `,
      },
    },
  });
  editor.DomComponents.addType("SecWhite-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--SecWhiteButton" },
        components: SecWhiteButtonComponent,
        styles: `
 
          `,
      },
    },
  });

  editor.DomComponents.addType("secondary-hero-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--secondary-hero" },
        components: secondaryHeroButtonComponent,
        styles: `
 
          `,
      },
    },
  });
  editor.DomComponents.addType("secondary-button-component", {
    model: {
      defaults: {
        attributes: { class: "ds-button ds-button--secondary" },
        components: secondaryButtonComponent,
        styles: `
 
          `,
      },
    },
  });

  // ==========================================================================layouts

  editor.DomComponents.addType("full-width-outer-grid-component", {
    model: {
      defaults: {
        attributes: {},
        components: fullWidthOuterGridComponent,
        styles: `

          `,
      },
    },
  });

  editor.DomComponents.addType("full-width-inner-grid-component", {
    model: {
      defaults: {

        attributes: {},
        components: fullWidthInnerGridComponent,
        styles: `

          `,
      },
    },
  });

  editor.DomComponents.addType("fifty-fifty-vertical-component", {
    model: {
      defaults: {
        attributes: {},
        components: fiftyFiftyVerticalComponent,
        styles: `

          `,
      },
    },
  });

  editor.DomComponents.addType("fifty-fifty-horizontal-component", {
    model: {
      defaults: {
        attributes: {},
        components: fiftyFiftyHorizontalComponent,
        styles: `

          `,
      },
    },
  });

  editor.DomComponents.addType("fifty-fifty-split-component", {
    model: {
      defaults: {
        attributes: {},
        components: fiftyFiftySplitComponent,
        styles: `

          `,
      },
    },
  });

  editor.DomComponents.addType("one-third-small-image-left-component", {
    model: {
      defaults: {
        attributes: {},
        components: oneThirdSmallImageLeftComponent,
        styles: `

          `,
      },
    },
  });

  editor.DomComponents.addType("one-third-small-image-right-component", {
    model: {
      defaults: {
        attributes: {},
        components: oneThirdSmallImageRightComponent,
        styles: `

          `,
      },
    },
  });

  // LIST COMPONENTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  editor.DomComponents.addType("bullet-list-component", {
    model: {
      defaults: {
        attributes: {},
        components: bulletListComponent,
        styles: `
          `,
      },
    },
  });
  editor.DomComponents.addType("number-list-component", {
    model: {
      defaults: {
        attributes: {},
        components: numberListComponent,
        styles: `
            `,
      },
    },
  });
  editor.DomComponents.addType("list-item-component", {
    model: {
      defaults: {
        attributes: {},
        components: listItemComponent,
        styles: `
            `,
      },
    },
  });


   // Spacer COMPONENTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   editor.DomComponents.addType("spacer-s-component", {
    model: {
      defaults: {
        attributes: {},
        components: spacer_sComponent,
        styles: `
          `,
      },
    },
  });
  editor.DomComponents.addType("spacer-m-component", {
    model: {
      defaults: {
        attributes: {},
        components: spacer_mComponent,
        styles: `
          `,
      },
    },
  });
  editor.DomComponents.addType("spacer-l-component", {
    model: {
      defaults: {
        attributes: {},
        components: spacer_lComponent,
        styles: `
          `,
      },
    },
  });
  editor.DomComponents.addType("spacer-xl-component", {
    model: {
      defaults: {
        attributes: {},
        components: spacer_xlComponent,
        styles: `
          `,
      },
    },
  });
  editor.DomComponents.addType("spacer-xxl-component", {
    model: {
      defaults: {
        attributes: {},
        components: spacer_xxlComponent,
        styles: `
          `,
      },
    },
  });

  // footer COMPONENTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // FooterSelectore has footer-seletor-component
  
  editor.DomComponents.addType("canada-footer-component", {
   model: {
     defaults: {
       attributes: { },
       components: canadaFooterComponent,
       styles: `
         `,
     },
   },
  });
  
//============================================GroupedHeadlines=====================


    //============================================GroupedHeadlines=====================

editor.DomComponents.addType("horizontal-headline-component", {
  model: {
    defaults: {
      attributes: {},
      components: groupedHeadlineHorizontal,
      styles: `
          `,
    },
  },
});

editor.DomComponents.addType("vertical-headline-component", {
  model: {
    defaults: {
      attributes: {},
      components: groupedHeadlineVertical,
      styles: `
          `,
    },
  },
});



};
