import React from 'react';
import axios from 'axios';

// import '../../dist/style.css';

// import noise from "../../images/noise.png";

class Summary extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      summaryInformation : [],
    };

    // this.handleChange = this.handleChange.bind(this);
  }


  // fetching data from api/restaurants/:id end -point
  fetchSummary() {
    fetch('http://localhost:3002/api/ratings_ambience/6', {method: "GET"})
    .then(response =>  response.json())
    .then(result => {
        this.setState({summaryInformation : result});
        // console.timeLog(result);
    });

  }

  componentDidMount() {
      this.fetchSummary();
      // this.fetchCategories();
  }



  render(){

    var ratingCategory = ['Food','Service','Ambience','Value'];
    var lovedForOptions = ['Great For Lunch','American','Most Booked'];


    console.log(this.state.summaryInformation[0]);

    return (
       <div >

          {this.state.summaryInformation.map((data, i) => (
            <div id="summary" key={data.id} >  What {data.id} People Are Saying</div>
          ))}

          {this.state.summaryInformation.map((reviews, i) => (
            <div id="summary" key={reviews.restaurant_no_of_reviews} >  What {reviews.restaurant_no_of_reviews} People Are Saying</div>
          ))}

            <div className="hline"></div>

            <div className="vline"></div>

           <div>

              <div>

                    <div id="overall" > Overall rating and reviews</div>

                  <div className="graph">
                    <div className="container">
                      <div className="progress">
                        <div className="bar5">5</div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="progress">
                        <div className="bar4">5</div>
                      </div>
                    </div>


                    <div className="container">
                      <div className="progress">
                        <div className="bar3">5</div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="progress">
                        <div className="bar2">5</div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="progress">
                        <div className="bar1">5</div>
                      </div>
                    </div>
                  </div>

                  <div id="overall_one" >Reviews can only be made by diners who have eaten at this restaurant </div>

                  {this.state.summaryInformation.map((rating, i) => (
                    <div id="recent" key={rating} > {rating.restaurant_rating} based on recent ratings</div>
                    ))}


                    {this.state.summaryInformation.map((rating, i) => (
                      <div id="ratingNumber" >
                        <div id="rating" key={rating.restaurant_food_rating}>{rating.restaurant_food_rating}</div>
                        <div id="rating" key={rating.restaurant_service_rating}>{rating.restaurant_service_rating}</div>
                        <div id="rating" key={rating.restaurant_ambience_rating}>{rating.restaurant_ambience_rating}</div>
                        <div id="rating" key={rating.restaurant_value_rating}>{rating.restaurant_value_rating}</div>
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

         <div className="lovedFor">
          {lovedForOptions.map((options, i) => (
              <div className="lovedForOptions" key={options}>
                <img id="img_lovedfor_icon" src={"../../images/loved.png"} />
              {options}
                  <div className="subCity"> San Jose / Silicon Valley </div>
              </div>
          ))}
          </div>


         <div>
            <div className="bottomTag">
               Best Restaurant in Santa Clara >
             </div>

         </div>


       </div>

      )
    }
  }

  export default Summary;

