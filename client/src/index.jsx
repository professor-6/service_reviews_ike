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
           <Reviews />
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


// class App extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       value : '',
//       cat_list : []
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.fetchCategories = this.fetchCategories.bind(this);
//     this.updateComponent = this.updateComponent.bind(this);

//   }


//   handleChange(event) {
//     this.setState({value: event.target.value});
//     console.log(this.state.value);
//   }



//   //  insert data from api/transactions POST end -point into DB
//   handleSubmit(event) {
//     // console.log(this.state.value, 'submitted');
//     fetch('http://localhost:3000/api/categories',
//       {
//         method: "POST",
//         body: JSON.stringify({category :this.state.value}),
//         headers: {"Content-Type": "application/json"}
//      })
//     .then(response =>  response.json())
//     .then(result => {
//       console.log(result, 'Success');
//     });

//     //reset input text area to emply
//     this.setState({value : ''});

//     event.preventDefault();

//     // this update the cateory list array
//     this.setState({cat_list : this.state.cat_list.concat([this.state.value])});
//     console.log(this.state.cat_list);

//       // force re-render of component onSubmit
//     TransactionList.forceUpdate(callback);

//   };


//   fetchCategories() {
//     fetch('http://localhost:3000/api/categories', {method: "GET"})
//     .then(response =>  response.json())
//     .then(result => {
//         result.map((entries, i) => (
//           this.setState({cat_list : this.state.cat_list.concat(entries.category)})
//         ))
//     });
//   };


//   componentDidMount() {
//       this.fetchCategories();
//   }

//   updateComponent() {
//     // Force a render without state change...
//     this.forceUpdate();
// }


//   render(){

//     return (

//       <div>
//       <h1>mInteger</h1>
//       <div className="app">
//         <Reviews />
//         <div className="category">
//           <h3>Budget Categories</h3>
//           <CategoryList categoryList={this.state.cat_list} />
//             <div className="category-form">
//               <form onSubmit={this.handleSubmit}
//                     onClick={this.someMethod}>
//                   <div className="category-input">
//                   <input
//                     type="text"
//                     placeholder="Budget Category"
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                   />
//                   <input
//                     type="number"
//                     placeholder="Target Budget"
//                   />
//                   </div>
//                   <button onClick={this.someMethod}> Add </button>
//               </form>
//             </div>
//         </div>
//       </div>
//     </div>
//     )
//   }
// }


// class CategoryList extends React.Component{
//   render() {
//     return(
//       <div className="category-list">
//       {this.props.categoryList.map((category, index) => (
//          <div className="category-data" key={index}>{category}</div>
//       ))}
//       </div>

//     )
//   }
// }
