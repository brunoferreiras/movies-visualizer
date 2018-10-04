import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFavorite, listFavorites } from '../actions/favorites';
import MovieCard from '../components/MovieCard';

class FavoritesMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      numberPartial: 5
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.listFavorites();
  }

  incrementPage() {
    this.setState({ page: this.state.page + 1 });
  }

  getParcialMovies(movies) {
    return [...movies.slice(0, this.state.page * this.state.numberPartial)];
  }

  handleScroll() {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    const docHeightWithMargem = docHeight - docHeight * 0.1;
    if (windowBottom >= docHeightWithMargem) {
      this.incrementPage();
    }
  }

  renderCards() {
    let { movies } = this.props;
    console.log('Favorite movies: ', movies);
    movies = this.getParcialMovies(movies);

    return movies.map((movie, i) => (
      <MovieCard
        key={i}
        id={movie.id}
        voteCount={movie.vote_count}
        popularity={movie.popularity}
        title={movie.title}
        description={movie.overview}
        rating={movie.vote_average}
        image={movie.backdrop_path}
        releaseDate={movie.release_date}
        removeFavorite={() => this.props.removeFavorite(movie.id)}
      />
    ));
  }

  render() {
    return <div>{this.props.movies.length > 0 && this.renderCards()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.favorites.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listFavorites: () => dispatch(listFavorites()),
    removeFavorite: id => dispatch(removeFavorite(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesMovies);
