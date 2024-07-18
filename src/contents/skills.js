import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = () => {
    const skills = [
        { name: 'Javascript', value: 85 },
        { name: 'MongoDb', value: 70 },
        { name: 'Express', value: 80 },
        { name: 'ReactJs', value: 75 },
        { name: 'NodeJs', value: 80 },
        { name: 'HTML 5', value: 85 },
        { name: 'CSS 3', value: 70 },
        { name: 'Tailwindcss', value: 85 },
        { name: 'Java', value: 84 },
        { name: 'Springboot', value: 65 },
        { name: 'Junit', value: 90 },
        { name: 'MySQL', value: 80 },
        { name: 'Git', value: 80 },
        { name: 'Github', value: 80 },
        { name: 'Maven', value: 60 },
        { name: 'Vscode', value: 80 },
        { name: 'Eclipse', value: 80 },
        { name: 'Photoshop', value: 75 },
        { name: 'CapCut', value: 65 },
        { name: 'Design Theory', value: 100 }
    ]

    const image = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 3, } }
    }




    return (
        <motion.div id='skill' initial="hidden" animate="visible" className='relative'>
            {/* <img src='skillbg.gif' className='absolute left-0 top-0 opacity-15 w-full rounded-xl -z-10' /> */}

            <div className='flex justify-between w-full items-center px-20 gap-5 bg-gray-900'>
                <motion.img src='skills.gif' className='w-40' variants={image} />
                <p className='text-xl font-bold text-white bg-gray-900 p-3 rounded-lg'>
                    I am highly confident in the technical skills listed below:
                    In addition to my technical expertise, I am also a strong communicator within team environments, ensuring effective collaboration and project success.

                </p>
            </div>

            <div className="skill-bar-container">

                {skills.map((skill) => (
                    <div key={skill.name} className="skill-bar">
                        <div className="skill-bar-label">{skill.name}</div>
                        <div className="skill-bar-value-container">
                            <motion.div
                                className="skill-bar-value"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1 }}
                            ></motion.div>
                        </div>
                        <div className="skill-bar-value-text">{skill.value}%</div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillBar;

