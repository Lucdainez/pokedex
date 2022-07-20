import React from "react";
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
    render() {
     const pokemons = this.props.pokemons;
     const pokas = pokemons.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />);
     return pokas;
    }
};

Pokedex.propTypes = {
    pokemons: PropTypes.array
}


export default Pokedex;