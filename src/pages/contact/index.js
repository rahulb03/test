import React from 'react';
// import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Wrapper from '@/src/layout/wrapper';
import Contact from '../../components/contact';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Contact"} />
            <Contact />
        </Wrapper>
    );
};

export default index;