/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
      products {
        items {
          id
          owner
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
      products {
        items {
          id
          owner
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updatePurchasedProduct = /* GraphQL */ `
  mutation UpdatePurchasedProduct(
    $input: UpdatePurchasedProductInput!
    $condition: ModelPurchasedProductConditionInput
  ) {
    updatePurchasedProduct(input: $input, condition: $condition) {
      id
      owner
      amount
      purchase_id
      product_id
      product {
        id
        name
        img
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePurchasedProduct = /* GraphQL */ `
  mutation DeletePurchasedProduct(
    $input: DeletePurchasedProductInput!
    $condition: ModelPurchasedProductConditionInput
  ) {
    deletePurchasedProduct(input: $input, condition: $condition) {
      id
      owner
      amount
      purchase_id
      product_id
      product {
        id
        name
        img
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      img
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      img
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      img
      price
      createdAt
      updatedAt
    }
  }
`;
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
      products {
        items {
          id
          owner
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createPurchasedProduct = /* GraphQL */ `
  mutation CreatePurchasedProduct(
    $input: CreatePurchasedProductInput!
    $condition: ModelPurchasedProductConditionInput
  ) {
    createPurchasedProduct(input: $input, condition: $condition) {
      id
      owner
      amount
      purchase_id
      product_id
      product {
        id
        name
        img
        price
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
