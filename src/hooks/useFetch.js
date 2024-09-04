import { useState, useEffect } from "react"

const useFetch = (route) => {
    const url = `https://api.openweathermap.org/${route}&appid=${process.env.API_KEY}`;
    const [data, setData] = useState({});
    const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setData(json)
            } catch (error) {
                setError(error)
            }
        }
        fetchData(url)
    }, []);
    return { data, error }
}

export default useFetch;