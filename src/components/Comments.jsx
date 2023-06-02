import { useState, useEffect } from "react";

function Comments({ comments, id }) {
  const [newComment, setNewComment] = useState("");
  const [updatedComments, setComments] = useState(comments);


  useEffect(() => {
    fetch(`https://db-reviews.onrender.com/api/reviews/${id}/comments`)
      .then((response) => response.json())
      .then(({ review }) => {
        console.log(review);
        setComments(review);
      });
  }, [id]);
  

  function addComment(event) {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "review_id": id, 
         "username": "grumpy19", 
         "body": newComment
      })
    };


    fetch(`https://db-reviews.onrender.com/api/reviews/${id}/comments`, options)
      .then((response) => response.json())
      .then(({ addedComment }) => {
        setComments((prevComments) => [addedComment, ...prevComments]); 
        setNewComment(""); 
      });

  }

    return (
        <>
        <h2>Comments</h2>

        <form onSubmit={addComment}>
        <label htmlFor="new-comment-input">Add a new comment:</label>
        <input
          name="add-comment"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          id="new-comment-input"
        />
        <button className="add-comment" type="submit">
          Submit
        </button>
      </form>

        {comments.length > 0 ? (
  updatedComments.map((comment) => (
    <section key={comment.id} className="borderElem">
      <h2>Name: {comment.author}</h2>
      <h2>{comment.body}</h2>
    </section>
  ))
) : (
  <h3>No comments</h3>
)}
        </>
    )
}


export default Comments