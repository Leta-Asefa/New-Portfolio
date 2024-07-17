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
    return (
        <div className="skill-bar-container">
            <img src='skills.gif' className='absolute left-0 top-0'/>
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
    );
};

export default SkillBar;

