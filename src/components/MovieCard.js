import { Button } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarsIcon from '@material-ui/icons/Stars';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { URL_IMAGE, URL_IMAGE_NOT_FOUND } from '../utilities/constants';
import Rating from './Rating';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  type: {
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'middle'
  },
  marginIcon: {
    marginRight: theme.spacing.unit * 2
  }
});

class MovieCard extends Component {
  render() {
    const {
      classes,
      id,
      voteCount,
      popularity,
      title,
      description,
      rating,
      image,
      releaseDate
    } = this.props;
    const IMAGE_URL = image !== null ? URL_IMAGE + image : URL_IMAGE_NOT_FOUND;
    let formatedDate = Moment(releaseDate).format('DD/MM/YYYY');
    const movieDetailsLink = '/movie/' + id;
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs>
            <Paper className={classes.paper}>
              <Grid container direction="row">
                <Grid item xs>
                  <ButtonBase
                    className={classes.image}
                    component={Link}
                    to={movieDetailsLink}
                  >
                    <img
                      className={classes.img}
                      alt="Image of Movie"
                      src={IMAGE_URL}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs>
                  <Grid item xs>
                    <Typography className={classes.title} variant="title">
                      {title}
                    </Typography>
                    <Typography variant="body1" gutterBottom align="justify">
                      {description}
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-end"
                  >
                    <Typography
                      variant="caption"
                      color="primary"
                      className={classes.type}
                    >
                      <CalendarIcon
                        color="primary"
                        className={classes.marginIcon}
                      />
                      {formatedDate}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="primary"
                      className={classes.type}
                    >
                      <ThumbUpIcon
                        color="primary"
                        className={classes.marginIcon}
                      />
                      {voteCount}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="primary"
                      className={classes.type}
                    >
                      <StarsIcon
                        color="primary"
                        className={classes.marginIcon}
                      />
                      {popularity}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="flex-end"
                >
                  <Rating rating={rating} />
                  <Button
                    variant="fab"
                    color="secondary"
                    aria-label="Add"
                    className={classes.favoriteButton}
                    onClick={() => this.props.action()}
                  >
                    <FavoriteIcon />
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string,
  releaseDate: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default withStyles(styles)(MovieCard);
