import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModels } from '../../models/user_models';

interface userState {
    user: UserModels | null;
    loginError: string | null;
    loginLoading: boolean;
    loginMessage: string | null;
    registerLoading: boolean;
    registerError: string | null;
    registerMessage: string | null;
}

const initialState: userState = {
    user: null,
    loginError: null,
    loginLoading: false,
    loginMessage: null,
    registerLoading: false,
    registerError: null,
    registerMessage: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loginLoading = true;
            state.loginMessage = null;
            state.loginError = null;
        },
        loginSucces: (state, action: PayloadAction<UserModels>) => {
            state.user = action.payload;
            state.loginLoading = false;
            state.loginError = null;
            state.loginMessage = 'Login Succesful';
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loginLoading = false;
            state.loginError = action.payload;
            state.loginMessage = null;
        },
        registerStart: (state) => {
            state.registerLoading = true;
            state.loginError = null;
            state.loginMessage = null;
        },
        registerSucces : (state, action: PayloadAction<UserModels>) => {
            state.user = action.payload;
            state.registerLoading = false;
            state.registerMessage = 'Register Succesfull';
        },
        registerFailure: (state, action: PayloadAction<string>) => {
            state.registerLoading = false;
            state.registerError = action.payload;
            state.registerMessage = null;
        },
        logout: (state) => {
            state.user = null;
            state.loginError = null;
            state.loginLoading = false;
            state.loginMessage = null;
            state.registerLoading = false;
            state.registerError = null;
            state.registerMessage = null;
        },
    },
});

export const {
    loginStart,
    loginFailure,
    loginSucces,
    logout,
    registerFailure,
    registerStart,
    registerSucces,
} = userSlice.actions;

export default userSlice.reducer;
