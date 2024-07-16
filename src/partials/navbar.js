import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container mx-auto flex justify-between items-center">
                <div className="navbar-brand">
                    <img src="logo.svg" className='w-10 h-10' />
                    <p > <span className='text-4xl'>T</span>rendyTech</p>
                </div>
                <div className="navbar-links">
                    <a href="#home" className="navbar-link">
                        <img src='home.svg' className='navbar-links-img'/>
                        <h1>Home</h1>
                    </a>
                    
                    <a href="#skills" className="navbar-link">
                    <img src='skills.svg' className='navbar-links-img'/>
                    <h1>Skills</h1>
                    </a>
                    <a href="#projects" className="navbar-link">
                    <img src='projects.svg' className='navbar-links-img'/>
                        <h1>Projects</h1>
                    </a>
                    <a href="#experiences" className="navbar-link">
                    <img src='experiences.svg' className='navbar-links-img'/>
                        <h1>Experiences</h1>
                    </a>
                    <a href="#testimonials" className="navbar-link">
                    <img src='testimonials.svg' className='navbar-links-img'/>
                        <h1>Testimonials</h1>
                    </a>
                    <a href="#about" className="navbar-link">
                    <img src='about.svg' className='navbar-links-img'/>
                        <h1>About</h1>
                        </a>
                    <a href="#contact" className="navbar-link">
                    <img src='contact.svg' className='navbar-links-img'/>
                        <h1>Contact</h1>
                        </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
