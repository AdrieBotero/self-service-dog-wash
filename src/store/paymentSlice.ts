import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { resetApplication } from "./applicationActions";


type PaymentStatus = "idle" | "processing" | "approved" | "declined";

interface PaymentState {
    status: PaymentStatus;
    transactionId: string | null;
}

const initialState: PaymentState = {
    status: 'idle',
    transactionId: null
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        paymentStarted: (state) => {
            state.status = 'processing';
        },
        paymentApproved: (state, action: PayloadAction<string>) => {
            state.status = "approved";
            state.transactionId = action.payload
        },
        paymentDeclined: (state) => {
            state.status = "declined";
        }
    },

    extraReducers: (builder) => {
        builder.addCase(resetApplication, () => {
            return initialState;
        });
    }

});

export const {
    paymentStarted,
    paymentApproved, paymentDeclined
} = paymentSlice.actions;

export default paymentSlice.reducer;