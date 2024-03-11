import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserCollection, getUserCollections, postUserCollection, updateUserCollection } from "../services/user-collections-service";

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

type updatePostType = {
    id: string,
    newName: string
}
export const updateUserColl = createAsyncThunk('updateUserCollection', async (data: updatePostType) => {
    const response = await updateUserCollection(data.id, data.newName);
    const resData = response.data;

    userColl.forEach((elem) => {
        if (elem.Id === resData.Name) {
            elem.Name = data.newName;
        }
    });
    return resData;
});

export const postUserColl = createAsyncThunk('postUserCollection', async (data: updatePostType) => {
    const response = await postUserCollection(data.id, data.newName);
    const resData = response.data;

    userColl.push(resData);

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
                state.userCollections = action.payload;
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
                state.userCollections = action.payload;
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
                state.userCollections = action.payload;
            })
            .addCase(deleteUserColl.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Delete user colletions was failed";
            })
    }
});

export default userCollectionSlice.reducer;