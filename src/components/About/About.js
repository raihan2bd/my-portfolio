"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import SocialKit from "../SocialKit";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Educations from "./Educations";
import Recomandation from "./Recomandation";

const aboutContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  const myRef = useRef();
  const inView = useInView(myRef);
  const myController = useAnimation();

  useEffect(() => {
    if (inView) {
      myController.start("visible");
    }
  }, [inView, myController]);

  return (
    <section id="about" className="p-4 md:p-6">
      <h2 className="text-center text-sky-400 p-3 w-fit border-b-2 border-orange-500 text-2xl font-bold mx-auto my-6">
        About Me
      </h2>

      <motion.div
        className="flex flex-col md:flex-row gap-6"
        variants={aboutContainer}
        initial="hidden"
        animate={myController}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={myRef}
      >
        <motion.div
          className="flex-1 bg-black/50 border border-sky-950 p-4 rounded-lg flex flex-col justify-between"
          variants={item}
        >
          <p className="">
            As a passionate software developer, I have the skills to bring your
            visions to life! Whether it&apos;s crafting innovative products,
            designing enticing features, or building captivating websites, I am
            here to assist you every step of the way.
            <span className="p-4 block"></span>
            My focus is on creating remarkable solutions with a dedication to
            delivering high-quality code and user-centric experiences. I
            specialize in front-end and back-end development, database
            management, and UI/UX design.
            <span className="p-4 block"></span>
            My portfolio showcases a collection of projects that demonstrate the
            depth of my expertise and experiences. Each project represents my
            commitment to excellence and my passion for creating impactful
            digital experiences.
            <span className="p-4 block"></span>
            If my work resonates with you and you have a coding project in mind,
            I wholeheartedly encourage you to get in touch. Let&apos;s collaborate
            and turn your ideas into remarkable realities! Together, we can
            create meaningful solutions that leave a lasting impression on your
            audience.
            <span className="p-4 block"></span>
            Thank you for visiting my portfolio. I look forward to connecting
            with you and making your projects a resounding success!
          </p>
          <div className="mt-auto">
            <SocialKit />
            <Link
              className="my-4 me-4 ms-auto w-fit block px-6 py-3 border border-orange-400 bg-orange-500 text-white rounded"
              href="https://docs.google.com/document/d/1PGWL0jk5WAQhQOC9JTuzHcZXEBQesjFmKa0Nn0ptxV0/edit?usp=sharing"
            >
              GET MY RESUME
            </Link>
          </div>
        </motion.div>
        <div className="flex-1 bg-black/50 p-4 rounded-lg border border-sky-950">
          <h3 className="w-fit mx-auto text-lg font-bold text-orange-500 py-2 border-b-2 border-sky-400">
            Skills I Have
          </h3>
          <Skills />
        </div>
      </motion.div>
      <Experiences />
      <Educations />
      <Recomandation />
    </section>
  );
};

export default About;
