import React, { useEffect, useState } from "react";

import "./Projects.css";

import ProjectCard from "./ProjectCard/ProjectCard";

import projectsData from "./projectsData.json";

function Projects() {

    const [ myProjects, setMyProjects ] = useState([]);

    useEffect(() => {
        setMyProjects(projectsData);
    }, []);

    const projectsElement = myProjects.map((project) => {
        return (
            <ProjectCard key={project.id} project={project}/>
        );
    });

    return (
        <section id="projects" className="projects-container">
            <h4 className="section-title">Projetos</h4>
            <div className="projects-card-container">
                {projectsElement}
            </div>
        </section>
    );
}

export default Projects;