import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {
 return (
   <Router>
     <div className="flex flex-col h-screen">
       {/* Header */}
       <header className="bg-gray-800 text-white p-4">
         <nav className="container mx-auto flex justify-between">
           <div className="font-bold text-xl">My Portfolio</div>
           <div>
             <Link to="/" className="mr-4 hover:text-gray-400">Home</Link>
             <Link to="/about" className="mr-4 hover:text-gray-400">About</Link>
             <Link to="/projects" className="mr-4 hover:text-gray-400">Projects</Link>
             <Link to="/contact" className="hover:text-gray-400">Contact</Link>
           </div>
         </nav>
       </header>

       {/* Main Content */}
       <main className="flex-grow">
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </main>

       {/* Footer */}
       <footer className="bg-gray-800 text-white p-4 text-center">
         &copy; {new Date().getFullYear()} Lalit Bhardwaj
       </footer>
     </div>
   </Router>
 );
}

export default App;