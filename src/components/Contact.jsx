import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../data/profile";
export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        Contact Me
      </h2>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <p className="text-gray-300 mb-8">
          I'm actively looking for AI/ML, MLOps, and Software Engineering opportunities.
        </p>

        <div className="flex flex-wrap gap-6 text-lg">

            <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 hover:text-blue-400"
            >
                <FaEnvelope />
                <span>{profile.email}</span>
            </a>

            <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-blue-400"
            >
                <FaGithub />
                <span>GitHub</span>
            </a>

            <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-blue-400"
            >
                <FaLinkedin />
                <span>LinkedIn</span>
            </a>

            </div>
      </div>
    </section>
  );
}
