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
import React from 'react';
import { URL_IMAGE } from '../utilities/constants';
import Rating from './Rating';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    padding: theme.spacing.unit * 2,
    maxWidth: '70%'
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32
  },
  image: {
    width: 200
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  title: {
    color: '#9DB6BB'
  },
  favoriteButton: {
    fontSize: 48,
    margin: theme.spacing.unit * 5
  },
  type: {
    margin: 'auto'
  }
});

function MovieCard(props) {
  const {
    classes,
    voteCount,
    popularity,
    title,
    description,
    rating,
    image,
    releaseDate
  } = props;
  const IMAGE_URL = image !== null ? URL_IMAGE + image : 'https://cdn3.iconfinder.com/data/icons/block/32/block-512.png';
  let formatedDate = Moment(releaseDate).format('DD/MM/YYYY');

  return (
    <div style={{ padding: 20 }}>
      <Paper className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={IMAGE_URL} />
            </ButtonBase>
          </Grid>
          <Grid item xs={9} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item>
                <Typography className={classes.title} variant="title">
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom align="justify">
                  {description}
                </Typography>
                <Grid container direction="row" style={{ marginTop: 5 }}>
                  <Typography
                    variant="caption"
                    color="primary"
                    className={classes.type}
                  >
                    <CalendarIcon color="primary" />
                    {formatedDate}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="primary"
                    className={classes.type}
                  >
                    <ThumbUpIcon color="primary" />
                    {voteCount}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="primary"
                    className={classes.type}
                  >
                    <StarsIcon color="primary" />
                    {popularity}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item align="center">
              <Rating rating={rating} />
              <Button
                variant="fab"
                color="secondary"
                aria-label="Add"
                className={classes.favoriteButton}
              >
                <FavoriteIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  voteCount: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string,
  releaseDate: PropTypes.string.isRequired
};

export default withStyles(styles)(MovieCard);
