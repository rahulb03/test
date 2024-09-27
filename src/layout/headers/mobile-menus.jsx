// import Link from "next/link";
// import React, { useState } from "react";
// // internal 
// import menu_data from "./menu-data";

// const MobileMenus = () => {
//   const [navTitle, setNavTitle] = useState("");
//   //openMobileMenu
//   const openMobileMenu = (menu) => {
//     if (navTitle === menu) {
//       setNavTitle("");
//     } else {
//       setNavTitle(menu);
//     }
//   };
//   return (
//     <>
//       <nav className="mean-nav">
//         <ul>
//           {menu_data.map((menu, i) => (
//             <React.Fragment key={i}>
//               {menu.has_dropdown && (
//                 <li className="has-dropdown">
//                   <Link href={menu.link}>{menu.title}</Link>
//                   <ul
//                     className="submenu"
//                     style={{
//                       display: navTitle === menu.title ? "block" : "none",
//                     }}
//                   >
//                     {menu.sub_menus.map((sub, i) => (
//                       <li key={i}>
//                         <Link href={sub.link}>{sub.title}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                   <a
//                     className={`mean-expand ${
//                       navTitle === menu.title ? "mean-clicked" : ""
//                     }`}
                   
//                     onClick={() => openMobileMenu(menu.title)}
//                     style={{ fontSize: "18px", cursor: "pointer" }}
//                   >
//                     <i className="fa-regular fa-angle-down"></i>
//                   </a>
//                 </li>
//               )}
//               {!menu.has_dropdown && (
//                 <li>
//                   <Link href={menu.link}>{menu.title}</Link>
//                 </li>
//               )}
//             </React.Fragment>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default MobileMenus;



import Link from "next/link";
import React, { useState } from "react";
// internal 
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const [subNavTitle, setSubNavTitle] = useState("");

  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
      setSubNavTitle(""); // close any open sub-sub-menus
    } else {
      setNavTitle(menu);
      setSubNavTitle(""); // reset sub-sub-menus when opening a new main menu
    }
  };

  //openSubMenu
  const openSubMenu = (subMenu) => {
    if (subNavTitle === subMenu) {
      setSubNavTitle("");
    } else {
      setSubNavTitle(subMenu);
    }
  };

  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {menu.has_dropdown && (
                <li className="has-dropdown">
                  <Link href={menu.link}>{menu.title}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, j) => (
                      <li key={j} className={sub.content ? "has-submenu" : ""}>
                        <Link href={sub.link || "#"}>{sub.title}</Link>
                        {sub.content && (
                          <>
                            <a
                              className={`mean-expand ${
                                subNavTitle === sub.title ? "mean-clicked" : ""
                              }`}
                              onClick={() => openSubMenu(sub.title)}
                              style={{ fontSize: "16px", cursor: "pointer" }}
                            >
                              <i className="fa-regular fa-angle-down"></i>
                            </a>
                            <ul
                              className="submenu"
                              style={{
                                display: subNavTitle === sub.title ? "block" : "none",
                              }}
                            >
                              {sub.content.map((item, k) => (
                                <li key={k}>
                                  <Link href={item.link}>{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fa-regular fa-angle-down"></i>
                  </a>
                </li>
              )}
              {!menu.has_dropdown && (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
