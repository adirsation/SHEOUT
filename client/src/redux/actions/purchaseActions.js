// Action Types
const SUBMIT_ORDER = 'SUBMIT_ORDER'
const SUBMIT_ORDER_SUCCESSFULL = 'SUBMIT_ORDER_SUCCESSFULL'
const FETCH_PURCHASES = 'FETCH_PURCHASES'
const FETCH_PURCHASES_SUCCESSFULL = 'FETCH_PURCHASES_SUCCESSFULL'
const ORDER_FAILED = 'ORDER_FAILED'
const ORDER_SUBMITTED = 'ORDER_SUBMITTED'

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

const orderSubmitted = () => payload => ({
    type: ORDER_SUBMITTED,
    payload
})

const orderFailed = payload => ({
    type: ORDER_FAILED,
    payload
})

export default {
    SUBMIT_ORDER,
    SUBMIT_ORDER_SUCCESSFULL,
    FETCH_PURCHASES,
    FETCH_PURCHASES_SUCCESSFULL,
    ORDER_SUBMITTED,
    ORDER_FAILED,
    orderSubmitted,
    orderFailed,
    submitOrder,
    submitOrderSuccessfull,
    fetchPurchases,
    fetchPurchasesSuccessfull
}
