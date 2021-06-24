export const listPurchases = /* GraphQL */ `
  query listPurchases {
  listPurchases {
    items {
      products {
        items {
          amount
          product {
            img
            name
            price
          }
        }
      }
      createdAt
    }
  }
}
`;
