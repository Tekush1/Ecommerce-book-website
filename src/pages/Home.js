import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Import custom styles for the home page

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          className="w-full h-full object-cover opacity-80" 
          autoPlay muted loop 
        >
          <source src="https://www.example.com/your-library-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
        initial={{ opacity: 0, y: -100 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight mb-4 text-shadow text-yellow-400">
          Dive into the World of <span className="text-yellow-300">Books</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 opacity-90 max-w-lg mx-auto">
          Explore and discover your next favorite book with our personalized library.
        </p>
        
        {/* Button with Animation */}
        <motion.button 
          className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Exploring
        </motion.button>
      </motion.div>

      {/* Books Floating Animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ x: [0, 20, 0, -20, 0], rotate: [0, 15, -15, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5">
          <circle cx="50" cy="50" r="45" />
          <line x1="50" y1="50" x2="50" y2="5" />
          <line x1="50" y1="50" x2="95" y2="50" />
        </svg>
      </motion.div>
      
      {/* Book Animation (Flipping) */}
      <motion.div 
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ rotateY: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <div className="w-24 h-32 bg-yellow-500 rounded-md shadow-xl"></div>
      </motion.div>
    </div>
  );
};

export default Home;
