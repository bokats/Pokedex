import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const listItems = this.props.pokemon.map( (poke, idx) => (
      <PokemonIndexItem poke={poke} key={idx} />
    ));
    return (
      <div>
        {this.props.children}
        <ul className="pokemon_index"> {listItems} </ul>
      </div>
    );
  }
}

export default PokemonIndex;
