import React from 'react';
import styles from "../../dist/styles-review_summary.css";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryInformation : [],
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // fetching data from api/restaurants/:id end -point
  fetchSummaryInfo() {

    var item_id = window.location.href.split('/').pop();
    console.log(item_id , 'urlID');

    fetch(`http://localhost:3002/ratings_ambience/${item_id}`, {method : "GET" })
    .then(response =>  response.json())
    .then(result => {
        this.setState({summaryInformation : result});
    });
  }

  componentDidMount() {
      this.fetchSummaryInfo();
  }

  render(){

    var ratingCategory = ['Food','Service','Ambience','Value'];
    var lovedForOptions = ['Great For Lunch','American','Most Booked'];

    return (
       <div >
          {this.state.summaryInformation.map((reviews, i) => (
            <div id="summary" key={reviews.restaurant_no_of_reviews} >  What {reviews.restaurant_no_of_reviews} People Are Saying</div>
          ))}

            <div className="hline"></div>

           <div>

              <div>

                    <div id="overall" > Overall rating and reviews</div>

                  <div className="graph">


                  <div className="ratingChart">
                        <div className="number">5</div>
                        <div className="container">
                          <div className="progress">
                            <div className="bar5"></div>
                          </div>
                        </div>
                    </div>

                    <div className="ratingChart">
                        <div className="number">4</div>
                        <div className="container">
                          <div className="progress">
                            <div className="bar4"></div>
                          </div>
                        </div>
                    </div>

                     <div className="ratingChart">
                        <div className="number">3</div>
                        <div className="container">
                          <div className="progress">
                            <div className="bar3"></div>
                          </div>
                        </div>
                    </div>

                    <div className="ratingChart">
                        <div className="number">2</div>
                        <div className="container">
                          <div className="progress">
                            <div className="bar2"></div>
                          </div>
                        </div>
                    </div>

                    <div className="ratingChart">
                        <div className="number">1</div>
                        <div className="container">
                          <div className="progress">
                            <div className="bar1"></div>
                          </div>
                        </div>
                    </div>

                  </div>

                  <div id="overall_one" >Reviews can only be made by diners who have eaten at this restaurant </div>

                  <div className="overallRating">

                        <div  className="star">
                            <div class="stars">
                                <div class="stars-inner"></div>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </div>
                      </div>

                      {this.state.summaryInformation.map((rating, i) => (
                        <div id="recent" key={rating} > {rating.restaurant_rating} based on recent ratings</div>
                        ))}


                  </div>



                    {this.state.summaryInformation.map((rating, i) => (
                      <div id="ratingNumber" >

                      <div  className="levelRating">
                        <div id="rating" key={rating.restaurant_food_rating}>{rating.restaurant_food_rating}</div>
                        <div className="serviceLevel"> {ratingCategory[0]}</div>
                      </div>

                      <div className="vline"></div>


                      <div  className="levelRating">
                        <div id="rating" key={rating.restaurant_service_rating}>{rating.restaurant_service_rating}</div>
                        <div className="serviceLevel"> {ratingCategory[1]}</div>
                     </div>

                     <div className="vline"></div>


                      <div  className="levelRating">
                        <div id="rating" key={rating.restaurant_ambience_rating}>{rating.restaurant_ambience_rating}</div>
                        <div className="serviceLevel"> {ratingCategory[2]}</div>
                      </div>

                      <div className="vline"></div>


                      <div  className="levelRating">
                        <div id="rating" key={rating.restaurant_value_rating}>{rating.restaurant_value_rating}</div>
                        <div className="serviceLevel"> {ratingCategory[3]}</div>
                      </div>

                      </div>
                    ))}

                    {/* <div className="ratingCategory">
                    {ratingCategory.map((category, i) => (
                      <div key={i}>{ratingCategory[0]}</div>

                    ) )}
                    </div> */}


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

