import React from 'react';



const projects = [
  {
  title: 'Ecommerce Website',
  description: 'A fully functional ecommerce website built using Next.js, Bootstrap, and integrated with Stripe for payments.',
  technologies: ['React.js', 'Bootstrap', 'Node.js', 'Express.js','MongoDB'],
  github: 'https://github.com/sajedur22/-mernEcommerce',
  live: 'https://ecommerce-uq07.onrender.com/',
},
  {
    title: "Portfolio Website",
    description: "A modern portfolio built using Next.js, showcasing my skills and projects.",
    technologies: ["Next.js", "Bootstrap", "Framer Motion"],
    github: "https://github.com/sajedur22/Portfolio",
    live: "https://https://shakil-xi.vercel.app/",
  },
  {
    title: "ToDo App",
    description: "A full-featured todo app with user auth and CRUD functionalities.",
    technologies: ["React", "Redux", "MongoDB", "Node.js"],
    github: "https://github.com/sajedur22/ToDoApp",
    live: "https://todo-ejeg.onrender.com",
  },
  {
    title: "Blog App",
    description: "Blog App Using React.js,Node.js,Express.js and MongoDB.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/sajedur22/Blogapp",
    live: "https://subtle-lamington-4c3ac6.netlify.app/",
  },
   {
    title: "Coming soon....",
    description: "",
    technologies: ['coming soon...'],
    github: "",
    live: "",
  },
];

const project = () => {
    return (
        <section className="container py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p>
                  <strong>Tech Stack:</strong> {project.technologies.join(', ')}
                </p>
                <div>
                  {project.github && (
                    <a href={project.github} target="_blank" className="btn btn-sm btn-outline-dark me-2">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" className="btn btn-sm btn-dark">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default project;