import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './navigation.module.css'

const Navigation = () => {
  return (
    <nav className={style.navBar}>
      <NavLink
        exact
        className={style.navLink}
        activeClassName="active"
        to={routes.home}>
        Home
			</NavLink>
      <NavLink
        className={style.navLink}
        activeClassName="active"
        to={routes.movies}>
        Search
			</NavLink>
      {/* <NavLink
        className="nav-link"
        activeClassName="active"
        to={routes.search}>
        Search
			</NavLink> */}
    </nav>
  );
};

export default Navigation;