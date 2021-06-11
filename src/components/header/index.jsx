import style from './header.module.css'
// import PropTypes from 'prop-types';
// import SearchForm from '../searchForm';
import Navigation from '../navigation';

const Header = (/* { onSubmit } */) => (
  <header className={style.headerSearchbar}>
    <Navigation />
    {/* <div className={style.headerSearchbar}>
      <SearchForm onSubmit={onSubmit} />
    </div> */}
  </header>
)

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };


export default Header