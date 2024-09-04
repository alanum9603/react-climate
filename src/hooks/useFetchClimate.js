import { useState, useEffect } from "react";

const useFetchClimate = async (lat, lon) => {
    const [fetchState, setFetchState] = useState({state: 'idle', data: null, error: null})
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    useEffect(() => {
        const searchClimate = async () => {
            try {
                setFetchState((old) => ({ 
                    ...old, 
                    state: 'loading' 
                }));
                const response = await fetch(url);
                if (response.ok) {
                    const json = await response.json();
                    setFetchState({
                        state: 'success',
                        data: json,
                        error: null
                    })
                } else {
                    setFetchState({
                        state: 'error',
                        data: null,
                        error: new Error('Sucedió un error')
                    })
                }
            } catch (err) {
                setFetchState({
                    state: 'error',
                    data: null,
                    error: err
                })
            }
        }
        searchClimate(url)
    }, [lat, lon]);
    return fetchState
}

export default useFetchClimate