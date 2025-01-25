import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

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

      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add fovorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          FAVORITE MOVIES
        </Box>
      )}
    </Box>
  );
};

export default Profile;
