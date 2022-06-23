import { AUTH_API } from '../url'
import axios from 'axios'
import { AuthProps } from '../../ts/interface'

type Params = {
    uuid: string
    id?: number
}

export const signInAPI = async (params: AuthProps) => await axios.post(`${AUTH_API}/login`, { params })
export const signUpAPI = async (data: AuthProps) => await axios.post(`${AUTH_API}/register`, data)
export const signOutAPI = async () => await axios.get(`${AUTH_API}/logout`)
export const refreshAPI = async (params: Params) => await axios.get(`${AUTH_API}/refresh`, { params })