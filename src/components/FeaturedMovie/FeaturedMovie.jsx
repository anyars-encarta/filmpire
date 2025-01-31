import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Typography, Card, CardContent, CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const FeaturedMovie = ({ movie }) => {
  const classes = useStyles();

  if (!movie.id) return null;

  return (
    <Box component={Link} to={`/movie/${movie.id}`} className={classes.featuredCardContainer}>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />

        <Box padding="20px">
          <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
            <Typography gutterBottom variant="h5">
              {movie.title}
            </Typography>

            <Typography variant="body2">
              {movie.overview}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
