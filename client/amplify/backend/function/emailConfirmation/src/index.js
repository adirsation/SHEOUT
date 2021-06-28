/* Amplify Params - DO NOT EDIT
  ANALYTICS_SHEOUT_ID
  ANALYTICS_SHEOUT_REGION
  AUTH_SHEOUT9B7CA99C9B7CA99C_USERPOOLID
  ENV
  REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');

const aws_region = process.env.ANALYTICS_SHEOUT_REGION
const appId = process.env.ANALYTICS_SHEOUT_ID;

const senderAddress = "adir@get-grin.com";
const subject = "Order dispatched successfully!"
var body_html = "<html><body>Your order has been dispatched succssfully</body></html>";
var body_text = "Your order has been dispatched succssfully";
var charset = "UTF-8";

var pinpoint = new AWS.Pinpoint({
  apiVersion: '2016-12-01',
  region: aws_region
});

var cognito = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });


exports.handler = async event => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(record => {
    console.log(record);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });

  console.log('Before cognito request')
  await handleConfirmationMail(event.Records[0].dynamodb.NewImage.owner.S)
};

const handleConfirmationMail = async (userId) => {
  var cognitoParams = {
    UserPoolId: process.env.AUTH_SHEOUT9B7CA99C9B7CA99C_USERPOOLID,
    AttributesToGet: [
      'email',
    ],
    Filter: "username=\"" + userId + "\""
  };

  const response = await new Promise((resolve, reject) => {
    cognito.listUsers(cognitoParams, (err, data) => {
      if (err) {
        reject(err)
        return err
      } else {
        resolve(data)
      }
    })
  })
  if (response.error) {
    console.log('An error occured while trying to get user data from cognito: ', response.error);
  } else {
    console.log(`Users mail: ${response.Users[0].Attributes[0].Value}`);
    var addressTo = response.Users[0].Attributes[0].Value;
    var params = {
      ApplicationId: appId,
      MessageRequest: {
        Addresses: {
          [addressTo]: {
            ChannelType: 'EMAIL'
          }
        },
        MessageConfiguration: {
          EmailMessage: {
            FromAddress: senderAddress,
            SimpleEmail: {
              Subject: {
                Charset: charset,
                Data: subject
              },
              HtmlPart: {
                Charset: charset,
                Data: body_html
              },
              TextPart: {
                Charset: charset,
                Data: body_text
              }
            }
          }
        }
      }
    }
  }

  await new Promise((resolve, reject) => {
    pinpoint.sendMessages(params, (err, data) => {
      if (err) {
        console.error('An error occured while trying to send an email: ' + err);
        reject(err);
      } else {
        resolve("Email sent!");
      }
    });
  });
}