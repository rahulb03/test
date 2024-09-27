import HeaderOne from '@/src/layout/headers/header';
import React from 'react'
import Footer from '@/src/layout/footers/footer';
import Ws from './ws';
import BrandArea from '@/src/common/brand-area';
import Ourproject from '../projects/project';

const WebService = ({ selectedService }) => {
  return (
    <>
    {/* <HeaderOne /> */}

    <main>


        <Ws selectedService={selectedService} />
        <BrandArea />
        <Ourproject limit={3} />


    </main>

    {/* <Footer /> */}
    </>
  )
}

export default WebService;