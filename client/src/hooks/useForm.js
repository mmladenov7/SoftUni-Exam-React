import { useState } from "react";

export function useForm(initialValue) {
    const [data, setData] = useState(initialValue)


    function changeHandler(e) {
        setData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }

    function cleanData(){
        setData(initialValue)
    }

    return {
        data,
        changeHandler,
        cleanData
    }
}