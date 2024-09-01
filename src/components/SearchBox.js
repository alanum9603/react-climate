import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import CityItem from './CityItem'
import useFetch from '../hooks/useFetch'

const SearchBox = ({handleQuery}) => {
    const [inputcontroller, setInputController] = useState('')
    const [cityquery, setCityQuery] = useState(null)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await useFetch(`geo/1.0/direct?q=${cityquery}&limit=5`)
            console.log(result)
        }
    }, [cityquery])
    return (
        <div className='searchbox' >
            <form className='formcity' onSubmit={(e) => { e.preventDefault(); setCityQuery(e.target.cityquery.value); }}>
                <input id='cityquery' value={inputcontroller} onChange={(e) => setInputController(e.target.value)} placeholder='Type a city' className='text' type='text' />
                <button className='submit' type='submit' ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            {cityquery && data.map(item => <CityItem key={[item.lat, item.lon]} handleQuery={() => handleQuery(item.lat, item.lon)} >{`${item.name} - ${item.state}, ${item.country}`}</CityItem>)}
        </div >
    )
}

export default SearchBox