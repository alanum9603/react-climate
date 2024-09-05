import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import './Container.css'

const Container = () => {
  const [climatedata, setClimatedata] = useState({ city: null, lat: null, lon: null })

  useEffect(() => {
    console.log(climatedata)
  },[climatedata])

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
          {climatedata.city}
        </section>
        <section className='climate prediction' data={climatedata.daily} >
          {climatedata.daily}
        </section>
        <section className='climate day-pred' >day-pred</section>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Container