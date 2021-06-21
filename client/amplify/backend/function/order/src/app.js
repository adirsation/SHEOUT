/* Amplify Params - DO NOT EDIT
	API_SHEOUT_GRAPHQLAPIENDPOINTOUTPUT
	API_SHEOUT_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */var express = require('express')
var bodyParser = require('body-parser')
const { print } = require('graphql');
const axios = require('axios');
const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_SHEOUT_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const apiKey = process.env.API_SHEOUT_GRAPHQLAPIKEYOUTPUT;
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const orderMutation = require('./graphApi/api');

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.post('/', function (req, res) {
  // Parsing products map
  const body = req.map(currProduct => {
    return {
      product_id: currProduct.getKey(),
      amount: currProduct.getValue()
    }
  })

  const gqlReq = new AWS.HttpRequest(appsyncUrl, region);

  gqlReq.method = "POST";
  gqlReq.path = "/graphql";
  gqlReq.headers.host = endpoint;
  gqlReq.headers["Content-Type"] = "application/json";
  gqlReq.body = JSON.stringify({
    query: order,
    operationName: "orderSubmit",
    variables: body
  });

  if (apiKey) {
    gqlReq.headers["x-api-key"] = apiKey;
  } else {
    const signer = new AWS.Signers.V4(req, "appsync", true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  }

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      let data = "";

      result.on("data", (chunk) => {
        data += chunk;
      });

      result.on("end", () => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });

  res.status(200).send('Order submitted successfully');
});

module.exports = app
