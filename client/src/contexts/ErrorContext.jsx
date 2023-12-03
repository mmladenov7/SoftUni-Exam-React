import { createContext, useState } from "react";


const ErrorContext = createContext()
export default ErrorContext

export function ErrorProvider({ children }) {
    const [error, setError] = useState()

    function showError(error){
        setError(error)
    }

    function hideError(){
        setError(undefined)
    }

    const values = {
        error,
        showError,
        hideError
    }

    return (
        <ErrorContext.Provider value={values}>
            {children}
        </ErrorContext.Provider>
    )
}