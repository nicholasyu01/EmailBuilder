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
// import { TestComponent } from "../utils/domComponents/fontComponents";

const assetStyle = {
  width: "100px",
};

function HeadlineText(props) {
  const { editorState, setEditorState, pttState, setPttState } = useContext(EditorContext);
  const {} = props;
  const [inputId, setInputId] = useState();
  const [pttData, setPttData] = useState();
  const [colors, setColors] = useState(['Black', 'White', 'Gold']);

  useEffect(() => {
    console.log("headline text", editorState);
    if (editorState) {
      editorState.DomComponents.addType('test-component', {
        model: {
          defaults: {
            attributes: { class: "cmp-css" },
            // components: TestComponent,
            styles: `
                .cmp-css { color: red }
                .cmp-css-a { color: green }
                .cmp-css-b { color: blue }
        
                @media (max-width: 639px) {
                  .cmp-css{ color: darkred; }
                  .cmp-css-a { color: darkgreen }
                  .cmp-css-b { color: darkblue }
                }
              `,
          },
          init() {
            console.log('Local hook: model.init');
            this.listenTo(this, 'change:testprop', this.handlePropChange);
            // Here we can listen global hooks with editor.on('...')
            editorState.Modal.open({
                title: 'Select headline text color',
                content: document.getElementById("headlineTextContainer"),
            });
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
    var mjText = editorState.BlockManager.get(`headline-${selected}`);
    var comp1 = wrapperChildren.add(mjText.attributes.content,  {at:  0});
    
    editorState.Modal.close();
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="headlineTextContainer">
          {
            colors?.map((i) => {
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

export default HeadlineText;
