import './ClimateCard.css'

const ClimateCard = ({ data }) => {
    return <div>
        <h1>Prediction</h1>
        <div className="climatecard">
            {
                data.map(item => {
                    return <div className='item'>
                            {item.date}
                            <div className='climate-img'>
                                <img  src={`https://openweathermap.org/img/wn/${item.weather['0'].icon}@2x.png`} alt={`[${item.weather['0'].description}]`}/><br /> 
                            </div>
                            {item.weather['0'].description}
                        </div>

                } )
            }
        </div>
    </div>
}

export default ClimateCard