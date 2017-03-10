import React from 'react';
import { withRouter } from 'react-router';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
    this.state = {};
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state).then((newPokemon) => {
      this.props.router.push(`pokemon/${newPokemon.id}`);
    });
  }

  errors() {
    if (this.props.errors !== undefined) {
      const listItems = this.props.errors.map( error => <li>error</li> );
      return <ul>{listItems}</ul>;
    }
  }

  render() {

    return (
      <form>
        {this.errors()}
        <label> Name
          <input onChange={this.update("name")} value={this.state.name}/>
        </label>
        <label> Attack
          <input onChange={this.update("attack")} value={this.state.attack}/>
        </label>
        <label> Defense
          <input onChange={this.update("defense")} value={this.state.defense}/>
        </label>
        <label> Type
          <input onChange={this.update("poke_type")} value={this.state.poke_type}/>
        </label>
        <label> Image URL
          <input onChange={this.update("image_url")} value={this.state.image_url}/>
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default withRouter(PokemonForm);
