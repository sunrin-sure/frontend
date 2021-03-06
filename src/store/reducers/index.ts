import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from "next-redux-wrapper"
import auth from './authReducer'
import { rootState } from '../interface/state.interface'

const rootReducer = (state: rootState | undefined , action: AnyAction):CombinedState<rootState> => {
    switch (action.type) {
        case HYDRATE:
            return { ...action.payload }
        default: {
            const combineReducer = combineReducers({
                auth
            })
            return combineReducer(state, action)
        }
    }
}

export default rootReducer