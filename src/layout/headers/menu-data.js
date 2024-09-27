// import HomeIcon from '@/src/svg/home-icon';
// import { SERVICES_DATA, SERVICES_DATA1 } from '@/src/config/Constant';
// import { TECHNOLOGIES_DATA } from '@/src/config/Constant';
// const menu_data = [
//   {
//     id: 1,
//     mega_menu: false,
//     has_dropdown: false,
//     home_icon: <HomeIcon />,
//     title: "Home",
//     link: "/",
//     active: "",
//     sub_menus: [
//       { link: "/", title: "Home 1" },
//       { link: "/home-2", title: "Home 2" },
//       { link: "/home-3", title: "Home 3" },
//     ],
//   },
//   {
//     id: 2,
//     mega_menu: false,
//     has_dropdown: true,
//     title: "Services",
//     link: "",
//     active: false,
//     sub_menus: SERVICES_DATA1
//   },
//   // {
//   //   id: 2,
//   //   mega_menu: false,
//   //   has_dropdown: true,
//   //   title: "Services",
//   //   link: "#",
//   //   active: "",
//   //   sub_menus: SERVICES_DATA,
//   // },
//   {
//     id: 3,
//     mega_menu: true,
//     has_dropdown: true,
//     title: "Technologies",
//     link: "",
//     active: "",
//     // link:'#',
//    sub_menus:TECHNOLOGIES_DATA,
//   },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/portfolio", title: "Portfolio" },
  //     { link: "/portfolio-details", title: "Portfolio Details" },
  //     { link: "/team", title: "Team" },
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/404", title: "404" },
  //   ],
  // },
//   {
//     id: 4,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "Projects",
//     link: "/project",
//     active: "",
    
//   },
//   // {
//   //   id: 5,
//   //   mega_menu: false,
//   //   has_dropdown: true,
//   //   title: "Blog",
//   //   link: "/blog",
//   //   active: "",
//   //   sub_menus: [
//   //     { link: "/blog", title: "Blog" },
//   //     { link: "/blog-details", title: "Blog Details" },
//   //   ],
//   // },
//   {
//     id: 5,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "our proudct",
//     link: "/ourproduct",
//     active: "",
    
//   },
//   {
//     id: 6,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "Contact",
//     link: "/contact",
//     active: "",
//   },
//   // {
//   //   id: 7,
//   //   mega_menu: false,
//   //   has_dropdown: false,
//   //   title: "A",
//   //   link: "/about",
//   //   active: "",
//   // },
//   // {
//   //   id: 8,
  
//   //   mega_menu: false,
//   //   has_dropdown: false,
//   //   title: "H",
//   //   link: "/home-3",
//   //   active: "",
//   // },
//   // {
//   //   id: 9,
  
//   //   mega_menu: false,
//   //   has_dropdown: false,
//   //   title: "H",
//   //   link: "/service-details",
//   //   active: "",
//   // },
//   // {
//   //   id: 7,
//   //   mega_menu: false,
//   //   has_dropdown: true,
//   //   title: "s",
//   //   link: "/ourservice",
//   //   active: "",
//   //   sub_menus: SERVICES_DATA1
//   // },
//   // {
//   //   id: 7,
//   //   mega_menu: false,
//   //   has_dropdown: false,
//   //   title: "p",
//   //   link: "/project",
//   //   active: "",
    
//   // },
// ];

// export default menu_data;



import HomeIcon from '@/src/svg/home-icon';
import { SERVICES_DATA, SERVICES_DATA1 } from '@/src/config/Constant';
import { TECHNOLOGIES_DATA } from '@/src/config/Constant';

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "",
    sub_menus: [
      { link: "/", title: "Home 1" },
      { link: "/home-2", title: "Home 2" },
      { link: "/home-3", title: "Home 3" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "#", // Set to "#" to prevent navigation
    active: "",
    sub_menus: SERVICES_DATA1,
  },
  {
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Technologies",
    link: "#", // Set to "#" to prevent navigation
    active: "",
    sub_menus: TECHNOLOGIES_DATA,
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Projects",
    link: "/project",
    active: "",
  },
  // {
  //   id: 5,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Our Product",
  //   link: "/ourproduct",
  //   active: "",
  // },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
    active: "",
  },
  // {
  //   id: 7,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/portfolio", title: "Portfolio" },
  //     { link: "/portfolio-details", title: "Portfolio Details" },
  //     { link: "/team", title: "Team" },
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/404", title: "404" },
  //   ],
  // },
];

export default menu_data;
