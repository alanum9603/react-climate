import { useEffect, useState } from "react"

const useFetch = (route) => {
    const url = 'localhost/5000';
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${url}${route}`)
            .then(response => response.json())
            .then(data => setData(data))
        return { data }
    }, []);
}

export default useFetch;