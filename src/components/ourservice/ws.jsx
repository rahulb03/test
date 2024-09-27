// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import RightSymbol from "@/src/svg/right-symbol";
// import Link from "next/link";
// import { service_content } from "@/src/data/ourservices-data";

// const Ws = () => {
//   const router = useRouter();
//   const [SelectedService, setSelectedService] = useState();

//   useEffect(() => {
//     const hash = router.asPath.split("#")[1];

//     if (!hash) {
//       return;
//     }

//     setSelectedService(hash.toLowerCase());
//   }, [router.asPath]);

//   const serviceServ = service_content.find(
//     (item) => item.id === SelectedService
//   );

//   const sidebarServices = service_content.filter(
//     (service) => service.id !== SelectedService
//   );

//   const scrollToTop = () => {
//     window.scrollTo(0, 0);
//   };
//   return (
//     <>
//       <div className="" style={{ minHeight: "500px" }}>
//         {serviceServ ? (
//           <section className="tp-portfolio-details-area pb-0 h-100">
//             <div className="tp-portfolio-details-thumb mb-4">
//               <Image src={serviceServ.image} alt={serviceServ.title} />
//             </div>
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-lg-12 mb-4 ">
//                   <div className="tp-portfolio-details-wrapper ">
//                     <div id={serviceServ.id}>
//                       <div className="container">
//                         <div className="row">
//                           <div className="col-lg-8">
//                             <h1 className="tp-portfolio-details-title fw-bold">
//                               {serviceServ.title}
//                             </h1>
//                             <p>{serviceServ.description_1}</p>
//                             <p>{serviceServ.description_2}</p>
//                             <div className="tp-portfolio-details-list mb-30">
//                               <h4 className="tp-portfolio-details-list-title fw-bold">
//                                 Key Aspects:
//                               </h4>
//                               <ul>
//                                 {serviceServ.list_title.map((list, i) => (
//                                   <li key={i}>
//                                     <span>
//                                       <RightSymbol />
//                                     </span>
//                                     {list}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           </div>

//                           <div className="col-lg-4">
//                             <div className="tp-portfolio-details-info-box">
//                               <div className="tp-service-widget-item ">
//                                 <h3 className="tp-section-title mt-4 text-center">
//                                   Other <i>Services</i>
//                                   <span className="title-center-shape"></span>
//                                 </h3>
//                                 <div className="tp-service-widget-tab">
//                                   <ul>
//                                     {sidebarServices.map((service, i) => (
//                                       <li key={i}>
//                                         <Link
//                                           onClick={scrollToTop}
//                                           href={`/ourservice#${service.id}`}
//                                           className={""}
//                                         >
//                                           <i className="fa-regular fa-arrow-right-long"></i>{" "}
//                                           {service.title}
//                                         </Link>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Ws;


import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import RightSymbol from "@/src/svg/right-symbol";
import Link from "next/link";
import { service_content } from "@/src/data/ourservices-data";

const Ws = () => {
  const router = useRouter();
  const { id } = router.query;
  const [SelectedService, setSelectedService] = useState();

  useEffect(() => {
   if(id){
    setSelectedService(id.toLowerCase()); 
  }
}, [id]);

  const serviceServ = service_content.find(
    (service) => service.id === SelectedService
  );

  const sidebarServices = service_content.filter(
    (sidebar) => sidebar.id !== SelectedService
  );

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="" style={{ minHeight: "500px" }}>
        {serviceServ ? (
          <section className="tp-portfolio-details-area pb-0 h-100">
            <div className="tp-portfolio-details-thumb mb-4">
              <Image src={serviceServ.image} alt={serviceServ.title} />
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 mb-4 ">
                  <div className="tp-portfolio-details-wrapper ">
                    <div id={serviceServ.id}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8">
                            <h1 className="tp-portfolio-details-title fw-bold">
                              {serviceServ.title}
                            </h1>
                            <p>{serviceServ.description_1}</p>
                            <p>{serviceServ.description_2}</p>
                            <div className="tp-portfolio-details-list mb-30">
                              <h4 className="tp-portfolio-details-list-title fw-bold">
                                Key Aspects:
                              </h4>
                              <ul>
                                {serviceServ.list_title.map((list, i) => (
                                  <li key={i}>
                                    <span>
                                      <RightSymbol />
                                    </span>
                                    {list}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <div className="tp-portfolio-details-info-box">
                              <div className="tp-service-widget-item ">
                                <h3 className="tp-section-title mt-4 text-center">
                                  Other <i>Services</i>
                                  <span className="title-center-shape"></span>
                                </h3>
                                <div className="tp-service-widget-tab">
                                  <ul>
                                    {sidebarServices.map((service, i) => (
                                      <li key={i}>
                                        <Link
                                          onClick={scrollToTop}
                                          href={`/ourservice/${service.id}`}
                                          className={""}
                                        >
                                          <i className="fa-regular fa-arrow-right-long"></i>{" "}
                                          {service.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Ws;
