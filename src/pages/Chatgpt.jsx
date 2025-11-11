import React, { useState } from "react";

const projects = [
  {
    title: "Ceramic Form Builder",
    description: "A full-stack form builder app for a ceramics business.",
    image: "https://via.placeholder.com/400x250",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://example.com",
    code: "https://github.com/yourusername/ceramic-form"
  },
  {
    title: "VS Code Remote Tunneling Guide",
    description: "Tech tips site explaining VS Code tunneling.",
    image: "https://via.placeholder.com/400x250",
    tech: ["Markdown", "GitHub Pages"],
    live: "https://example.com",
    code: "https://github.com/yourusername/vscode-tunnel-guide"
  }
];

// Layout 1: Card Grid with Hover Reveal
export function CardGrid() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 2: Timeline Style
export function ProjectTimeline() {
  return (
    <div className="bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-10">Project Timeline</h2>
      <div className="relative border-l border-gray-300 pl-6 space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mb-1">{project.description}</p>
            <div className="text-sm text-gray-500 mb-2">{project.tech.join(", ")}</div>
            <div className="flex gap-4">
              <a href={project.live} target="_blank" className="text-blue-600 hover:underline">Live</a>
              <a href={project.code} target="_blank" className="text-gray-800 hover:underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 3: Masonry Style
export function MasonryGrid() {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Masonry Projects</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="break-inside-avoid rounded-2xl bg-white shadow p-4">
            <img src={project.image} alt={project.title} className="w-full rounded-lg mb-3" />
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <div className="text-xs text-gray-500 mb-2">{project.tech.join(", ")}</div>
            <div className="flex gap-2">
              <a href={project.live} className="text-blue-600 hover:underline">Live</a>
              <a href={project.code} className="text-gray-800 hover:underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 4: Interactive Tabs
export function TabbedProjects() {
  const [activeTab, setActiveTab] = useState("All");
  const allTechs = ["All", ...new Set(projects.flatMap((p) => p.tech))];
  const filtered = activeTab === "All" ? projects : projects.filter(p => p.tech.includes(activeTab));

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects by Tech</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {allTechs.map((tech, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tech)}
            className={`px-4 py-2 rounded-full ${activeTab === tech ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"}`}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-4">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-3" />
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <div className="flex gap-2 text-sm text-blue-800 flex-wrap mb-2">
              {project.tech.map((tech, i) => <span key={i}>#{tech}</span>)}
            </div>
            <div className="flex gap-2">
              <a href={project.live} className="text-blue-600 hover:underline">Live</a>
              <a href={project.code} className="text-gray-800 hover:underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 5: Featured Project with Spotlight
export function FeaturedLayout() {
  const [featured, ...rest] = projects;
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Project</h2>
      <div className="flex flex-col md:flex-row items-center bg-white shadow rounded-2xl overflow-hidden mb-10">
        <img src={featured.image} className="w-full md:w-1/2 h-64 object-cover" alt={featured.title} />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{featured.title}</h3>
          <p className="text-gray-700 mb-4">{featured.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {featured.tech.map((tech, i) => <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full">{tech}</span>)}
          </div>
          <div className="flex gap-4">
            <a href={featured.live} className="text-blue-600 hover:underline">Live</a>
            <a href={featured.code} className="text-gray-800 hover:underline">Code</a>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-4">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-3" />
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <div className="text-xs text-gray-500 mb-2">{project.tech.join(", ")}</div>
            <div className="flex gap-2">
              <a href={project.live} className="text-blue-600 hover:underline">Live</a>
              <a href={project.code} className="text-gray-800 hover:underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 6: Carousel/Slider (simple manual slider)
export function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <div className="bg-gray-100 p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Project Carousel</h2>
      <div className="bg-white shadow rounded-2xl p-6 max-w-2xl mx-auto">
        <img src={project.image} className="w-full h-60 object-cover rounded mb-4" alt={project.title} />
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-2">{project.description}</p>
        <div className="flex justify-center gap-2 mb-4">
          {project.tech.map((tech, i) => <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full">{tech}</span>)}
        </div>
        <div className="flex justify-center gap-4">
          <a href={project.live} className="text-blue-600 hover:underline">Live</a>
          <a href={project.code} className="text-gray-800 hover:underline">Code</a>
        </div>
        <div className="mt-6 flex justify-between">
          <button onClick={() => setIndex((index - 1 + projects.length) % projects.length)} className="text-blue-500">Previous</button>
          <button onClick={() => setIndex((index + 1) % projects.length)} className="text-blue-500">Next</button>
        </div>
      </div>
    </div>
  );
}
