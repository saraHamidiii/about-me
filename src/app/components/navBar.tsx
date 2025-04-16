// components/Nav.js
"use client";
import projects from "../data/projects";
import styles from "../page.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`#${project.id}`} className={styles.navLink}>
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
