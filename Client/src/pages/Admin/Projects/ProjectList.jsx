

// src/components/projects/ProjectList.jsx
import ProjectCards from "./ProjectCards";
import { dummyProjects } from "./dummprojectdata";
// Dummy projects data for UI


function ProjectList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyProjects.map((project) => (
        <ProjectCards
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectList;
