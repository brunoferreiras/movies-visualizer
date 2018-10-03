import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = {
  star: {
    color: '#F6B11D'
  }
};

class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: Math.floor(props.rating)
    };
  }

  convert() {
    let filled = Math.floor(this.state.rating / 2);
    let half = this.state.rating % 2;
    let empty = 5 - (filled + half);
    let stars = [];
    let cont = 0;

    for (let i = 0; i < filled; i++) {
      stars.push(
        <StarIcon key={++cont} style={styles.star} fontSize="large" />
      );
    }

    for (let i = 0; i < half; i++) {
      stars.push(
        <StarHalfIcon key={++cont} style={styles.star} fontSize="large" />
      );
    }

    for (let i = 0; i < empty; i++) {
      stars.push(
        <StarOutlineIcon key={++cont} style={styles.star} fontSize="large" />
      );
    }

    return stars;
  }

  render() {
    return <div>{this.convert()}</div>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;
