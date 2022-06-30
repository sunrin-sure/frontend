import { UserProps } from '../../interface'

export interface AuthState {
    signedIn: boolean
    isLoading: boolean
    signedUp: boolean
    accessToken: string
    user: UserProps | null
    errorMsg: string
}

export interface rootState {
    auth: AuthState
}