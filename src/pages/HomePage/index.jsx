import React, { Component } from 'react';
import SearchApi from '../../services/SearchApi';

import MoviesList from '../../components/moviesList';
import style from '../pagesStyle/pages.module.css'

class HomePage extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    const trending = await SearchApi.fetchTrendingMovies();
    this.setState({ trending });
  }

  render() {
    return (
      <div className={style.containerFluid}>
        {/* <h1>Trending today</h1> */}
        <MoviesList movies={this.state.trending} />
      </div>
    );
  }
}

export default HomePage;