import { map, size } from "lodash";
import React, { useState } from "react";
import Slider from "react-slick";
import { Image, Modal } from "semantic-ui-react";

const settings = {
  className: "carousel-screenshots",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  swipeToSlide: true,
};

const ImagesCarousel = ({ title, images }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const openImage = (url) => {
    setImageUrl(url);
    setShowModal(true);
  };

  return (
    <>
      {images && size(images) > 0 ? (
        <>
          <Slider {...settings}>
            {map(images, (image) => (
              <Image
                key={image.id}
                src={image.url}
                alt={image.name}
                onClick={() => openImage(image.url)}
              />
            ))}
          </Slider>
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            size='large'
          >
            <Image src={imageUrl} alt={title} />
          </Modal>
        </>
      ) : (
        <h5>No hay capturas disponibles</h5>
      )}
    </>
  );
};

export default ImagesCarousel;
