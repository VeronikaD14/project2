function Comments ({comments}) {
    return (
        <>
        <h2>Comments</h2>
        {comments.map(comment => {
                return (
                  <section className="borderElem">
                    <h2>Name: {comment.author}</h2><br />
                    <h2 >{comment.body}</h2>
                   
                    </section>
                    )
              })}
        </>
    )
}

export default Comments