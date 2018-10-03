import React, { Component } from 'react';
import { getMovieDetails } from '../actions/movies';
import { connect } from 'react-redux';

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
        <h1>Detalhes do filme</h1>
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
