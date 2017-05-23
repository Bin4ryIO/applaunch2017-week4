import React from 'react';

const CommentList = (props) => {

  const CommentItem = (comment) => (
    <div key={comment.id} className="card-text__comment">
      {comment.text}
    </div>

  )

  const comments = props.comments.map(CommentItem);

  return (
    <div>{comments}</div>
  );

}

export default CommentList;
