import React, { Component } from 'react'
import { connect } from 'react-redux';
import Character from './components/Character';
import { fetchGameOfThrones } from './redux/actions';

class App extends Component {
  state = {
    name: ''
  }

  handleInput = ({ target }) => {
    const name = target.value;
    this.setState({ name });
  }

  render() {
    const { name } = this.state;
    const { dispatch } = this.props;
    return (
      <div>
        <h2>Game of Thrones</h2>
        
        <form onSubmit={ (e) => {
          e.preventDefault();
          dispatch(fetchGameOfThrones(name));
         }}>
          <label htmlFor='i-game'>
            Type a character name:
            <input 
              type="text" 
              id="i-game" 
              value={ name }
              onChange={ this.handleInput }
            />
            <button type='submit'>Enviar</button>
          </label>
        </form>
        <div>
          <Character />
        </div>
      </div>
    )
  }
}

export default connect()(App);