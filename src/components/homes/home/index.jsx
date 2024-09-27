import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area"; 
// import BrandArea from "./brand-area";
import SupportArea from "./support-area";
import TestimonialArea from "./testimonial-area";
import SliderArea from "./slider-area";
import FaqArea from "./faq-area";
import BlogArea from "./blog-area";
import Footer from "@/src/layout/footers/footer";
import Services1 from "../../service/services";
import Ourproject from "../../projects/project";
import BrandArea from '@/src/common/brand-area';
import BrandArea1 from "./brand-area";

const HomeOne = () => {
  return (
    <>
      {/* <HeaderOne /> */}
      <main>
        <HeroSlider />
        <BrandArea />

        {/* <AboutArea /> */}
        {/* <FeatureArea /> */}
        {/* <Services1 /> */}
        <ServiceArea />
    {/* <Services1 style={{marginTop:'50px'}} /> */}
        
        <BrandArea1 />
        {/* <SupportArea /> */}
        <TestimonialArea />
        {/* <SliderArea /> */}
        <Ourproject limit={3} />
        
        <FaqArea />
        {/* <BlogArea /> */}
        </main>
        {/* <Footer /> */}
    </>
  );
};

export default HomeOne;
