import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const classes = useStyles();

  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results?.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={movie.id} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

MovieList.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
    })),
  }).isRequired,
  numberOfMovies: PropTypes.number.isRequired,
  excludeFirst: PropTypes.bool,
};

MovieList.defaultProps = {
  excludeFirst: false,
};

export default MovieList;
