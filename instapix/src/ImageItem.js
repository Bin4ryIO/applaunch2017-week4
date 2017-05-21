import React from 'react';
import Profile from './Profile.js';

const ImageItem = (props) => {

  return (
    <div className="ImageItem">
      <Profile/>
      <li>
        <img src={props.image.url} alt="" />
      </li>
    </div>
  )

};

export default ImageItem;
