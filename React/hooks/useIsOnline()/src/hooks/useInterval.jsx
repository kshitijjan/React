import { useEffect } from "react"

export const useInterval = (fn, timeout) => {

    useEffect( () => {
        const interval = setInterval( () => {
            fn()
        }, timeout)
        return () => {
            clearInterval(interval);
        }
    }, [])
}