import React from 'react';
import Profile from './Profile.js';
import Comment from './Comment.js';
import CommentInput from './CommentInput.js';

const ImageItem = (props) => {

  return (
    <div className="post">
      <Profile/>
      <div className="image">
        <img src={props.image.url} alt="" />
      </div>
      <div className="post_details">
        <Comment user="kaii" text="Hii" />
        <CommentInput/>
      </div>
    </div>
  )

};

export default ImageItem;
