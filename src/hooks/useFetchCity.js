import { useState, useEffect } from "react";

const useFetchCity = (city) => {
    const [fetchState, setFetchState] = useState({state: 'idle', data: null, error: null})
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;
    useEffect(() => {
        const searchCity = async () => {
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
        searchCity(url)
    }, [city, url]);
    return fetchState
}

export default useFetchCity