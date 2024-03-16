import { PayloadAction, createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import { getWordByCat, delWordById, updateWordById, postWord, addCatToWord } from "../services/user-words-service";

export enum statusWord {
    WRONG,
    MID,
    LERNED
}

type Word = {
    Id: string;
    Word: string;
    Translate: string;
    Priority: number;
    Status: statusWord;
    CreateAt: Date;
    UpdateAt: Date;
}

type createWordType = {
    Id: string;
    Word: string;
    Translate: string;
    IntermediateWWordCollectionName: string;
}

type updateWordByIdType = {
    id: string;
    word: string;
    translate: string;
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

export const getWordByCategory = createAsyncThunk('getUserWordsByCategory', async (catId: string) => {
    const response = await getWordByCat(catId);
    const resData = response.data;

    return resData;
});

export const deleteWordById = createAsyncThunk('deleteWordById', async (Id: string) => {
    const response = await delWordById(Id);
    const resData = response.data;

    return resData;
});

export const updateWord = createAsyncThunk('updateWordById', async (updateData: updateWordByIdType) => {
    const response = await updateWordById(updateData.id, updateData.word, updateData.translate);
    const resData = response.data;

    return resData;
});

export const createWord = createAsyncThunk('createWord', async (data: createWordType) => {
    const response = await postWord(data.Id, data.Word, data.Translate, data.IntermediateWWordCollectionName);
    const resData = response.data;

    return resData;
});

const userWordsSlice = createSlice({
    name: "userWords",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //GET
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
            //DELETE
            .addCase(deleteWordById.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(deleteWordById.fulfilled, (state: any, action: PayloadAction<Word>) => {
                state.status = "idle";
                state.words = state.words.filter((obj: Word) => obj.Id !== action.payload.Id);
            })
            .addCase(deleteWordById.rejected, (state: any, action: any) => {
                state.status = "failed"
                state.error = action.error.message
            })
            //update
            .addCase(updateWord.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(updateWord.fulfilled, (state: any, action: PayloadAction<Word>) => {
                state.status = "idle";

                const updateWord = action.payload;
                const index = state.words.findIndex((elem: Word) => elem.Id === action.payload.Id);

                if (index != -1) {
                    state.words[index] = updateWord;
                }
            })
            .addCase(updateWord.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            //POST
            .addCase(createWord.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(createWord.fulfilled, (state: any, action: PayloadAction<Word>) => {
                state.status = "idle";
                state.words.push(action.payload);
            })
            .addCase(createWord.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export default userWordsSlice.reducer;