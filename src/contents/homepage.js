import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
    return (
        <div className="homepage">
            <video src='earth.mp4' autoPlay/>

            <div className="homepage-left">
                <div class="text-4xl font-bold mb-6"><img src='welcome.svg' className='w-30 h-30' /> </div>
                <div className='text-8xl font-extrabold mb-6'>Leta Asefa</div>
                <div className='text-4xl mb-6'>
                    I'm a
                    <Typewriter
                        words={[" Software Developer", " Graphic Designer", " Content Creator",]}
                        loop={100}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>
                <p className='text-lg mb-3'> Discover my diverse portfolio! With a wealth of personal projects and internship programs under my belt, I've gathered extensive experience in software development. I assure you that my skills are guaranteed to meet your satisfaction.
                </p>
                <div className='flex justify-between bg-blue-50 p-2 rounded-lg'>
                    <img src='github-142-svgrepo-com.svg' className='w-8 h-8' />
                    <img src='linkedin-svgrepo-com.svg' className='w-8 h-8' />
                    <img src='telegram-svgrepo-com.svg' className='w-8 h-8' />
                    <img src='gmail-svgrepo-com.svg' className='w-8 h-8'/>
                    <img src='tiktok.svg' className='w-8 h-8'/>
                </div>
            </div>

            <div className="homepage-right ">
                <img src='profilepic.svg' className='mx-auto w-96'/>
            </div>

        </div>
    );
}

export default HomePage;