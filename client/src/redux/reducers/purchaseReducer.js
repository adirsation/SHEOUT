import Actions from "../actions/index";

export default (state = [], action) => {
    switch (action.type) {
        case Actions.SUBMIT_ORDER_SUCCESSFULL:
            return {
                state
            }
        case Actions.FETCH_PURCHASES_SUCCESSFULL:
            return {
                ...state,
                purchases: action.payload
            }
        case Actions.ORDER_SUBMITTED:
            return {
                ...state,
                showSnackbar: {
                    isOpen: true,
                    msg: "Ordered Successfully!",
                    severity: "success"
                }
            }
        case Actions.ORDER_FAILED:
            return {
                ...state,
                showSnackbar: {
                    isOpen: true,
                    msg: "Order Failed!",
                    severity: "error"
                }
            }
        default:
            return state;
    }
}