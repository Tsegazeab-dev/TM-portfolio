import { RevealOnScroll } from "../RevealOnScroll";
import { FaUserGraduate } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next JS",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "MYSQL", "MongoDB", "GraphQL", "Rest Api"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-emerald-300 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate web developer dedicated to creating high-quality,
              user-friendly digital solutions that deliver exceptional
              performance. I excel at transforming ideas into engaging websites
              and applications that not only look great but also drive results.
              Every project meets your needs and exceeds expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                <FaUserGraduate className="inline-block text-teal-400 mr-2"></FaUserGraduate>{" "}
                Education{" "}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Full stack web development (MERN) </strong> -
                  Evangadi Tech (2022)
                </li>
                <li>Relevant Coursework: Data Structures, Web Development</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                <FaLaptop className="inline-block text-teal-400 mr-2"></FaLaptop>{" "}
                Work Experience{" "}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer at Evangadi Tech (2024 - Present){" "}
                  </h4>
                  <p>
                    Developed high-quality products collaboratively with the
                    team.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Fullstack Instructor at Evangadi Tech (2023){" "}
                  </h4>
                  <p>
                    Assisted students in maximizing their course experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
