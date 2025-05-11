import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HeaderSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide_box">
          <img
            className="img_slider"
            src="/men.jpg
"
            alt="men clothes"
          />
          {/* <div className="inner_box">
            <p>kdkdkdkd</p>
            <button className="slider_link">
              click
              <span className="arrow_link">
                <ArrowForwardIcon className="icon" />
              </span>
            </button>
          </div> */}
        </div>
        <div className="slide_box">
          <img className="img_slider" src="/jewerly.jpg" alt="jewerly" />
          {/* <div className="inner_box">
            <p>kdkdkdkd</p>
            <button className="slider_link">
              click
              <span className="arrow_link">
                <ArrowForwardIcon className="icon" />
              </span>
            </button>
          </div> */}
        </div>
        <div className="slide_box">
          <img className="img_slider" src="/smartphone.jpg" alt="smartphone" />
          {/* <div className="inner_box">
            <p>kdkdkdkd</p>
            <button className="slider_link">
              click
              <span className="arrow_link">
                <ArrowForwardIcon className="icon" />
              </span>
            </button>
          </div> */}
        </div>
        <div className="slide_box">
          <img className="img_slider" src="/women.webp" alt="women" />
          {/* <div className="inner_box">
            <p>kdkdkdkd</p>
            <button className="slider_link">
              click
              <span className="arrow_link">
                <ArrowForwardIcon className="icon" />
              </span>
            </button>
          </div> */}
        </div>
      </Slider>
    </div>
  );
}

export default HeaderSlider;
