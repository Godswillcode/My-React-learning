import React from 'react'
import Hero from '../Components/Hero';
import AboutImg from '../images/about.jpg'
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animation';

function Home() {
    return (
        <motion.div  initial='out'
        animate='in'
        exit='out'
        variants={animationOne}
        transition={transition}>
            <Hero/>
            <div className="container mt-5" style={{marginBottom: "5rem"}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-wrap pt-3">
                            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       <img src={AboutImg} alt="about us" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
