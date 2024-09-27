


import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import jerrod from '../../public/assets/img/project/jerro_logo.webp';
import parth_institute from '../../public/assets/img/project/pi_logo (1).webp';
import dmpatil from '../../public/assets/img/project/Untitled-3 (1) (1).webp';
import sansaar from '../../public/assets/img/project/sansaar_Logo (2).webp';
import gym from '../../public/assets/img/project/Gy2mify (1) (1).webp';

const brand_img = [
  jerrod, parth_institute, sansaar, dmpatil, gym 
];

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // Delay between transitions (in ms)
  infinite: true, // Loop through slides
  arrows: false, // Hide navigation arrows
  responsive: [
   
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 729,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 704,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const BrandArea = ({ service }) => {
  return (
    <div className={`tp-brand-3-area p-relative mt-30 mb-30 ${service ? "breadcrumb-brand" : ""} pt-10 pb-10`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-brand-3 border-none">
              <Slider {...settings}>
                {brand_img.map((item, i) => (
                  <div key={i} className="tp-brand-3-thumb d-flex justify-content-center">
                    <Image src={item} alt={`Brand Image ${i}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
