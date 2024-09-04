import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useFetchCity from '../hooks/useFetchCity'
import CityItem from "./CityItem"

const SearchBox = ({ handleQuery }) => {
    const [inputcontroller, setInputController] = useState(null)
    const citylist = useFetchCity(inputcontroller)

    return (
        <div className='searchbox' >
            <form className='formcity' onSubmit={(e) => {e.preventDefault(); setInputController(e.target.value);}}>
                <input id='cityquery' className='text' type='text' placeholder='Type a city' />
                <button className='submit' type='submit' >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            {
                inputcontroller && citylist.data.map(item => {
                    <CityItem key={`${item.lat}, ${item.lon}`} handleQuery={() => handleQuery(item.lat, item.lon)} >
                        {`${item.name} - ${item.state}, ${item.country}`}
                    </CityItem>
                })
            }
        </div >
    )
}

export default SearchBox