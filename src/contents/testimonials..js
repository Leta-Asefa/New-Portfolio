  import React from 'react';
      
    const Testimonials = () => {
        
        const testimonials = [
            {
              image: 'nati.jpg',
              text: '“Dedicated and curious—never shies away from challenges. A rising star in the tech world!”',
              name: 'Natinael H/Mariam'
            },
            {
              image: 'bura.jpg',
              text: '“Always hungry to learn and quick to grasp new concepts. A valuable asset to any team!”',
              name: 'Buruk Jeldu'
            },
            {
              image: 'niko.jpg',
              text: '“Eager to learn, adaptable, and passionate about coding. A junior developer to watch!”',
              name: 'Nikodimos Jemaneh'
            }
          ];

        return (
            <div id='testimonial' className='bg-gray-900 h-auto mt-10'>
                <h1 className='text-secondary text-center bg-primary p-2 mb-5 text-5xl font-bold '>Testimonials</h1>
                
                <div className='flex justify-between px-20 py-10 gap-8'>

                
                {testimonials.map((testimonial) => {
                    return <div className=' text-white'>
                        <img src={testimonial.image}  className='w-32 rounded-lg'/>
                        <h1 className='text-lg mb-2'>{testimonial.text}</h1>
                        <h2 className='text-lg font-semibold'>{testimonial.name}</h2>
                        <h1 className='text-sm'>Software Developer</h1>
                        <div className='flex gap-2 justify-start items-center'>
                            <img src='linkedin-svgrepo-com.svg' className='w-8 h-8'/>
                            <img src='github-142-svgrepo-comwhite.svg' className='w-6 h-6'/>
                        </div>
                    </div>
                })}

                </div>

            </div>
       
        );
      };
      
      
  
  export default Testimonials;
  
