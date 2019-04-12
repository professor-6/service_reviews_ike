import React from 'react';
// import styles from "../../dist/style.css";
import style from "../../dist/styles-reviews.css";


class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryInformation : [],
      per5 : 200,
      barRating :  [85, 70, 50, 30, 15]
    };
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
    var barRating =  [85, 70, 50, 30, 15];

    return (
    //  <div  className={style.mainReviewsSummaryDiv}>
       <div  className="reviewsSummary">

          {this.state.summaryInformation.map((reviews, i) => (
            <div id={style.summary} key={reviews.restaurant_no_of_reviews} >  What {reviews.restaurant_no_of_reviews} People Are Saying</div>
          ))}

            <div className={style.hline}></div>

           <div>

              <div>

               <div id={style.overall} > Overall rating and reviews</div>

                  <div className={style.graph}>


                  <div className={style.ratingChart}>
                        <div className={style.number}>5</div>
                        <div className={style.container}>
                          <div className={style.progress}>
                            <div className={style.bar5}  style={{"width" :  Math.random()*250 }}></div>
                          </div>
                        </div>
                    </div>

                    <div className={style.ratingChart}>
                        <div className={style.number}>4</div>
                        <div className={style.container}>
                          <div className={style.progress}>
                            <div className={style.bar4}  style={{"width" : Math.random()*150 }}></div>
                          </div>
                        </div>
                    </div>

                     <div className={style.ratingChart}>
                        <div className={style.number}>3</div>
                        <div className={style.container}>
                          <div className={style.progress}>
                            <div className={style.bar3} style={{"width" : Math.random()*100  }}></div>
                          </div>
                        </div>
                    </div>

                    <div className={style.ratingChart}>
                        <div className={style.number}>2</div>
                        <div className={style.container}>
                          <div className={style.progress}>
                            <div className={style.bar2} style={{"width" : Math.random()*50  }}></div>
                          </div>
                        </div>
                    </div>

                    <div className={style.ratingChart}>
                        <div className={style.number}>1</div>
                        <div className={style.container}>
                          <div className={style.progress}>
                            <div className={style.bar1} style={{"width" : Math.random()*25  }}></div>
                          </div>
                        </div>
                    </div>

                  </div>

                  <div id={style.overall_one}>Reviews can only be made by diners who have eaten at this restaurant </div>

                  <div className={style.overallRating}>

                        <div  className={style.star}>
                            <div className={style.stars}>
                                <div className={style.starsInner}></div>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </div>
                      </div>

                      {this.state.summaryInformation.map((rating, i) => (
                        <div id={style.recent} key={rating} > {rating.restaurant_rating} based on recent ratings</div>
                        ))}


                  </div>



                    {this.state.summaryInformation.map((rating, i) => (
                      <div id={style.ratingNumber} >

                      <div  className={style.levelRating}>
                        <div id={style.rating} key={rating.restaurant_food_rating}>{rating.restaurant_food_rating}</div>
                        <div className={style.serviceLevel}> {ratingCategory[0]}</div>
                      </div>

                      <div className={style.vline}></div>


                      <div  className={style.levelRating}>
                        <div id={style.rating} key={rating.restaurant_service_rating}>{rating.restaurant_service_rating}</div>
                        <div className={style.serviceLevel}> {ratingCategory[1]}</div>
                     </div>

                     <div className={style.vline}></div>


                      <div  className={style.levelRating}>
                        <div id={style.rating} key={rating.restaurant_ambience_rating}>{rating.restaurant_ambience_rating}</div>
                        <div className={style.serviceLevel}> {ratingCategory[2]}</div>
                      </div>

                      <div className={style.vline}></div>


                      <div  className={style.levelRating}>
                        <div id={style.rating} key={rating.restaurant_value_rating}>{rating.restaurant_value_rating}</div>
                        <div className={style.serviceLevel}> {ratingCategory[3]}</div>
                      </div>

                      </div>
                    ))}

                    <div className={style.noise}>
                        Noise - Moderate
                    </div>

                   {this.state.summaryInformation.map((recommend, i) => (
                    <div className={style.recommend} key={recommend.percent_recommend}>
                      {recommend.percent_recommend}% of people would recommend to a friend
                    </div>
                   ))}

                </div>
              </div>



         <div>
            <div id={style.lovedfor}>
               Loved foR
            </div>
         </div>

          <div className={style.lovedFor}>
          {lovedForOptions.map((options, i) => (
              <div className={style.lovedForOptions} key={options}>
              {options}
                  <div className={style.subCity}> San Jose / Silicon Valley </div>
              </div>
          ))}
          </div>


         <div>
            <div className={style.bottomTag}>
               Best Restaurant in Santa Clara >
             </div>

         </div>

         </div>

      )
    }
  }

  export default Summary;
