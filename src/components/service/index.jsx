import React from "react"; 
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import ServiceArea from "./service-area";
import VideoArea from "@/src/common/video-area";
import IndustryArea from "@/src/common/industry-area";
import BrandArea from "@/src/common/brand-area";
import BlogArea from "@/src/common/blog-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import Footer from "@/src/layout/footers/footer";
import BlogDetailsPostbox from "../blog-details/blog-details-postbox";

const Sevice = () => {
  return (
    <>
      {/* <HeaderOne /> */}
      <main>
            <Breadcrumb top_title="Our Services" page_title="Service" />
            {/* <BlogDetailsPostbox /> */}
            {/* <ServiceArea />
            <VideoArea service={true}/>
            <IndustryArea service={true} />
            <BrandArea service={true} />
            <BlogArea service={true} /> */}
            <FooterContact />
      </main>
      {/* <FooterThree /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Sevice;
