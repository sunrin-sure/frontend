import { AUTH_API, USERS_API } from '../url'
import axios from 'axios'
import { AuthProps } from '../../interface'

export const signInAPI = async (data: AuthProps) => await axios.post(`${AUTH_API}/login`, data)
export const signUpAPI = async (data: AuthProps) => await axios.post(`${AUTH_API}/register`, data)
export const signOutAPI = async () => await axios.get(`${AUTH_API}/logout`)
export const getUserAPI = async () => await axios.get(`${USERS_API}/me`)
export const refreshAPI = async () => await axios.get(`${AUTH_API}/refresh`)