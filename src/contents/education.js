import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Education = () => {
    const image = ['ministry.jpg', 'transcript9.jpg', 'matric10.jpg', 'transcript12.jpg', 'entrance12.jpg', 'gradereport.jpg']
    const [index, setIndex] = useState(0)

    const { ref: refLeft, inView: inViewLeft } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const { ref: refRight, inView: inViewRight } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });


    function moveleft() {
        const i = index === 0 ? image.length - 1 : index - 1;
        setIndex(i);
    }

    function moveright() {
        const i = index === image.length - 1 ? 0 : index + 1;
        setIndex(i);
    }

    return (
        <motion.div
            id="education"
            className="pl-5 pr-32 pb-5 pt-16 grid grid-cols-2">

            <motion.div
                ref={refLeft}
                initial={{ opacity:0}}
                animate={{ opacity: inViewLeft ? 1 : 0}}
                transition={{ duration: 1.3 }}
                className="flex ">

                <div className="w-3 h-full bg-primary"></div>
                <div className="w-3 h-full bg-white"></div>
                <div className="w-3 h-full bg-secondary"></div>
                <button onClick={moveleft}><img src="left.svg" className="w-10 hover:scale-110" /></button>
                <img src={image[index]} className="w-96 cursor-zoom-in rounded-xl" onClick={() => window.open(image[index], '_blank')} />
                <button onClick={moveright}><img src="right.svg" className="w-10 hover:scale-110" /></button>

            </motion.div>

            <motion.div
                ref={refRight}
                initial={{ x:-100}}
                animate={{ x: inViewRight ? 0 : -100 }}
                transition={{ duration: 1.3 }}
                className="relative"
            >
                <img src="school.svg" className="absolute top-0 left-0 -z-10 opacity-5" />
                <h1 className="text-secondary bg-primary p-2 rounded-md mb-5 text-5xl font-bold ">EDUCATION</h1>
                <p>These are the schools I learned in</p> <br></br>
                <p className="flex gap-5 text-2xl"><img src="bullet.svg" className="w-10" /> Misrakber No 1 Primary Schools</p>
                <p className="flex gap-5 text-2xl"><img src="bullet.svg" className="w-10" /> Beshale Secondary and Preparatory Schools</p>
                <p className="flex gap-5 text-2xl"><img src="bullet.svg" className="w-10" />Bahirdar University</p>
                <br></br>
                <p> Beside formal education taking different online courses and watching youtube tutoiral helped me a lot in my career and here are my GOAT</p>
                <br></br>
                <p className="flex gap-5 text-2xl"><img src="star.svg" className="w-10  " /> Navin Reddy <a href="https://www.youtube.com/@Telusko"><img src="youtube.svg" className="w-10 hover:scale-110" /> </a></p>
                <p className="flex gap-5 text-2xl"><img src="star.svg" className="w-10" /> Net Ninja <a href="https://www.youtube.com/@NetNinja"><img src="youtube.svg" className="w-10 hover:scale-110" /> </a></p>
                <p className="flex gap-5 text-2xl"><img src="star.svg" className="w-10" />Caleb Curry <a href="https://www.youtube.com/@codebreakthrough/featured"><img src="youtube.svg" className="w-10 hover:scale-110" /> </a></p>

            </motion.div>

        </motion.div>
    );
}

export default Education;