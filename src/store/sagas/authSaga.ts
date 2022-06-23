import { all, fork, takeEvery, call, put } from 'redux-saga/effects'

import { signInAPI, signUpAPI, signOutAPI } from '../../utils/api/auth'

import {
    SIGNIN_SUCCESS,
    SIGNIN_LOADING,
    SIGNIN_ERROR,
    SIGNOUT_SUCCESS,
    SIGNOUT_LOADING,
    SIGNOUT_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_LOADING,
    SIGNUP_ERROR
} from '../types/auth'

function* signInSaga({ payload }: any): any {
    try {
        const result = yield call(signInAPI, payload)
        // yield delay(1000)
        yield put({ type: SIGNIN_SUCCESS, payload: result })
    } catch (error: any) {
        yield put({ type: SIGNIN_ERROR, payload: error.data })
    }
}

function* signOutSaga(): any {
    try {
        const result = yield call(signOutAPI)
        // yield delay(1000)
        yield put({ type: SIGNOUT_SUCCESS, payload: result })
    } catch (error: any) {
        yield put({ type: SIGNOUT_ERROR, payload: error.data })
    }
}

function* signUpSaga({payload}: any): any {
    try {
        const result = yield call(signUpAPI, payload)
        // yield delay(1000)
        yield put({ type: SIGNUP_SUCCESS, payload: result })
    } catch (error: any) {
        yield put({ type: SIGNUP_ERROR, payload: error.data })
    }
}

function* watchSignIn() {
    yield takeEvery(SIGNIN_LOADING, signInSaga)
    yield takeEvery(SIGNOUT_LOADING, signOutSaga)
}

function* watchSignUp() {
    yield takeEvery(SIGNUP_LOADING, signUpSaga)
}

export default function* AuthSaga() {
    yield all([
        fork(watchSignIn),
        fork(watchSignUp)
    ])
}