
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { framewroks, technologies } from "@/src/data/technology-data";

// const Technologies = () => {
//   const router = useRouter();
//   const [selectedTechnology, setSelectedTechnology] = useState(null);

//   useEffect(() => {
//     const hash = router.asPath.split("#")[1];

//     // Check if the URL is `/technologies#` or `/technologies` without a hash
//     if (!hash) {
//       // Do nothing if it's the base route
//       return;
//     }

//     setSelectedTechnology(hash.toLowerCase());
//   }, [router.asPath]);

//   const containerStyle = {
//     minHeight: "480px",
//   };

//   if (!selectedTechnology) {
//     return (
//       <div style={containerStyle}>
//         <div></div>
//       </div>
//     );
//   }

//   const selectedTech = framewroks.find(
//     (tech) => tech.id === selectedTechnology
//   );

//   return (
//     <div style={containerStyle}>
//       {selectedTech ? (
//         <div key={selectedTech.id}>
//           <div className="container-fluid mt-30">
//             <div className="row align-items-center justify-content-center">
//               <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 d-flex justify-content-center order-1 order-md-2">
//                 <Image
//                   src={selectedTech.image}
//                   alt={`${selectedTech.name} Logo - ${selectedTech.name} Development Company`}
//                   height={400}
//                   width={400}
//                   priority
//                   style={{ maxWidth: "100%", height: "auto" }}
//                 />
//               </div>

//               <div className="col-lg-6 col-md-6 order-2 order-md-1">
//                 <h1 className="display-4 fw-bold text-black text-center text-md-start">
//                   {selectedTech.name} Development <br />
//                   <span className="text-black">Company</span>
//                 </h1>
//                 <p className="lead text-muted mt-50 text-center text-md-start">
//                   {selectedTech.description}
//                 </p>
//                 <p className="lead text-muted text-center mt-6 text-md-start">
//                   {selectedTech.info}
//                 </p>
//                 <div className="mt-4 text-center text-md-start">
//                   <a href="/contact" className="btn btn-lg me-3 mb-2 cta">
//                     Consult with Us
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// };

// export default Technologies;



import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { framewroks } from "@/src/data/technology-data";

const Technologies = () => {
  const router = useRouter();
  const { id } = router.query; // Get dynamic id from the URL
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  useEffect(() => {
    if (id) {
      setSelectedTechnology(id.toLowerCase());
    }
  }, [id]);

  const containerStyle = {
    minHeight: "480px",
  };

  if (!selectedTechnology) {
    return (
      <div style={containerStyle}>
        <div></div>
      </div>
    );
  }

  const selectedTech = framewroks.find((tech) => tech.id === selectedTechnology);

  return (
    <div style={containerStyle}>
      {selectedTech ? (
        <div key={selectedTech.id}>
          <div className="container-fluid mt-30">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 d-flex justify-content-center order-1 order-md-2">
                <Image
                  src={selectedTech.image}
                  alt={`${selectedTech.name} Logo - ${selectedTech.name} Development Company`}
                  height={400}
                  width={400}
                  priority
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>

              <div className="col-lg-6 col-md-6 order-2 order-md-1">
                <h1 className="display-4 fw-bold text-black text-center text-md-start">
                  {selectedTech.name} Development <br />
                  <span className="text-black">Company</span>
                </h1>
                <p className="lead text-muted mt-50 text-center text-md-start">
                  {selectedTech.description}
                </p>
                <p className="lead text-muted text-center mt-6 text-md-start">
                  {selectedTech.info}
                </p>
                <div className="mt-4 text-center text-md-start">
                  <a href="/contact" className="btn btn-lg me-3 mb-2 cta">
                    Consult with Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Technologies;
