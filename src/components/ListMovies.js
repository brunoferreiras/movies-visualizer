import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { URL_POPULAR_MOVIES } from '../utilities/constants';
import axios from 'axios';

class ListMovies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: null
    }
  }

  componentDidMount() {
    axios.get(`${URL_POPULAR_MOVIES}`)
          .then(response => this.setState({ movies: response.data.results}));
  }

  renderCards() {
    let { movies } = this.state;
    return movies.map((item, i) =>
      <MovieCard
        key={i}
        voteCount={item.vote_count}
        popularity={item.popularity}
        title={item.title}
        description={item.overview}
        rating={item.vote_average}
        image={item.backdrop_path}
        releaseDate={item.release_date}
      />
    );
  }

  render() {
    return (
      <div>
        { this.state.movies && this.renderCards() }
      </div>
    );
  }
}

export default ListMovies;
