import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./paymentSlice";
export const store = configureStore(
    {
        reducer: {
            payment: paymentReducer
        }
    }
);

export type RootState = ReturnType<typeof store.getState>;