import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {
      id: 1,
      title: "TO-DO List using React and Tailwind CSS",
      imgSrc: "/To-Do-List.png",
      description: "The To-Do List Web Application is a dynamic and responsive platform designed to enhance productivity by allowing users to manage their tasks efficiently. Developed using React and Tailwind CSS, this application features a modern and visually appealing user interface. Users can add, edit, and delete tasks seamlessly, ensuring a simple and intuitive task management experience. The application is optimized for use on both desktop and mobile devices and is hosted on Vercel for easy access and demonstration."
    },
    {
      id: 2,
      title: "Code Editor using React",
      imgSrc: "/Code-Editor.png",
      description: "The Code Editor project is a web-based application developed using React JS, offering a functional and user-friendly environment for writing and editing code. This project highlights proficiency in React JS and the ability to create interactive web applications tailored to developers' needs."
    },
    {
      id: 3,
      title: "Spotify Clone using HTML, CSS and JS",
      imgSrc: "/Spotify.png",
      description: "The Spotify Clone Project is a web application that replicates the core functionalities of the popular music streaming service, Spotify. This project demonstrates proficiency in HTML, CSS, and JavaScript, providing features such as playlist creation, song selection, and playback controls. Using the Fetch API for dynamic data fetching, the application remains interactive and up-to-date, offering a consistent user experience across different devices."
    },
    {
      id: 4,
      title: "Amazon Shopping Site User Interface",
      imgSrc: "/Amazon.png",
      description: "The Amazon Clone Interface project is a front-end replica of the Amazon shopping website. Developed using HTML and CSS, this project demonstrates ability to create complex and visually appealing web interfaces. The design mimics the layout and style of Amazon, providing a familiar and intuitive shopping experience for users."
    },
  ];

  return (
    <section id="projects">
        <div className="title-projects">PROJECTS</div>
      <div className="projects-container">
       
        {activeProject !== null && (
          <div className="project-details">
            <img src={projects.find(p => p.id === activeProject).imgSrc} alt="Project" />
            <p>{projects.find(p => p.id === activeProject).description}</p>
          </div>
        )}

<div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              onClick={() => setActiveProject(project.id)}
            >
              <img src={project.imgSrc} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
