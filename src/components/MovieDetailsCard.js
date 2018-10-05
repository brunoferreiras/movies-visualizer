import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
  },
  flexContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    padding: 0
  },
  picture: {
    maxWidth: 200
  }
});

class MovieDetailsCard extends Component {
  render() {
    const { classes, movie } = this.props;
    const IMAGE_URL =
      movie.backdrop_path !== null
        ? URL_IMAGE + movie.backdrop_path
        : URL_IMAGE_NOT_FOUND;
    let formatedDate = Moment(movie.releaseDate).format('DD/MM/YYYY');
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs>
            <Paper className={classes.paper}>
              <Grid container direction="row">
                <Grid item xs>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.picture}
                      alt="Poster"
                      src={IMAGE_URL}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs>
                  <Grid item xs>
                    <Typography className={classes.type} variant="title">
                      {movie.title}
                    </Typography>
                    <Typography className={classes.type} variant="subheading">
                      Título Original: {movie.original_title}
                    </Typography>
                    <Typography variant="body1" gutterBottom align="justify">
                      {movie.overview}
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
                      {movie.vote_count}
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
                      {movie.popularity}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="flex-end"
                >
                  <Rating rating={movie.vote_average} />
                  <div />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MovieDetailsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetailsCard);
