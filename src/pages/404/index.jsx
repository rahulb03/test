import React from "react"; 
import Link from "next/link";
import Image from "next/image";
import Footer from "@/src/layout/footers/footer";
import SEO from "../../common/seo";
import HeaderOne from "../../layout/headers/header";
import error_shape from "@assets/img/error/error-shape.png";
import error_img from "@assets/img/error/404.png";
import Error_page from "@/src/components/404";
import Wrapper from "@/src/layout/wrapper";


const index = () => {
  return (
    <>
    <Wrapper>
    <SEO pageTitle={"Oops.! Page Not Found!"} /> 
    <Error_page />
    </Wrapper>

    </>
  );
};

export default index;
