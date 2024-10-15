import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../utils/framerMotionUtils';

const About = () => {
 return (
   <motion.div
     initial="initial"
     animate="in"
     exit="out"
     variants={pageVariants}
     transition={pageTransition}
     className="container mx-auto p-4"
   >
     <section className="my-8">
       <h1 className="text-4xl font-bold mb-4">About Me</h1>
       <div className="flex flex-col md:flex-row">
         <div className="md:w-1/3 mb-4 md:mb-0">
           <img src="https://avatars.githubusercontent.com/u/37527306?s=400&u=21cb3624e4d68e8507a63b6734c6756091f2ab79&v=4" alt="Lalit Bhardwaj" className="square w-15 h-15" />
         </div>
         <div className="md:w-2/3 md:pl-8">
           <p className="mb-4">
             Hello! I'm Lalit Bharwaj, a passionate web developer with experience in building beautiful and functional websites. I specialize in React, JavaScript, and CSS frameworks like Tailwind CSS.
           </p>
           <p className="mb-4">
             I love creating clean and efficient code, and I'm always eager to learn new technologies and improve my skills. When I'm not coding, you can find me exploring new places, reading tech blogs, or experimenting with new recipes in the kitchen.
           </p>
           <p className="mb-4">
             Feel free to check out my projects and get in touch if you'd like to collaborate or just say hi!
           </p>
         </div>
       </div>
     </section>

     <section className="my-8">
       <h2 className="text-3xl font-bold mb-4">Skills</h2>
       <ul className="list-disc list-inside">
         <li className="mb-2">React.js</li>
         <li className="mb-2">JavaScript (ES6+)</li>
         <li className="mb-2">HTML5 & CSS3</li>
         <li className="mb-2">Tailwind CSS</li>
         <li className="mb-2">Git & GitHub</li>
         <li className="mb-2">Responsive Design</li>
       </ul>
     </section>

     <section className="my-8">
       <h2 className="text-3xl font-bold mb-4">Experience</h2>
       <div className="mb-4">
         <h3 className="text-2xl font-semibold">Web Developer at XYZ Company</h3>
         <p className="italic">January 2020 - Present</p>
         <p>
           At XYZ Company, I work on developing and maintaining web applications. I collaborate with designers and backend developers to create seamless user experiences.
         </p>
       </div>
       <div className="mb-4">
         <h3 className="text-2xl font-semibold">Freelance Web Developer</h3>
         <p className="italic">June 2018 - December 2019</p>
         <p>
           As a freelance web developer, I worked with various clients to build and enhance their websites. I managed projects from concept to completion, ensuring client satisfaction.
         </p>
       </div>
     </section>
   </motion.div>
 );
};

export default About;