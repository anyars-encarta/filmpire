import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';
import useStyles from './styles';
import { useGetMoviesQuery } from '../../services/TMDB';

const MovieBanner = () => {
  const classes = useStyles();

  const page = 1;

  const {
    genreIdOrCategoryName, searchQuery,
  } = useSelector((state) => state.currentGenreOrCategory);

  const {
    data,
  } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  const randomIndex = Math.floor(Math.random() * data.results.length);

  return (
    <Box
      className={classes.bannerContainer}
      style={
        {
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.results[randomIndex].backdrop_path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }
    }
    >

      <Box className={classes.bannerText}>
        <Typography variant="h6">{data.results[randomIndex].title}</Typography>
        <Typography variant="body2">{data.results[0].overview}</Typography>
      </Box>
    </Box>
  );
};

export default MovieBanner;
