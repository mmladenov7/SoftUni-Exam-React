import { useState } from "react";

export default function usePersistedState(key, initialValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key)

        if (persistedState) {
            return JSON.parse(persistedState)
        }

        return initialValue
    })

    const setPersistedState = (data) => {
        setState(data)

        if (Object.keys(data).length == 0) {
            localStorage.clear(key)
        } else {
            const stringifiedData = JSON.stringify(data)
            localStorage.setItem(key, stringifiedData)
        }
    }

    return [state, setPersistedState]
}