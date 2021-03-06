/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToPurchase = /* GraphQL */ `
  subscription SubscribeToPurchase($product_id: String!) {
    subscribeToPurchase(product_id: $product_id) {
      id
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      img
      price
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      img
      price
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      img
      price
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase($owner: String) {
    onCreatePurchase(owner: $owner) {
      id
    }
  }
`;
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($owner: String) {
    onUpdatePurchase(owner: $owner) {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase($owner: String) {
    onDeletePurchase(owner: $owner) {
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
export const onCreatePurchasedProduct = /* GraphQL */ `
  subscription OnCreatePurchasedProduct($owner: String) {
    onCreatePurchasedProduct(owner: $owner) {
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
export const onUpdatePurchasedProduct = /* GraphQL */ `
  subscription OnUpdatePurchasedProduct($owner: String) {
    onUpdatePurchasedProduct(owner: $owner) {
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
export const onDeletePurchasedProduct = /* GraphQL */ `
  subscription OnDeletePurchasedProduct($owner: String) {
    onDeletePurchasedProduct(owner: $owner) {
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
