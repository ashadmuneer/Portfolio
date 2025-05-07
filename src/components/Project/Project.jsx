import React, { useState, useEffect } from "react";
import "./Project.css";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expanded, setExpanded] = useState(Array(5).fill(false)); // Track expanded state for each project

  const projects = [
    // {
    //   title: "PopCart",
    //   imageLink: "https://i.imgur.com/04PFn8g.png",
    //   description:
    //     "Pop Crat is a fashion e-commerce platform developed with React, Node.js, Express, and MongoDB. It incorporates Redux for state management, JWT for secure authentication, Tailwind CSS for styling, Cloudinary for media handling, and PayPal for seamless, secure payments.",
    //   link1: "https://github.com/ashadmuneer/PopCart",
    //   link2: "#"
    // },
    {
      title: "ChatMate",
      imageLink: "https://i.imgur.com/gjdhqHw.png",
      description:
        "ChatMate is a dynamic real-time chat application that enhances communication through a sleek, user-friendly interface. Built with React.js and Firebase, this application allows users to engage in seamless conversations, share media, and express emotions with ease.",
      link1: "https://github.com/ashadmuneer/ChatMate",
      link2: "https://chatmate-justchat.netlify.app/"
    },
    {
      title: "Vajra",
      imageLink: "https://i.imgur.com/Qqp73S6.png",
      description:
        "Vajra is an interactive platform designed to provide quick access to medical emergency services. Engineered with React.js, this application offers a user-friendly interface to streamline the process of reaching out for help during critical situations.",
      link1: "https://github.com/ashadmuneer/Vajra",
      link2: "https://github.com/ashadmuneer/Vajra",
    },
    {
      title: "Portfolio",
      imageLink: "https://i.imgur.com/6Wdrv4U.png",
      description:
        "This portfolio showcases my skills, projects, and achievements in a visually appealing and completely responsive layout. Built using React.js, the site is designed to adapt seamlessly to all devices, providing an optimal viewing experience for every visitor.",
      link1: "https://github.com/ashadmuneer/Portfolio",
      link2: "https://ashadmuneer.netlify.app",
    },
    {
      title: "Perpetual",
      imageLink: "https://i.imgur.com/F0hKimL.png",
      description:
        "Designed a user-friendly web trading platform for individual investors, focusing on intuitive navigation and responsive design using Figma. User feedback guided iterative improvements, enhancing usability and overall satisfaction..",
      link: "https://www.figma.com/design/NBeAjX7qXnpce4npo2ineF/trade",
      link2: "https://www.figma.com/design/NBeAjX7qXnpce4npo2ineF/trade",
    },
    {
      title: "Food Delivery App",
      imageLink: "https://i.imgur.com/1Ek0v42.png",
      description:
        "Created a UI/UX for a food delivery app, emphasizing intuitive navigation, real-time order tracking, and secure payments. Integrated design elements for streamlined food selection and accessible checkout across mobile platforms.",
      link1: "https://www.figma.com/design/MpHNrueK5xffhkqLAt2b3W/Food-App-2",
      link2: "https://www.figma.com/proto/MpHNrueK5xffhkqLAt2b3W/Food-App-2?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2",
    },
    {
      title: "College App",
      imageLink: "https://i.imgur.com/mG1QkDz.png",
      description:
        "Designed a user-friendly college app UI, focusing on seamless navigation for course registration, event tracking, and resource access. Integrated intuitive features to enhance student engagement and streamline academic management processes.",
      link1: "https://www.figma.com/design/DXEMayFi83fwE80xchj7ky/College-app?node-id=0-1&t=Hh0KBUvRv9i6eobr-1",
      link2: "https://www.figma.com/proto/DXEMayFi83fwE80xchj7ky/College-app?page-id=0%3A1&node-id=3-429&node-type=canvas&viewport=8762%2C5477%2C0.19&t=FfpJ3qy3DnDvBoCD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A1129",
    },
  ];



  // Handle automatic sliding and resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    let autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Automatic sliding every 3 seconds

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(autoSlide);
    };
  }, [projects.length]);

  // Manual Navigation for non-mobile
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Toggle Read More functionality
  const handleReadMore = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className={`project-section`} id="Projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Various Projects</span>

      <div
        className={`p-4 pb-0 overflow-hidden `}
      >
        <div className="flex items-center justify-center relative w-full project-container">
          {/* Left Arrow (Hidden on Mobile) */}
          {!isMobile && (
            <button onClick={handlePrevious} className="arrow-btn left-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Project Slider */}
          <div className="project-slider overflow-hidden w-full max-w-6xl">
            <div
              className="slider flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / (isMobile ? 1 : 2))
                }%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="slider-card flex-shrink-0 w-full sm:w-1/2 p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="h-32 sm:h-48 md:h-56 lg:h-64 bg-gray-400 rounded-lg overflow-hidden">
                    <img
                      src={project.imageLink}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start mt-4">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <p className="text-sm">
                      {isMobile
                        ? expanded[index]
                          ? project.description
                          : project.description
                              .split(" ")
                              .slice(0, 10)
                              .join(" ") + "..."
                        : project.description}
                    </p>
                    {isMobile && (
                      <button
                        onClick={() => handleReadMore(index)}
                        className="text-xs text-blue-500 underline mt-2"
                      >
                        {expanded[index] ? "Read Less" : "Read More"}
                      </button>
                    )}
                    <div className="flex space-x-4 mt-3">
                      <a
                        className="p-2 leading-none rounded font-medium card-btn text-xs uppercase"
                        href={project.link1}
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // Security measure
                      >
                        Git Repo
                      </a>
                      <a
                        className="p-2 leading-none rounded font-medium card-btn text-xs uppercase"
                        href={project.link2}
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // Security measure
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow (Hidden on Mobile) */}
          {!isMobile && (
            <button onClick={handleNext} className="arrow-btn right-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
