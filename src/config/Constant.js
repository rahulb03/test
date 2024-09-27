 


export const WEBSITE_NAME = 'Tech Samrajya';
export const CONTACT_NO = '+91-8849782332';
export const CONTACT_MAIL = 'techsamrajyaofficial@gmail.com';
export const HR_MAIL = 'hr@techsamrajya.com';
export const ADDRESS = 'Shop No.22, 3rd floor, Madhuram Arcade - 2, near Madhuram Circle,  Dindoli, Surat,  Gujarat 394210';
export const LOCATION = 'https://maps.app.goo.gl/TdkDdVEvvTa1mnJ68';
// export const IFRAME_LOCATION = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.216427788655!2d72.86804187401268!3d21.14378358382035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051435561d469%3A0x1cb023ba85ee265f!2sParth%20Institute!5e0!3m2!1sen!2sin!4v1706328995221!5m2!1sen!2sin';
// export const IFRAME_LOCATION = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.1524688206122!2d72.88446422344265!3d21.140838748865608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ff6bbd9cf61cf%3A0x1bd814fad29da99c!2sTech%20Samrajya!5e0!3m2!1sen!2sin!4v1726045957400!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
// export const IFRAME_LOCATION = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.1524688206122!2d72.88446422344265!3d21.140838748865608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ff6bbd9cf61cf%3A0x1bd814fad29da99c!2sTech%20Samrajya!5e0!3m2!1sen!2sin!4v1726045957400!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

export const IFRAME_LOCATION = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2631.352027580345!2d72.88302106757416!3d21.14070603798638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ff6bbd9cf61cf%3A0x1bd814fad29da99c!2sTech%20Samrajya!5e0!3m2!1sen!2sin!4v1726046097449!5m2!1sen!2sin' ;

import image1 from '../../public/assets/img/support/img-1.jpg';
import web from '@/public/assets/img/services2/web.png';
import digital from '@/public/assets/img/services2/digital.jpeg';
import uiux from '@/public/assets/img/services2/uiux.jpeg';
import app from '@/public/assets/img/services2/app.jpeg';
import { link } from '@nextui-org/theme';

export const cardData = [
  {
    image: web ,
    meta: "Web Development",
    link: "/ourservice/web-development",
   
  },
  {
    image: app ,
    meta: "App Development",
    link: "/ourservice/app-development",
   
  },
  { 
    image: digital ,
    meta: "Digital Marketing",
    link: "/ourservice/digital-marketing",
   
  },
  {
    image:uiux ,
    meta: "UI/UX Designing",
    link: "/ourservice/ui/ux-design",
   
  },
 
];


export const SERVICES_DATA = [
    { link: "/service/web-development", title: "Web Development" },
    { link: "/service/mobile-app-development", title: "Mobile App Development" }, 
    { link: "/service/custom-software-development", title: "Custom Software Development" }, 
    { link: "/service/blockchain-development", title: "BlockChain Development" }, 
    { link: "/service/ui-ux-design", title: "UI/UX Design" }, 
]

export const SERVICES_DATA1= [
    { link: "/ourservice/web-development", title: "Web Development" },
    { link: "/ourservice/app-development", title: "App Development" }, 
    { link: "/ourservice/custom-software-development", title: "Custom Software Development" }, 
    { link: "/ourservice/digital-marketing", title: "Digital Marketing" }, 
    { link: "/ourservice/ui-ux-design", title: "UI/UX Design" }, 
  
]


export const TECHNOLOGIES_DATA = [
    {
      link: "",
      title: "Frontend",
      content: [
        { link: "/technologies/reactjs", title: "ReactJS" },
        { link: "/technologies/nextjs", title: "NextJS" },
        { link: "/technologies/angularjs", title: "AngularJS" },
      ],
    },
    {
      link: "",
      title: "Backend",
      content: [
        { link: "/technologies/nodejs", title: "NodeJS" },
        { link: "/technologies/php", title: "PHP" },
        { link: "/technologies/java", title: "Java" },
      ],
    },
    {
      link: "",
      title: "App development",
      content: [
        { link: "/technologies/reactnative", title: "React Native" },
        { link: "/technologies/ios", title: "iOS" },
        { link: "/technologies/android", title: "Android" },
        { link: "/technologies/flutter", title: "Flutter" },
      ],
    },
    {
      link: "",
      title: "Other Frameworks",
      content: [
        { link: "/technologies/wordpress", title: "WordPress" },
        // { link: "/technologies/laravel", title: "Laravel" },
        { link: "/technologies/shopify", title: "Shopify" },
      ],
    },
   
  ];
  

export const TECHNOLOGY_DATA = [
  { title: 'iOS', link: '/technologies/ios' },
  { title: 'Android', link: '/technologies/android' },
  { title: 'React Native', link: '/technologies/reactnative' },
  { title: 'Next Js', link: '/technologies/nextjs' },
  { title: 'Node Js', link: '/technologies/nodejs' },
  { title: 'React Js', link: '/technologies/reactjs' },
];


export const SOCIAL_DATA = [
    { link: 'https://api.whatsapp.com/send/?phone=%2B918849782332&text=Hello%20Jerry&type=phone_number&app_absent=0', icon: "whatsapp" },
    { link: "https://www.linkedin.com/company/tech-samrajya/about/", icon: "linkedin" }, 
    { link: "https://www.instagram.com/tech.samrajya?igsh=M2Y0OXIxcmVxMjdy", icon: "instagram" }, 
    { link: "https://www.facebook.com/profile.php?id=61555425243951", icon: "facebook" },
]

export const SEND_MAIL_API = 'https://helper.zebsoft.in/sendmail'





