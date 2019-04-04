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





