import useFetch from "./useFetch"

const useFetchCity = async (query) => {
    res = await useFetch(`geo/1.0/direct?q=${query}&limit=5`)
    console.log(res)
}

export default useFetchCity