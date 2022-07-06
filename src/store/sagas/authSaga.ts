import axiosApi from '../../utils/api/axiosApi'

import { all, fork, call, put, takeLatest } from 'redux-saga/effects'

import { signInAPI, signUpAPI, signOutAPI, refreshAPI } from '../../utils/api/auth'
import { LoadingToast, updateToastFail, updateToastSuccess } from '../../utils/toast/toast'

import {
    SIGNIN_SUCCESS,
    SIGNIN_REQUEST,
    SIGNIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT_REQUEST,
    SIGNOUT_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_ERROR,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_REQUEST,
    GET_TOKEN_ERROR,
    AUTH_USER_SUCCESS,
    AUTH_USER_REQUEST,
    AUTH_USER_ERROR
} from '../types/auth'

function* signInSaga({ payload }: any): any {
    const id = LoadingToast('로그인...')
    try {
        const { data: result } = yield call(signInAPI, payload)
        yield put({ type: SIGNIN_SUCCESS, payload: result.data })
        axiosApi.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`
        localStorage.setItem('USER', JSON.stringify(result.data.user))
        updateToastSuccess(id, '로그인 성공!')
    } catch (error: any) {
        yield put({ type: SIGNIN_ERROR, payload: error })
        updateToastFail(id, '로그인 실패!')
    }
}

function* signOutSaga(): any {
    const id = LoadingToast('로그아웃...')
    localStorage.removeItem('USER')
    try {
        const result = yield call(signOutAPI)
        yield put({ type: SIGNOUT_SUCCESS, payload: result })
        updateToastSuccess(id, '로그아웃 성공!')
    } catch (error: any) {
        yield put({ type: SIGNOUT_ERROR, payload: error })
        updateToastFail(id, '로그아웃 실패!')
    }
}

function* signUpSaga({ payload }: any): any {
    const id = LoadingToast('회원가입...')
    try {
        const result = yield call(signUpAPI, payload)
        yield put({ type: SIGNUP_SUCCESS, payload: result })
        updateToastSuccess(id, '회원가입 성공!')
    } catch (error: any) {
        yield put({ type: SIGNUP_ERROR, payload: error })
        updateToastFail(id, '회원가입 실패!')
    }
}

function* getTokenSaga(): any {
    try {
        const { data: result } = yield call(refreshAPI)
        yield put({ type: GET_TOKEN_SUCCESS, payload: result.data })
        axiosApi.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`
    } catch (error: any) {
        yield put({ type: GET_TOKEN_ERROR, payload: error })
    }
}

function* getAuthUserSaga({ payload }: any): any {
    try {
        yield put({ type: AUTH_USER_SUCCESS, payload: payload.user })
    } catch (error: any) {
        yield put({ type: AUTH_USER_ERROR, payload: error })
    }
}

function* watchSignIn() {
    yield takeLatest(SIGNIN_REQUEST, signInSaga)
}

function* watchSignOut() {
    yield takeLatest(SIGNOUT_REQUEST, signOutSaga)
}

function* watchSignUp() {
    yield takeLatest(SIGNUP_REQUEST, signUpSaga)
}

function* watchGetToken() {
    yield takeLatest(GET_TOKEN_REQUEST, getTokenSaga)
}

function* watchGetAuthUser() {
    yield takeLatest(AUTH_USER_REQUEST, getAuthUserSaga)
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
