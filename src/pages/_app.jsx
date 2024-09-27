import "@/src/styles/index.scss";

// import '../styles/index.css';
import { NextUIProvider } from '@nextui-org/react'
import Wrapper from "../layout/wrapper";
import HeaderOne from "../layout/headers/header";
import Footer from "../layout/footers/footer";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return (
  // <Wrapper><>
  <>
  <HeaderOne />
  
  <Component {...pageProps} />
  <Footer />
  </>
  );
}
