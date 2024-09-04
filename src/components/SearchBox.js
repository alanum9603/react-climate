import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import CityItem from './CityItem'
import useFetchCity from '../hooks/useFetchCity'

const SearchBox = ({ handleQuery }) => {
    const [inputcontroller, setInputController] = useState('')
    const [citylist, setCityList] = useState([])
    const res = useFetchCity('Lima');
    console.log(res)

    return (
        <div className='searchbox' >
            <form className='formcity' onSubmit={(e) => e.preventDefault()}>
                <input id='cityquery' className='text' type='text' placeholder='Type a city'
                    value={inputcontroller}
                    onChange={(e) => setInputController(e.target.value)} />
                <button className='submit' type='submit' >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            {
                citylist.map(item => {
                    <CityItem key={`${item.lat}, ${item.lon}`} handleQuery={() => handleQuery(item.lat, item.lon)} >
                        {`${item.name} - ${item.state}, ${item.country}`}
                    </CityItem>
                })
            }
        </div >
    )
}

export default SearchBox