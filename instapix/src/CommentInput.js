import React from 'react';

const CommentInput = (props) => {
  return (
    <div className="comment_div">
      <span className="like_button">
        <span className="glyphicon glyphicon-heart unliked" aria-hidden="true"></span>   
      </span> 
      <form className="new_comment">
        <div className="field">
          <input className="comment_input" placeholder="Add a comment..." type="text"/>
        </div>
      </form>
    </div>
  )
};

export default CommentInput;
