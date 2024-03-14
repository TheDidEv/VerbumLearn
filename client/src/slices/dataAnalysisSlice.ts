import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllData } from "../services/data-analysis-service";

type allDataType = {
    WRONG: number,
    MID: number,
    LERNED: number,
}

// FOr initial state
type InitialType = {
    allData: allDataType | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
}

const initialState: InitialType = {
    allData: null,
    status: "idle",
    error: null,
}

export const allDataAnalysis = createAsyncThunk('allDataAnalysis', async (userId: string) => {
    const response = await getAllData(userId);
    const resData = response.data;

    return resData;
});

const dataSlice = createSlice({
    name: "DataAnalysis",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allDataAnalysis.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(allDataAnalysis.fulfilled, (state: any, action: PayloadAction<allDataType>) => {
                state.status = "idle";
                state.allData = action.payload;
            })
            .addCase(allDataAnalysis.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Can not get all user data";
            })
    }
});

export default dataSlice.reducer;