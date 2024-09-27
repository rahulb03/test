
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WebService from '@/src/components/ourservice';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import { service_content } from '@/src/data/ourservices-data';
 
export async function getStaticPaths() {
    const paths = service_content.map((service) => ({
      params: { id: service.id },
    }));
  
    return {
      paths,
      fallback: false, // If fallback is false, any routes not returned by getStaticPaths will 404
    };
  }



  export async function getStaticProps({ params }) {
    const selectedServ = service_content.find((service) => service.id === params.id);
    
    return {
      props: {
        selectedServ, // Pass the selected technology as props
      },
    };
  }

const Index = ({ selectedServ }) => {
 

  return (
    <Wrapper>
      <SEO pageTitle={selectedServ.name} />
      <WebService selectedService={selectedServ.id} />
    </Wrapper>
  );
};

export default Index;

