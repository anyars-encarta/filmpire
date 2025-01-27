import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
  Box, Button, CircularProgress, Grid, Typography,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { useGetActorMoviesQuery, useGetActorsDetailsQuery } from '../../services/TMDB';
import useStyles from './styles';
import MovieList from '../MovieList/MovieList';

const Actors = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const page = 1;

  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: actorMovies } = useGetActorMoviesQuery({ id, page });

  console.log('Actors Movies:', actorMovies);

  if (isFetching) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="8rem" />
    </Box>;
  }

  if (error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button
        startIcon={<ArrowBack />}
        onClick={() => history.goBack()}
        color="primary"
      >
        Go back!
      </Button>
    </Box>;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.title}
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>

        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>

          <Typography variant="h2" gutterBottom>
            {data?.release_date && `(${data?.release_date.slice(0, 4)})`}
          </Typography>

          <Typography variant="h5" gutterBottom>
            {data?.birthday && `Born: ${new Date(data.birthday).toDateString()}`}
          </Typography>

          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || 'Sorry, no biography yet'}
          </Typography>

          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/name/${data?.imdb_id}/`}
            >
              IMDB
            </Button>

            <Button
              endIcon={<ArrowBack />}
              onClick={() => history.goBack()}
              color="primary"
            >
              <Typography
                style={{ textDecoration: 'none' }}
                component={Link}
                to="/"
                color="inherit"
                variant="subtitle2"
              >
                Back
              </Typography>
            </Button>
          </Box>
        </Grid>

        <Box margin="2rem 0">
          <Typography variant="h2" gutterBottom align="center">
            Movies
          </Typography>

          {actorMovies?.results ? (
            <MovieList movies={actorMovies} numberOfMovies={12} />
          ) : (
            <Box align="center">Sorry, no movies found</Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default Actors;
