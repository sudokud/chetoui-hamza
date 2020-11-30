import { useReducer } from 'react'
import storage from 'local-storage-fallback'

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            storage.setItem("isDark", !state.isDark)
            return {
                ...state,
                isDark: !state.isDark
            }
        case "TOGGLE_DRAWER":
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default: {
            return state
        }
    }
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark")) : false,
        isOpen: false
    })

    return { state, dispatch }
}

export default useGlobalState