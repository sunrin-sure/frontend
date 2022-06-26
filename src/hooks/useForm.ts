import React, { useCallback, useEffect, useState } from "react"
import { AuthProps } from '../ts/interface'

interface useFormProps {
    initialValues: AuthProps
    onSubmit: (values: AuthProps) => void
    validate: (parameter: AuthProps) => AuthProps
}

function useForm({ initialValues, onSubmit, validate }: useFormProps) {
    const [values, setValues] = useState<AuthProps>(initialValues)
    const [errors, setErrors] = useState<AuthProps>({})
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }, [values])

    const handleSubmit = async (e: React.SyntheticEvent) => {
        setIsLoading(true)
        e.preventDefault()
        setErrors(validate(values))
    }

    useEffect(() => {
        if (isLoading) {
            if (Object.keys(errors).length === 0) {
                onSubmit(values)
            }
            setIsLoading(false)
        }
    }, [errors, isLoading])

    return {
        values,
        errors,
        isLoading,
        handleChange,
        handleSubmit,
    }
}

export default useForm