// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../utils/framerMotionUtils';

const projects = [
 {
   id: 1,
   title: "Steampipe",
   description: "select * from cloud;",
   image: "https://steampipe.io/_next/image?url=%2Fimages%2Fsteampipe_logo_wordmark_color.svg&w=640&q=75",
   link: "https://steampipe.io/"
 },
 {
   id: 2,
   title: "Project 2",
   description: "Description of Project 2.",
   image: "path/to/project2.jpg",
   link: "https://example.com/project2"
 },
 {
   id: 3,
   title: "Project 3",
   description: "Description of Project 3.",
   image: "path/to/project3.jpg",
   link: "https://example.com/project3"
 },
 // Add more projects as needed
];

const Projects = () => {
 return (
   <motion.div
     initial="initial"
     animate="in"
     exit="out"
     variants={pageVariants}
     transition={pageTransition}
     className="container mx-auto p-4"
   >
     {/* <h1 className="text-4xl font-bold mb-8">Projects</h1> */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {projects.map((project) => (
         <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
           <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
           <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
           <p className="mb-4">{project.description}</p>
           <a
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             className="text-blue-500 hover:underline"
           >
             View Project
           </a>
         </div>
       ))}
     </div>
   </motion.div>
 );
};

export default Projects;