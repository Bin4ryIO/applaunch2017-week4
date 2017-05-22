import React from 'react';

const ImageItem = (props) => {
  return (
    <div className="image">
      <img src={props.image.url} alt="" />
    </div>
  )
};

export default ImageItem;
