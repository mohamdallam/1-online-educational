import React from "react";
import "./testimonial.css";
// import Slider from "react-slick";
// import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assests/images/testimonial01.png";
import ControlledCarousel from "./Carousel";

const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between  align-items-center">
              {/* Image*/}
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              {/* Text Our Students*/}
              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <ControlledCarousel />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
