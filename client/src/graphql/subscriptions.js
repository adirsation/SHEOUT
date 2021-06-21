/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase($owner: String!) {
    onCreatePurchase(owner: $owner) {
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($owner: String!) {
    onUpdatePurchase(owner: $owner) {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase($owner: String!) {
    onDeletePurchase(owner: $owner) {
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
export const onCreatePurchasedProduct = /* GraphQL */ `
  subscription OnCreatePurchasedProduct($owner: String!) {
    onCreatePurchasedProduct(owner: $owner) {
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
export const onUpdatePurchasedProduct = /* GraphQL */ `
  subscription OnUpdatePurchasedProduct($owner: String!) {
    onUpdatePurchasedProduct(owner: $owner) {
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
export const onDeletePurchasedProduct = /* GraphQL */ `
  subscription OnDeletePurchasedProduct($owner: String!) {
    onDeletePurchasedProduct(owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
