import React from 'react';
import Wrapper from '@/src/layout/wrapper';
import SEO from '@/src/common/seo';
// import Tech from '@/src/components/Tech';
import Tech from '@/src/components/technologys';
import { framewroks } from '@/src/data/technology-data';

export async function getStaticPaths() {
  const paths = framewroks.map((tech) => ({
    params: { id: tech.id },
  }));

  return {
    paths,
    fallback: false, // If fallback is false, any routes not returned by getStaticPaths will 404
  };
}

export async function getStaticProps({ params }) {
  const selectedTech = framewroks.find((tech) => tech.id === params.id);
  
  return {
    props: {
      selectedTech, // Pass the selected technology as props
    },
  };
}

const index = ({ selectedTech }) => {
  return (
    <Wrapper>
      <SEO pageTitle={selectedTech.name} />
      <Tech selectedTechnology={selectedTech.id} />
    </Wrapper>
  );
};

export default index;
