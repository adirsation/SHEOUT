const createPurchasedProductMutation = `
mutation createPurchasedProduct($input: CreatePurchasedProductInput!) {
  createPurchasedProduct(input: $input) {
    id
  }
}
`

const createPurchaseMutation = `
mutation createPurchase($input: CreatePurchaseInput!) {
  createPurchase(input: $input) {
    id
  }
}
`

module.exports = {
  createPurchaseMutation,
  createPurchasedProductMutation
}