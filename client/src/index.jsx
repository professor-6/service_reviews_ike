import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import Summary from './components/reviews_summary.jsx'
import Reviews from './components/reviews.jsx'


class App extends React.Component {

  render () {
    return (

      <div>
         <div className="app">
           <Summary />
           {/* <div className="category">
             <h3>Budget Categories</h3>
             <CategoryList categoryList={this.state.cat_list} />
               <div className="category-form">
                 <form onSubmit={this.handleSubmit}
                       onClick={this.someMethod}>
                     <div className="category-input">
                     <input
                       type="text"
                       placeholder="Budget Category"
                       value={this.state.value}
                       onChange={this.handleChange}
                     />
                     <input
                       type="number"
                       placeholder="Target Budget"
                     />
                     </div>
                     <button onClick={this.someMethod}> Add </button>
                 </form>
               </div>
           </div> */}
         </div>
       </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

