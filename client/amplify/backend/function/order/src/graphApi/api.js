export const createPurchasedProductMutation = `
mutation createPurchasedProduct($input: CreatePurchasedProductInput!) {
  createPurchasedProduct(input: $input) {
    amount
    purchase_id
    product {
      id
    }
  }
}
`

export const createPurchaseMutation = `
mutation createPurchase($input: CreatePurchaseInput!) {
  createPurchase(input: $input) {
    id
  }
}
`