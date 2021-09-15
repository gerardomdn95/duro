import React from 'react';
import MainContainer from './containers/MainContainer';
import Navbar from './shared/Navbar/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MainContainer />
    </React.Fragment>
  )
}

export default App;
