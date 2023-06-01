export function fetchReviews() {
    return fetch("https://db-reviews.onrender.com/api/reviews")
    .then(result => {
        return result.json()
        })
      .catch(error => {
        console.error("Error fetching reviews:", error);
        throw error;
      });
  }

  export function fetchRevId(id) {
    return fetch(`https://db-reviews.onrender.com/api/reviews/${id}`)
    .then(result => {
        return result.json()
        })
      .catch(error => {
        console.error("Error fetching reviews:", error);
        throw error;
      });
  }