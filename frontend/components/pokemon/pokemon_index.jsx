import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const listItems = this.props.pokemon.map( (poke, idx) => {
      return (
        <li key={idx}>
          <h2>{poke.name}</h2>
          <img src={poke.image_url}/>
        </li>
      );
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default PokemonIndex;
