import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import serviceWordsSlice from "./slices/serviceWordsSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        serviceWord: serviceWordsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;