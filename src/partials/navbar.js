import React from 'react';
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <motion.nav
            className="navbar"
            initial={{opacity:0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1,delay:0, type: "spring", stiffness: 30 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="navbar-brand">
                    <img src="logo.svg" className='w-10 h-10' />
                    <p > <span className='text-4xl'>T</span>rendyTech</p>
                </div>
                <div className="navbar-links">
                    <a href="#homepage" className="navbar-link">
                        <img src='home.svg' className='navbar-links-img' />
                        <h1>Home</h1>
                    </a>

                    <a href="#skill" className="navbar-link">
                        <img src='skills.svg' className='navbar-links-img' />
                        <h1>Skills</h1>
                    </a>
                    <a href="#project" className="navbar-link">
                        <img src='projects.svg' className='navbar-links-img' />
                        <h1>Projects</h1>
                    </a>
                    <a href="#experience" className="navbar-link">
                        <img src='experiences.svg' className='navbar-links-img' />
                        <h1>Experiences</h1>
                    </a>
                    <a href="#testimonial" className="navbar-link">
                        <img src='testimonials.svg' className='navbar-links-img' />
                        <h1>Testimonials</h1>
                    </a>
                    
                    <a href="#contact" className="navbar-link">
                        <img src='contact.svg' className='navbar-links-img' />
                        <h1>Contact</h1>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
