import React from 'react';

const Experiences = () => {
    const jobs = [
        { id: 1, company: 'Shalom Reflexology', position: 'Software Developer', startDate: 'Oct 25, 2022', endDate: 'Apr 23, 2022 G.C',image:"shalomlogo.jpg" },
        { id: 2, company: 'Amon ICT Solution', position: 'Backend Developer', startDate: 'Nov 27, 2023', endDate: 'Jan 26, 2023 G.C',image:"amon.png" },
        { id: 3, company: 'OasisInfobyte', position: 'Java Developer', startDate: 'Sep 21, 2023', endDate: 'Oct 21, 2023 G.C',image:"oasis.jpg" }
    ];
    return (
        <div id='experience' className="flex items-center justify-between mt-6 p-20 bg-gray-50">
            {jobs.map((job, index) => (
                <div key={index} className="flex items-center">
                    
                    <div className="ml-4">
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-lg font-bold text-gray-600 ">{job.company}</p>
                        <p className="text-sm text-gray-600">{job.position}</p>
                        <p className="text-sm text-gray-700">{job.startDate} - {job.endDate}</p>
                        <img src={job.image}  className='w-40 rounded-lg mt-3'/>
                    </div>
                </div>
            ))}

            <h1 className='text-center text-5xl font-bold text-secondary  self-baseline'><span className='bg-primary p-2 text-5xl rounded-md'>EXPERIENCES</span><br></br><br></br>
                <p className='text-sm font-semibold'>I have worked in these companies either as an employee or an inter.</p>
                <img src='work.png' className='mx-auto rounded-lg w-40'/>
            </h1>

        </div>
    );
};
export default Experiences;
