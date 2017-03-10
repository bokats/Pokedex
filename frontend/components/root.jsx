import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon_detail/pokemon_detail_container';
import ItemDetailContainer from './pokemon_item/item_detail_container';
import PokemonFormContainer from './form/form_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={ PokemonIndexContainer } >
        <IndexRoute component={ PokemonFormContainer } />
        <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} >
          <Route path="item/:itemId" component={ItemDetailContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
