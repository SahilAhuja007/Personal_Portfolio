import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Footer from "@/components/Footer";
import projectWeb from "@/assets/project-web.jpg";
import projectResearch from "@/assets/project-research.jpg";
import projectEducation from "@/assets/project-education.jpg";

const featuredProjects = [
  {
    title: "PlaceNext - College Placement System",
    description: "Led development of the recruiter-side module in a college placement system used by students, faculty, and companies. Built scalable backend APIs and implemented real-time notifications.",
    techStack: ["Next.js", "TypeScript", "Firebase", "Redis"],
    image: projectWeb,
    github: "#",
    demo: "#",
  },
  {
    title: "ResearchHub",
    description: "Built a full-stack platform for researchers to upload, organize, and manage academic papers with advanced search capabilities and collaborative features.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: projectResearch,
    github: "#",
    demo: "#",
  },
  {
    title: "Knowledge Lane Portal",
    description: "Built a JEE/NEET-focused platform with syllabus tracking, quizzes, question papers, and dashboards for students preparing for competitive exams.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: projectEducation,
    github: "#",
    demo: "#",
  },
];

const allProjects = [
  ...featuredProjects,
  {
    title: "Freelance Learning Platform",
    description: "Developed a full-stack web application for personalized learning and assessment with role-based access control for students, teachers, and administrators.",
    techStack: ["Flutter", "TypeScript", "Firebase", "Redis"],
    image: projectWeb,
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const [currentFeatured, setCurrentFeatured] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredProjects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h1>

        {/* Featured Project Carousel */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass-effect rounded-2xl overflow-hidden border border-primary/20 p-8">
            <img
              src={featuredProjects[currentFeatured].image}
              alt={featuredProjects[currentFeatured].title}
              className="w-full h-64 lg:h-full object-cover rounded-xl"
            />
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">{featuredProjects[currentFeatured].title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {featuredProjects[currentFeatured].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProjects[currentFeatured].techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="default" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
                <Button variant="outline" className="gap-2 border-primary/20 hover:border-primary">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeatured(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentFeatured ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button size="sm" variant="default" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 border-primary/20">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
