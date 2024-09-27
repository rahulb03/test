import React, { useEffect } from "react";
import ScrollToTop from "../hooks/scroll-to-top";
import { animationCreate } from "../utils/utils";

const Wrapper = ({ children }) => {
  useEffect(() => {
    // animation
    setTimeout(() => {
      animationCreate();
    }, 100);
  }, []);

  return (
    <>
    
    {/* <NextUIProvider> */}
      {children}

      {/* </NextUIProvider> */}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
