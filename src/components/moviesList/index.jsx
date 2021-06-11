import { NavLink, withRouter } from 'react-router-dom';
import MovieCard from '../movieCard';
import style from './MoviesList.module.css'

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={style.MoviesList}>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id}>
          <NavLink to={{
            pathname: `/movies/${id}`,
            state: {
              from: location,
            }
          }}>
            <MovieCard title={title} name={name} poster_path={poster_path} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);