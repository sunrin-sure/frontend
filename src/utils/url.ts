export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://api.rarp.kr'

export const AUTH_API = `${BASE_URL}/auth`
export const USERS_API = `${BASE_URL}/users`