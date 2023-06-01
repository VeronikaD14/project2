import { useState, useEffect } from "react"
import { fetchReviews } from "./utils";

import {Link} from 'react-router-dom'


function Reviews () {

    const [reviews2, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetchReviews()
        .then(({ reviews })  => {
            setReviews(reviews)
            setIsLoading(false);

             })
                }, [])


      useEffect(() => {
        fetch("https://db-reviews.onrender.com/api/reviews")
            .then(result => {
            return result.json()
            })
            .then(({ reviews })  => {
                setReviews(reviews)
                setIsLoading(false);
    
        })
    }, [])

    return (
        <>
         {isLoading ? (
        <p>Loading...</p>
      ) : (
          <div className="reviewsContainer">
              {reviews2.map(review => {
                return (
                  <section className="borderElem">
                    <h2>Name: {review.owner}</h2><br />
                    <h2 >{review.title}</h2>
                    <Link to={`/reviewcard/${review.review_id}`}>
                         {review.review_id} Read more </Link>
                         
                    <br />
                    </section>
                    )
              })}
          </div >
      )}
          </>
      )
}

export default Reviews

