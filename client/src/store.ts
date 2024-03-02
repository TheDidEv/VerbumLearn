import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import serviceWordsSlice from "./slices/serviceWordsSlice";
import userCollectionSlice from "./slices/userCollections";
import userWords from "./slices/user-words";

const store = configureStore({
    reducer: {
        auth: authSlice,
        serviceWord: serviceWordsSlice,
        userCollection: userCollectionSlice,
        userWords: userWords,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;