import ProjectItem from "./ProjectItem";

const Projects = async ({projects}) => {

  let projectsContent = (
    <p className="text-center text-orange-300 p-4 shadow">
      No Project found! Please Add a New One!
    </p>
  );

  if (projects.length > 0) {
    projectsContent = projects.map((project) => {
      return (
        <ProjectItem
          key={project._id}
          _id={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          tags={project.tags}
          projectDemo={project.projectDemo}
          projectSource={project.projectSource}
        />
      );
    });
  }
  return (
      <ul className="flex flex-row flex-wrap justify-center md:justify-between gap-6 list-none p-4 md:p-6">
        {projectsContent}
      </ul>
  );
};

export default Projects;
