import './CityItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

const CityItem = ({ children, setClimatedata }) => {
    return (
        <div className='option' >
            <div className='description'>{children}</div>
            <button onClick={setClimatedata}>
                <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default CityItem