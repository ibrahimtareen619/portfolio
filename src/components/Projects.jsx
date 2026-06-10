const projects = [
  {
    title: "Skin Disease Detection",
    description:
      "Deep learning model for automated skin disease classification using CNNs.",
    tech: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time messaging application built with React Native and Stream Chat.",
    tech: ["React Native", "Node.js", "Stream Chat"],
  },
  {
    title: "MLOps Pipeline",
    description:
      "End-to-end ML pipeline with model tracking, versioning and deployment.",
    tech: ["Docker", "MLflow", "CI/CD"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="bg-gray-800 px-3 py-1 rounded-md text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}