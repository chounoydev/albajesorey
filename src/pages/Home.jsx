import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="w-full bg-[#073B4C] text-white pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold">Hello!</h2>

            <h1 className="text-6xl font-extrabold leading-tight">
              I Am <span className="border-r-4 pr-2">Rey Jan</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-md">
              I am a Web Developer with expertise in building high-quality,
              responsive, and user-centric web applications using React,
              TailwindCSS, and modern development tools.
            </p>

            <a
              href="#about"
              className="mt-6 inline-block px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition font-bold"
            >
              SCROLL DOWN
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="reyjan.jpg"
              alt="Profile"
              className="rounded-xl shadow-xl max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full bg-[#073B4C] text-white py-20 px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-200 text-center max-w-2xl mx-auto">
          Hi! I’m Rey Siegfred Albajeso, a Web Developer dedicated to creating
          high-quality, responsive web applications that deliver smooth and
          engaging user experiences. I take pride in building practical projects
          that combine innovation with functionality.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="w-full bg-[#073B4C] text-white py-20 px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: "Next.js", color: "bg-[#0070f3]" },
            { name: "TypeScript", color: "bg-[#3178c6]" },
            { name: "TailwindCSS", color: "bg-[#38bdf8]" },
            { name: "Figma & UI Design", color: "bg-[#a259ff]" },
            { name: "Node.js & Express", color: "bg-[#68a063]" },
            { name: "Git & GitHub", color: "bg-[#f05032]" },
          ].map((skill, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-lg text-center font-bold text-lg border border-white/20 ${skill.color} text-white transform hover:scale-105 transition`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full bg-[#073B4C] text-white py-20 px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <ProjectCard
            title="FCFS Scheduler"
            description="CPU scheduling simulator visualized with React."
            link="/fcfs"
            image="fcfs1.png"
            openInNewTab={false}
          />

          <ProjectCard
            title="Online Shop"
            description="E-commerce mockup made with React."
            link="https://projectday.vercel.app/"
            image="ecomerg.png"
            openInNewTab={true}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full bg-[#073B4C] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-lg text-gray-200 mb-4">
          I’m available for freelance work, full-time opportunities, or project collaborations. Get in touch!
        </p>

        <div className="space-y-3 text-lg mb-6 text-gray-100">
          <p>Email: albajesoreyjan@gmail.com</p>
          <p>Phone: +63 278 733 649</p>
          <p>Location: Philippines</p>
        </div>

        <a
          href="resume.jpg"
          download
          className="px-8 py-3 rounded-full bg-white text-[#073B4C] hover:bg-gray-200 transition font-bold"
        >
          DOWNLOAD RESUME
        </a>
      </section>

      <Footer />
    </>
  );
}
