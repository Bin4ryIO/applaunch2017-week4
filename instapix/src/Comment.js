import React from 'react';

const Comment = (props) => {
  return (
    <div className="comment">
      <p>
        <a href="/users/1"><strong>{ props.user }</strong></a>
        <span className="text">{props.text }</span>
        <a className="delete"></a>    
      </p>
    </div>
  )
};

export default Comment;
