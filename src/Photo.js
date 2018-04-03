import React from 'react';

const Photo = props => {
    let photo = props.data;
    return (
     <li>
      <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
    </li>);
  }

export default Photo;
