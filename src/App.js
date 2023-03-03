import './App.css';
import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';

/* Application qui permet de rechercher un film par son titre et d'afficher les résultats de la recherche 
  * 1. Créer un composant SearchBar qui contient un champ de saisie et un bouton de recherche
  * 2. Créer un composant MovieList qui affiche la liste des films trouvés
  * 3. Créer un composant Movie qui affiche les informations d'un film
  * On affiche le titre, l'année de sortie, le réalisateur et l'affiche du film
  * Grâce à la librairie axios, faire une requête HTTP vers l'API de OMDb pour récupérer les films correspondant au titre saisi
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      movies: [],
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearchClick = () => {
    fetch(`http://www.omdbapi.com/?s=${this.state.searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search });
      });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchValue={this.state.searchValue} // on passe la valeur du state à la props searchValue
          onSearchChange={this.handleSearchChange} // on passe la fonction handleSearchChange à la props onSearchChange
          onSearchClick={this.handleSearchClick} // on passe la fonction handleSearchClick à la props onSearchClick
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
