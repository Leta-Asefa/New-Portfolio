import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Project = () => {

    const projects = [
        {
            title: "Shalom Reflexology",
            description: "A simple ERP system developed to automate the workflow of the company named 'Shalom Reflexology' which is located around 6 Kilo in Addis Ababa. The system Stores patients data, Gives an appointment, Takes an attendance & Performs financial related issues.It has both Admin and Reception Dashboard.",
            technologies: "Java | JavaFx | MySQL | CSS",
            githubLink: "https://github.com/Leta-Asefa/Shalom-Reflexology",
            image: "shalom.gif"
        },
        {
            title: "Document Management System",
            description: "A fully functional web application developed for a government office to modernize and streamline their file handling system, enhancing efficiency and accessibility in managing documents and administrative tasks.",
            technologies: "MERN Stack",
            githubLink: "https://github.com/Leta-Asefa/FMS-React",
            image: "dms.png"
        },
        {
            title: "Media Player",
            description: "A desktop media player supporting various audio and video formats, providing comprehensive playback capabilities for desktop users seeking versatile multimedia management and enjoyment.",
            technologies: "Java | JavaFx | CSS",
            githubLink: "https://github.com/Leta-Asefa/Media-Player",
            image: "mediaplayer.avif"
        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.4, // Defines how much of the element is visible before triggering
    });


    return (

        <motion.div id='project'
            ref={ref}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className='project-big-container'>

            <h2 className='flex-none w-full md:w-60 text-center text-3xl text-secondary pr-0 md:pr-0'>
                <h1 className='font-bold text-white bg-gray-800 p-2 rounded-md text-3xl'>PROJECTS</h1>
                <div className='text-sm mt-5 pr-2 relative '>
                    <p className="p-2">As a Fullstack Developer, I've completed real-world projects and developed various personal and internship projects throughout my career, gaining diverse experience in both professional and personal development environments.</p>
                    <br></br>
                    <img src='projects.gif' className='w-96' />
                    <img src='arrow.gif' className='w-24 absolute bottom-09 right-0' />
                </div>
            </h2>


            {projects.map(project => {
                return <div className=" flex-none w-64  border-2 border-white p-2 rounded-xl hover:border-gray-200">

                    <img className="w-60 h-40 rounded-xl" src={project.image} alt={project.title} />

                    <div className="px-6 py-4">

                        <div className="font-bold text-sm mb-2">{project.title}</div>

                        <p className="text-gray-700 text-xs" >{project.description}</p>

                        <div className="mt-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
                                {project.technologies}
                            </span>
                        </div>
                    </div>

                    <div className="px-6 py-1">
                        <a
                            href={project.githubLink}
                            className="bg-primary hover:bg-orange-500 text-xs text-black font-semibold py-1 px-4 rounded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Code on GitHub
                        </a>
                    </div>

                </div>

            })
            }


        </motion.div>
    );
};

export default Project;
