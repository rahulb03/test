// // import project_data from '@/src/data/portfolio-data';
// import { project_data } from '@/src/data/projectdata';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Ourproject = () => {
//     return (
//         <>
//             <section className="tp-portfolio-area pt-120 pb-60">
//             <div className="container">
//                <div className="row">
//                 {project_data.map((item, i) => 
//                     <div key={i} className="col-xl-4 col-lg-6 col-md-6">
//                         <div className="tp-portfolio-item-wrapper">
//                         <div className="tp-portfolio-item-thumb">
//                             <Image src={item.img} alt="theme-pure" />
//                         </div>
//                         <div className="tp-portfolio-item-content">
//                             <span className="tp-portfolio-item-subtitle">{item.catagory}</span>
//                             <h3 className="tp-portfolio-item-title">
//                                 <Link href="/portfolio-details">{item.title}</Link></h3>
//                             <div className="tp-portfolio-item-content-btn">
//                                 {/* <Link href="/portfolio-details">View Projects 
//                                     <i className="fa-regular fa-arrow-right"></i>
//                                 </Link> */}
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                 )} 
//                </div>
//             </div>
//          </section>
//         </>
//     );
// };

// export default Ourproject;



import { project_data } from '@/src/data/projectdata';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import LineArrow from '@/src/svg/line-arrow';

const Ourproject = ({ limit }) => {
    // Determine how many projects to show based on the `limit` prop
    const displayedProjects = limit ? project_data.slice(0, limit) : project_data;

    return (
        <>
            <section className="tp-portfolio-area pt-20 pb-60 " style={{backgroundColor:''}}>
                <div className="container">
                    <div className="row">
                { limit && (
                    <div className=" text-center">
                             
                              <h3 className="tp-section-title mt-4"> Our  <i>Projects</i> 
                                 <span className="title-center-shape"> 
                                    <LineArrowTwo />
                                 </span> 
                              </h3>
                           </div>
                )}
                     
                        {displayedProjects.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="tp-portfolio-item-wrapper">
                                    <div className="tp-portfolio-item-thumb">
                                        <Image src={item.img} alt={item.title} width={416} height={350}/>
                                    </div>
                                    <div className="tp-portfolio-item-content">
                                        {/* <span className="tp-portfolio-item-subtitle">{item.catagory}</span> */}
                                        <h3 className="tp-portfolio-item-title">
                                            <Link href="/portfolio-details">{item.title}</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Conditionally render the "View More Projects" button if there's a limit */}
                    {limit && (
                        <div className="row">
                            <div className="col-12 text-center">
                                
                                <div className="tp-fun-fact-btn ">
                                    <Link className="tp-btn bg-dark" href="/project">Explore More Projects</Link>
                                 </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Ourproject;
