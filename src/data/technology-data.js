import image from '../../public/assets/img/about/about-1.png'
import react from '../../public/assets/img/technology/react.webp';
import angular from '../../public/assets/img/technology/angular.webp';

import next from '../../public/assets/img/logo/nextjs.svg'
import reactnative from  '../../public/assets/img/logo/sdk-react-native.svg';
import flutter from '../../public/assets/img/logo/file-type-flutter.svg';

import ios from '../../public/assets/img/logo/ios.png';
import android from '../../public/assets/img/technology/317758_android_google_icon.webp';
import php from '../../public/assets/img/technology/php.webp';
import nodejs from '../../public/assets/img/technology/nodejs.webp';
import java from '../../public/assets/img/technology/4373217_java_logo_logos_icon.webp';
import shopify from '../../public/assets/img/technology/1298762_shopify_icon.webp';
import wordpress from '../../public/assets/img/technology/wordpress.webp';

export const framewroks = [
  {
    id: 'reactjs',
    name: 'ReactJS',
    image: react,
    description: 'A JavaScript library for building user interfaces.',
    info: 'React is maintained by Facebook and a community of individual developers and companies. It simplifies the process of building interactive UIs, creating reusable components, and managing the state of your application efficiently.'
  },
  {
    id: 'nextjs',
    name: 'NextJS',
    image: next,

    description: 'A React framework for building server-side rendered applications.',
    info: 'Next.js provides powerful features like server-side rendering, static site generation, and API routes, making it ideal for building fast and SEO-friendly web applications.'
  },
  {
    id: 'angularjs',
    name: 'AngularJS',
    image: angular,

    description: 'A platform for building mobile and desktop web applications.',
    info: 'Angular is maintained by Google and provides a comprehensive solution for web development, including data binding, dependency injection, and a robust ecosystem for building enterprise-level applications.'
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    image: nodejs,

    description: 'A runtime environment that allows you to run JavaScript on the server.',
    info: 'Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient. It’s ideal for building scalable network applications like real-time communication apps.'
  },
  {
    id: 'reactnative',
    name: 'React Native',
    image: reactnative,

    description: 'A framework for building native apps using React.',
    info: 'React Native allows you to create mobile applications using JavaScript and React, while maintaining native performance. It’s popular for building cross-platform mobile apps for iOS and Android.'
  },
  {
    id: 'php',
    name: 'PHP',
    image: php,

    description: 'A popular general-purpose scripting language especially suited to web development.',
    info: 'PHP powers some of the most popular websites in the world, including WordPress. It’s a server-side language known for its ease of use and speed in web development.'
  },
  {
    id: 'java',
    name: 'Java',
    image: java,

    description: 'A high-level, class-based, object-oriented programming language.',
    info: 'Java is used to build large-scale applications, including Android apps, and is known for its portability across different platforms.'
  },
  {
    id: 'ios',
    name: 'iOS',
    image: ios,

    description: 'The operating system that powers Apple’s iPhone and iPad devices.',
    info: 'iOS is known for its sleek design, robust security features, and a rich ecosystem of applications available through the App Store.'
  },
  {
    id: 'android',
    name: 'Android',
    image: android,

    description: 'The most popular mobile operating system worldwide.',
    info: 'Android, developed by Google, offers flexibility and customization, making it a popular choice for a wide range of smartphones and tablets.'
  },
  {
    id: 'flutter',

    name: 'Flutter',
    image: flutter,

    description: 'An open-source UI software development kit created by Google.',
    info: 'Flutter is used to develop cross-platform applications from a single codebase, offering near-native performance across platforms like Android, iOS, Windows, and more.'
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    image: wordpress,

    description: 'A free and open-source content management system (CMS) written in PHP.',
    info: 'WordPress is the world’s most popular CMS, used to create blogs, websites, and even e-commerce stores with its vast array of themes and plugins.'
  },
  // {
  //   id: 'laravel',

  //   name: 'Laravel',
  //   image: image,

  //   description: 'A PHP framework for web artisans.',
  //   info: 'Laravel offers an elegant syntax and features like routing, authentication, sessions, and caching, making web development easier and faster.'
  // },
  {
    id: 'shopify',
    name: 'Shopify',
    image: shopify,

    description: 'A commerce platform that allows anyone to set up an online store and sell their products.',
    info: 'Shopify provides tools to build an e-commerce site, manage products, handle payments, shipping, and customer relationships.'
  }
];



