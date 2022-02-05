import {useState} from 'react'
import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay.js";
import MainContent from './MainContent.js';
import Comment from './Comment.js';
import CommentContainer from './CommentContainer.js';

function App() {
  const [videoObj, setVideoObj] = useState(video)
  const [showComments, setShowComments] = useState(false)

  // create function to change the state of comments showing 

  function handleComments(){
    setShowComments(currentComments => !currentComments) // this will flip the false to true
  }

  function addVote(){
    const newObj = {...videoObj, upvotes: videoObj.upvotes + 1}
    setVideoObj(newObj)

  }

  function minusVote(){
    const newObj = {...videoObj, downvotes: videoObj.downvotes - 1}
    setVideoObj(newObj)

  }
  
  return (
    <div className="App">
      <VideoDisplay embedUrl={videoObj.embedUrl}/>
      <MainContent 
      addVote={addVote}
      minusVote={minusVote}
      showComments={showComments}
      handleComments={handleComments} 
      title={videoObj.title} 
      views={videoObj.views} 
      createdAt={videoObj.createdAt} 
      upvotes={videoObj.upvotes} 
      downvotes={videoObj.downvotes} 
      />
      {showComments ? <CommentContainer comments={videoObj.comments}/> : null}
    </div>
  );
}

export default App;
