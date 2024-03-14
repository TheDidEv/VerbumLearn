import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllServiceWords } from "../services/service-words-service";

type Word = {
    Id: string,
    Word: string,
    CollectionName: string,
    UkrTranslate: string
}

// For initial default state
type serviceWordsApi = {
    words?: Word[] | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
}

const initialState: serviceWordsApi = {
    words: [],
    status: "idle",
    error: null
}

export const getAllWordServ = createAsyncThunk('getAllSerrviceWords', async () => {
    const response = await getAllServiceWords();
    const resData = response.data;

    return resData;
});

const serviceWordSlice = createSlice({
    name: "serviceWord",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllWordServ.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getAllWordServ.fulfilled, (state: any, action: PayloadAction<Word>) => {
                state.status = "idle";
                state.words = action.payload;
            })
            .addCase(getAllWordServ.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Get service word was failed";
            })
    },
});

export default serviceWordSlice.reducer;
