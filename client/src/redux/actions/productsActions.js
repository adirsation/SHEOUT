 // Action Types
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const FETCH_PRODUCTS_SUCCESSFULL = 'FETCH_PRODUCTS_SUCCESSFULL'

// Action Creators
const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
})

const fetchProductsSuccessfull = payload => ({
  type: FETCH_PRODUCTS_SUCCESSFULL,
  payload
})

export default {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESSFULL,
  fetchProducts,
  fetchProductsSuccessfull,
}
