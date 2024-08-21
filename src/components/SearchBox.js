import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SearchBox = () => {
    const [cityquery, setCityQuery] = useState(null)
    return (
        <div className='searchbox' >
            <div className='formcity'>
                <form onSubmit={(e) => { e.preventDefault(); setCityQuery(e.target.cityquery.value); }}>
                    <input id='cityquery' placeholder='Type a city' className='text' type='text' />
                    <button className='submit' type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>
            <div>{cityquery}</div>
        </div >
    )
}

export default SearchBox