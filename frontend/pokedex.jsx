import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchSinglePokemon} from './util/api_util';
import { receiveSinglePokemon, requestSinglePokemon, createPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.createPokemon = createPokemon;
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
