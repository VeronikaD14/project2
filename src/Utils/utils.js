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

export function fetchComments(id) {
    return fetch(`https://db-reviews.onrender.com/api/reviews/${id}/comments`)
    .then(result => {
        return result.json()
        })
    .catch(error => {
        console.error("Error fetching reviews:", error);
        throw error;
    });
}

export function patchVotes(id) {
    fetch(`https://db-reviews.onrender.com/api/reviews/${String(id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ "inc_votes" : 1 }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }