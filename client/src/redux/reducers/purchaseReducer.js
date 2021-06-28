import Actions from "../actions/index";

const initialState = {
    showSnackbar: {
        isOpen: false,
        msg: '',
        severity: ''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
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
        case Actions.CLOSE_SNACKBAR:
            return {
                ...state,
                showSnackbar: {
                    isOpen: false,
                    msg: "",
                    severity: ""
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