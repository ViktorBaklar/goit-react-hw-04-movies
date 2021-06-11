import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchApi from '../../services/SearchApi';
import MovieContent from '../../components/MovieContainer';
import InfoContent from '../../components/InfoContent';
import routes from '../../routes';
import style from '../pagesStyle/pages.module.css';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const movie = await SearchApi.fetchDetails(movieId);
    const cast = await SearchApi.fetchCredits(movieId);
    const reviews = await SearchApi.fetchReviews(movieId);
    this.setState({ movie, cast, reviews });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const {
      backdrop_path,
      id,
      original_title,
      vote_average,
      overview,
      genres,
      poster_path,
    } = this.state.movie;
    return (
      <div className={style.containerFluid}>
        <button
          type="button"
          className={style.btnOutback}
          onClick={this.handleGoBack}
        >
          Go back
        </button>

        {id && (
          <MovieContent
            backdrop_path={backdrop_path}
            poster_path={poster_path}
            id={id}
            original_title={original_title}
            vote_average={vote_average}
            overview={overview}
            genres={genres}
          />
        )}

        {id && (
          <Route
            path={this.props.match.path}
            render={props => {
              return (
                <InfoContent
                  {...props}
                  cast={this.state.cast}
                  reviews={this.state.reviews}
                />
              );
            }}
          />
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;