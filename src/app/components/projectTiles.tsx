// components/ProjectTiles.js
"use client";
import projects from "../data/projects";
import styles from "../page.module.css";

const ProjectTiles = () => {
  return (
    <section className={styles.projectContainer}>
      {projects.map((project) => (
        <div key={project.id} id={project.id} className={styles.projectTile}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ProjectTiles;
