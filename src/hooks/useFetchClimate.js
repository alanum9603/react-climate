import { useState, useEffect } from "react";

const useFetchClimate = (climatedata) => {
    const [fetchState, setFetchState] = useState({state: 'idle', data: null, error: null})
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${climatedata.lat}&lon=${climatedata.lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    useEffect(() => {
        const date = new Date()
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
                        data: {
                            current: {
                                ...json.current,
                                city: climatedata.city,
                                lat: json.lat,
                                lon: json.lon,
                            },
                            daily: json.daily.map(item => {
                                date.setDate(date.getDate() + 1)
                                return {...item, date: `${date.getDay()}/${date.getMonth()}`}
                            })
                        },
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
        if (climatedata.data !== null) searchClimate(url)
    }, [climatedata, url]);
    return { ...fetchState }
}

export default useFetchClimate