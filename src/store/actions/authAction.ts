import { AuthProps, UserProps } from '../../interface'
import {
    SIGNIN_LOADING,
    SIGNOUT_LOADING,
    SIGNUP_LOADING,
    GET_TOKEN_LOADING,
    AUTH_USER_LOADING,
    SIGNUP_RESET
} from '../types/auth'

export const signInAction = (data: AuthProps) => ({
    type: SIGNIN_LOADING,
    payload: {
        email: data.email,
        password: data.password,
    }
})
export const signUpAction = (data: AuthProps) => ({
    type: SIGNUP_LOADING,
    payload: {
        username: data.username,
        email: data.email,
        password: data.password,
        cf_password: data.cf_password
    }
})

export const signUpResetAction = () => ({
    type: SIGNUP_RESET
})

export const signOutAction = () => ({
    type: SIGNOUT_LOADING,
})

export const getTokenAction = () => ({
    type: GET_TOKEN_LOADING,
})

export const getAuthUserAction = (data: UserProps) => ({
    type: AUTH_USER_LOADING,
    payload: {
        user: data
    }
})