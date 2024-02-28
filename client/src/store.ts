import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import serviceWordsSlice from "./slices/serviceWordsSlice";
import userCollectionSlice from "./slices/userCollections";

const store = configureStore({
    reducer: {
        auth: authSlice,
        serviceWord: serviceWordsSlice,
        userCollection: userCollectionSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;