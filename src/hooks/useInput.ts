import { useState } from 'react'

type InputProps = [string, (e: React.ChangeEvent<HTMLInputElement>) => void]

const useInput = (initialValue: string): InputProps => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((e.target.value))
    }
    return [value, onChange]
}

export default useInput