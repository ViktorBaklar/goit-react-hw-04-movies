import React, { Component } from 'react';
import style from './searchForm.module.css'

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.trim() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit} className={style.searchForm}
      >
        <input
          className={style.searchFormInput}
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit" className={style.searchBtn}>
          <span className={style.searchBtnLabel}>Search</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;