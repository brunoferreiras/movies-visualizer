import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../containers/Header';
import ListMovies from '../containers/ListMovies';
import MovieDetails from '../containers/MovieDetails';
import FavoritesMovies from '../containers/FavoritesMovies';

const Main = () => (
  <main>
    <Route component={Header}/>
    <Switch>
      <Route exact path="/" component={ListMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route excat path="/favorites" component={FavoritesMovies} />>
    </Switch>
  </main>
);

export default Main;
