import { createStore, compose, applyMiddleware, AnyAction, Store } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware, { Task } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './reducers'
import rootSaga from './sagas'
import { rootState } from './interface/state.interface'

const devMode = process.env.NODE_ENV === 'development'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const enhancer =
            devMode
            ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
            : compose(applyMiddleware(sagaMiddleware))
    const store = createStore(rootReducer, enhancer);

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export interface SagaStore extends Store<rootState, AnyAction> {
    sagaTask: Task
}

export default createWrapper(configureStore, { debug: devMode })