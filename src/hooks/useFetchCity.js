import useFetch from "./useFetch"

const useFetchCity = (query) => {
    const res = useFetch(`geo/1.0/direct?q=${query}&limit=5`)
    return res
}

export default useFetchCity