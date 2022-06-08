import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { createLogger } from 'redux-logger'

import reducer from './slices'

const devMode = process.env.NODE_ENV === 'development'

const logger = createLogger()

const initialState = {}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: devMode,
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
})

export const makeStore = () => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper(makeStore)