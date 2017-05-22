import React from 'react';

/* This is a Stateless component, it does not keep a record of the state.
  Instead, it will only work on the Props that is passed down from parent. */
const CommentList = (props) => {

  /* Create a variable imageItems, take its received properties and map into
    individual item ImageItem */
  const CommentListItem = (comment) => (
    <div key={comment.id} className="comment-item">
      {comment.text}
    </div>

  )

  const comments = props.comments.map(CommentListItem);

  /* A stateless component do not need a render method because it takes
    whatever is passed and display accordingly. */
  return (
    <div>
      <ul>{comments}</ul>
    </div>
  );

}

export default CommentList;
