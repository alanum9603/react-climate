import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import SearchBox from './components/SearchBox';

function App() {
  const climatedatabase = {
    data: {
      current: false,
      daily: false,
    }
  }

  const [climatedata, setClimatedata] = useState(climatedatabase)

  const setData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=`)
        .then(response => response.ok ? response.json() : Promise.reject('Error en la solicitud'))
        .then(data => setClimatedata({ ...climatedata, data}))
        .catch(error => console.error('Hubo un problema: ', error))
  }

  return (
    <div className="App">
      <div className='container'>
        <header>
          <FontAwesomeIcon className='icon' icon={faReact} spin />
          <h1>Climate 🌨</h1>
        </header> 
        <main>
          <section className='search' >
            <SearchBox handleQuery={setData} ></SearchBox>
          </section>
          <section className='climate today' data={climatedata.current} >
            {climatedata.current}
          </section>
          <section className='climate prediction' data={climatedata.daily} ></section>
          <section className='climate day-pred' >day-pred</section>
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
}

export default App;
