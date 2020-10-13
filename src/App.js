import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Favorites from './components/Favorites';

const ramcURL = 'https://rickandmortyapi.com/api/character/'


class App extends React.Component {

  state = {
    characters: [],
    favorites: []
  }

  componentDidMount(){
    fetch(ramcURL)
      .then(response => response.json())
      .then(({results}) => this.setState({characters: results}))
  }

  addToFavorites = (character) => {
    this.setState({favorites: [...this.state.favorites, character]})
  }



  render() {
    return (
      <>
        <div className="App">
          <Favorites />
          <h1>Rick and Morty Characters</h1>
          <MainContainer 
            characters={this.state.characters} 
            addToFavorites={this.addToFavorites} 
          /> 
        </div>
      </>
    )
  }
}

export default App;