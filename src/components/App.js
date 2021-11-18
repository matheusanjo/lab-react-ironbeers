import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import imgAll from '../assets/beers.png';
import imgRandom from '../assets/random-beer.png';
import imgNew from '../assets/new-beer.png';

import Home from './Home';

function App() {
  return (
    <div className="App">
      <Home img={imgAll} name={"All Beers"}/>
      <Home img={imgRandom} name={"Random Beers"}/>
      <Home img={imgNew} name={"New Beer"}/>
    </div>
  );
}

export default App;
