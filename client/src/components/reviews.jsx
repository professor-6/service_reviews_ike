import React from 'react';
// import styles from "../../dist/style.css";
import style from "../../dist/styles-reviews.css";


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

          <div className={style.hline}></div>


          <div className={style.sortPrompt}> Sort by
          </div>


          <div className={style.selector}>
             <select className={style.dropdown}>
                {sortOptions.map((option, i) => (
                   <option value={option}>{option}</option>
          ))}
             </select>
         </div>

         <div className={style.filterPrompt}> Filters
          </div>


          <div className={style.filterAll}>
          {filterOptions.map((options, i) => (
              <div className={style.filterOptions} key={options}>
              <input type="checkbox" id={style.filterCheckBox}></input>
              {options}
              </div>
          ))}
          </div>



        {this.state.reviews.map((reviews, i) => (
            <div id={style.reviewsAll}>
                <div className={style.avatar}>

                  <div className={style.picture} key={reviews.reviewer_picture}>
                      <img src={reviews.reviewer_picture} />
                  </div>

                  <div  className={style.name} key={reviews.reviewer_name}>
                      {reviews.reviewer_name}
                  </div>

                  <div  className={style.city} key={reviews.reviewer_city}>
                      {reviews.reviewer_city}
                  </div>

                  <div className={style.no_of_reviewsBlock}>
                        <div className={style.reviewsImage}>
                              <img src={"../../images/reviews.png"} />
                          </div>

                        <div  className={style.no_of_reviews} key={reviews.no_of_reviews}>
                            {reviews.no_of_reviews} reviews
                        </div>
                </div>

                </div>

                <div className={style.mainRating}>

                      <div className={style.ratingBlock}>
                          <div  className={style.star} key={reviews.reviews}>
                                <div class={style.stars}>
                                    <div class={style.starsInner}></div>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                  </div>
                          </div>

                          <div  className={style.reviews} key={reviews.dined_at}>
                              {/* Dined on {strDate(reviews.dined_at)} */}
                              {/* Dined on {Date.parse(reviews.dined_at)} */}
                              Dined on {reviews.dined_at}
                              {/* Dined on {Date(reviews.dined_at).toString().slice(4, 15)} */}

                          </div>
                    </div>

                    <div className={style.reviewBlock}>
                          <div  className={style.overallRating} key={reviews.overall_rating}>
                              <span id={style.ratingText}> Overall </span>
                              <span className={style.reviewRating}>{parseInt(reviews.overall_rating)} -</span>
                          </div>

                          <div  className={style.foodRating} key={reviews.food_rating}>
                               <span id={style.ratingText}> Food  </span>
                               <span className={style.reviewRating}>{parseInt(reviews.food_rating)} - </span>
                          </div>

                          <div  className={style.serviceRating} key={reviews.service_rating}>
                              <span id={style.ratingText}>  Service  </span>
                               <span className={style.reviewRating}>{parseInt(reviews.service_rating)} - </span>
                          </div>

                          <div  className={style.ambienceRating} key={reviews.ambience_rating}>
                              <span id={style.ratingText}> Ambience  </span>
                              <span className={style.reviewRating}>{parseInt(reviews.ambience_rating)} </span>
                          </div>
                    </div>

                      <div  className={style.reviews} key={reviews.reviews}>
                        {reviews.reviews}
                        {/* <p className={style.readMore}><a href="#" className={style.button}> + Read More</a></p> */}
                    </div>

                </div>

                <div className={style.hline}></div>

          </div>

          ))}

       </div>

      )
    }
  }


  export default Reviews;