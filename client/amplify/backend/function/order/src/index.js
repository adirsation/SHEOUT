const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  const username = extractUsername(event)
  console.log(`EVENT: ${event.httpMethod} ${event.path}, username: ${username}, body:`, event.body)
  if (!!username) {
    event.headers.username = username
  }
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
}

const extractUsername = event => {
  const identity = event.requestContext && event.requestContext.identity
  if (!identity) {
    return null
  }
  const cognitoString = identity.cognitoAuthenticationProvider
  return cognitoString && cognitoString.split('CognitoSignIn:')[1]
}