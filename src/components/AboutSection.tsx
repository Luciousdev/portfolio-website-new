import { Code, Gamepad2, BookOpen, Video } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-white/90">
              Hey there! I'm a passionate software engineer from the Netherlands.
              I have been coding since I was around 12 years old, and love creating a veriaty of software.
              Currently I am foucsed on web development, frontend at work and backend at home.
            </p>
            <p className="text-lg text-white/90">
              In my free time I try to keep growing my skills and knowledge,
              I love to take on new challenges and learn new technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg hover:bg-accent transition-colors duration-300 animate-fade-in">
              <Code size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Software Engineering</h3>
              <p className="text-white/80">Creating efficient and scalable solutions through clean code.</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg hover:bg-accent transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Gamepad2 size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Gaming</h3>
              <p className="text-white/80">Exploring virtual worlds and competitive gameplay in a variaty of (VR) games.</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg hover:bg-accent transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <BookOpen size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Manga</h3>
              <p className="text-white/80">Reading visual stories that keep me creative and allow me to take my mind off of things for a minute.</p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg hover:bg-accent transition-colors duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Video size={36} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Anime</h3>
              <p className="text-white/80">Watching animated series, either alone or with friends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
