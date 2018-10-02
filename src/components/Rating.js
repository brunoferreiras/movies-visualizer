import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const styles = {
  star: {
    color: '#F6B11D'
  }
};

class Rating extends Component {
  render() {
    return (
      <div>
        <StarIcon style={styles.star} fontSize="large" />
        <StarIcon style={styles.star} fontSize="large" />
        <StarIcon style={styles.star} fontSize="large" />
        <StarHalfIcon style={styles.star} fontSize="large" />
        <StarOutlineIcon style={styles.star} fontSize="large" />
      </div>
    );
  }
}
export default Rating;
