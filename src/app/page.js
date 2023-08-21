import Hero from "@/components/Hero";
import FeatureProjects from "@/components/Projects/FeatureProjects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureProjects baseURL={process.env.BASE_URL} />
      <About />
      <Contact />
    </>
  );
}
