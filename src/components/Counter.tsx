import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setCounter } from '../store/slices/countSlice'

const Counter = () => {
    const { value } = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    const onIncrease = useCallback(() => {
        dispatch(setCounter(value + 1))
    }, [dispatch, value])

    const onDecrease = useCallback(() => {
        dispatch(setCounter(value - 1))
    }, [dispatch, value])

    return (
        <div>
            <h1>{value}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter