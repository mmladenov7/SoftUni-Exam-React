import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import apiFetch from "../api";
import usePersistedState from "../hooks/usePersistedState";
import { dataChecker, errorThrower } from "../utils/utils";

import ErrorContext from "./ErrorContext";

const AuthContext = createContext()
export default AuthContext

export function AuthProvider({ children }) {
    const [user, setUser] = usePersistedState("user", {})
    const navigate = useNavigate()
    const { showError, hideError } = useContext(ErrorContext)


    function validateLogin(data) {
        dataChecker(data)

        if (data.email.length < 8) {
            errorThrower('email must be at least 8 characters long')
        }

        if (data.password.length < 5) {
            errorThrower('password must be at least 5 characters long')
        }

        return true
    }

    async function authenticateUser(e, data, path) {
        e.preventDefault()


        try {
            if (path == 'login') {
                validateLogin(data)
            } else if (path == 'register') {

            }

            const response = await apiFetch.post(`users/${path}`, data)
            if (!response.ok) {
                console.log("error")
            } else {
                const result = await response.json()
                setUser(result)

                hideError()
                
                navigate("/")
            }

        } catch (err) {
            showError(err.message)
        }

    }

    async function logoutUser() {
        const response = await apiFetch.get("users/logout")
        setUser({})
        navigate('/')
    }

    const values = {
        authenticateUser,
        logoutUser,
        user,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}