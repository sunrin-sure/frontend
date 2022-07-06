import { AUTH_API, USERS_API } from '../url'
import axiosApi from './axiosApi'
import { AuthProps } from '../../interface'

export const signInAPI = async (data: AuthProps) => await axiosApi.post(`${AUTH_API}/login`, data)
export const signUpAPI = async (data: AuthProps) => await axiosApi.post(`${AUTH_API}/register`, data)
export const signOutAPI = async () => await axiosApi.get(`${AUTH_API}/logout`)
export const getUserAPI = async () => await axiosApi.get(`${USERS_API}/me`)
export const refreshAPI = async () => await axiosApi.get(`${AUTH_API}/refresh`)