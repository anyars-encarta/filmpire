import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import useStyles from './styles';
import { Movie } from '../index';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results?.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
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
};

export default MovieList;
