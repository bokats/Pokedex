import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  return { pokemon_detail: state.pokemon_detail };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePokemon: (pokemon) => dispatch(requestSinglePokemon(pokemon))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
