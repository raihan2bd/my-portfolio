import ProjectItem from "./ProjectItem";

const projectData = [
  {
    _id: "1",
    title: "HungryHub",
    image:
      "https://user-images.githubusercontent.com/35267447/223940500-3aea07b1-4bc6-4705-ae49-e64f96544b44.PNG",
    description: `Hungry Hub is an online platform for food ordering built with React, Redux, and Firebase. Users can browse menus, add food items to their cart, and securely pay for their order. The platform provides order tracking and home delivery services to ensure a hassle-free experience.`,
    tags: ["Html", "Css", "JavaScript", "React", "Firebase"],
    projectDemo: 'https://github.com/raihan2bd/hungryhub',
    projectSource: 'https://github.com/raihan2bd/hungryhub',
  },
  {
    _id: "2",
    title: "Resort Booking",
    image:
      "https://user-images.githubusercontent.com/35267447/257567388-16d64fa7-4149-48a1-a480-05dfa0ae4efb.PNG",
    description: `Resort Booking: Your gateway to dream resorts. Discover, book, and manage your ideal getaway effortlessly with our user-friendly web app. Access comprehensive resort details, amenities, and real-time availability to plan memorable journeys hassle-free`,
    tags: ["Html", "Css", "JavaScript", "React", "Ruby on Rails"],
    projectDemo: 'https://github.com/raihan2bd/hungryhub',
    projectSource: 'https://github.com/raihan2bd/hungryhub',
  },
  {
    _id: "3",
    title: "Hotel Bookings",
    image:
      "https://user-images.githubusercontent.com/35267447/223337938-c8ab34f0-20c6-4d8e-b47a-10558d3c7beb.PNG",
    description: `Hotel Bookings full-stack project built using Go and postgresql is likely a web application that allows users to search for available hotels, view room details, and make reservations. It may include features such as user authentication, and integration with third-party APIs for displaying hotel information and availability.`,
    tags: ["Html", "Css", "JavaScript", "Golang", "PostgreSQL"],
    projectDemo: 'https://github.com/raihan2bd/hungryhub',
    projectSource: 'https://github.com/raihan2bd/hungryhub',
  },
];

const Projects = () => {
  let projectsContent = (
    <p className="text-center text-orange-300 p-4 shadow">
      No Project found! Please Add a New One!
    </p>
  );

  if (projectData.length > 0) {
    projectsContent = projectData.map((project) => {
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
