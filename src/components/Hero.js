import SocialKit from "./SocialKit";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/full-stack-developer.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-sky-950/20 w-screen backdrop-blur-sm flex flex-col md:justify-center items-center py-16">
        <div className="max-w-full md:w-4/5 bg-black/70 text-center py-6 px-4 rounded-lg flex flex-col gap-4">
          <h2 className="text-5xl font-bold">
            Hello! I'm <span className="text-orange-500">Abu Raihan</span>,
            <br />
            <span className="text-sky-400 text-3xl">
              Full-Stack Web Developer!
            </span>
          </h2>
          <p className="p-4 border-2 border-sky-950 bg-sky-950/30 text-slate-300 rounded-xl">
            Greetings! I am a passionate software developer who takes great
            delight in crafting innovative solutions that bring your ideas to
            life. Whether it's an impressive product, a cutting-edge feature, or
            a captivating website, I'm here to assist you every step of the way.
            My diverse portfolio showcases a range of successful projects and
            vast experience. Each project reflects my commitment to excellence
            and my passion for creating impactful digital solutions. If you find
            yourself drawn to my work and have a coding project that requires
            finesse, please do not hesitate to reach out. Together, let's turn
            your visions into reality! I'm excited to collaborate and create
            meaningful solutions that leave a lasting impact.
          </p>
          <SocialKit />
        </div>
      </div>
    </section>
  );
};

export default Hero;
