import React, { Component } from 'react'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
     this.state = {
       id: this.props.match.params.id
     }
  }

  render() {
    console.log('movie Details: ', this.state);
    return (
      <h1>Detalhes do filme</h1>
    );
  }
}

export default MovieDetails;
