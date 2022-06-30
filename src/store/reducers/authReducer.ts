import { createReducer } from 'typesafe-actions'
import { AuthState } from '../interface/state.interface'
import {
    SIGNIN_SUCCESS,
    SIGNIN_LOADING,
    SIGNIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT_LOADING,
    SIGNOUT_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_LOADING,
    SIGNUP_ERROR,
    SIGNUP_RESET,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_LOADING,
    GET_TOKEN_ERROR,
    AUTH_USER_SUCCESS,
    AUTH_USER_LOADING,
    AUTH_USER_ERROR
} from '../types/auth'

const initialState: AuthState = {
    signedIn: false, // 로그인 여부
    isLoading: false, // 로딩 여부
    signedUp: false, // 회원가입 여부
    accessToken: '',
    user: null, // 내 정보
    errorMsg: ''
}

export default createReducer<AuthState>(initialState, {
    // signin
    [SIGNIN_LOADING]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [SIGNIN_SUCCESS]: (state, action) => ({
        ...state,
        signedIn: true,
        isLoading: false,
        user: action.payload.user || "",
        errorMsg: ''
    }),
    [SIGNIN_ERROR]: (state, action) => ({
        ...state,
        signedIn: false,
        isLoading: false,
        user: null,
        errorMsg: action.payload || ""
    }),

    // signout
    [SIGNOUT_LOADING]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [SIGNOUT_SUCCESS]: (state) => ({
        ...state,
        signedIn: false,
        isLoading: false,
        signedUp: false,
        user: null,
        errorMsg: ''
    }),
    [SIGNOUT_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        errorMsg: action.payload || ""
    }),

    // signup
    [SIGNUP_LOADING]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [SIGNUP_SUCCESS]: (state) => ({
        ...state,
        isLoading: false,
        signedUp: true,
        errorMsg: ''
    }),
    [SIGNUP_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        signedUp: false,
        errorMsg: action.payload || ""
    }),
    [SIGNUP_RESET]: (state) => ({
        ...state,
        signedUp: false,
    }),


    // get token
    [GET_TOKEN_LOADING]: (state) => ({
        ...state,
        isLoading: true,
        accessToken: '',
    }),
    [GET_TOKEN_SUCCESS]: (state, action) => ({
        ...state,
        isLoading: false,
        accessToken: action.payload.accessToken || "",
        errorMsg: ''
    }),
    [GET_TOKEN_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        accessToken: "",
        errorMsg: action.payload || ""
    }),

    // get auth user
    [AUTH_USER_LOADING]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [AUTH_USER_SUCCESS]: (state, action) => ({
        ...state,
        isLoading: false,
        signedIn: true,
        user: action.payload || "",
        errorMsg: ''
    }),
    [AUTH_USER_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        user: null,
        errorMsg: action.payload || ""
    }),
})