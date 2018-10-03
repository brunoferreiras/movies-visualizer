import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../actions/movies';
import MovieCard from '../components/MovieCard';

class ListMovies extends Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }

  renderCards() {
    let { movies } = this.props;
    return movies.map((movie, i) => (
      <MovieCard
        key={i}
        voteCount={movie.vote_count}
        popularity={movie.popularity}
        title={movie.title}
        description={movie.overview}
        rating={movie.vote_average}
        image={movie.backdrop_path}
        releaseDate={movie.release_date}
      />
    ));
  }

  render() {
    return <div>{this.props.movies.length > 0 && this.renderCards()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPopularMovies: () => dispatch(getPopularMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);
