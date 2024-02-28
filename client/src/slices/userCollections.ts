import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserCollections } from "../services/user-collections";

type CollectionType = {
    Id: string,
    Name: string,
    UserId: string,
}

let userColl: CollectionType[] = [];

// Initial default state
type userCollectionApi = {
    userCollections?: CollectionType[] | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
}

const initialState: userCollectionApi = {
    userCollections: userColl ? userColl : null,
    status: "idle",
    error: null
}

export const getUserColl = createAsyncThunk('getAllUserCollections', async (userId: string) => {
    const response = await getUserCollections(userId);
    const resData = response.data;
    userColl = [...resData];

    return resData;
});

const userCollectionSlice = createSlice({
    name: "userCollection",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserColl.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getUserColl.fulfilled, (state: any, action: PayloadAction<CollectionType>) => {
                state.status = "idle";
                state.userCollections = action.payload;
            })
            .addCase(getUserColl.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Get user colletions was failed";
            })
    }
});

export default userCollectionSlice.reducer;