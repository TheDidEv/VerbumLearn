import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../api/axiosInstance';

// Initial user type
type User = {
    Email: string;
    Password: string;
}

type NewUser = User & {
    UserName: string;
}

type UserBasicInfo = {
    Id: string;
    Email: string;
    UserName: string;
    CreateAt: string
}

type UserProfileData = {
    UserName: string;
    Email: string;
}

// For initial default state 
type AuthApiState = {
    basicUserInfo?: UserBasicInfo | null;
    userProfileData?: UserProfileData | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
};

const initialState: AuthApiState = {
    basicUserInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") as string)
        : null,
    userProfileData: undefined,
    status: "idle",
    error: null,
};

// Make axios request (check ../api/axiosInstance)
export const login = createAsyncThunk("login", async (data: User) => {
    const response = await axiosInstance.post("/user/login", data);

    const resAllData = response.data;
    const allData = JSON.stringify(resAllData);

    const resData = response.data.user;
    const user = JSON.stringify(resData)

    localStorage.setItem("userAllData", allData);
    localStorage.setItem("userInfo", user);
    return resData;
});

export const register = createAsyncThunk("register", async (data: NewUser) => {
    const response = await axiosInstance.post("/user/registration", data);

    const resAllData = response.data;
    const allData = JSON.stringify(resAllData);

    const resData = response.data.user;
    const user = JSON.stringify(resData)

    localStorage.setItem("userAllData", allData);
    localStorage.setItem("userInfo", user);
    return resData;
});

export const logout = createAsyncThunk("logout", async () => {
    const response = await axiosInstance.post("/user/logout", {});
    const resData = response.data.user;

    localStorage.removeItem('userAllData');
    localStorage.removeItem("userInfo");
    return resData;
});

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(login.fulfilled, (state: any, action: PayloadAction<UserBasicInfo>) => {
                state.status = "idle";
                state.basicUserInfo = action.payload;
            })
            .addCase(login.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Login failed";
            })

            .addCase(register.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(register.fulfilled, (state: any, action: PayloadAction<UserBasicInfo>) => {
                state.status = "idle";
                state.basicUserInfo = action.payload;
            })
            .addCase(register.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Register failed";
            })

            .addCase(logout.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(logout.fulfilled, (state: any, action: any) => {
                state.status = "idle";
                state.basicUserInfo = action.payload;
            })
            .addCase(logout.rejected, (state: any, action: any) => {
                state.status = "failed";
                state.error = action.error.message || "Logout failed";
            })
    },
});

export default authSlice.reducer;
