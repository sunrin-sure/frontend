import { createReducer } from 'typesafe-actions'
import {
    SIGNIN_SUCCESS,
    SIGNIN_LOADING,
    SIGNIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT_LOADING,
    SIGNOUT_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_LOADING,
    SIGNUP_ERROR
} from '../types/auth'

interface AuthState {
    isSignedIn: boolean
    isLoading: boolean
    isSignedUp: boolean
    user: any
    errorMsg: string
}

const initialState: AuthState = {
    isSignedIn: false, // 로그인 여부
    isLoading: false, // 로딩 여부
    isSignedUp: false, // 회원가입 여부
    user: null, // 내 정보
    errorMsg: ''
}

export default createReducer<AuthState>(initialState, {
    [SIGNIN_LOADING]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [SIGNIN_SUCCESS]: (state, action) => ({
        ...state,
        isSignedIn: true,
        isLoading: false,
        user: action.payload,
        errorMsg: ''
    }),
    [SIGNIN_ERROR]: (state, action) => ({
        ...state,
        isSignedIn: false,
        isLoading: false,
        user: null,
        errorMsg: action.payload || ""
    }),
    [SIGNOUT_LOADING]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [SIGNOUT_SUCCESS]: (state) => ({
        ...state,
        isSignedIn: false,
        isLoading: false,
        isSignedUp: false,
        user: null,
        errorMsg: ''
    }),
    [SIGNOUT_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        errorMsg: action.payload || ""
    }),
    [SIGNUP_LOADING]: (state) => ({
        ...state,
        isLoading: true,
    }),
    [SIGNUP_SUCCESS]: (state) => ({
        ...state,
        isLoading: false,
        isSignedUp: true,
        errorMsg: ''
    }),
    [SIGNUP_ERROR]: (state, action) => ({
        ...state,
        isLoading: false,
        isSignedUp: false,
        errorMsg: action.payload || ""
    }),
})