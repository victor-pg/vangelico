import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes/index';
import './utils/Products.scss';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    );
  }
}

export default App;
