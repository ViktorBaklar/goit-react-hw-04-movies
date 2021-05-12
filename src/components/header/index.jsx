import style from './header.module.css'
import PropTypes from 'prop-types';
import SearchForm from '../searchForm'

const Header = ({ onSubmit }) => (
  <header className={style.Searchbar}>
    <div className={style.headerSearchbar}>
      <SearchForm onSubmit={onSubmit} />
    </div>
  </header>
)

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default Header