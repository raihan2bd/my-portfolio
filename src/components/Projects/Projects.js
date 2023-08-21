"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ProjectItem from "./ProjectItem";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const Projects = ({ projects }) => {
  const ref = useRef();
  const inView = useInView(ref);
  const mainControll = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControll.start("visible");
    }
  }, [inView]);

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
    <motion.ul
      variants={container}
      initial="hidden"
      animate={mainControll}
      transition={{ duration: 0.5, delay: 0.2 }}
      ref={ref}
      className="flex flex-row flex-wrap justify-center md:justify-between gap-6 list-none p-4 md:p-6"
    >
      {projectsContent}
    </motion.ul>
  );
};

export default Projects;
