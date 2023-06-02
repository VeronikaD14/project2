import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchComments, fetchRevId } from "../Utils/utils";
import Comments from "./Comments"


function ReviewCard () {

const {id} = useParams()
const [revCard, setRevCard] = useState(null)
const [isLoading, setIsLoading] = useState(true);
const [comments, setComments] = useState([]);
const [showComments, setShowComments] = useState(false);
const [vote, setVote] = useState(null);

const handleShowComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

useEffect(() => {
    fetchRevId(id)
        .then(({ review })  => {
            setRevCard(review[0])
            setIsLoading(false);

            setVote(review[0].votes);

            
           
    })
}, [id])

useEffect(() => {
    fetchComments(id)
        .then(({ review })  => {
           setComments(review)

    })
}, [id])

const voteInc = () => {
    fetch(`https://db-reviews.onrender.com/api/reviews/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ inc_votes : 1 }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setVote(prevVote => parseInt(prevVote, 10) + 1)
}

return (
    <section className="borderElem">
        {isLoading ? (
      <p>Loading...</p>
    ) : (
        <> 
    <h1>ReviewCard </h1>
    <h2>Title: {revCard.title}</h2>
    <p> : {revCard.review_body}</p>

    <h2>Owner : {revCard.owner}</h2>
     <h2>Id : {revCard.review_id}</h2>
    <h2>Category : {revCard.category}</h2>
    <button className="vote-button" onClick={voteInc}>Votes : {vote}</button>

    <img src={revCard.review_img_url} alt="Review Image" />
    <br></br>
    <button className="show-com-button" onClick={handleShowComments}>showComments</button>
    <section>
    {showComments ? <Comments comments={comments} /> : null}

    </section>



    </>
    )}


        </section>
    )
}

export default ReviewCard