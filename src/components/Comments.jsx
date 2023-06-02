function Comments ({comments}) {
    return (
        <>
        <h2>Comments</h2>
        {comments.length > 0 ? (
  comments.map((comment) => (
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