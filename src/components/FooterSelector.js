import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { EditorContext } from "../context/EditorContext";
import {
  Input,
  List,
  StandardListItem,
  ListMode,
  Text,
  Toolbar,
  Title,
  TitleLevel,
  ToolbarSpacer,
  Select,
  Option,
  Button
} from "@ui5/webcomponents-react";
import { API_HOST } from "../utils/api";
import { canadaFooterComponent } from "../utils/components/domComponents/footerComponents";
// import { TestComponent } from "../utils/domComponents/fontComponents";

const assetStyle = {
  width: "100px",
};

function FooterSelector(props) {
  const { editorState, setEditorState, pttState, setPttState } = useContext(EditorContext);
  const {} = props;
  const [inputId, setInputId] = useState();
  const [pttData, setPttData] = useState();
  const [regions, setRegions] = useState(['Canada', 'US']);

  useEffect(() => {
    console.log("footer selector", editorState);
    if (editorState) {
      editorState.DomComponents.addType('footer-selector-component', {
        model: {
          defaults: {
            attributes: { class: "cmp-css" },
            // components: canadaFooterComponent,
            styles: `
              `,
          },
          init() {
            console.log('Local hook: model.init');
            // this.listenTo(this, 'change:testprop', this.handlePropChange);
            // Here we can listen global hooks with editor.on('...')

            // editorState.on("block:drag:stop", (block) => {
            //   console.log("block", block);
            //   if (block?.attributes?.type === "footer-selector-component") {
                editorState.Modal.open({
                    title: 'Select Footer',
                    content: document.getElementById("footerSelectorContainer"),
                });
            //   }
            // });
          },
          updated(property, value, prevValue) {
            console.log('Local hook: model.updated',
              'property', property, 'value', value, 'prevValue', prevValue);
          },
          removed() {
            console.log('Local hook: model.removed');
          },
          handlePropChange() {
            console.log('The value of testprop', this.get('testprop'));
          }
        },
        view: {
          init() {
            console.log('Local hook: view.init');
          },
          onRender() {
            console.log('Local hook: view.onRender');
          },
        },
      });
    }
  }, [editorState]);


  const onClick = (e) => {
    console.log(e.target.innerHTML);
    const selected = e.target.innerHTML.toLowerCase()
    
    var wrapperChildren = editorState.DomComponents.getComponents();
    console.log(wrapperChildren)

    // this is missing if footer is not at the bottom - should query the whole canvas for the footer
    // remove last element on canvas 
    var lastEl = editorState.getComponents().at(wrapperChildren.length -1)
    console.log('last el', lastEl)
    // editorState.select(lastEl)
    var lastElType = lastEl.get('type')
    if (lastElType === 'footer-component') {
      lastEl.remove() 
    }

    // add footer to last element in canvas
    var mjText = editorState.BlockManager.get(`${selected}-footer`);
    var comp1 = wrapperChildren.add(mjText.attributes.content,  {at:  wrapperChildren.length});

    // editorState.select(editorState.getComponents().at(wrapperChildren.length));
    
    editorState.Modal.close();
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="footerSelectorContainer">
          {
            regions?.map((i) => {
              return (
                <Button onClick={onClick} design="Default" value={i}>
                {i}
                </Button>
              );
            })
          }

        </div>
      </div>
    </>
  );
}

export default FooterSelector;
