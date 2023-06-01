import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import { fetchReviews } from "./utils"

function Reviews () {

    const [reviews2, setReviews] = useState([])

    useEffect(() => {
        fetchReviews()
        .then(({ reviews })  => {
            setReviews(reviews)
            setIsLoading(false);

             })
                }, [])

    return (
        <>
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
          
          </>
      )
}

export default Reviews