import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {

    const testimonials = [
        {
            image: 'nati.jpg',
            text: '“Dedicated and curious—never shies away from challenges. A rising star in the tech world!”',
            name: 'Natinael H/Mariam',
            linkedin: 'https://www.linkedin.com/in/natenael-haylemariam-020163271/',
            github:'https://github.com/C5rogers'
        },
        {
            image: 'bura.jpg',
            text: '“Always hungry to learn and quick to grasp new concepts. A valuable asset to any team!”',
            name: 'Buruk Jeldu',
            linkedin: 'https://www.linkedin.com/in/birukjeldu/',
            github: 'https://github.com/birukjeldu'
        },
        {
            image: 'niko.jpg',
            text: '“Eager to learn, adaptable, and passionate about coding. A junior developer to watch!”',
            name: 'Nikodimos Jemaneh',
            linkedin: 'https://www.linkedin.com/in/nikodimos-jemaneh-a1bb71234/',
            github:'https://github.com/akasaul'
        }
    ];


    const { ref, inView } = useInView({
        triggerOnce: false, // Ensures animation only happens once
        threshold: 0.2, // Defines how much of the element is visible before triggering
    });

    return (
        <motion.div id='testimonial'
            ref={ref}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className='bg-gray-900 h-auto mt-10'>
            <h1 className=' text-center bg-gray-900 text-white p-2 py-10 text-5xl font-bold '>Testimonials</h1>

            <div className='md:flex md:justify-between md:px-20 md:py-10 md:gap-8  p-4 '>


                {testimonials.map((testimonial) => {
                    return <div className=' text-white md:mb-0 md:text-left  mb-5 text-center'>
                        <img src={testimonial.image} className='w-32 rounded-lg mx-auto md:mx-0' />
                        <h1 className='text-lg mb-2'>{testimonial.text}</h1>
                        <h2 className='text-lg font-semibold'>{testimonial.name}</h2>
                        <h1 className='text-sm'>Software Developer</h1>
                        <div className='flex gap-2 md:justify-start  justify-center items-center'>
                        <a href={testimonial.linkedin}>   <img src='linkedin-svgrepo-com.svg' className='w-8 h-8' /></a> 
                          <a href={testimonial.github}> <img src='github-142-svgrepo-comwhite.svg' className='w-6 h-6' /></a> 
                        </div>
                    </div>
                })}

            </div>

        </motion.div>

    );
};



export default Testimonials;

