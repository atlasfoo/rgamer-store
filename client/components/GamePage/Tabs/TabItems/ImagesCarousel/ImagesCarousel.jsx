import { map, size } from 'lodash'
import React from 'react'
import Slider from 'react-slick'
import { Image } from 'semantic-ui-react'

const settings = {
  className: 'carousel-screenshots',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  swipeToSlide: true
}

const ImagesCarousel = ({title, images}) => {
  return (
    <>
    {(images && size(images) > 0)? (
      <Slider {...settings}>
        {map(images, (image) => (
          <Image 
            key={image.id}
            src={image.url}
            alt={image.name}
            onClick={()=>console.log("abrir imagen")}
          />
        ))}
      </Slider>
    )
       : <h5>No hay capturas disponibles</h5> }
    </>
  );
}

export default ImagesCarousel
