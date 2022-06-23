import { createStore, compose, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import rootReducer from './reducers'
import rootSaga from './sagas'

const devMode = process.env.NODE_ENV === 'development'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const enhancer =
            devMode
            ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
            : compose(applyMiddleware(sagaMiddleware))
    const store = createStore(rootReducer, enhancer);

    (store as any).sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

export default createWrapper(configureStore, { debug: devMode })