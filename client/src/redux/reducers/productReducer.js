import Actions from "../actions/productsActions";

export default (state = [], action) => {
  switch (action.type) {
    case Actions.FETCH_PRODUCTS_SUCCESSFULL:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}