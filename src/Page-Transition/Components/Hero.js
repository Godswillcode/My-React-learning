import React from 'react';
import './hero.css'
import { motion } from 'framer-motion';

const Hero = () => {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    exit: {x: 0, opacity: 0 }
  };
    return (
      
        <div className="hero">
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="wrap container text-white text-center">
            <motion.h1  transition={config}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
         >Welcome to react page transition</motion.h1>
          </div>
        </div>
      </div>
    )
}

export default Hero
