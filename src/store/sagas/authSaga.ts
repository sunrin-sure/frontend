import axios from 'axios'
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'

import { signInAPI, signUpAPI, signOutAPI, getUserAPI, refreshAPI } from '../../utils/api/auth'

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
    GET_TOKEN_SUCCESS,
    GET_TOKEN_LOADING,
    GET_TOKEN_ERROR,
    AUTH_USER_SUCCESS,
    AUTH_USER_LOADING,
    AUTH_USER_ERROR
} from '../types/auth'

function* signInSaga({ payload }: any): any {
    try {
        const { data: result } = yield call(signInAPI, payload)
        yield put({ type: SIGNIN_SUCCESS, payload: result.data })
        axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`
        localStorage.setItem('first_login', 'true')
    } catch (error: any) {
        yield put({ type: SIGNIN_ERROR, payload: error })
    }
}

function* signOutSaga(): any {
    try {
        const result = yield call(signOutAPI)
        yield put({ type: SIGNOUT_SUCCESS, payload: result })
        localStorage.removeItem('first_login')
    } catch (error: any) {
        yield put({ type: SIGNOUT_ERROR, payload: error })
    }
}

function* signUpSaga({ payload }: any): any {
    try {
        const result = yield call(signUpAPI, payload)
        yield put({ type: SIGNUP_SUCCESS, payload: result })
    } catch (error: any) {
        yield put({ type: SIGNUP_ERROR, payload: error })
    }
}

function* getTokenSaga(): any {
    try {
        const { data: result } = yield call(refreshAPI)
        yield put({ type: GET_TOKEN_SUCCESS, payload: result.data })
        axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`
        yield call(getAuthUserSaga)
    } catch (error: any) {
        yield put({ type: GET_TOKEN_ERROR, payload: error })
    }
}

function* getAuthUserSaga(): any {
    try {
        const { data: result } = yield call(getUserAPI)
        yield put({ type: AUTH_USER_SUCCESS, payload: result.data })
    } catch (error: any) {
        yield put({ type: AUTH_USER_ERROR, payload: error })
    }
}

function* watchSignIn() {
    yield takeLatest(SIGNIN_LOADING, signInSaga)
}

function* watchSignOut() {
    yield takeLatest(SIGNOUT_LOADING, signOutSaga)
}

function* watchSignUp() {
    yield takeLatest(SIGNUP_LOADING, signUpSaga)
}

function* watchGetToken() {
    yield takeLatest(GET_TOKEN_LOADING, getTokenSaga)
}

function* watchGetAuthUser() {
    yield takeLatest(AUTH_USER_LOADING, getAuthUserSaga)
}

export default function* AuthSaga() {
    yield all([
        fork(watchSignIn),
        fork(watchSignOut),
        fork(watchSignUp),
        fork(watchGetToken),
        fork(watchGetAuthUser)
    ])
}