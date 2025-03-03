import { RevealOnScroll } from "../RevealOnScroll";
import imdb from '../../assets/IMDb-pic.jpg';
import amazon from '../../assets/Amazon.jpeg';
import netflix from '../../assets/Netflix.jpeg';
import auth from '../../assets/react-auth.png';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-emerald-300 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={amazon}
                alt="amazon"
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2"> Amazon Clone</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive e-commerce platform designed to replicate the
                key functionalities of Amazon.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Stripe", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-500 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Tsegazeab-dev/Amazon-clone-app"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Code Base →
                </a>
                <a
                  href="https://amazon-clone-tm-dev.netlify.app/"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-teal-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img
                src={imdb}
                alt="imdb"
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">IMDB Clone</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive online platform designed to replicate the key
                features of the Internet Movie Database (IMDB)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.JS", "Tailwind", "TMDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-teal-500/10 text-teal-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-teal-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Tsegazeab-dev/IMDb"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Code Base →
                </a>
                <a
                  href="https://imdb-clone-tm.vercel.app/"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-teal-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img
                src={netflix}
                alt="netflix"
                className="rounded-lg mb-4 
              w-full h-48  object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Netflix Clone</h3>
              <p className="text-gray-400 mb-4">
                A dynamic streaming platform designed to replicate the core
                functionalities of Netflix.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TMDB", "Rest Api"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-teal-500/10 text-teal-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-teal-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Tsegazeab-dev/Netflix-2024"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Code Base →
                </a>
                <a
                  href="https://netflix-2024.vercel.app/"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-teal-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <img
                src={auth}
                alt="auth"
                className="rounded-lg mb-4 
              w-full h-48  object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Auth App</h3>
              <p className="text-gray-400 mb-4">
                A secure and user-friendly platform designed to manage user
                authentication and authorization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "Mongo DB", "Rest Api"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-teal-500/10 text-teal-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-teal-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Tsegazeab-dev/Auth-project/"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Code Base →
                </a>
                <a
                  href="https://mern-app-28d4.onrender.com/"
                  target="_blank"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
