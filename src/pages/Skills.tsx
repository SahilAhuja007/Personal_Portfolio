import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import techBackground from "@/assets/tech-background.jpg";

const Skills = () => {
  const skillsData = {
    "Programming Languages": ["JavaScript", "Java", "SQL", "C"],
    "Frontend": ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "REST APIs", "JWT", "Middleware", "MVC Pattern"],
    "Databases": ["MongoDB", "MySQL", "Firebase", "Redis"],
    "DevOps / Tools": ["Git", "GitHub", "Postman", "Vercel", "AWS (EC2, S3)", "Cloudinary", "Puppeteer"],
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">My Skills</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Skill Cloud */}
          <div className="relative">
            <div className="glass-effect rounded-2xl overflow-hidden border border-primary/20 p-8">
              <img
                src={techBackground}
                alt="Tech Skills"
                className="w-full h-96 object-cover rounded-xl opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-gradient">Tech Stack</h3>
              </div>
            </div>
          </div>

          {/* Skills List */}
          <div className="space-y-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="glass-effect rounded-xl p-6 border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-4">{category}:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-foreground border-primary/20 px-4 py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
