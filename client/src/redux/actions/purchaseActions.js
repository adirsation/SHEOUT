// Action Types
const SUBMIT_ORDER = 'SUBMIT_ORDER'
const SUBMIT_ORDER_SUCCESSFULL = 'SUBMIT_ORDER_SUCCESSFULL'
const FETCH_PURCHASES = 'FETCH_PURCHASES'
const FETCH_PURCHASES_SUCCESSFULL = 'FETCH_PURCHASES_SUCCESSFULL'

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

export default {
    SUBMIT_ORDER,
    SUBMIT_ORDER_SUCCESSFULL,
    FETCH_PURCHASES,
    FETCH_PURCHASES_SUCCESSFULL,
    submitOrder,
    submitOrderSuccessfull,
    fetchPurchases,
    fetchPurchasesSuccessfull
}
