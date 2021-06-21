const gql = require('graphql-tag');

export const orderMutation = `
mutation createPurchase($input: CreatePurchaseInput!) {
    createPurchase(input: $input) {
    products {
      items {
        amount
        product_id
      }
    }
  }
}
`