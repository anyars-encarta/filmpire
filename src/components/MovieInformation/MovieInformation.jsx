import React, { use } from 'react';
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from '@mui/material';
import {
  Movie as MovieIcon,
  Theatres,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useGetMovieQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import useStyles from './styles';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const MovieInformation = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, error, isFetching } = useGetMovieQuery(id);

  if (isFetching) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="8rem" />
    </Box>;
  }

  if (error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Link to="/">Something has gone wrong. Go back!</Link>
    </Box>;
  }

  console.log('The Single Movie', data);

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
          alt={data?.title}
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>

      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title}
          {' '}
          {data?.release_date && `(${data?.release_date.slice(0, 4)})`}
        </Typography>

        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>

        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" alignItems="center">
            <Rating readOnly value={data?.vote_average / 2} precision={0.1} />
            <Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>
              {data?.vote_average}
              &nbsp;/ 10
            </Typography>
          </Box>

          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}
            min
            {' '}
            {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ''}
          </Typography>
        </Grid>

        <Grid item className={classes.genresContainer}>
          {data?.genres.map((genre) => (
            <Link to="/" key={genre.id} className={classes.links} onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                alt={genre.name}
                className={classes.genreImage}
                height={30}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
