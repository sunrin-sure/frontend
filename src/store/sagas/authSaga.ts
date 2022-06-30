import axios from 'axios'
import { toast } from 'react-toastify'
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'

import { signInAPI, signUpAPI, signOutAPI, getUserAPI, refreshAPI } from '../../utils/api/auth'
import { LoadingToast, updateToastFail, updateToastSuccess } from '../../utils/toast/toast'

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
    const id = LoadingToast('로그인...')
    try {
        const { data: result } = yield call(signInAPI, payload)
        yield put({ type: SIGNIN_SUCCESS, payload: result.data })
        axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`
        localStorage.setItem('first_login', 'true')
        updateToastSuccess(id, '로그인 성공!')
    } catch (error: any) {
        yield put({ type: SIGNIN_ERROR, payload: error })
        updateToastFail(id, '로그인 실패!')
    }
}

function* signOutSaga(): any {
    const id = LoadingToast('로그아웃...')
    try {
        const result = yield call(signOutAPI)
        yield put({ type: SIGNOUT_SUCCESS, payload: result })
        localStorage.removeItem('first_login')
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