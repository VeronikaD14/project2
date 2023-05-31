import { useState, useEffect } from "react"

function Reviews () {

    const [reviews2, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);


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