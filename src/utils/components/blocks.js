/**
 * @Author: Your name
 * @Date:   2022-04-13 14:24:33
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-04-19 15:49:14
 */
import twophotos from "../../templates/twophotos";
import main from "../../templates/main";
import header from "../../templates/header";
import footer from "../../templates/footer";
import { upheader } from "../../templates/UPheader";
import {
  horizontalLeft,
  horizontalRight,
  textOnlyContent,
  vertical,
  verticalLink,
  verticalLinkSec,
} from "../../templates/components/content";


import { 
  LinkWitharrowComponent, 
  LinkWithoutarrowComponent 
 } from "./domComponents/linkComponent";


import { 
  primaryButtonComponent, 
  secondaryButtonComponent, 
  TertiaryButtonComponent, 
  DestructiveActionButtonComponent,
  IconButtonComponent,
  SecWhiteButtonComponent,
 } from "./domComponents/buttonComponents";
 

 
import {
  bulletListComponent,
  iconListComponent,
  iconListItemComponent,
  listItemComponent,
  numberListComponent,
} from "./domComponents/listComponents";
import {
  categoryComponent,
  finePrintComponent,
  groupHeadlineComponent,
  headlineBlackComponent,
  headlineGoldComponent,
  headlineWhiteComponent,
  paragraphsComponent,
  subtitleComponent,
  titlesComponent,
} from "./domComponents/fontComponents";
import {
  fiftyFiftyHorizontalComponent,
  fiftyFiftySplitComponent,
  fiftyFiftyVerticalComponent,
  fullWidthInnerGridComponent,
  fullWidthOuterGridComponent,
  oneThirdSmallImageLeftComponent,
  oneThirdSmallImageRightComponent,
} from "./domComponents/layoutComponts";
import {
  spacer_sComponent,
  spacer_mComponent,
  spacer_lComponent,
  spacer_xlComponent,
  spacer_xxlComponent,
} from "./domComponents/spacerComponents";
import { coBrandedMasthead, eventMasthead, standardMasthead, subBrandMastHead } from "../../templates/components/masthead";
import { standardHero } from "../../templates/components/hero";
import { canadaFooterComponent, usFooterComponent } from "./domComponents/footerComponents";
import { groupedHeadlineHorizontal, groupedHeadlineVertical } from "./domComponents/headlinesComponents";
// FONTS grab straight from component because they are root level components
// Content grab from /templates because it is a wrapper element built of root level components

