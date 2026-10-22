import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./paymentSlice";
import washSessionReducer  from "./washSessionSlice";

export const store = configureStore(
    {
        reducer: {
            payment: paymentReducer,
            washSession: washSessionReducer
        }
    }
);

export type RootState = ReturnType<typeof store.getState>;