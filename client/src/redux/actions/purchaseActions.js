// Action Types
const SUBMIT_ORDER = 'SUBMIT_ORDER'
const SUBMIT_ORDER_SUCCESSFULL = 'SUBMIT_ORDER_SUCCESSFULL'
const FETCH_PURCHASES = 'FETCH_PURCHASES'
const FETCH_PURCHASES_SUCCESSFULL = 'FETCH_PURCHASES_SUCCESSFULL'
const ORDER_FAILED = 'ORDER_FAILED'
const ORDER_SUBMITTED = 'ORDER_SUBMITTED'
const SUBSCRIBE_TO_ORDERS = 'SUBSCRIBE_TO_ORDERS'
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'

// Action Creators
const submitOrder = payload => ({
    type: SUBMIT_ORDER,
    payload
})

const submitOrderSuccessfull = payload => ({
    type: SUBMIT_ORDER_SUCCESSFULL,
    payload
})

const fetchPurchases = () => ({
    type: FETCH_PURCHASES
})

const fetchPurchasesSuccessfull = payload => ({
    type: FETCH_PURCHASES_SUCCESSFULL,
    payload
})

const subscribeToOrders = () => ({
    type: SUBSCRIBE_TO_ORDERS,
})

const orderSubmitted = () => ({
    type: ORDER_SUBMITTED,
})

const orderFailed = payload => {
    console.log(payload.error);
    return ({
        type: ORDER_FAILED,
    })
}

const closeSnackbar = () => ({
    type: CLOSE_SNACKBAR,
})

export default {
    SUBMIT_ORDER,
    SUBMIT_ORDER_SUCCESSFULL,
    FETCH_PURCHASES,
    FETCH_PURCHASES_SUCCESSFULL,
    ORDER_SUBMITTED,
    ORDER_FAILED,
    CLOSE_SNACKBAR,
    SUBSCRIBE_TO_ORDERS,
    closeSnackbar,
    orderSubmitted,
    subscribeToOrders,
    orderFailed,
    submitOrder,
    submitOrderSuccessfull,
    fetchPurchases,
    fetchPurchasesSuccessfull
}
