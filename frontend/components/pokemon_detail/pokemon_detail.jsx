import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.pokemonId !== this.props.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render(){
    let { name, poke_type, attack,
      defense, image_url, moves, items, id } = this.props.pokemon_detail;

    let itemLinks = "";
    if (items) {
      itemLinks = items.map((el, idx) => {
        let target = `pokemon/${id}/item/${el.id}`;
        return <li className="pokemon_item" key={idx}><Link
          to={target}><img src={el.image_url} /></Link></li>;
      });
    }

    return (
      <div>
        <h1>{name}</h1>
        <p>Type: {poke_type}</p>
        <p>Attack: { attack }</p>
        <p>Defense: { defense }</p>
        <p>Moves: {moves ? moves.join(", ") : ""}</p>
        <ul>
          {itemLinks}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default PokemonDetail;
