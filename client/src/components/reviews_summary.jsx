import React from 'react';
import axios from 'axios';

// import '../../dist/style.css';

// import noise from "../../images/noise.png";

class Summary extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      summaryInformation : []

    };

    // don't need this bcos of => binding
    // this.fetchDBRecords = this.fetchDBRecords.bind(this);
    // this.handleChange = this.handleChange.bind(this);

  }


  // fetching data from api/restaurants/:id end -point
  fetchSummary() {
    fetch('http://localhost:3000/api/restaurants/4', {method: "GET"})
    .then(response =>  response.json())
    .then(result => {
        this.setState({summaryInformation : result});
        // console.timeLog(result);
    });

    // axios.get('http://localhost:3000/api/restaurants/4')
    // .then(response =>  response.json())
    // .then(result => {
    //     this.setState({summaryInformation : result});
    //     console.log(result);
    // });
  }

  componentDidMount() {
      this.fetchSummary();
      // this.fetchCategories();
  }




  render(){

    var ratingCategory = ['Food','Service','Ambience','Value'];

    // console.log(Array.isArray(this.state.summaryInformation[0]));


    console.log(this.state.summaryInformation[0]);

    return (
       <div >

          {this.state.summaryInformation.map((reviews, i) => (
            <div id="summary" key={reviews.no_of_reviews} >  What {reviews.no_of_reviews} People Are Saying</div>
          ))}

            <div className="hline"></div>

            <div className="vline"></div>

           <div>

              <div>

                    <div id="overall" > Overall rating and reviews</div>

                  <div className="graph">
                    <div className="container">
                      <div className="progress">
                        <div className="bar">5</div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="progress">
                        <div className="bar">5</div>
                      </div>
                    </div>


                    <div className="container">
                      <div className="progress">
                        <div className="bar">5</div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="progress">
                        <div className="bar">5</div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="progress">
                        <div className="bar">5</div>
                      </div>
                    </div>
                  </div>

                  <div id="overall_one" >Reviews can only be made by diners who have eaten at this restaurant </div>

                  {this.state.summaryInformation.map((rating, i) => (
                    <div id="recent" key={rating} > {rating.restaurant_rating} based on recent ratings</div>
                    ))}


                    {this.state.summaryInformation.map((rating, i) => (
                      <div id="ratingNumber" >
                        <div id="rating" key={rating.food_rating}>{rating.food_rating}</div>
                        <div id="rating" key={rating.service_rating}>{rating.service_rating}</div>
                        <div id="rating" key={rating.ambience_rating}>{rating.ambience_rating}</div>
                        <div id="rating" key={rating.value_rating}>{rating.value_rating}</div>
                      </div>
                    ))}

                    <div className="ratingCategory">
                    {ratingCategory.map((category, i) => (
                      <div key={i}>{category}</div>

                    ) )}
                    </div>


                    <div className="noise">
                        <img src={"../../images/noise.png"} />
                        Noise - Moderate
                    </div>

                   {this.state.summaryInformation.map((recommend, i) => (
                    <div className="recommend" key={recommend.percent_recommend}>
                      <img src={"../../images/recommend.png"} />
                      {recommend.percent_recommend}% of people would recommend to a friend
                    </div>
                   ))}

                </div>
              </div>



         <div>
            <div id="lovedfor">
               Loved for
              <img id="img_lovedfor" src={"../../images/lovedfor.png"} />
            </div>
         </div>


         <div>
            <div className="bottomTag">
              <a href =""> Best Restaurant in Santa Clara >
              </a>
             </div>

         </div>


       </div>

      )
    }
  }


  export default Summary;



// class Reviews extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       results : [],
//       allCategories : [],
//       index : 0,
//       selectCategory : 'select'
//     };

//     // don't need this bcos of => binding
//     // this.fetchDBRecords = this.fetchDBRecords.bind(this);
//     this.handleChange = this.handleChange.bind(this);

//   }

//   // fetching data from api/transactions end -point
//   fetchDBRecords() {
//     fetch('http://localhost:3000/api/transactions', {method: "GET"})
//     .then(response =>  response.json())
//     .then(result => {
//         this.setState({results : result});
//     });

//   };


//     // fetching data from api/transactions end -point
//     fetchCategories() {
//       fetch('http://localhost:3000/api/categories', {method: "GET"})
//       .then(response =>  response.json())
//       .then(result => {
//           this.setState({allCategories : result});
//       });

//     };

//   componentDidMount() {
//       this.fetchDBRecords();
//       this.fetchCategories();
//   }

//   handleChange(event) {
//     this.setState({selectCategory : event.target.value})
//     var id = event.target.className;

//       //get index of selected catagory
//     for (var i = 0; i < this.state.allCategories.length ; i++){
//       if (this.state.allCategories[i].category === event.target.value) {
//         var categoryIndex = this.state.allCategories[i].id;
//         }

//     }

//     fetch('http://localhost:3000/api/transactions/' + id,
//       {
//         method: "PUT",
//         body: JSON.stringify({category_id : categoryIndex,
//                              category : event.target.value}),
//         headers: {"Content-Type": "application/json"}
//      })
//     .then(response =>  response.json())
//     .then(result => {
//       console.log(result, 'Success');
//     });

//     event.preventDefault();
//   };

//   render(){

//     return (
//        <div className="txn">
//       <h3>Transactions</h3>
//       <div className="txn-table">
//         <div className="txn-header txn-row">
//           <div className="txn-data">Date</div>
//           <div className="txn-data">Description</div>
//           <div className="txn-data">Amount</div>
//           <div className="txn-data">Category</div>

//         </div>

//         {this.state.results.map((recs, i) => (
//           <div className="txn-row" >
//               <div className="txn-data" key={recs.date}>{recs.date}</div>
//               <div className="txn-data" key={recs.description}>{recs.description}</div>
//               <div className="txn-data" key={recs.amount}>{recs.amount}</div>
//               <div className="txn-data" key={recs.category_id}>
//               <select id='dropdown' className ={i+1} onChange={this.handleChange}>
//                 <option selected value="none">none</option>
//                 {this.state.allCategories.map((res ,j) => (
//                    <option
//                     value={res.category}>{res.category}</option>
//                 ))}
//               </select>

//               </div>
//            </div>
//         ))}

//        </div>
//      </div>

//     )
//   }

// }




