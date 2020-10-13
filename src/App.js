import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Favorites from './components/Favorites';

const ramcURL = 'https://rickandmortyapi.com/api/character/'


class App extends React.Component {

  state = {
    characters: []
  }

  componentDidMount(){
    fetch(ramcURL)
      .then(response => response.json())
      .then(({results}) => this.setState({characters: results}))
  }



  render() {
    return (
      <>
        <div className="App">
          <h1>Rick and Morty Characters</h1>
          <Favorites />
          <MainContainer characters={this.state.characters} /> 
        </div>
      </>
    )
  }
}

export default App;