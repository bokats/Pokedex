import React from 'react';
import { Link } from 'react-router';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const linkTarget = `/pokemon/${this.props.poke.id}`;

    return (
      <li>
        <Link to={linkTarget}>
          <h4>
            <img src={this.props.poke.image_url}/>
            {this.props.poke.name}
          </h4>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
