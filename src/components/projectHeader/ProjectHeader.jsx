import React from "react";
import PropTypes from "prop-types";
// import '/workspaces/cs220-portfolio-chatyuto/src/components/projectHeader/ProjectHeader.css';
import "./ProjectHeader.css";
const ProjectHeader = ({ title, content }) => {
  return (
    <div className="project-header">
      <h1>{title}</h1>
      <div className="project-content">{content}</div>
    </div>
  );
};

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProjectHeader;
