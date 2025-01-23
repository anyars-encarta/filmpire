import React, { useEffect } from 'react';
import {
  Divider, List, ListItemButton, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';
import { categories, demoCategories } from '../../data';
import { useGetGenresQuery } from '../../services/TMDB';

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { data, error, isFetching } = useGetGenresQuery();

  console.log('The Genres:', data);

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire logo"
          className={classes.image}
        />
      </Link>

      <Divider />

      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img src={redLogo} alt={label} className={classes.genreImage} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={id} className={classes.links} to="/">
              <ListItemButton onClick={() => {}}>
                {/* <ListItemIcon>
                <img src={redLogo} alt={label} className={classes.genreImage} height={30} />
              </ListItemIcon> */}
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
