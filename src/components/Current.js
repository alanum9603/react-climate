const Current = ({ data }) => {
    console.log(data)
    return <>
        <h1>{data.temp}°C</h1>
        {data.city} <br />
        Visibility: {data.visibility} <br />
        Pressure: {data.pressure} <br />
        Humidity: {data.humidity} <br />
        UVI: {data.uvi} <br />
    </>
}

export default Current