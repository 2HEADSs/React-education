import { useState, useEffect } from "react"

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState({ initialValues });

    const onChangeHandler = (e) => { 
        setFormValues(state => ({...state, [e.target.name]: e.target.value}))
    }
}