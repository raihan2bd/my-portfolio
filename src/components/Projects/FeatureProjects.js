import Projects from "./Projects";

const fetchFeaturesProjects = async () => {
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

const FeatureProjects = async () => {
  const featureProjects = await fetchFeaturesProjects();
  return (
    <section id="projects" className="focus:animate-pulse">
      <h2 className="text-center text-sky-400 text-2xl my-4 font-bold py-3 w-fit mx-auto border-b-2 border-orange-500">
        Projects
      </h2>
      <Projects projects={featureProjects} />
    </section>
  );
};

export default FeatureProjects;
