import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import SearchBox from './SearchBox';
import './Container.css'
import useFetchClimate from '../hooks/useFetchClimate';
import Current from './Current'

const Container = () => {
  const [climatedata, setClimatedata] = useState({ data: null, error: null})
  const climate = useFetchClimate(climatedata)
  console.log(climate)

  return (
    <div className='container'>
      <header>
        <FontAwesomeIcon className='icon' icon={faReact} spin />
        <h1>Climate 🌨</h1>
      </header>
      <main>
        <section className='search' >
          <SearchBox setClimatedata={setClimatedata} ></SearchBox>
        </section>
        <section className='climate today' data={climatedata.current} >
          {climate.state === 'success' && <Current data={climate.data.current} />}
        </section>
        <section className='climate prediction' data={climatedata.daily} >
          {climate.state === 'success'}
        </section>
        <section className='climate day-pred' >day-pred</section>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Container