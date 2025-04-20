
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "The website you are viewing at the moment, it was made with react and tailwind css.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/websiteprojectimage.png",
    github: "https://github.com/luciousdev",
    liveLink: "https://luciousdev.nl"
  },
  {
    title: "Mika Assistant",
    description: "An AI assistant that will listen and will eventually be able to interact with your OS.",
    tags: ["Python", "Linux", "AI"],
    image: "/mika-assistant.png",
    github: "https://github.com/Mika-Project/mika-assistant",
  },
  {
    title: "Mika Linux",
    description: "A linux distribution trying to help people make the switch to linux.",
    tags: ["C++", "OS Development", "QML"],
    image: "/base-iso.png",
    github: "https://github.com/Mika-Project/base-iso",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white/80 hover:text-primary transition-colors"
                    >
                      <Github size={18} className="mr-1" /> GitHub
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
