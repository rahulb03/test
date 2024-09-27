import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderOne from '@/src/layout/headers/header';
import React from 'react';
import ContactArea from './contact-area';
import GoogleMap from './google-map';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';
import Footer from '@/src/layout/footers/footer';
import CC from './co';
import LogoInfiniteScroll from './co';
import Co from './co';
import BrandCarousel from './co';
import LogoSlider from './co';
import InfiniteLogoSlider from './co';


const Contact = () => {
    return (
        <>
            {/* <HeaderOne /> */}
            <main>
                <Breadcrumb top_title="Contact Us"  page_title="Contact Us" />
                {/* <LogoSlider /> */}
                {/* <InfiniteLogoSlider /> */}
                
                <ContactArea />
                <GoogleMap />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Contact;