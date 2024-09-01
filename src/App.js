import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import SearchBox from './components/SearchBox';
import useFetch from './hooks/useFetch';

function App() {
  const climatedatabase = {
    data: {
      current: false,
      daily: false,
    }
  }

  const [climatedata, setClimatedata] = useState(climatedatabase)

  const setData = (lat, lon) => {
    useFetch(`data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric`)
        .then(data => console.log(data))
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
