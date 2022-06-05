import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommonState {
    value: number
}

const initialState: CommonState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
})

export const { setCounter } = counterSlice.actions

export default counterSlice.reducer