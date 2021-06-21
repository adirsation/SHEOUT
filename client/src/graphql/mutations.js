/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
      id
      products {
        items {
          id
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
      id
      products {
        items {
          id
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      products {
        items {
          id
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      amount
      purchase_id
      product_id
      product {
        id
        name
        img
        price
        purchases {
          nextToken
        }
        createdAt
        updatedAt
      }
      purchase {
        id
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
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
      amount
      purchase_id
      product_id
      product {
        id
        name
        img
        price
        purchases {
          nextToken
        }
        createdAt
        updatedAt
      }
      purchase {
        id
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
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
      amount
      purchase_id
      product_id
      product {
        id
        name
        img
        price
        purchases {
          nextToken
        }
        createdAt
        updatedAt
      }
      purchase {
        id
        products {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
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
      purchases {
        items {
          id
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      purchases {
        items {
          id
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      purchases {
        items {
          id
          amount
          purchase_id
          product_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
