/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      img
      price
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        img
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
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
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
