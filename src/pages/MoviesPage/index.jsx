import React, { Component } from 'react';
// import Header from '../../components/header';
import MoviesList from '../../components/moviesList';
import SearchForm from '../../components/searchForm';
import SearchApi from '../../services/SearchApi';
import style from '../pagesStyle/pages.module.css';

class MoviesPage extends Component {
  state = {
    SearchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    if (location?.state?.searchQuery) {
      this.setState({ SearchQuery: location?.state?.searchQuery });
    }
    if (window.location.search) {
      const url = new URLSearchParams(window.location.search);
      this.setState({ SearchQuery: url.get('query') });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.SearchQuery !== this.state.SearchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({ SearchQuery: query });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
      state: { searchQuery: query },
    });
  };

  fetchMovies = async () => {
    try {
      const movies = await SearchApi.fetchMovieSearching(this.state.SearchQuery);
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />
        <div className={style.containerFluid}>
          {/* <h1>Select Movie</h1> */}
          <MoviesList movies={this.state.movies} />
        </div>
      </>
    );
  }
}

export default MoviesPage;