// Action Types
const SUBMIT_ORDER = 'SUBMIT_ORDER'
const SUBMIT_ORDER_SUCCESSFULL = 'SUBMIT_ORDER_SUCCESSFULL'

// Action Creators
const submitOrder = payload => ({
    type: SUBMIT_ORDER,
    payload
})

const submitOrderSuccessfull = payload => ({
    type: SUBMIT_ORDER_SUCCESSFULL,
    payload
})

export default {
    SUBMIT_ORDER,
    SUBMIT_ORDER_SUCCESSFULL,
    submitOrder,
    submitOrderSuccessfull,
}
