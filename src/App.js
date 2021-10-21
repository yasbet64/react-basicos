import logo from './logo.svg';
import './App.css';
import React from 'react';
import AjaxHooks from "./components/AjaxHooks"
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr></hr>
        <AjaxHooks/>
        <hr></hr>
        <HooksPersonalizados/>
        <hr></hr>
        <Referencias/>
        <hr></hr>
        <Formularios/>
        <hr></hr>
        <hr></hr>
        <Estilos/>
        <hr></hr>
        <ComponentesEstilizados/>
        <hr></hr>
      </header>
      
      <footer>
        copy@yaS
      </footer>
    </div>
  );
}

export default App;
