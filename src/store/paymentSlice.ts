import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: 'idle',
    transactionId: null
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        paymentStarted: (state) => {
            state.status = 'processing..';
        },
        paymentApproved: (state) => {
            state.status = "approved";
        },
        paymentDecline: (state) => {
            state.status = "decline";
        }
    }
});