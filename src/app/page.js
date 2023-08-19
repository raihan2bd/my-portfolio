import About from "@/components/About/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="text-center text-2xl">loading...</div>}>
        <Projects />
      </Suspense>
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
