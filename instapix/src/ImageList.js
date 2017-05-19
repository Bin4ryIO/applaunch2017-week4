import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

/* This is a Stateless component, it does not keep a record of the state. */
const ImageList = (props) => {

  /* Create a variable imageItems, take its received properties and map into
    individual item ImageItem */
  const imageItems = props.images.map((image => {
    return <ImageItem key={image.id} image={image} />
  }));

  /* A stateless component do not need a render method because it takes
    whatever is passed and display accordingly. */
  return (
    <div className="ImageList">
      <ul>{imageItems}</ul>
    </div>
  );

}

export default ImageList;
