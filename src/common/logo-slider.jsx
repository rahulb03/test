// LogoSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = ({ logos }) => {
  const settings = {
    dots: false,                // Hides navigation dots
    infinite: true,             // Infinite loop
    speed: 500,                 // Transition speed
    slidesToShow: 6,            // 6 logos per slide
    slidesToScroll: 1,          // Scroll one slide at a time
    autoplay: true,             // Autoplay slider
    autoplaySpeed: 2000,        // Speed of autoplay (in ms)
    arrows: false,              // Disable left/right navigation arrows
    responsive: [               // Responsive settings for mobile devices
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
