import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../actions/movies';
import MovieCard from '../components/MovieCard';

class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: 1,
      page: 1,
      numberPartial: 5
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.requestAgain = this.requestAgain.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.getPopularMovies(this.state.pagination);
  }

  incrementPage() {
    this.setState({ page: this.state.page + 1 });
  }

  getParcialMovies(movies) {
    return [...movies.slice(0, this.state.page * this.state.numberPartial)];
  }

  requestAgain()
  {
    if (this.state.page * this.state.numberPartial === this.props.movies.length) {
      this.setState({ pagination: this.state.pagination + 1}, () => this.props.getPopularMovies(this.state.pagination));
    }
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
      this.requestAgain();
    }
  }

  renderCards() {
    let { movies } = this.props;
    movies = this.getParcialMovies(movies);

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
    getPopularMovies: page => dispatch(getPopularMovies(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovies);
