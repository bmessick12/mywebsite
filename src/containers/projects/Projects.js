import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../components/ProjectCard/";

export default function Projects() {
  const [repo, _] = useState([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">portfolio project</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <ProjectCard repo={v} key={v.node.id} />;
        })}
      </div>
      <a className="resume-btn" href="https://github.com/bmessick12">
        More Projects (Github)
      </a>
    </div>
  );
}
