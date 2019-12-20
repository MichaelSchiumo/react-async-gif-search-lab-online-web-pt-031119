import React, { Component } from 'react';


class GifListContainer extends Component {

componentDidMount() {
  fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=IfMEWwqRgrvhOK5heXcBkaLgpRHB0ZtH&rating=g')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}


  render(){
    return(
    <div>
    </div>
    )
  }

}

export default GifListContainer;
