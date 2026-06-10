import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import profileImage from "../assets/profile.jpg";
import resumePDF from "../assets/resume.pdf";
import Footer from "../components/Footer";
import profile from "../data/profile";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white">
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                Available For Opportunities
              </span>

              <h1 className="text-5xl md:text-7xl font-bold mt-6">
                {profile.name}
              </h1>

              <h2 className="text-3xl text-gray-400 mt-4">
                {profile.title}
              </h2>

              <p className="mt-6 text-gray-300 max-w-lg leading-relaxed">
                Computer Science graduate passionate about Machine Learning,
                Deep Learning, MLOps, Computer Vision and building scalable AI
                systems.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  View Projects
                </button>

                
                  <a
                    href={resumePDF}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 flex items-center gap-2"
                    >
                    <FaDownload />
                    Resume
                    </a>
                
              </div>

              <div className="flex gap-6 mt-8 text-2xl">

                <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub className="cursor-pointer hover:text-blue-400" />
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="cursor-pointer hover:text-blue-400" />
                </a>

                </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

                <img
                  src={profileImage}
                  alt="Profile"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-blue-500"
                />
              </div>
            </motion.div>

          </div>

        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}