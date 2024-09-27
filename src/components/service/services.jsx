
// import React from 'react';
// import { cardData } from '@/src/config/Constant'; // Ensure this path is correct
// import Image from 'next/image';
// import Link from 'next/link';

// const Services1 = () => {
//   return (
//     <>
//       <div className="container p-10">
//         <div className="row">
//           {cardData.map((card, index) => (
//             <div className="col-sm-12 col-md-6 col-lg-3  mb-4 " key={index} style={{marginRight:''}} >
//               {/* Wrap the card with Link to make the entire card clickable */}
//               <Link href={card.link} passHref>
//                 <span className="card text-dark card-has-bg click-col" style={{ backgroundImage: `url(${card.image})` }}>
//                   <Image src={card.image} width={300} height={300} />
//                   <div className="card-img-overlay d-flex flex-column card1">
//                     <div className="card-body">
//                       {/* You can add content here if needed */}
//                     </div>
//                     <div className="card-footer">
//                       <div className="media">
//                         <small className="card-meta mt-7 text-dark mb-2">{card.meta}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </span>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services1;


import React from 'react';
import { cardData } from '@/src/config/Constant'; // Ensure this path is correct
import Image from 'next/image';
import Link from 'next/link';

const Services1 = () => {
  return (
    <>
      <div className="container p-10">
        <div className="row">
          {cardData.map((card, index) => (
            <div
              className="col-sm-12 col-md-6 col-lg-3 mb-4 card-wrapper"
              key={index}
            >
              {/* Wrap the card with Link to make the entire card clickable */}
              <Link href={card.link} passHref>
                <span
                  className="card text-dark card-has-bg click-col"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <Image src={card.image} width={300} height={300} />
                  <div className="card-img-overlay d-flex flex-column card1">
                    <div className="card-body">
                      {/* You can add content here if needed */}
                    </div>
                    <div className="card-footer">
                      <div className="media">
                        <small className="card-meta mt-7 text-dark mb-2">
                          {card.meta}
                        </small>
                      </div>
                    </div>
                  </div>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for responsive margin/padding adjustments */}
      <style jsx>{`
        {/* .card-wrapper {
          margin-right: 0;
        }

        
        @media (min-width: 990px) and (max-width: 1100px) {
          .card-wrapper {
            margin-right : 80px; 
            padding: 10px; 
          }
        }
        @media (min-width: 1000px) and (max-width: 1100px) {
          .card-wrapper {
            margin-right : 80px; 
            padding: 10px; 
          }
        }

        @media (min-width: 1100px) and (max-width: 1400px) {
          .card-wrapper {
            margin-right : 70px; 
            padding: 10px; 
          }
        }

        @media (min-width: 1400px) {
          .card-wrapper {
            margin-bottom: 30px; 
          }
        }

        .card-has-bg {
          background-size: cover;
          background-position: center;
        }

        .click-col {
          display: block;
          cursor: pointer;
          height: 100%;
        }

        .card1 {
          justify-content: space-between;
        } */}
      `}</style>
    </>
  );
};

export default Services1;
