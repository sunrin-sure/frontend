import { all, fork } from 'redux-saga/effects'

import auth from './authSaga'

export default function* rootSaga() {
    yield all([fork(auth)])
}