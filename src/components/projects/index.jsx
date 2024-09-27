import HeaderOne from "@/src/layout/headers/header";
import React from "react";
// import PortfolioArea from "./portfolio-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import Ourproject from "./project";
import Footer from "@/src/layout/footers/footer";
import Breadcrumb1 from "@/src/common/breadcrumb/breadcrumb1";

const Project  =() => {
  return (
    <>
      {/* <HeaderOne /> */}
      <main>
        <Breadcrumb1 top_title="PROJECTS"  page_title="Projects" />
        <Ourproject />
        {/* <FooterContact bg_style={true} /> */}
      </main>
    </>
  );
};

export default Project;

