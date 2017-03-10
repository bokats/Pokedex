import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './form';

const mapStateToProps = state => {
  return { errors: state.errors };
};

const mapDispatchToProps = dispatch => {
  return { createPokemon: (pokemon) => dispatch(createPokemon(pokemon)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
