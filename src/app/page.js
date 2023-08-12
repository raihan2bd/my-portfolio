import About from "@/components/About/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center"
      >
        Hello from Contact
      </section>
    </>
  );
}
