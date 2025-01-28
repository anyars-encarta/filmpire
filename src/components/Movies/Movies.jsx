import React, { useState } from 'react';
import {
  Box, CircularProgress, Typography, useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../index';
import useStyles from './styles';
import Pagination from '../pagination/Pagination';

const Movies = () => {
  const [page, setPage] = useState(1);
  const classes = useStyles();

  const {
    genreIdOrCategoryName, searchQuery,
  } = useSelector((state) => state.currentGenreOrCategory);
  const {
    data, error, isFetching,
  } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 16 : 18;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4" align="center">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured. Please try again later.';

  return (
    <div>
      <img
        className={classes.image}
        alt="Poster"
        src={`https://image.tmdb.org/t/p/w500/${data.results[0].backdrop_path}`}
      />
      <MovieList movies={data} numberOfMovies={numberOfMovies} />

      <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default Movies;
