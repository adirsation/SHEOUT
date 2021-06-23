/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
      owner
      products {
        items {
          id
          amount
          purchase_id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($owner: String) {
    onUpdatePurchase(owner: $owner) {
      id
      createdAt
      updatedAt
      owner
      products {
        items {
          id
          amount
          purchase_id
          createdAt
          updatedAt
          owner
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
      createdAt
      updatedAt
      owner
      products {
        items {
          id
          amount
          purchase_id
          createdAt
          updatedAt
          owner
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
      amount
      purchase_id
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
      owner
    }
  }
`;
export const onUpdatePurchasedProduct = /* GraphQL */ `
  subscription OnUpdatePurchasedProduct($owner: String) {
    onUpdatePurchasedProduct(owner: $owner) {
      id
      amount
      purchase_id
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
      owner
    }
  }
`;
export const onDeletePurchasedProduct = /* GraphQL */ `
  subscription OnDeletePurchasedProduct($owner: String) {
    onDeletePurchasedProduct(owner: $owner) {
      id
      amount
      purchase_id
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
      owner
    }
  }
`;
