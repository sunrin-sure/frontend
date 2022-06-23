import { AuthProps } from '../../ts/interface'
import {
    SIGNIN_LOADING,
    SIGNOUT_LOADING,
    SIGNUP_LOADING,
} from '../types/auth'

export const sginInAction = (data: AuthProps) => ({
    type: SIGNIN_LOADING,
    payload: {
        data
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

export const signOutAction = () => ({
    type: SIGNOUT_LOADING,
})