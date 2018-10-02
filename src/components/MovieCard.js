import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Rating from './Rating';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function MovieCard(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="https://pay.google.com/about/static/images/social/og_image.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography style={{ color: '#9DB6BB'}} variant="title">
                Title Movie
              </Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="Favorite" className={classes.button}>
                <FavoriteIcon fontSize="large" />
              </IconButton>
              <IconButton aria-label="Calendar" className={classes.button}>
                <CalendarIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Rating />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);
