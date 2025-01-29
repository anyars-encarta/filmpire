import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';
import { useGetListQuery } from '../../services/TMDB';
import RatedCards from '../RatedCards/RatedCards';

const Profile = () => {
  const session = localStorage.getItem('session_id');
  const { user } = useSelector(userSelector);

  const { data: favoriteMovies } = useGetListQuery({
    listName: 'favorite/movies', accountId: user.id, sessionId: session, page: 1,
  });

  const { data: watchlistMovies } = useGetListQuery({
    listName: 'watchlist/movies', accountId: user.id, sessionId: session, page: 1,
  });

  const logout = () => {
    // localStorage.removeItem('accountId');
    // localStorage.removeItem('request_token');
    // localStorage.removeItem('session_id');
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button
          variant="contained"
          color="inherit"
          onClick={logout}
        >
          Logout &nbsp;
          <ExitToApp />
        </Button>
      </Box>

      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add fovorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
