import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserCollection, getUserCollections, postUserCollection, updateUserCollection } from "../services/user-collections-service";

type CollectionType = {
    Id: string,
    Name: string,
    UserId: string,
}

// Initial default state
type userCollectionApi = {
    userCollections?: CollectionType[] | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
}

const initialState: userCollectionApi = {
    userCollections: [],
    status: "idle",
    error: null
}

export const getUserColl = createAsyncThunk('getAllUserCollections', async (userId: string) => {
    const response = await getUserCollections(userId);
    const resData = response.data;

    return resData;
});

type updatePostType = {
    id: string,
    newName: string
}
export const updateUserColl = createAsyncThunk('updateUserCollection', async (data: updatePostType) => {
    const response = await updateUserCollection(data.id, data.newName);
    const resData = response.data;

    return resData;
});

export const postUserColl = createAsyncThunk('postUserCollection', async (data: updatePostType) => {
    const response = await postUserCollection(data.id, data.newName);
    const resData = response.data;

    return resData;
});

export const deleteUserColl = createAsyncThunk('deleteUserCollection', async (id: string) => {
    const response = await deleteUserCollection(id);
    const resData = response.data;

    return resData;
});

const userCollectionSlice = createSlice({
    name: "userCollection",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder// GET
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
            // UPDATE
            .addCase(updateUserColl.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(updateUserColl.fulfilled, (state: any, action: any) => {
                state.status = "idle";

                const updatedCollection = action.payload;
                const index = state.userCollections.findIndex((userCollection: CollectionType) => userCollection.Id === updatedCollection.Id);
                
                if (index !== -1) {
                    state.userCollections[index] = updatedCollection;
                }
            })
            .addCase(updateUserColl.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Update user colletions was failed";
            })
            // POST
            .addCase(postUserColl.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(postUserColl.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.userCollections.push(action.payload);
            })
            .addCase(postUserColl.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Post user colletions was failed";
            })
            // DELETE
            .addCase(deleteUserColl.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(deleteUserColl.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.userCollections = state.userCollections.filter((obj: CollectionType) => obj.Id !== action.payload.Id);
            })
            .addCase(deleteUserColl.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Delete user colletions was failed";
            })
    }
});

export default userCollectionSlice.reducer;