
import './App.css';
import PropTypes from 'prop-types';
// import SearchApi from './services/SearchApi'
import Container from './components/UI/container'
import Header from './components/header';
// import Modal from './components/Modal'
// import Loader from './components/Loader'
// import Button from "./components/UI/button";

const App = () => (

  <div className="App" >
    <Container>
      <Header /* onSubmit={this.onChangeQwery} */ />

    </Container>

  </div>
);



App.propTypes = {
  data: PropTypes.array,

};

export default App;
