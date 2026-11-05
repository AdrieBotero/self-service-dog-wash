import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { resetApplication } from "./applicationActions";

import type { WashSession } from "@pupwash/shared-types";

interface WashSessionState {
    session: WashSession | null;
}

const initialState: WashSessionState = {
    session: null
}

const washSessionSlice = createSlice({
    name: 'washSession',
    initialState,
    reducers: {
        setWashSession: (state, action: PayloadAction<WashSession>) => {
            state.session = action.payload

        }

    },
    extraReducers: (builder) => {
        builder.addCase(resetApplication, () => {
            return initialState;
        });
    }
});

export const { setWashSession } = washSessionSlice.actions

export default washSessionSlice.reducer;