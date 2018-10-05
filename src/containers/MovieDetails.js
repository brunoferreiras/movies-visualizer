import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions/movies';
import MovieDetailsCard from '../components/MovieDetailsCard';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.props.getDetails(this.state.id);
  }

  render() {
    const { movieDetails } = this.props;
    return (
      <div>
        {movieDetails.length > 0 || Object.keys(movieDetails).length > 0 && <MovieDetailsCard movie={movieDetails} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieDetails: state.movies.movieDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetails: id => dispatch(getMovieDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
