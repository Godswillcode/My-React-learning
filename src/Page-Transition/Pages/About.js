import React from 'react';
import imageTwo from '../images/2.jpg'
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../animation';

function About() {
    return (
        <motion.div  initial='out' animate='in' exit='out' variants={animationTwo} transition={transition} >
            <div className="banner" style={{backgroundImage: `url(${imageTwo})`, marginBottom: "10rem"}}>
        <div className="banner-overlay d-flex justify-content-center align-items-center">
          <div className="wrap container text-white text-center">
            <h1>About us page</h1>
          </div>
        </div>
      </div>
        </motion.div>
    )
}

export default About
