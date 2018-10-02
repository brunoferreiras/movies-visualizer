import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import ListMovies from './ListMovies';
import MovieDetails from './MovieDetails';

const Main = () => (
  <main>
    <Route component={Header}/>
    <Switch>
      <Route exact path="/" component={ListMovies} />
      <Route path="/movie/" component={MovieDetails} />
    </Switch>
  </main>
);

export default Main;