const addBlocks = (editor) => {
  editor.BlockManager.add("twophotos-id", {
    label: "<b>Two<br /> Photos</b>",
    media: "<span class = 'fa fa-images fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [twophotos],
    },
  });

  editor.BlockManager.add("header-id", {
    label: "<b>Header</b>",
    media: "<span class = 'fa fa-newspaper fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [header, main],
    },
  });

  editor.BlockManager.add("footer-id", {
    label: "<b>Footer</b>",
    media: "<span class = 'fa fa-road fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [footer],
    },
  });

  editor.BlockManager.add("up-header", {
    label: "<b>UP<br /> header</b>",
    media: "<span class = 'fa fa-angles-up fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [upheader],
    },
  });

  editor.BlockManager.add("headline-black", {
    label: "<b>Headline<br /> Black</b>",
    media: "<span class = 'fa fa-heading fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [headlineBlackComponent],
    },
  });

  editor.BlockManager.add("headline-white", {
    label: "<b>Headline<br /> White</b>",
    media: "<span class = 'fa fa-heading fa-white fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [headlineWhiteComponent],
    },
  });

  editor.BlockManager.add("headline-gold", {
    label: "<b>Headline<br /> Gold</b>",
    media: "<span class = 'fa fa-heading fa-gold fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [headlineGoldComponent],
    },
  });

  editor.BlockManager.add("subtitle", {
    label: "<b>Subtitle</b>",
    media: "<span class = 'fa fa-closed-captioning fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [subtitleComponent],
    },
  });

  editor.BlockManager.add("category", {
    label: "<b>Category</b>",
    media: "<span class = 'fa fa-h fa-grey fa-margin12 fa-3x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [categoryComponent],
    },
  });

  editor.BlockManager.add("titles", {
    label: "<b>Titles</b>",
    media: "<span class = 'fa fa-t fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [titlesComponent],
    },
  });

  editor.BlockManager.add("paragraphs", {
    label: "<b>Paragraphs</b>",
    media: "<span class = 'fa fa-align-justify fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [paragraphsComponent],
    },
  });

  editor.BlockManager.add("group-headline", {
    label: "<b>Group<br /> Headline</b>",
    media: "<span class = 'fa fa-layer-group fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [groupHeadlineComponent],
    },
  });

  editor.BlockManager.add("fine-print", {
    label: "<b>Fine<br /> Print</b>",
    media: "<span class = 'fa fa-magnifying-glass fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [finePrintComponent],
    },
  });

    // Mastheads ==================================================
    editor.BlockManager.add("standard-masthead", {
      label: "<b>Standard<br /> Masthead</b>",
      media: "<span class = 'fa fa-newspaper fa-margin12 fa-3-5x'></span>",
      content: {
        tagName: "div",
        //   draggable: false,
        // attributes: { src: "http" },
        components: standardMasthead,
      },
    });
    editor.BlockManager.add("sub-brand-masthead", {
      label: "<b>Sub Brand<br /> Masthead</b>",
      media: "<span class = 'fa fa-user-group fa-margin12 fa-3-5x'></span>",
      content: {
        tagName: "div",
        //   draggable: false,
        // attributes: { src: "http" },
        components: subBrandMastHead,
      },
    });
    editor.BlockManager.add("co-branded-masthead", {
      label: "<b>Co Branded<br /> Masthead</b>",
      media: "<span class = 'fa fa-users fa-margin12 fa-3-5x'></span>",
      content: {
        tagName: "div",
        //   draggable: false,
        // attributes: { src: "http" },
        components: coBrandedMasthead,
      },
    });
    editor.BlockManager.add("event-masthead", {
      label: "<b>Event<br /> Masthead</b>",
      media: "<span class = 'fa fa-calendar fa-margin12 fa-3-5x'></span>",
      content: {
        tagName: "div",
        //   draggable: false,
        // attributes: { src: "http" },
        components: eventMasthead,
      },
    });

  // Mastheads ==================================================
    editor.BlockManager.add("standard-hero", {
      label: "<b>Standard<br /> Hero</b>",
      media: "<span class = 'fa fa-panorama fa-margin12 fa-3-5x'></span>",
      content: {
        tagName: "div",
        //   draggable: false,
        // attributes: { src: "http" },
        components: standardHero,
      },
    });

  // CONTENT COMPONENTS =================================================================
  editor.BlockManager.add("vertical-content", {
    label: "<b>Vertical<br /> Content</b>",
    media: "<span class = 'fa fa-receipt fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [vertical],
    },
  });
  editor.BlockManager.add("horizontal-left-content", {
    label: "<b>Photo<br />Left</b>",
    media: "<span class = 'fa fa-id-card fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [horizontalLeft],
    },
  });
  editor.BlockManager.add("horizontal-right-content", {
    label: "<b>Photo<br />Right</b>",
    media: "<span class = 'fa fa-id-card fa-flip-horizontal fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [horizontalRight],
    },
  });
  editor.BlockManager.add("text-content", {
    label: "<b>Text<br />Content</b>",
    media: "<span class = 'fa fa-font fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [textOnlyContent],
    },
  });
  editor.BlockManager.add("vertical-content-link", {
    label: "<b>With<br/>Link</b>",
    media: "<span class = 'fa fa-receipt fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [verticalLink],
    },
  });
  editor.BlockManager.add("vertical-content-secondary", {
    label: "<b>With Secondary <br/>Button</b>",
    media: "<span class = 'fa fa-receipt fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      attributes: { src: "http" },
      components: [verticalLinkSec],
    },
  });

  editor.BlockManager.add("test-component", {
    //Textheadline.js
    label: "<b>Test Component</b>",
    content: '<div data-gjs-type="test-component">Test Component</div>',
  });

  // BUTTONS ==================================================
  editor.BlockManager.add("primary-button", {
    label: "<b>Primary<br /> Button</b>",
    media: "<span class = 'fa fa-square fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      type: "link",
      //   draggable: false,
      // attributes: { src: "http" },
      components: primaryButtonComponent,
    },
  });

  editor.BlockManager.add("secondary-button", {
    label: "<b>Secondary<br /> Button</b>",
    media: "<span class = 'fa-regular fa-square fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      type: "link",
      //   draggable: false,
      // attributes: { src: "http" },
      components: secondaryButtonComponent,
    },
  });

  editor.BlockManager.add("Tertiary-button", {
    label: "<b>Tertiary<br /> Button</b>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: TertiaryButtonComponent,
    },
  });
  
  editor.BlockManager.add("DestructiveAction-button", {
    label: "<b>Destructive<br />Action Button</b>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: DestructiveActionButtonComponent,
    },
  });
  editor.BlockManager.add("IconButton-button", {
    label: "<b>Icon<br /> Button</b>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: IconButtonComponent,
    },
  });
  
  editor.BlockManager.add("secWhite-button", {
    label: "<b>Secondary<br/>White Button</b>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: SecWhiteButtonComponent,
    },
  });


  // Links ==================================================
 
   
  editor.BlockManager.add("link-Arrow", {
    label: "<b>Link</b>",
    media: "<span class = 'fa fa-link fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
       attributes: { src: "https" },
      components: LinkWitharrowComponent,
    },
  });

  editor.BlockManager.add("link-without-Arrow", {
    label: "<b>Link Without<br />Arrow</b>",
    media: "<span class = 'fa fa-link fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: LinkWithoutarrowComponent
    },
  });

  // Layout ==================================================
  editor.BlockManager.add("full-width-outer-grid", {
    label: "<b>Full<br/>Width<br/>Outer<br/>Grid</b>",
    media: "<span class = 'fa fa-border-all fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: fullWidthOuterGridComponent,
    },
  });
  editor.BlockManager.add("full-width-inner-grid", {
    label: "<b>Full<br/>Width<br/>Inner<br/>Grid</b>",
    media: "<span class = 'fa fa-border-none fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: fullWidthInnerGridComponent,
    },
  });
  editor.BlockManager.add("fifty-fifty-vertical", {
    label: "<b>Fifity<br/>Fifity<br/>Vertical</b>",
    media: "<span class = 'fa fa-table fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: fiftyFiftyVerticalComponent,
    },
  });
  editor.BlockManager.add("fifty-fifty-horizontal", {
    label: "<b>Fifity<br/>Fifity<br/>Horizontal</b>",
    media: "<span class = 'fa fa-table-columns fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: fiftyFiftyHorizontalComponent,
    },
  });
  editor.BlockManager.add("fifty-fifty-split", {
    label: "<b>Fifity<br/>Fifity<br/>Split</b>",
    media: "<span class = 'fa fa-grip-lines-vertical fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: fiftyFiftySplitComponent,
    },
  });
  editor.BlockManager.add("one-third-small-image-left", {
    label: "<b>One<br/>Third<br/>Image<br/>Left</b>",
    media: "<span class = 'fa fa-battery-quarter fa-margin12 fa-3x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: oneThirdSmallImageLeftComponent,
    },
  });
  editor.BlockManager.add("one-third-small-image-right", {
    label: "<b>One<br/>Third<br/>Image<br/>Right</b>",
    media: "<span class = 'fa fa-battery-quarter fa-flip-horizontal fa-margin12 fa-3x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: oneThirdSmallImageRightComponent,
    },
  });

  // LISTS ================================================================
  editor.BlockManager.add("bullet-list", {
    label: "<b>Bullet<br/>List</b>",
    media: "<span class = 'fa fa-list-ul fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: bulletListComponent,
    },
  });
  editor.BlockManager.add("number-list", {
    label: "<b>Number<br/>List</b>",
    media: "<span class = 'fa fa-list-ol fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: numberListComponent,
    },
  });
  editor.BlockManager.add("list-item", {
    label: "<b>List<br/>Item</b>",
    media: "<span class = 'fa fa-clipboard-list fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: listItemComponent,
    },
  });
  editor.BlockManager.add("icon-list", {
    label: "<b>Icon<br/>List</b>",
    media: "<span class = 'fa fa-list-check fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: iconListComponent,
    },
  });

  //Section Dividers=======================================================

  editor.BlockManager.add("spacer-s", {
    label: "<b>Small<br/>Spacer</b>",
    media: "<span class = 'fa fa-s fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: spacer_sComponent,
    },
  });
  editor.BlockManager.add("spacer-m", {
    label: "<b>Medium<br/>Spacer</b>",
    media: "<span class = 'fa fa-m fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: spacer_mComponent,
    },
  });
  editor.BlockManager.add("spacer-l", {
    label: "<b>Large<br/>Spacer</b>",
    media: "<span class = 'fa fa-l fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: spacer_lComponent,
    },
  });
  editor.BlockManager.add("spacer-xl", {
    label: "<b>XL<br/>Spacer</b>",
    media: "<span class = 'fa fa-x fa-margin12 fa-3-5x'></span><span class = 'fa fa-l fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: spacer_xlComponent,
    },
  });
  editor.BlockManager.add("spacer-xxl", {
    label: "<b>XXL<br/>Spacer</b>",
    media: "<span class = 'fa fa-x fa-margin12 fa-2-5x'></span><span class = 'fa fa-x fa-margin12 fa-2-5x'></span><span class = 'fa fa-l fa-margin12 fa-2-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: spacer_xxlComponent,
    },
  });

  // Footers =======================================================

  editor.BlockManager.add("footer-selector", {
    label: "<b>Footer<br/>Selector</b>",
    // media: "<svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /></svg>",
    content: {
      draggable: false,
      droppable: false,
      stylable: false,
    } ,
    content:'<div data-gjs-type="footer-selector-component"></div>'

  });

  // footer selector grabs from here, not shown in Footer category
  editor.BlockManager.add("canada-footer", {
    label: "<b>Canada<br/>Footer</b>",
    // media: "<svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /></svg>",
    content: {
      tagName: "div",
        draggable: false,
        droppable: false,
        stylable: false,
        type: 'footer-component', // this is important for finding component on canvas
      // attributes: { src: "http" },
      components: canadaFooterComponent,
    },
  });
  editor.BlockManager.add("us-footer", {
    label: "<b>US<br/>Footer</b>",
    // media: "<svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /></svg>",
    content: {
      tagName: "div",
        draggable: false,
        droppable: false,
        stylable: false,
        type: 'footer-component', // this is important for finding component on canvas
      // attributes: { src: "http" },
      components: usFooterComponent,
    },
  });

  //Grouped Headlines========================================================
  editor.BlockManager.add("grouped-headline-horizontal", {
    label: "<b>Horizontal<br/>Grouped</br>Headline",
    media: "<span class = 'fa fa-heading fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: groupedHeadlineHorizontal,
    },
  });
  
  editor.BlockManager.add("grouped-headline-vertical", {
    label: "<b>Vertical<br/>Grouped</br>Headline",
    media: "<span class = 'fa fa-heading fa-margin12 fa-3-5x'></span>",
    content: {
      tagName: "div",
      //   draggable: false,
      // attributes: { src: "http" },
      components: groupedHeadlineVertical,
    },
  });
};

export default addBlocks;
