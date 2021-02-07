import React from "react"
import GrantProjectCard from "../components/GrantProjectCard"

const ShowAllProjects = ({ projectBase }) => (
  <div className="d-flex flex-column-reverse flex-wrap justify-content-between">
    {projectBase.map((project, index) => (
      <GrantProjectCard
        key={index}
        name={project.podmiot}
        title={project.projekt}
        value={project.wartosc}
        grant={project.dotacja}
        style={{ marginBottom: "1.5rem" }}
      />
    ))}
  </div>
)

export default ShowAllProjects
