import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWordByCat } from "../services/user-words-service";

enum statusWord {
    WRONG,
    MID,
    LERNED
}

type Word = {
    Id: string
    Word: string
    Translate: string
    Priority: number
    Status: statusWord
    CreateAt: Date
    UpdateAt: Date
}

// For initial default state

type userWordApi = {
    words: Word[] | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
}

const initialState: userWordApi = {
    words: [],
    status: "idle",
    error: null
}

export const getWordByCategory = createAsyncThunk('getUserWordsByCategory', async (catId:string) => {
    const response = await getWordByCat(catId);
    const resData = response.data;

    return resData;
});

const userWordsSlice = createSlice({
    name: "userWords",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWordByCategory.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getWordByCategory.fulfilled, (state: any, action: PayloadAction<Word>) => {
                state.status = "idle";
                state.words = action.payload;
            })
            .addCase(getWordByCategory.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Get user words was failed";
            })
    }
});

export default userWordsSlice.reducer;