/* Amplify Params - DO NOT EDIT
	API_SHEOUT_GRAPHQLAPIENDPOINTOUTPUT
	API_SHEOUT_GRAPHQLAPIIDOUTPUT
	AUTH_SHEOUT9B7CA99C9B7CA99C_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
  API_SHEOUT_GRAPHQLAPIENDPOINTOUTPUT
  API_SHEOUT_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */
var express = require('express')
var bodyParser = require('body-parser')
const AWS = require("aws-sdk");
const axios = require("axios");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_SHEOUT_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const { createPurchasedProductMutation, createPurchaseMutation } = require('./graphApi/api');

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.post('/order', async function (req, res) {
  const { username } = req.headers;
  let gqlReq = new AWS.HttpRequest(appsyncUrl, region);

  gqlReq.headers.host = endpoint;
  gqlReq.headers["Content-Type"] = "multipart/form-data";
  gqlReq.body = JSON.stringify({
    query: createPurchaseMutation,
    variables: {
      input: {
        owner: username
      }
    }
  });

  const signer = new AWS.Signers.V4(gqlReq, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  try {
    const purchaseResp = await axios({
      method: "POST",
      url: appsyncUrl,
      data: gqlReq.body,
      headers: gqlReq.headers,
    });
    
    const purchase_id = purchaseResp.data.data.createPurchase.id;
    console.log(`Created a new purchase with id: ${purchase_id}`);
    const { products } = req.body;

    let promises = [];
    products.forEach((currProduct) => {
      let request = new AWS.HttpRequest(appsyncUrl, region);

      request.headers.host = endpoint;
      request.headers["Content-Type"] = "multipart/form-data";
      request.body = JSON.stringify({
        query: createPurchasedProductMutation,
        variables: {
          input: {
            owner: username,
            product_id: currProduct.product_id,
            amount: currProduct.amount,
            purchase_id: purchase_id
          }
        }
      });

      const signer = new AWS.Signers.V4(request, "appsync", true);
      signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

      promises.push(axios({
        method: "POST",
        url: appsyncUrl,
        data: request.body,
        headers: request.headers,
      }));
    });
    
    await Promise.all(promises);
    console.log('Order lambda executed successfully.');
    res.send('Ordered successfully');
  } catch (err) {
    console.log('An error occured while trying to create an order: ', err);
    res.status(500).send('An error occured while trying to create an order');

  }
});

module.exports = app