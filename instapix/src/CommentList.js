import React from 'react';
import Comment from './Comment.js';

const CommentList = (props) => {

  const comments = props.comments.map((comment => {
    return <Comment user={comment.user} text={comment.text} />
  }));
  
  return (
    <div>
      {comments}
    </div>
  );

}

export default CommentList;