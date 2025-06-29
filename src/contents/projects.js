import { motion } from "framer-motion";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Food Ordering System",
    description:
      "A complete food ordering and delivery platform featuring both a web dashboard and a mobile app. The system allows users to browse menus, place orders, track deliveries, and manage their profiles while restaurant admins handle orders and promotions.",
    technologies: "MERN Stack | React Native",
    githubLink:
      "https://github.com/Leta-Asefa/Food_Ordering_System_Customer_App",
    images: [
      "food/4.jpg",
      "food/1.jpg",
      "food/2.jpg",
      "food/3.jpg",
      "food/5.jpg",
      "food/6.jpg",
      "food/7.jpg",
      "food/8.jpg",
      "food/9.jpg",
      "food/10.jpg",
      "food/11.jpg",
      "food/12.jpg",
      "food/13.jpg",
      "food/14.jpg",
      "food/15.jpg",
      "food/16.jpg",
      "food/17.jpg",
      "food/18.jpg",
      "food/19.jpg",
      "food/20.jpg",
      "food/21.jpg",
      "food/22.jpg",
      "food/23.jpg",
      "food/24.jpg",
      "delivery/1.jpg",
      "delivery/2.jpg",
      "delivery/3.jpg",
      "delivery/4.jpg",
      "delivery/5.jpg",
      "delivery/6.jpg",
      "delivery/7.jpg",
      "delivery/8.jpg",
      "delivery/9.jpg",
      "delivery/10.jpg",
      "delivery/11.jpg",
      "delivery/12.jpg",
      "delivery/13.jpg",
      "delivery/14.jpg",
      "delivery/15.jpg",
      "food/1.png",
      "food/2.png",
      "food/3.png",
      "food/4.png",
      "food/5.png",
      "food/6.png",
      "food/7.png",
      "food/8.png",
      "food/9.png",
      "food/10.png",
      "food/11.png",
      "food/12.png",
      "food/13.png",
      "food/14.png",
      "food/15.png",
      "food/16.png",
      "food/17.png",
    ],
  },
  {
    title: "Car Marketplace App",
    description:
      "A mobile application designed to facilitate car listings, searches, and purchases. Users can browse available cars, filter by specifications, and contact sellers. Built for intuitive navigation and real-time updates.",
    technologies: "React Native",
    githubLink: "https://github.com/Leta-Asefa/car_marketplace_app",
    images: [
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/9.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/2.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/1.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/3.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/4.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/5.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/6.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/7.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/8.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/10.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/11.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/12.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/13.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/14.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/15.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/16.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/17.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/18.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/19.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/20.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/21.jpg",
      "https://raw.githubusercontent.com/Leta-Asefa/car_marketplace_app/refs/heads/main/src/assets/22.jpg",
    ],
  },
  {
    title: "Document Management System",
    description:
      "A fully functional web application developed for a government office to modernize and streamline their file handling system, enhancing efficiency and accessibility in managing documents and administrative tasks.",
    technologies: "MERN Stack",
    githubLink: "https://github.com/Leta-Asefa/FMS-React",
    images: [
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/7.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/1.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/2.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/3.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/4.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/5.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/6.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/8.PNG",
      "https://raw.githubusercontent.com/Leta-Asefa/FMS-React/refs/heads/main/public/9.PNG",
    ],
  },
  {
    title: "Shalom Reflexology",
    description:
      "A simple ERP system developed to automate the workflow of the company named 'Shalom Reflexology' which is located around 6 Kilo in Addis Ababa. The system Stores patients data, Gives an appointment, Takes an attendance & Performs financial related issues.It has both Admin and Reception Dashboard.",
    technologies: "Java | JavaFx | MySQL | CSS",
    githubLink: "https://github.com/Leta-Asefa/Shalom-Reflexology",
    images: ["shalom.gif"],
  },
  {
    title: "Media Player",
    description:
      "A desktop media player supporting various audio and video formats, providing comprehensive playback capabilities for desktop users seeking versatile multimedia management and enjoyment.",
    technologies: "Java | JavaFx | CSS",
    githubLink: "https://github.com/Leta-Asefa/Media-Player",
    images: ["mediaplayer.avif"],
  },
];

const ProjectModal = ({ project, currentImg, setCurrentImg, onClose }) => {
  if (!project) return null;
  const total = project.images.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-8 w-full h-full  relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <button
          className="absolute top-4 right-6 text-3xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        {/* Left: Info */}
        <div className="flex flex-col justify-center h-full">
          <div className="font-bold text-2xl mb-4">{project.title}</div>
          <div className="mb-4 text-base text-gray-700">
            {project.description}
          </div>
          <div className="mb-4">
            <span className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              {project.technologies}
            </span>
          </div>
          <a
            href={project.githubLink}
            className="bg-primary hover:bg-orange-500 text-base text-black font-semibold py-2 px-6 rounded w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code on GitHub
          </a>
        </div>
        {/* Right: Image & Arrows */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center">
            <button
              className="text-3xl px-3"
              onClick={() => setCurrentImg((currentImg - 1 + total) % total)}
              disabled={total <= 1}
            >
              &#8592;
            </button>
            <img
              src={project.images[currentImg]}
              alt={project.title}
              className={
                project.images[currentImg].includes("FMS") ||
                project.images[currentImg].toLowerCase().includes("shalom") ||
                project.images[currentImg].toLowerCase().includes("media")
                  ? "w-96 rounded shadow-lg"
                  : "w-64 rounded shadow-lg"
              }
            />
            <button
              className="text-3xl px-3"
              onClick={() => setCurrentImg((currentImg + 1) % total)}
              disabled={total <= 1}
            >
              &#8594;
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            {currentImg + 1} / {total}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.4 });
  const [modalProject, setModalProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const openModal = (project) => {
    setModalProject(project);
    setCurrentImg(0);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <motion.div
      id="project"
      ref={ref}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className=""
    >
      <h1 className="font-bold text-white text-center mt-16 bg-gray-800 p-2  text-3xl">
        PROJECTS
      </h1>

      <div className="flex flex-nowrap items-start gap-4 mt-6 overflow-x-auto pb-4 px-16">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex-none w-64 border-2 min-h-80 border-white p-1 rounded-xl hover:border-gray-200 cursor-pointer bg-white/10 relative overflow-hidden"
            onClick={() => openModal(project)}
          >
            <img
              className="w-64 rounded-xl"
              src={project.images[0]}
              alt={project.title}
            />
            {/* Overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-24 px-6 py-3 flex flex-col items-start bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="font-bold text-xs mb-2 text-black">
                {project.title}
              </div>
              <a
                href={project.githubLink}
                className="bg-primary hover:bg-orange-500 text-xs text-black font-semibold py-1 px-4 rounded"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View Code on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={modalProject}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        onClose={closeModal}
      />
    </motion.div>
  );
};

export default Project;
