import React from 'react';
import Photo from './Photo'
import NoGifs from './NoGifs'

const PhotoList = props => {
  let images, header;

  if (props.photos.length > 0) {
    images = props.photos.map(photo =>
      <Photo data={photo} key={photo.id} />
     )
  }
  else {
    images = <NoGifs />
  }

  header = props.searchWord.toLowerCase();
  header = header.charAt(0).toUpperCase() + header.slice(1);

  return (
    <div>
      { (props.photos.length > 0)
         ? <h3>{header} Gifs</h3>
         : <span></span>
      }
      <ul>
        {images}
      </ul>
    </div>
   )

}

export default PhotoList;
