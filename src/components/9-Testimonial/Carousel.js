import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <h6 className="mb-3 fw-bold">Excellent course of materials</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe
          id voluptas molestiae. Aperiam corrupti voluptas earum at molestiae
          neque!.
        </p>
      </Carousel.Item>

      <Carousel.Item>
        <h6 className="fw-bold">Jhon Doe</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe
          id voluptas molestiae. Aperiam corrupti voluptas earum at molestiae
          neque!
        </p>
      </Carousel.Item>

      <Carousel.Item>
        <h6 className="mb-3 fw-bold">Excellent course of materials</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe
          id voluptas molestiae. Aperiam corrupti voluptas earum at molestiae
          neque!
        </p>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
