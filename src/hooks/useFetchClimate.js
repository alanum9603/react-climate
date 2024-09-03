import useFetch from "./useFetch"

const useFetchClimate = async (lat, lon) => {
    res = await useFetch(`data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric`)
    console.log(res)
}

export default useFetchCity