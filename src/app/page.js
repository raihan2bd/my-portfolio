import About from "@/components/About/About";
import Hero from "@/components/Hero";
import FeatureProjects from "@/components/Projects/FeatureProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureProjects />
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
