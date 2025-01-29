import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import useStyles from './styles';
import Movie from '../Movie/Movie';

// const RatedCards = ({ title, data }) => {
const RatedCards = ({ title, data }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>

    </Box>
  );
};
RatedCards.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default RatedCards;
