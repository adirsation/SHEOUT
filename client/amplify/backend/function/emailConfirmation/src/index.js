/* Amplify Params - DO NOT EDIT
	ANALYTICS_SHEOUT_ID
	ANALYTICS_SHEOUT_REGION
	AUTH_SHEOUT9B7CA99C9B7CA99C_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
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
  console.log(`User triggered id: ${event.Records[0].dynamodb.NewImage.owner.S}`)
  var cognitoParams = {
    UserPoolId: event.Records[0].dynamodb.NewImage.owner.S,
    AttributesToGet: [
      'email',
    ],
  };
  await cognito.listUsers(cognitoParams).promise().then(async function (data, error) {
    if (!data) {
      console.log('error fetching users data');
    }
    else {
      var addressTo = data.Users[0].Attributes['email'];
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

      await pinpoint.sendMessages(params).promise().then((resp, error) => {
        if (error) {
          console.error('An error occured while trying to send an email: ', error);
        } else {
          console.log("Email sent!");
        };
      });

    }
  });

  return Promise.resolve('Successfully processed DynamoDB record');
};