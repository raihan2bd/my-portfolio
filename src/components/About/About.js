import Link from "next/link";
import SocialKit from "../SocialKit";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="p-6">
      <h2 className="text-center text-sky-400 p-3 w-fit border-b-2 border-orange-500 text-2xl font-bold mx-auto my-6">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-black/50 border border-sky-900 p-6 rounded-lg flex flex-col justify-between">
          <p className="">
            As a passionate software developer, I have the skills to bring your
            visions to life! Whether it's crafting innovative products,
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
            I wholeheartedly encourage you to get in touch. Let's collaborate
            and turn your ideas into remarkable realities! Together, we can
            create meaningful solutions that leave a lasting impression on your
            audience.
            <span className="p-4 block"></span>
            Thank you for visiting my portfolio. I look forward to connecting
            with you and making your projects a resounding success!
          </p>
          <div className="mt-auto">

          <SocialKit />
          <Link className="my-4 me-4 ms-auto w-fit block px-6 py-3 border border-orange-400 bg-orange-500 text-white rounded" href="https://docs.google.com/document/d/1PGWL0jk5WAQhQOC9JTuzHcZXEBQesjFmKa0Nn0ptxV0/edit?usp=sharing">GET MY RESUME</Link>
          </div>
        </div>
        <div className="flex-1 bg-black/50 p-4 rounded-lg border border-sky-900">
          <h3 className="w-fit mx-auto text-lg font-bold text-orange-500 py-2 border-b-2 border-sky-400">Skills I Have</h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
