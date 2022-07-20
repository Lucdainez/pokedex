import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <>
      <header className='h1-header'>
        <h1>Minha Pokedex</h1>
      </header>
      <main className='main'>
          <Pokedex pokemons={ pokemons } />
      </main>
      </>
    );
  }
}

export default App;
