import React, { useState, useContext, useEffect } from "react";
import { EditorContext } from "../../context/EditorContext";
import { Button, MessageStrip, Toolbar, ToolbarSpacer } from "@ui5/webcomponents-react";

function LinkValPanel(props) {

    const { editorState, setEditorState, pttState, setPttState } = useContext(EditorContext);
    const { } = props;
    const [validationErrState, setValidationErrState] = useState();
    const [validationWarnState, setValidationWarnState] = useState();
    const [validationSuccState, setValidationSuccState] = useState();
    const [continueResults, setContinueResults] = useState(false);
    const [linkParamResults, setLinkParamResults] = useState();
    const [linkEmptyResults, setLinkEmptyResults] = useState();

    useEffect(() => {
        if (editorState) {
            editorState.on("modal:open", (props) => {
                if (editorState.Modal.getTitle() === "Validate Links for PTT ID") {
                    setValidationErrState();
                    setValidationWarnState();
                    setValidationSuccState();
                    setLinkParamResults();
                    setLinkEmptyResults();
                    setContinueResults(false);
                }
            })
        }
    }, [editorState, pttState]);

    const getAllComponents = (model, result = []) => {
        result.push(model);
        model.components().each(mod => getAllComponents(mod, result))
        return result;
    }

    const onLinkValClick = () => {
        const allComponents = getAllComponents(editorState.DomComponents.getWrapper());

        var linkState = true;
        var linkWarnState = true;
        var linkEmptyState = false;
        var paramState1 = false;
        var paramState2 = true;

        var linkCnt = 0;
        var linksDisp = [];
        var linksEmpty = [];

        allComponents.forEach((model) => {
            if (model.attributes.tagName === "a" && model.getAttributes().href.search("mailto") == -1) {
                linkCnt++;
                if ((model.getAttributes().href == "https://" || model.getAttributes().href == undefined
                    || model.getAttributes().href == "")) {
                    linkEmptyState = true;
                    linksEmpty.push(model.attributes.components.models.length == 0 ?
                        "Link" : model.attributes.components.models[0].attributes.content);
                } else {
                    if (model.getAttributes().href.search("\\?") == -1) {
                        linkState = false;
                    } else {
                        linkWarnState = false;
                    }
                }
            }
        });

        allComponents.forEach((model) => {
            if (model.attributes.tagName === "a" && model.getAttributes().href.search("mailto") == -1) {
                var originalHref = model.getAttributes().hasOwnProperty('href') ? model.getAttributes().href : "";
                var paramString = originalHref.substring(originalHref.indexOf('pttid=') + 6, originalHref.length);

                if ((paramString.substring(0, paramString.indexOf('&') == -1 ? paramString.length : paramString.indexOf('&')) != pttState)
                    || ((paramString.match(/&/g) || []).length > 0 && paramString.search("InteractionType") == -1 && paramString.search("LID") == -1)) {
                    linksDisp.push("X" + model.getAttributes().href);
                } else {
                    linksDisp.push(model.getAttributes().href);
                }
            }
        });

        if (linkCnt == 0) {
            setValidationErrState('No links found');
            setLinkEmptyResults();
            setLinkParamResults();
            setContinueResults(false);
        } else if (pttState == undefined || pttState == '') {
            setValidationErrState('Please select a PTT ID');
            setLinkEmptyResults();
            setLinkParamResults();
            setContinueResults(false);
        } else if (linkEmptyState == true) {
            setValidationErrState('The below Links are empty, please add the Links first');
            setValidationWarnState('The order of the Links in the list is the same as how the Link is placed in the HTML - Top to Bottom, Left to Right');
            setLinkEmptyResults(linksEmpty);
            setLinkParamResults();
            setContinueResults(false);
        } else {
            if (linkState == false && linkWarnState) {
                allComponents.forEach((model) => {
                    if (model.attributes.tagName === "a" && model.getAttributes().href.search("mailto") == -1) {
                        var originalHref = model.getAttributes().href;
                        var finalHref = originalHref + "?pttid=" + pttState;
                        model.setAttributes({ href: finalHref });
                    }
                });
                setValidationSuccState('The Links been updated with PTT ID ' + pttState + ' as a parameter');
            }
            if (linkState == false && linkWarnState == false) {
                setValidationWarnState('Click on \'Continue\' to update the highlighted links with the selected PTT ID as a parameter');
                setLinkEmptyResults();
                setLinkParamResults(linksDisp);
                setContinueResults(true);
            }
            if (linkState) {
                var pttLinkCnt = 0;
                allComponents.forEach((model) => {
                    if (model.attributes.tagName === "a" && model.getAttributes().href.search("mailto") == -1) {
                        var originalHref = model.getAttributes().href;
                        var paramString = originalHref.substring(originalHref.indexOf('pttid=') + 6, originalHref.length);
                        if (paramString.substring(0, paramString.indexOf('&') == -1 ? paramString.length : paramString.indexOf('&')) == pttState) {
                            pttLinkCnt++;
                        }
                        if ((paramString.match(/&/g) || []).length == 0) {
                            paramState1 = true;
                        } else if ((paramString.match(/&/g) || []).length == 2 &&
                            paramString.search("InteractionType") > -1 && paramString.search("LID") > -1) {
                            paramState1 = true;
                        } else {
                            paramState2 = false;
                        }
                    }
                });

                if (pttLinkCnt == linkCnt && paramState1 && paramState2) {
                    setValidationSuccState('All Links have PTT ID ' + pttState + ' as parameter');
                } else {
                    setValidationWarnState('Click on \'Continue\' to update the highlighted links with the selected PTT ID as a parameter');
                    setLinkEmptyResults();
                    setLinkParamResults(linksDisp);
                    setContinueResults(true);
                }
            }
        }
    }

    const onContinueClick = () => {

        const allComponents = getAllComponents(editorState.DomComponents.getWrapper());

        allComponents.forEach((model) => {
            if (model.attributes.tagName === "a" && model.getAttributes().href.search("mailto") == -1) {
                var originalHref = model.getAttributes().href;
                if (originalHref.search("\\?") > -1) {
                    var finalHref = null;
                    var lnkInteractionStr = null, lnkLIDStr = null, lnkInteraction = null, lnkLID = null;

                    if (originalHref.search("InteractionType") > -1 && originalHref.search("LID") > -1) {
                        lnkInteractionStr = originalHref.substring(originalHref.search("InteractionType") + 16, originalHref.length);
                        lnkLIDStr = originalHref.substring(originalHref.search("LID") + 4, originalHref.length);

                        lnkInteraction = lnkInteractionStr.substring(0, lnkInteractionStr.indexOf('&') == -1
                            ? lnkInteractionStr.length : lnkInteractionStr.indexOf('&'));
                        lnkLID = lnkLIDStr.substring(0, lnkLIDStr.indexOf('&') == -1
                            ? lnkLIDStr.length : lnkLIDStr.indexOf('&'));
                    }

                    if (originalHref.search("pttid") > -1) {
                        var pttString = originalHref.substring(originalHref.search("pttid") + 6, originalHref.length);
                        var pttValue = pttString.substring(0, pttString.indexOf('&') == -1
                            ? pttString.length : pttString.indexOf('&'));

                        if (pttState != pttValue) {
                            originalHref = originalHref.substring(0, originalHref.indexOf("?"));
                            if (lnkInteraction == null && lnkLID == null) {
                                finalHref = originalHref + "?pttid=" + pttState;
                            } else {
                                finalHref = originalHref + "?pttid=" + pttState + '&InteractionType=' +
                                    lnkInteraction + '&LID=' + lnkLID;
                            }
                            model.setAttributes({ href: finalHref });
                        }
                    } else {
                        originalHref = originalHref.substring(0, originalHref.indexOf("?"));
                        if (lnkInteraction == null && lnkLID == null) {
                            finalHref = originalHref + "?pttid=" + pttState;
                        } else {
                            finalHref = originalHref + "?pttid=" + pttState + '&InteractionType=' +
                                lnkInteraction + '&LID=' + lnkLID;
                        }
                        model.setAttributes({ href: finalHref });
                    }
                } else {
                    var finalHref = originalHref + "?pttid=" + pttState;
                    model.setAttributes({ href: finalHref });
                }
            }
        });

        setValidationSuccState('The Links been updated with PTT ID ' + pttState + ' as a parameter');
        setValidationErrState();
        setValidationWarnState();
        setLinkEmptyResults();
        setLinkParamResults();
        setContinueResults(false);
    }

    const onCloseClick = () => {
        editorState.Modal.close();
    };

    return (
        <>
            <div style={{ display: "none" }}>
                <div id="LinkValPanelContainer">
                    <Toolbar toolbarStyle="Clear" style={{ marginBottom: "5px" }}>
                        <ToolbarSpacer />
                        <Button id="close" onClick={onCloseClick}>Close</Button>
                        <Button id="linkValBtn" design={"Emphasized"} onClick={onLinkValClick}>Validate Links</Button>
                    </Toolbar>
                    {validationErrState ?
                        <MessageStrip design="Negative" style={{ marginBottom: "8px" }}>
                            {validationErrState}
                        </MessageStrip> : ""}
                    {validationSuccState ?
                        <MessageStrip design="Positive" style={{ marginBottom: "8px" }}>
                            {validationSuccState}
                        </MessageStrip> : ""}
                    {validationWarnState ?
                        <MessageStrip design="Warning" style={{ marginBottom: "8px" }}>
                            {validationWarnState}
                        </MessageStrip> : ""}
                    {linkEmptyResults?.map((i) => {
                        return <div style={{ 'word-wrap': 'break-word', marginBottom: "10px" }}>
                            {i} <br />
                        </div>;
                    })}
                    {linkParamResults?.map((i) => {
                        if (i.charAt(0) == "X") {
                            return <div style={{ 'word-wrap': 'break-word', marginBottom: "10px", color: "red" }}>
                                <b>{i.substring(1, i.length)}</b> <br />
                            </div>;
                        } else {
                            return <div style={{ 'word-wrap': 'break-word', marginBottom: "10px" }}>
                                {i} <br />
                            </div>;
                        }
                    })}
                    <br />
                    {continueResults ?
                        <Button id="continueLinkVal" onClick={onContinueClick}>Continue</Button> :
                        ""
                    }
                </div>
            </div>
        </>
    )
}

export default LinkValPanel;