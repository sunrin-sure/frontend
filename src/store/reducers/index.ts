import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from "next-redux-wrapper"
import auth from './authReducer'
import { rootState } from '../interface/state.interface'

const rootReducer = (state: rootState | undefined, action: AnyAction): CombinedState<rootState> => {
    switch (action.type) {
        case HYDRATE:
            const nextState = {
                ...state,
                ...action.payload,
            }
            if (state?.auth) nextState.auth = state?.auth
            return nextState
        default: {
            const combineReducer = combineReducers({
                auth
            })
            return combineReducer(state, action)
        }
    }
}

export default rootReducer