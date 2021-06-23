/* Amplify Params - DO NOT EDIT
  API_SHEOUT_GRAPHQLAPIENDPOINTOUTPUT
  API_SHEOUT_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */
var express = require('express')
var bodyParser = require('body-parser')
const https = require('https');
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
  const gqlReq = new AWS.HttpRequest(appsyncUrl, region);

  gqlReq.headers.host = endpoint;
  gqlReq.headers["Access-Control-Allow-Origin"] = "*";
  gqlReq.headers["Content-Type"] = "application/json";
  gqlReq.body = JSON.stringify({
    query: createPurchaseMutation,
    operationName: "orderApi",
  });

  const signer = new AWS.Signers.V4(gqlReq, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  try {
    const purchaseResp = await axios({
      method: "POST",
      url: appsyncUrl,
      data: gqlReq.body,
      headers: gqlReq.headers,
      variables: {}
    });

    const purchase_id = purchaseResp.data.createPurchase.id;

    req.body.products.map(currProduct => {
      gqlReq.body = JSON.stringify({
        query: orderMutation,
        operationName: "orderApi",
        variables: {
          purchasedProductProductId: currProduct.product_id,
          amount: currProduct.amount,
          purchase_id
        }
      });
    });

    if (response.ok()) {
      console.log('Lambda executed successfully', response.status);
      res.status(200).send('Order submitted successfully');
    } else {
      console.log('Request to GraphQL Failed, error: ', response.error);
      res.status(500).send('An error occured while tried to make an order');
    }
  } catch (err) {
    console.log('An error occured while tried made an order: ', err);
    res.status(500).send('An error occured while tried to make an order');

  }
});

module.exports = app