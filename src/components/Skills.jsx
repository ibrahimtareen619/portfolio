export default function Skills() {
  const skillGroups = [
    {
      title: "AI & Machine Learning",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "OpenCV",
      ],
    },
    {
      title: "MLOps",
      skills: [
        "Docker",
        "MLflow",
        "CI/CD",
        "GitHub Actions",
        "Model Deployment",
      ],
    },
    {
      title: "Web Development",
      skills: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 px-3 py-2 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}