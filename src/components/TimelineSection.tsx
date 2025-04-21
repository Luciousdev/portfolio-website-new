import { Calendar, Download, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WorkExperience {
  position: string;
  company: string;
  companyLogo: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: WorkExperience[] = [
  {
    position: "Frontend Engineer (Engineer II)",
    company: "ING Bank B.V.",
    companyLogo: "/ing-logo.jpeg",
    period: "Dec 2024 - Present",
    description: "At ING I am working as a frontend engineer (Engineer II), I have been working with programming languages like typescript, javascript and css. And frameworks such as lit. I also have been doing trainings for security see <a style='color: hsl(280, 84%, 80%)' href='https://owasp.org/www-project-security-culture/v10/4-Security_Champions/'>security champion</a>.",
    skills: ["React", "TypeScript", "Lit.dev", "CSS", "Git"]
  },
  {
    position: "Intern Frontend Developer",
    company: "ING Bank B.V.",
    companyLogo: "/ing-logo.jpeg",
    period: "Feb 2024 - Dec 2024",
    description: "As an intern at ING, I mainly have been focusing on improving my frontend skills.",
    skills: ["TypeScript", "Lit.dev", "CSS", "Git"]
  },
  {
    position: "Inters Software Developer",
    company: "Key Agency",
    companyLogo: "/keyagency-logo.jpeg",
    period: "Aug 2023 - Jan 2024",
    description: "At Key Agency I have worked on several Front-end and Back-end projects. I was primarily focused on the Back-end using languages like PHP, Python and frameworks like Laravel. During my time at Key Agency I have also used a couple CMS systems like WordPress and OctoberCMS.",
    skills: ["PHP", "CSS", "JavaScript", "OctoberCMS", "Laravel", "WordPress"]
  }
];

// Function to safely render HTML content
const createMarkup = (htmlContent: string) => {
  return { __dangerouslySetInnerHTML: { __html: htmlContent } };
};

const TimelineSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Work Experience</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {/* <Button 
            className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download size={18} />
            Download CV
          </Button> */}
          
          <Button 
            className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#0077B5]/80 text-white"
            onClick={() => window.open('https://www.linkedin.com/in/lucypuyenbroek/', '_blank')}
          >
            <Linkedin size={18} />
            LinkedIn
          </Button>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-16 flex animate-fade-in ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="absolute left-[14px] md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-background flex items-center justify-center z-10 border-2 border-primary">
                <img 
                  src={exp.companyLogo} 
                  alt={exp.company} 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              
              <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-secondary rounded-lg shadow-lg p-6 hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                    <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
                    <div className="flex items-center text-white/60 mb-3">
                      <Calendar size={16} className="mr-1 flex-shrink-0" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;