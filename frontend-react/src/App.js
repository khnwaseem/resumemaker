import React from 'react';
import './assets/css/index.css'
import Routes from './Routes'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
     <Router>
     <Routes />
     </Router>
    </React.Fragment>
  );
}

export default App;
