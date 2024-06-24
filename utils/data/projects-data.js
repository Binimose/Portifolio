import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Bixi student service  App',
        description: "UVConnect is a cutting-edge mobile application built with Flutter, designed to enhance the university experience for UV students. This comprehensive app seamlessly integrates academic tools, global awareness, and campus opportunities into one user-friendly platform.Key Features:GPA Calculator:Stay on top of your academic progress with our intuitive GPA calculator, tailored specifically for UV students.,International News Hub,BIXI Scholarship Agent: Access and apply for scholarships effortlessly through our BIXI scholarship module, serving as your personal scholarship agent.,UV Event Organizer: Never miss out on campus life! Our event organizing package keeps you updated on all UV events and helps you plan and participate in campus activities.",
        tools: ['news.org api','firebase,flutter'],
        role: 'fullstack',
        
    },
    {
        id: 2,
        name: 'Authentication',
        description: 'Stay on top of your academic progress with our intuitive GPA calculator, tailored specifically for UV students.JWT-based Authentication: Utilize the power of JSON Web Tokens for secure, stateless authentication, allowing for better scalability and performance.User Registration: A streamlined sign-up process with secure password hashing to protect user credentials.Token-based Login: Implement a secure login system that issues JWTs upon successful authentication.Protected Routes: Easily secure your API endpoints and routes using JWT verification middleware.Token Refresh Mechanism: Implement a token refresh strategy to maintain user sessions securely over extended periods.EJS Templating: Leverage server-side rendering with EJS for dynamic view generation, enhancing both security and SEO.Express.js Backend: Utilize the flexibility and power of Express.js to create a robust, efficient backend structure. ',
        tools: ['Express',  , 'MongoDB', 'ejs' ,'JWT'],
        role: 'Full Stack Developer',
        
        
    },
     
    {
        id: 3,
        name: 'Timer',
        description:  " A Dynamic Image ShowcasePicture Carousel is an engaging web application that brings life to static webpages through automated image transitions. Built using HTML and JavaScript, this project demonstrates the power of client-side scripting to create interactive and visually appealing content. At its core, Picture Carousel utilizes JavaScript's timing functions to cycle through a curated collection of images at predetermined intervals, creating a seamless and captivating visual experience for users. This project not only serves as an excellent learning tool for budding web developers to understand DOM manipulation and timing events but also offers a practical solution for showcasing multiple images in a space-efficient manner. Whether used for personal portfolios, product displays, or as a component in larger web applications, Picture Carousel exemplifies how simple programming concepts can be leveraged to enhance user engagement and website aesthetics.",
        tools: ['Js DOM','HTML'],
        
      
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },