import React from 'react';

class Reviews extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      reviews : [],
      id : ''
    };
  }
    // fetching data from api/restaurants/:id end -point
    fetchData() {
      var item_id = window.location.href.split('/').pop();

      fetch(`http://localhost:3002/reviews/${item_id}`, {method: "GET"})
      .then(response =>  response.json())
      .then(result => {
          this.setState({reviews : result});
      });
    }

    componentDidMount() {
        this.fetchData();
    }

  render(){

    var sortOptions = ['Newest','Highest Rating','Lowest Rating'];
    var filterOptions = ['Good for groups','Prime Ribs(179)','Filet Mignon (94)','Calamari (40)','Pasta Paella (19)']

    return (
       <div>

          <div className="hline"></div>


          <div className="sortPrompt"> Sort by
          </div>


          <div className="selector">
             <select className="dropdown">
                {sortOptions.map((option, i) => (
                   <option value={option}>{option}</option>
          ))}
             </select>
         </div>

         <div className="filterPrompt"> Filters
          </div>


          <div className="filterAll">
          {filterOptions.map((options, i) => (
              <div className="filterOptions" key={options}>
              <input type="checkbox" id="filterCheckBox"></input>
              {options}
              </div>
          ))}
          </div>



        {this.state.reviews.map((reviews, i) => (
            <div id="reviewsAll">
                <div className="avatar">

                  <div className="picture" key={reviews.reviewer_picture}>
                      <img src={reviews.reviewer_picture} />
                  </div>

                  <div  className="name" key={reviews.reviewer_name}>
                      {reviews.reviewer_name}
                  </div>

                  <div  className="city" key={reviews.reviewer_city}>
                      {reviews.reviewer_city}
                  </div>

                  <div className="no_of_reviewsBlock">
                        <div className="reviewsImage">
                              <img src={"../../images/reviews.png"} />
                          </div>

                        <div  className="no_of_reviews" key={reviews.no_of_reviews}>
                            {reviews.no_of_reviews} reviews
                        </div>
                </div>

                </div>

                <div className="mainRating">

                      <div className="ratingBlock">
                          <div  className="star" key={reviews.reviews}>
                                <div class="stars">
                                    <div class="stars-inner"></div>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                  </div>
                          </div>

                          <div  className="reviews" key={reviews.dined_at}>
                              {/* Dined on {strDate(reviews.dined_at)} */}
                              {/* Dined on {Date.parse(reviews.dined_at)} */}
                              Dined on {reviews.dined_at}
                              {/* Dined on {Date(reviews.dined_at).toString().slice(4, 15)} */}

                          </div>
                    </div>

                    <div className="reviewBlock">
                          <div  className="overallRating" key={reviews.overall_rating}>
                              <span id="ratingText"> Overall </span>
                              <span className="reviewRating">{parseInt(reviews.overall_rating)} -</span>
                          </div>

                          <div  className="foodRating" key={reviews.food_rating}>
                               <span id="ratingText"> Food  </span>
                               <span className="reviewRating">{parseInt(reviews.food_rating)} - </span>
                          </div>

                          <div  className="serviceRating" key={reviews.service_rating}>
                              <span id="ratingText">  Service  </span>
                               <span className="reviewRating">{parseInt(reviews.service_rating)} - </span>
                          </div>

                          <div  className="ambienceRating" key={reviews.ambience_rating}>
                              <span id="ratingText"> Ambience  </span>
                              <span className="reviewRating">{parseInt(reviews.ambience_rating)} </span>
                          </div>
                    </div>

                      <div  className="reviews" key={reviews.reviews}>
                        {reviews.reviews}
                        <p class="read-more"><a href="#" class="button"> + Read More</a></p>
                    </div>

                </div>

                <div className="hline"></div>

          </div>

          ))}

       </div>

      )
    }
  }


  export default Reviews;
