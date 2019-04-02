import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import info from './components/info.jsx'
import Reviews from './components/reviews.jsx'


class App extends React.Component {

  render () {
    return (
      <div>
        <h1> Hello React World </h1>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));