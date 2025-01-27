import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import {
  Actors, Profile,
} from './index';
import useStyles from './styles';
import NavBar from './NavBar/NavBar';
import Movies from './Movies/Movies';
import MovieInformation from './MovieInformation/MovieInformation';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBar />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
