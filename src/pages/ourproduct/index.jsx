import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import OurProduct from '../../components/ourproduct';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"our product"}/>
             <OurProduct />
        </Wrapper>
    );
};

export default index;