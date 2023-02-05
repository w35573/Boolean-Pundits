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
        I am very pleased to say that my experience of associating with Yasham Foundation has been excellent and I feel it is a privilege too. 
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
        By providing opportunities to needy children, Yasham is investing in a better future for India, since children are the future. 
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
        My good wishes to Yasham to continue reaching out to children who need them the most. keep up the good work.“
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
        Yasham Foundation believes that affection is greater than perfection. My appreciation for the excellent work Yasham is tremendous.
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
