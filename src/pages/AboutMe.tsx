import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import profileImg from "@/assets/profile.png";

const AboutMe = () => {
  const skills = [
    "JavaScript", "Java", "SQL", "C",
    "React.js", "Node.js", "Express.js",
    "MongoDB", "MySQL", "Firebase",
    "Git", "AWS", "REST APIs"
  ];

  const featuredProjects = [
    "PlaceNext - College Placement System",
    "ResearchHub - Research Paper Management",
    "Knowledge Lane Portal - Exam Prep Platform",
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <div className="flex justify-center items-start">
            <img
              src={profileImg}
              alt="Sahil Ahuja"
              className="w-80 h-80 rounded-2xl object-cover border-4 border-primary/50"
            />
          </div>

          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-8 border border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-4">Hi, I'm Sahil Ahuja</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A dedicated B.E. Computer Engineering student with hands-on experience in web development 
                and AI applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Software Developer with hands-on experience in building scalable web applications. While 
                proficient in full-stack development, I am especially enthusiastic about backend systems, 
                clean architecture, and efficient API design. I enjoy solving real-world problems and 
                creating seamless, impactful user experiences.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
              <div>
                <h4 className="text-xl font-semibold text-primary">
                  B.E. Computer Engineering
                </h4>
                <p className="text-muted-foreground">
                  Vivekanand Education Society's Institute of Technology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Featured Projects</h2>
          <div className="glass-effect rounded-xl p-8 border border-primary/20">
            <ul className="space-y-3">
              {featuredProjects.map((project) => (
                <li key={project} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Tech Stack</h2>
          <div className="glass-effect rounded-xl p-8 border border-primary/20">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 text-base px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
