import Actions from "../actions/purchaseActions";

export default (state = [], action) => {
  switch (action.type) {
    case Actions.SUBMIT_ORDER_SUCCESSFULL:
      return {
        //
      }
    default:
      return state;
  }
}