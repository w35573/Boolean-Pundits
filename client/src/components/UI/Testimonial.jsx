import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3 outer-box">
        <p className="desc">
          Very good service. I could not expect that I can get a car at 4.30 in
          the morning. Even they have paid for fuel which I filled more. Very
          transparent ❤️
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p className="desc">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3 outer-box">
        <p className="desc">
          Sanitized car was provided. The delivery and pickup boy was very
          polite and helpful. This company is honest with their customers
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p className="desc">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3 outer-box">
        <p className="desc">
          The app is as user friendly as the policies. The process is as easy as
          nursery rhyme. Nicely maintained cars.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p className="desc">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3 outer-box">
        <p className="desc">
          The car delivery was done on time and we were satisfied with the
          entire booking entire experience. Overall service was good.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p className="desc">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
