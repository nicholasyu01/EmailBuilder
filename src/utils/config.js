import grapesjs from "grapesjs";
import gjsPresetNewsletter from "grapesjs-preset-newsletter";
import grapesjExport from "grapesjs-plugin-export";
import gjsBlockBasic from "grapesjs-blocks-basic";
import template1 from '../templates/template1';
import $ from "jquery";
import axios from 'axios';
import { API_HOST } from "../utils/api";
import { generateTokens } from "../scripts/token";
import style from "./components/style.js";
import sectors from "./components/sectors";
import { addPanels, panels } from "./components/panels";
import addBlocks from "./components/blocks";
import { addComponentTypes } from "./components/componentTypes";

const config = () => {
  console.log('config')

  const editor = grapesjs.init({
    container: "#editor",
    plugins: [gjsPresetNewsletter, grapesjExport],
    // plugins:[],
    components: '', //template1 for SAP template (messes up when draggin components tho)
    height: "100vh",
    width: "auto",
    storageManager: false,
    cssIcons: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
    panels: {},
    // panels: panels,
    assetManager: {
      custom: true,
      // assets: assetData,
      // showUrlInput: false,
    },
    blockManager: {
      // appendTo: "#blocks", // for custom block manager div
    },
    styleManager: {
      custom: false,
      sectors: sectors
    },
    selectorManager: {
      custom: false,
      states: [{ name: 'hover' }, { name: 'active' }, { name: 'nth-of-type(2n)' }, { name: 'test' }],
      componentFirst: true,
    },
    // for selector manager
    style: style,
  });

  // editor.setComponents(
  //   <div>
  //     <h1>Title test</h1>
  //     <p>Text test</p>
  //   </div>
  // );
  addComponentTypes(editor);
  addBlocks(editor);
  addPanels(editor);

  editor.Panels.getButton('options','sw-visibility').attributes.className = 'fa fa-square';

  editor.Blocks.remove('quote');
  editor.Blocks.remove('grid-items');
  editor.Blocks.remove('list-items');

  editor.Blocks.get('link').attributes.attributes.class = "";
  editor.Blocks.get('link').set({ media: "<span class = 'fa fa-link fa-3x fa-margin12'></span>" });
  editor.Blocks.get('link-block').attributes.attributes.class = "";
  editor.Blocks.get('link-block').set({ media: "<span class = 'fa fa-link fa-3x fa-margin7'></span>" });

  editor.on('load', () => {

    editor.BlockManager.render([
      editor.BlockManager.get('sect100').set('category', 'default'),
      editor.BlockManager.get('sect50').set('category', 'default'),
      editor.BlockManager.get('sect30').set('category', 'default'),
      editor.BlockManager.get('sect37').set('category', 'default'),
      editor.BlockManager.get('button').set('category', 'default'),
      editor.BlockManager.get('divider').set('category', 'default'),
      editor.BlockManager.get('text').set('category', 'default'),
      editor.BlockManager.get('text-sect').set('category', 'default'),
      editor.BlockManager.get('image').set('category', 'default'),
//      editor.BlockManager.get('quote').set('category', 'default'),
      editor.BlockManager.get('link').set('category', 'default'),
      editor.BlockManager.get('link-block').set('category', 'default'),
//    editor.BlockManager.get('grid-items').set('category', 'default'),
//    editor.BlockManager.get('list-items').set('category', 'default'),

      editor.BlockManager.get('standard-masthead').set('category', 'Header'),
      editor.BlockManager.get('sub-brand-masthead').set('category', 'Header'),
      editor.BlockManager.get('co-branded-masthead').set('category', 'Header'),
      editor.BlockManager.get('event-masthead').set('category', 'Header'),
      editor.BlockManager.get('standard-hero').set('category', 'Header'),

      editor.BlockManager.get('headline-black').set('category', 'Text'),
      editor.BlockManager.get('headline-white').set('category', 'Text'),
      editor.BlockManager.get('headline-gold').set('category', 'Text'),
      editor.BlockManager.get('subtitle').set('category', 'Text'),
      editor.BlockManager.get('category').set('category', 'Text'),
      editor.BlockManager.get('titles').set('category', 'Text'),
      editor.BlockManager.get('paragraphs').set('category', 'Text'),
      editor.BlockManager.get('group-headline').set('category', 'Text'),
      editor.BlockManager.get('fine-print').set('category', 'Text'),

      editor.BlockManager.get('primary-button').set('category', 'Buttons'),
      editor.BlockManager.get('secondary-button').set('category', 'Buttons'),
    //  editor.BlockManager.get('Tertiary-button').set('category', 'Buttons'),
    //  editor.BlockManager.get('DestructiveAction-button').set('category', 'Buttons'),
     // editor.BlockManager.get('IconButton-button').set('category', 'Buttons'),
     // editor.BlockManager.get('secWhite-button').set('category', 'Buttons'),
      

      editor.BlockManager.get('vertical-content').set('category', 'Content'),
      editor.BlockManager.get('vertical-content-link').set('category', 'Content'),
      editor.BlockManager.get('vertical-content-secondary').set('category', 'Content'),
      editor.BlockManager.get('horizontal-left-content').set('category', 'Content'),
      editor.BlockManager.get('horizontal-right-content').set('category', 'Content'),
      editor.BlockManager.get('text-content').set('category', 'Content'),

      editor.BlockManager.get('full-width-outer-grid').set('category', 'Layouts'),
      editor.BlockManager.get('full-width-inner-grid').set('category', 'Layouts'),
      editor.BlockManager.get('fifty-fifty-vertical').set('category', 'Layouts'),
      editor.BlockManager.get('fifty-fifty-horizontal').set('category', 'Layouts'),
      editor.BlockManager.get('fifty-fifty-split').set('category', 'Layouts'),
      editor.BlockManager.get('one-third-small-image-left').set('category', 'Layouts'),
      editor.BlockManager.get('one-third-small-image-right').set('category', 'Layouts'),

      editor.BlockManager.get('bullet-list').set('category', 'Lists'),
      editor.BlockManager.get('number-list').set('category', 'Lists'),
      editor.BlockManager.get('list-item').set('category', 'Lists'),
      editor.BlockManager.get('icon-list').set('category', 'Lists'),

      editor.BlockManager.get('twophotos-id').set('category', ''),
      editor.BlockManager.get('header-id').set('category', ''),
      editor.BlockManager.get('footer-id').set('category', ''),
      editor.BlockManager.get('test-component').set('category', ''),
      editor.BlockManager.get('up-header').set('category', ''),

      editor.BlockManager.get('spacer-s').set('category', 'Spacers'),
      editor.BlockManager.get('spacer-m').set('category', 'Spacers'),
      editor.BlockManager.get('spacer-l').set('category', 'Spacers'),
      editor.BlockManager.get('spacer-xl').set('category', 'Spacers'),
      editor.BlockManager.get('spacer-xxl').set('category', 'Spacers'),
      
      editor.BlockManager.get('link-Arrow').set('category', 'Link'),
      editor.BlockManager.get('link-without-Arrow').set('category', 'Link'),

      

         

      editor.BlockManager.get('footer-selector').set('category', 'Footers'),
      // editor.BlockManager.get('canada-footer').set('category', 'Footers'),

      editor.BlockManager.get('grouped-headline-horizontal').set('category', 'Grouped Headlines'),
      editor.BlockManager.get('grouped-headline-vertical').set('category', 'Grouped Headlines'),

    ])
  })

  editor.RichTextEditor.add('token-generator', {
    icon: generateTokens(),
    // Bind the 'result' on 'change' listener
    event: 'change',
    result: (rte, action) => rte.insertHTML(action.btn.firstChild.value),
    // Reset the select on change
    update: (rte, action) => { action.btn.firstChild.value = ""; }
  });

  //[{"name":"Desktop","width":"","height":"","widthMedia":"","priority":0,"id":"desktop"},
  //{"name":"Tablet","width":"770px","height":"","widthMedia":"992px","priority":992,"id":"tablet"},
  //{"name":"Mobile landscape","width":"568px","height":"","widthMedia":"768px","priority":768,"id":"mobilePortrait"},
  //{"name":"Mobile portrait","width":"320px","height":"","widthMedia":"480px","priority":480,"id":"mobilePortrait"}]
  editor.Devices.remove(editor.Devices.get('desktop'))
  editor.Devices.remove(editor.Devices.get('tablet'))
  //   editor.Devices.remove(editor.Devices.get('mobilePortrait'))

  editor.Devices.add({
    id: 'desktop',
    name: 'Desktop',
    width: '640px',
  });

  editor.Devices.add({
    id: 'tablet',
    name: 'Tablet',
    width: '480px',
  });

  editor.I18n.addMessages({
    en: { // indicate the locale to update
      styleManager: {
        empty: 'No component selected',
      }
    }
  });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
  return editor;
};

export default config;
