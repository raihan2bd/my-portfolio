import ProjectItem from "./ProjectItem";

const fetchFeaturesPost = async () => {
  const response = await fetch(
    `http://localhost:3000/api/projects/feature`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}

const Projects = async () => {
  const featurePosts = await fetchFeaturesPost();

  let projectsContent = (
    <p className="text-center text-orange-300 p-4 shadow">
      No Project found! Please Add a New One!
    </p>
  );

  if (featurePosts.length > 0) {
    projectsContent = featurePosts.map((project) => {
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
    <section id="projects">
      <h2 className="text-center text-sky-400 text-2xl my-4 font-bold py-3 w-fit mx-auto border-b-2 border-orange-500">
        Projects
      </h2>
      <ul className="flex flex-row flex-wrap justify-center md:justify-between gap-6 list-none p-4 md:p-6">
        {projectsContent}
      </ul>
    </section>
  );
};

export default Projects;
