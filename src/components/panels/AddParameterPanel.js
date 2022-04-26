import React, { useState, useContext, useEffect } from "react";
import { EditorContext } from "../../context/EditorContext";
import { Button, MessageStrip } from "@ui5/webcomponents-react";

function AddParameterPanel(props) {

    const { editorState, setEditorState, pttState, setPttState } = useContext(EditorContext);
    const [parameterErrState, setParameterErrState] = useState();
    const [parameterWarnState, setParameterWarnState] = useState();
    const [parameterSuccState, setParameterSuccState] = useState();
    const [continueAddState, setContinueAddState] = useState(false);
    const [continueRemState, setContinueRemState] = useState(false);

    var interactionOpts = null, lidOpts = [];

    const openmodal = (editor) => {
        editor.Modal.open({
            title: "Add Parameter",
            content: document.getElementById("AddParameterPanelContainer"),
        });
    }

    const onContinueRemClick = () => {
        const component = editorState.getSelected();

        const finalHref = component.getAttributes().href.substring(0,
            component.getAttributes().href.search("\\&"));
        component.setAttributes({ href: finalHref });

        setParameterErrState();
        setParameterWarnState();
        setParameterSuccState("Parameters have been removed successfully");
        setContinueAddState(false);
        setContinueRemState(false);

    }

    const onContinueAddClick = () => {
        const component = editorState.getSelected();

        const selectedInteraction = component.getTrait('interactionType').props().value;
        const selectedLid = component.getTrait('lid').props().value;

        const initialHref = component.getAttributes().href.substring(0, component.getAttributes().href.search("\\&"))
        const finalHref = initialHref + '&InteractionType=' +
            selectedInteraction + '&LID=' + selectedLid;

        component.setAttributes({ href: finalHref });

        setParameterErrState();
        setParameterWarnState();
        setParameterSuccState("Parameters have been updated successfully");
        setContinueAddState(false);
        setContinueRemState(false);
    }

    useEffect(() => {
        if (editorState) {

            editorState.on('load', () => {

                interactionOpts = [
                    { id: 'BFS', name: 'BFS' },
                    { id: 'PFF', name: 'PFF' }
                ];
                
                lidOpts = [
                    { id: '{{lead.Id}}', name: '{{lead.Id}}' }
                ];
            });

            editorState.on("component:selected", (component) => {
                if (component.attributes.tagName === "a" && component.getTraits().length == 3) {

                    if (component.getAttributes().href == undefined || component.getAttributes().href == '') {
                        component.setAttributes({ href: 'https://' });
                    }

                    component.addTrait({
                        type: 'select',
                        name: 'interactionType',
                        label: 'Interaction Type',
                        options: interactionOpts
                    });

                    component.addTrait({
                        type: 'select',
                        name: 'lid',
                        label: 'LID',
                        options: lidOpts
                    });

                    component.addTrait({
                        type: 'button',
                        text: 'Add Param',
                        name: 'addParam',
                        full: true,
                        command: (editor) => {
                            const initialHref = component.getAttributes().href;
                            setParameterErrState();
                            setParameterWarnState();
                            setParameterSuccState();
                            setContinueAddState(false);
                            setContinueRemState(false);

                            if (initialHref == "https://" || initialHref == undefined || initialHref == "") {
                                setParameterErrState("Please add or select a link");
                                openmodal(editor);
                            } else if (initialHref.search("\\?ptt") == -1) {
                                setParameterErrState("Please select and add a PTT ID to the link");
                                openmodal(editor);
                            } else {
                                const selectedInteraction = component.getTrait('interactionType').props().value;
                                const selectedLid = component.getTrait('lid').props().value;

                                if (selectedInteraction == "") {
                                    setParameterErrState("Interaction Type Parameter is not selected");
                                    openmodal(editor);
                                } else if (selectedLid == "") {
                                    setParameterErrState("LID Parameter is not selected");
                                    openmodal(editor);
                                } else if (initialHref.search("InteractionType") > -1 || initialHref.search("LID") > -1) {

                                    var lnkInteractionStr = initialHref.substring(initialHref.search("InteractionType") + 16, initialHref.length);
                                    var lnkLIDStr = initialHref.substring(initialHref.search("LID") + 4, initialHref.length);

                                    var lnkInteraction = lnkInteractionStr.substring(0, lnkInteractionStr.indexOf('&') == -1
                                        ? lnkInteractionStr.length : lnkInteractionStr.indexOf('&'));
                                    var lnkLID = lnkLIDStr.substring(0, lnkLIDStr.indexOf('&') == -1
                                        ? lnkLIDStr.length : lnkLIDStr.indexOf('&'));

                                    if(lnkInteraction == selectedInteraction && lnkLID == selectedLid) {
                                        setParameterWarnState("Link already has the selected parameters");
                                        setContinueAddState(false);
                                        openmodal(editor);
                                    } else {
                                        setParameterWarnState("Link already has parameters. Click on \'Continue\' to update them");
                                        setContinueAddState(true);
                                        openmodal(editor);
                                    }
                                } else {
                                    const finalHref = initialHref + '&InteractionType=' +
                                        selectedInteraction + '&LID=' + selectedLid;

                                    component.setAttributes({ href: finalHref });

                                    setParameterSuccState("Parameters have been added successfully");
                                    openmodal(editor);
                                }
                            }
                        }
                    });

                    component.addTrait({
                        type: 'button',
                        text: 'Remove Param',
                        name: 'removeParam',
                        full: true,
                        command: (editor) => {
                            const initialHref = component.getAttributes().href;
                            setParameterErrState();
                            setParameterWarnState();
                            setParameterSuccState();
                            setContinueAddState(false);
                            setContinueRemState(false);

                            if (initialHref.search("InteractionType") > -1 || initialHref.search("LID") > -1) {
                                setParameterWarnState("You are about to remove parameters. Click on \'Continue\' to proceed");
                                setContinueRemState(true);
                                openmodal(editor);
                            } else {
                                setParameterErrState("No Parameters in the Link");
                                openmodal(editor);
                            }
                        }
                    });
                }
            });
        }
    }, [editorState]);

    return (
        <>
            <div style={{ display: "none" }}>
                <div id="AddParameterPanelContainer">
                    {parameterErrState ?
                        <MessageStrip design="Negative">
                            {parameterErrState}
                        </MessageStrip> : ""}
                    {parameterSuccState ?
                        <MessageStrip design="Positive">
                            {parameterSuccState}
                        </MessageStrip> : ""}
                    {parameterWarnState ?
                        <MessageStrip design="Warning">
                            {parameterWarnState}
                        </MessageStrip> : ""}
                    <br />
                    {continueAddState ?
                        <Button id="continueParam" onClick={onContinueAddClick} style={{ marginTop: "7px" }}>Continue</Button> :
                        ""
                    }
                    {continueRemState ?
                        <Button id="continueParam" onClick={onContinueRemClick} style={{ marginTop: "7px" }}>Continue</Button> :
                        ""
                    }
                </div>
            </div>
        </>
    );
}

export default AddParameterPanel;