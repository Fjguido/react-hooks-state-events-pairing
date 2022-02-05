function MainContent({minusVote ,addVote, handleComments, showComments, title, views, upvotes, downvotes, createdAt}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button onClick={addVote}>{upvotes}👍</button> 
            <button onClick={minusVote}>{downvotes}👎</button>
            <br></br>
            <br></br>
            <button onClick={handleComments}>{showComments ? "Hide Comments": "Show Comments"}</button>

        </div>
    )
}

export default MainContent;