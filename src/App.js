import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import SearchBox from './components/SearchBox';

function App() {
  const [query, setQuery] = useState(null)
  return (
    <div className="App">
      <div className='container'>
        <header>
          <FontAwesomeIcon className='icon' icon={faPython} />
          <FontAwesomeIcon className='icon' icon={faReact} spin />
          Hello world
        </header>
        <main>
          <section className='search' >
            <SearchBox></SearchBox>
          </section>
          <section className='climate today' >today</section>
          <section className='climate prediction' >prediction</section>
          <section className='climate day-pred' >day-pred</section>
        </main>
        <footer>Página hecha con React</footer>
      </div>
    </div>
  );
}

export default App;
