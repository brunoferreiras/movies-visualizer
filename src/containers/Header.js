import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setError, setSuccess } from '../actions/general';
import { searchMovie } from '../actions/movies';
import Alert from '../components/Alert';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 10,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  },
  toobar: {
    backgroundColor: '#97A7AA'
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      redirect: false
    };
  }

  renderError() {
    const { error } = this.props;
    if (error != null) {
      return (
        <Alert variant="error" message={error} close={this.props.clearError} />
      );
    }
  }

  renderSuccess() {
    const { success } = this.props;
    if (success != null) {
      return (
        <Alert
          variant="success"
          message={success}
          close={this.props.clearSuccess}
        />
      );
    }
  }

  redirect() {}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.redirect()}
        {this.renderError()}
        {this.renderSuccess()}
        <AppBar position="static">
          <Toolbar className={classes.toobar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Initial page"
              component={Link}
              to={'/'}
            >
              <MovieIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
              noWrap
            >
              Movies Visualizer
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                value={this.state.movie}
                onChange={event =>
                  this.setState(
                    { movie: event.target.value },
                    () =>
                      this.state.movie !== ''
                        ? this.props.searchMovie(this.state.movie)
                        : null
                  )
                }
                placeholder="Pesquisar..."
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow} />
            <IconButton
              color="inherit"
              aria-label="Show Favorites"
              className={classes.menuButton}
              component={Link}
              to={'/favorites'}
            >
              <FavoriteIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    error: state.general.error,
    success: state.general.success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchMovie: movie => dispatch(searchMovie(movie)),
    clearError: () => dispatch(setError()),
    clearSuccess: () => dispatch(setSuccess())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
