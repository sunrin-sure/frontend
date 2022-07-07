import { AuthProps, UserProps } from '../../interface'
import {
    SIGNUP_RESET,
    AUTH_USER_REQUEST,
    GET_TOKEN_REQUEST,
    SIGNOUT_REQUEST,
    SIGNUP_REQUEST,
    SIGNIN_REQUEST
} from '../types/auth'

export const signInAction = (data: AuthProps) => ({
    type: SIGNIN_REQUEST,
    payload: {
        email: data.email,
        password: data.password,
    }
})
export const signUpAction = (data: AuthProps) => ({
    type: SIGNUP_REQUEST,
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
    type: SIGNOUT_REQUEST,
})

export const getTokenAction = () => ({
    type: GET_TOKEN_REQUEST,
})

export const getAuthUserAction = () => ({
    type: AUTH_USER_REQUEST,
})