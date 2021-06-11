
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import PropTypes from 'prop-types';
// import SearchApi from './services/SearchApi'
import Container from './components/UI/container'
import Header from './components/header';
import routes from './routes';


const HomePage = lazy(() =>
  import('./pages/HomePage'),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage'),
);


const App = () => (

  <div className="App" >
    <Container>
      <Header />
      <Suspense fallback={<h1>...loading</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>

  </div>
);



App.propTypes = {
  data: PropTypes.array,

};

export default App;
