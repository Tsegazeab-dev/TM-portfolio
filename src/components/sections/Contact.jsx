import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-md-6 mt-8 items-center">
            <div className="flex-1">
              <h3
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-teal-400 to-emerald-500 mb-4"
              >
                Let's Talk
              </h3>
              <p>
                I'm open to discussing web development projects or partnership
                opportunities.
              </p>

              <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-teal-400 mr-2"></FaEnvelope>
                <a
                  href="mailto:youremail@example.com"
                  className="hover:underline"
                >
                  Tsegazeab.dev@gmail.com
                </a>
              </div>
              <div className="mb-4">
                <FaPhone className="inline-block text-teal-400 mr-2"></FaPhone>
                <span>+251920164646</span>
              </div>
              <div className="mb-4">
                <FaMapMarkedAlt className="inline-block text-teal-400 mr-2"></FaMapMarkedAlt>
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-6 ml-10">
                <a
                  href="https://linkedin.com/in/tsegazeab-mengstu"
                  className="text-gray-300 hover:text-teal-300 transition-colors"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin size={26} />
                </a>
                <a
                  href="https://github.com/Tsegazeab-dev"
                  className="text-gray-300 hover:text-teal-300 transition-colors"
                  target="_blank"
                >
                  {" "}
                  <FaGithub size={26} />
                </a>
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-teal-500/5"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-teal-500/5"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-teal-500 focus:bg-teal-500/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
