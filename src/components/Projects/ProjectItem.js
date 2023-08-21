"use client";
import Image from "next/image";
import Link from "next/link";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ProjectItem = ({
  title,
  image,
  description,
  tags,
  projectDemo,
  projectSource,
}) => {
  const ref = useRef();
  const inView = useInView(ref);
  const mainControll = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControll.start("visible");
    }
  }, [inView, mainControll]);

  return (
    <motion.li
      className="w-[400px] max-w-full border rounded-lg border-sky-950 hover:border-sky-500 p-4 flex flex-col gap-3 bg-black/50 flex-grow"
      variants={container}
      initial="hidden"
      animate={mainControll}
      transition={{ duration: 0.5, delay: 0.2 }}
      ref={ref}
    >
      <div className="overflow-hidden">
        <Image
          className="rounded-lg min-h-[200px] mx-auto hover:scale-105 transition-transform"
          src={image}
          width={767}
          height={767}
          alt={title}
        />
      </div>
      <h3 className="text-center text-lime-500 text-3xl font-bold">{title}</h3>
      <ul className="list-none flex flex-wrap gap-2 text-sm">
        {tags.map((tag) => (
          <li
            key={Date.now().toString(36) + Math.random().toString(36)}
            className="p-1 rounded bg-sky-900/40 text-slate-300 text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
      <p className="text-sm text-justify">{description}</p>
      <div className="flex flex-row justify-between mt-4 md:mt-auto">
        {projectDemo && (
          <Link
            className="block rounded bg-sky-800 text-sky-200 hover:bg-orange-500 hover:text-white text-sm px-4 py-2"
            href={projectDemo}
            target="_blank"
          >
            Project Demo
          </Link>
        )}
        {projectSource && (
          <Link
            className="block rounded bg-sky-800 text-sky-200 hover:bg-orange-500 hover:text-white text-sm px-4 py-2"
            href={projectSource}
            target="_blank"
          >
            Project Source
          </Link>
        )}
      </div>
    </motion.li>
  );
};

export default ProjectItem;
