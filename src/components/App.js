import React, { Component } from 'react';

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component
//functional component syntax
  //the class itself is a function
  //when we call App, we invoke this function

class App extends Component {


  render() {
    return (
      <div>
        <NavBar color='black' title="Giphy Search" />
        <GifListContainer />
      </div>
    )
  }
}

export default App;
