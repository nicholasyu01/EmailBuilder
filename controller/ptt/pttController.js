const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const base64 = require('base-64');
const {corsOptions} = require('../../server');
const bodyparser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

const requestEndpoint_get_assets_by_id = "https://promotional-tactic-table-management-sapit-marketing-dev.cfapps.eu10.hana.ondemand.com/getpttforemailbuilder?tacticId=210";
const requestEndpoint_ptt_token = "https://sapit-marketing-dev.authentication.eu10.hana.ondemand.com/oauth/token?grant_type=client_credentials";
const requestEndpoint_search_ptt = "https://promotional-tactic-table-management-sapit-marketing-dev.cfapps.eu10.hana.ondemand.com/getpttforemailbuilder?";

async function getPTToken() {
    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: 'Basic ' + base64.encode("sb-Promotional-Tactic-Table-UAA!t84575" + ":" + "8DADtogwsWQ/foPdUAiWcXxP0JY="),
        }
    }
    const response = await fetch(requestEndpoint_ptt_token, fetchOptions);
    const jsonResponse = await response.json();
    
    return jsonResponse["access_token"]
};

app.get('/api/ptt/token', cors(corsOptions), async (req, res) => {

    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: 'Basic ' + base64.encode("sb-Promotional-Tactic-Table-UAA!t84575" + ":" + "8DADtogwsWQ/foPdUAiWcXxP0JY="),
        },
    }
    const response = await fetch(requestEndpoint_ptt_token, fetchOptions)
    //console.log(response)
    const jsonResponse = await response.json();
    //console.log(jsonResponse); 
    res.send(jsonResponse);
});

app.get('/api/ptt/getAssetsById', cors(corsOptions), async (req, res) => {
    const token = await getPTToken()

    const requestEndpointPTTbyID = `https://promotional-tactic-table-management-sapit-marketing-dev.cfapps.eu10.hana.ondemand.com/getpttforemailbuilder?tacticId=${req.query.id}`

    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }
    const response = await fetch(requestEndpointPTTbyID, fetchOptions)
    //console.log(response)
    const jsonResponse = await response.text();
    //console.log(jsonResponse); 
    res.send(jsonResponse);
});

app.get('/api/ptt/searchPTT', cors(corsOptions), async (req, res) => {
    const token = await getPTToken()
    const pttid = req.query.pttid;
    const pttname = req.query.pttname;
    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }
    const response = await fetch(requestEndpoint_search_ptt + 'tacticId=' + pttid + '&pttName=' + pttname, fetchOptions)
    console.log(response)
    const jsonResponse = await response.text();
    console.log(jsonResponse); 
    res.send(jsonResponse);
});

module.exports = app;
