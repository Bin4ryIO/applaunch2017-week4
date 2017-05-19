import React from 'react';


const ImageItem = (props) => {

  return (
    <div className="ImageItem">
      <li>
        <img src={props.image.url} />
      </li>
    </div>
  )

};

export default ImageItem;
