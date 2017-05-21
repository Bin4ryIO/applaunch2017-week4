import React from 'react';


const ImageItem = (props) => {

  return (
    <div className="ImageItem">
      <li>
        <img src={props.image.url} alt="" />
      </li>
    </div>
  )

};

export default ImageItem;
