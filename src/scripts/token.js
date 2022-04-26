import rawdata from "../scripts/tokens.json"
import axios from 'axios';
import { API_HOST } from "../utils/api";

async function getCustomTokens(inputId, editorState) { 
    let programID = ""

    let htmlRawSelect = `<select class="gjs-field">
    <option value="">- Select Custom Token -</option>`

    await axios.get(`${API_HOST}/api/ptt/getAssetsById`, { params: { id: inputId } })
    .then(function (response) {
        programID = response.data[0].marketoProgramId
    })
    .catch(function (error) {
    console.log(error);
    })

    await axios.post(`${API_HOST}/api/getCustomTokens`, { id: programID })

    .then(function (response) {
        response.data[0].tokens.forEach(token => {
            htmlRawSelect = htmlRawSelect.concat(`<option value="{{my.${token.name}}}">{{${token.name}}}</option>\n`)
        })

        editorState.RichTextEditor.remove("custom-tokens")

        editorState.RichTextEditor.add('custom-tokens', {
            icon: htmlRawSelect,
            // Bind the 'result' on 'change' listener
            event: 'change',
            result: (rte, action) => rte.insertHTML(action.btn.firstChild.value),
            // Reset the select on change
            update: (rte, action) => { action.btn.firstChild.value = ""; }
          })
    })
    .catch(function (error) {
        editorState.RichTextEditor.remove("custom-tokens")
        console.log(error);
    })
}

//https://experienceleague.adobe.com/docs/marketo/using/product-docs/demand-generation/landing-pages/personalizing-landing-pages/tokens-overview.html
function generateTokens() { 
    //let rawdata = fs.readFileSync('tokens.json');
    //let tokens = JSON.parse(rawdata);

    let htmlRawSelect = `<select class="gjs-field">
        <option value="">- Select Token -</option>`

    let defaultmsg = "INSERT DEFAULT VALUE"

    for (let lis in rawdata){
        rawdata[lis].forEach(item => {
            let itemLen = item.length - 2
            let tokenWithDefault = `${item.substring(0, itemLen)}:default=${defaultmsg}}}`
            htmlRawSelect = htmlRawSelect.concat(`<option value="${tokenWithDefault}">${item}</option>\n`) 
        });
    }

    htmlRawSelect = htmlRawSelect.concat(`</select>\n`)
    return htmlRawSelect
} 

export {getCustomTokens, generateTokens}