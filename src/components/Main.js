import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../containers/Header';
import ListMovies from '../containers/ListMovies';
import MovieDetails from '../containers/MovieDetails';

const Main = () => (
  <main>
    <Route component={Header}/>
    <Switch>
      <Route exact path="/" component={ListMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
    </Switch>
  </main>
);

export default Main;
