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

let username = 'P2004345748'; // TODO to be inserted from passvault !important
let password = 'F#f-ZNXxVXbb3FKz'; // TODO to be inserted from passvault !important

const requestEndpoint4 = "https://e0203-iflmap.hcisbt.eu1.hana.ondemand.com/http/EmailBuilder_DAM";

app.get('/api/dam', cors(corsOptions), async (req, res) => {
    const keyword = req.query.keyword_query;
    const fetchOptions = {
        method: 'GET',
        headers: {
            Authorization: 'Basic ' + base64.encode(username + ":" + password),
            keyword_query: keyword
        },
    }
    const response = await fetch(requestEndpoint4, fetchOptions)
    console.log(response)
    const jsonResponse = await response.text();
    console.log(jsonResponse); 
    res.send(jsonResponse);
});

module.exports = app;
