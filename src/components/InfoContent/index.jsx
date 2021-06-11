import React, { Component, createRef } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../cast';
import Reviews from '../reviews';
import '../../index.css'

const ulRef = createRef()

class InfoContent extends Component {
  state = {
    pathState: {}
  };

  componentDidMount() {
    this.setState({ pathState: this.props.location?.state });
  }

  componentDidUpdate() {
    ulRef.current.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    const { match, cast, reviews } = this.props
    return (
      <>
        <h3>Additional info</h3>
        <ul>
          <li>
            <NavLink to={{ pathname: `${match.url}/cast`, state: { from: this.state.pathState.from } }}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: `${match.url}/reviews`, state: { from: this.state.pathState.from } }}>Reviews</NavLink>
          </li>
        </ul>

        <div ref={ulRef}>
          {cast &&
            <Route
              path={`${match.path}/cast`}
              render={() => {
                return <Cast cast={cast} />
              }}
            />}

          {reviews &&
            <Route
              path={`${match.path}/reviews`}
              render={(props) => {
                return <Reviews reviews={reviews} />
              }}

            />}
        </div>
      </>
    );
  };
};

export default InfoContent;