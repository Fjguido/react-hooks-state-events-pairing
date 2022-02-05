import Comment from "./Comment";


function CommentContainer({comments}) { // comments in video.js is an array
    const commentList = comments.map(commentObj => <Comment user={commentObj.user} comment={commentObj.comment} />)
    return(
        <div>
            <h1>{comments.length} Comments</h1> 
            {commentList}
            <Comment />
        </div>
    );
};

export default CommentContainer;