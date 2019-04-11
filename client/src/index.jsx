import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import Summary from './components/reviews_summary.jsx'
import Reviews from './components/reviews.jsx'


class App extends React.Component {

  render () {
    return (

      <div>
         <div className="app-reviews">
           <Summary />
           <Reviews />
         </div>
       </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-reviews'));