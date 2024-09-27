// import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
// import HeaderOne from '@/src/layout/headers/header';
// import React from 'react';
// import FooterContact from '@/src/layout/footers/footer-contact';
// import FooterThree from '@/src/layout/footers/footer-3';
// import Technologies from './technologies';
// import Footer from '@/src/layout/footers/footer';
// import Ourproject from '../projects/project';
// import BrandArea from '@/src/common/brand-area';

// const Tech = () => {
//     return (
//         <>
//             <HeaderOne />
//             <main>
//                 {/* <Breadcrumb top_title="IT Advisor"  page_title="Team Details" /> */}
              
//                 {/* <FooterContact bg_style={true} /> */}
//                 <Technologies />
//                 <BrandArea />
//                 <Ourproject limit={3}/>
//             </main>
//             {/* <FooterThree /> */}
//             <Footer />
//         </>
//     );
// };

// export default Tech;


import React from 'react';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderOne from '@/src/layout/headers/header';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';
import Technologies from './technologies';
import Footer from '@/src/layout/footers/footer';
import Ourproject from '../projects/project';
import BrandArea from '@/src/common/brand-area';

const Tech = ({ selectedTechnology }) => {
    return (
        <>
            {/* <HeaderOne /> */}
            <main>
                {/* Breadcrumb can be added here if needed */}
                {/* <Breadcrumb top_title="Technology" page_title={selectedTechnology} /> */}

                <Technologies selectedTechnology={selectedTechnology} />
                <BrandArea />
                <Ourproject limit={3} />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Tech;
