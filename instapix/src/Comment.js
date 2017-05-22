import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment">
      <p>
        <a href="/users/1"><strong>{ props.user }</strong></a>
        <span>{props.text }</span>
        <a class="delete"></a>    
      </p>
    </div>
  )
};

export default Comment;
