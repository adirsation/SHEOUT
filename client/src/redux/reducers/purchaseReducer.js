import Actions from "../actions/purchaseActions";

export default (state = [], action) => {
  switch (action.type) {
    case Actions.SUBMIT_ORDER_SUCCESSFULL:
      return {
        
      }
    case Actions.FETCH_PURCHASES_SUCCESSFULL:
        return {
            ...state,
            purchases: action.payload
        }
    default:
      return state;
  }
}