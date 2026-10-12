import { createSlice, type PayloadAction  } from "@reduxjs/toolkit"


type PaymentStatus = "idle" | "processing" | "approved" | "declined";

interface PaymentState {
  status: PaymentStatus;
  transactionId: string | null;
}

const initialState : PaymentState = {
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
        paymentDecline: (state) => {
            state.status = "declined";
        }
    }
});

export const {
  paymentStarted,
  paymentApproved, paymentDecline
} = paymentSlice.actions;

export default paymentSlice.reducer;