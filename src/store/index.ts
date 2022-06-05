import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { createLogger } from 'redux-logger'

import counter from './slices/countSlice'

const logger = createLogger()

const combineReducer = combineReducers({
    counter
})

const initialState = {}

const store = configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
})

export const makeStore = () => store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const wrapper = createWrapper(makeStore)