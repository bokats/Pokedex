import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const requestSinglePokemon = (pokemonId) => dispatch => (
  APIUtil.fetchSinglePokemon(pokemonId)
    .then(res => dispatch(receiveSinglePokemon(res)))
);

export const createPokemon = pokemon => dispatch => (
  APIUtil.createPokemon(pokemon).then((newPokemon) => {
    dispatch(receiveSinglePokemon(newPokemon));
    return newPokemon;
  }).fail( errors => {
    dispatch(receivePokemonErrors(errors));
  })
);

export const receivePokemonErrors = errors => {
  debugger;
  return { type: RECEIVE_POKEMON_ERRORS, errors };
};
