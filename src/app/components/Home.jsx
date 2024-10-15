import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition, pageVariants } from '../utils/framerMotionUtils';

const Home = () => {
 return (
   <motion.div
     initial="initial"
     animate="in"
     exit="out"
     variants={pageVariants}
     transition={pageTransition}
     className="container mx-auto p-4"
   >
     <section className="my-8 text-center">
       <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
       <p className="text-lg mb-8">I am Lalit Bhardwaj, a passionate web developer.</p>
       <Link to="/contact" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Get in Touch</Link>
     </section>

     <section className="my-8">
       <h2 className="text-3xl font-bold mb-4">About Me</h2>
       <p className="mb-4">
         I am a web developer with a strong focus on creating beautiful and functional web experiences. I specialize in React, JavaScript, and CSS frameworks like Tailwind CSS.
       </p>
       <Link to="/about" className="text-blue-500 hover:underline">Learn more about me</Link>
     </section>

     <section className="my-8">
       <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         <div className="bg-white p-4 rounded-lg shadow-md">
           <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
           <p className="mb-4">Description of Project 1.</p>
           <Link to="/projects" className="text-blue-500 hover:underline">View Project</Link>
         </div>
         <div className="bg-white p-4 rounded-lg shadow-md">
           <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
           <p className="mb-4">Description of Project 2.</p>
           <Link to="/projects" className="text-blue-500 hover:underline">View Project</Link>
         </div>
         <div className="bg-white p-4 rounded-lg shadow-md">
           <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
           <p className="mb-4">Description of Project 3.</p>
           <Link to="/projects" className="text-blue-500 hover:underline">View Project</Link>
         </div>
       </div>
       <div className="text-center mt-8">
         <Link to="/projects" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">View All Projects</Link>
       </div>
     </section>
   </motion.div>
 );
};

export default Home;