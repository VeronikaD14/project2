import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchComments, fetchRevId } from "./utils";
import Comments from "./Comments"


function ReviewCard () {

const {id} = useParams()
const [revCard, setRevCard] = useState(null)
const [isLoading, setIsLoading] = useState(true);
const [comments, setComments] = useState([]);
const [showComments, setShowComments] = useState(false);

const handleShowComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

useEffect(() => {
    fetchRevId(id)
        .then(({ review })  => {
            setRevCard(review[0])
            setIsLoading(false);
           
    })
}, [id])

useEffect(() => {
    fetchComments(id)
        .then(({ review })  => {
            console.log(review)
           setComments(review)

    })
}, [id])

return (
    <section className="borderElem">
        {isLoading ? (
      <p>Loading...</p>
    ) : (
        <> 
    <h1>ReviewCard </h1>
    {revCard && <h2>Title: {revCard.title}</h2>}
    {revCard &&<p> : {revCard.review_body}</p>}

    {revCard &&<h2>Owner : {revCard.owner}</h2>}
    {revCard &&<h2>Id : {revCard.review_id}</h2>}
    {revCard &&<h2>Category : {revCard.category}</h2>}

    {revCard &&<img src={revCard.review_img_url} alt="Review Image" />}
    {revCard &&<br></br>}
    {revCard &&<button className="show-com-button" onClick={handleShowComments}>showComments</button>}
    {showComments &&<Comments comments={comments}/>}




    </>
    )}


        </section>
    )
}

export default ReviewCard