import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import profileImg from "@/assets/profile.png";
import projectWeb from "@/assets/project-web.jpg";
import projectResearch from "@/assets/project-research.jpg";
import projectEducation from "@/assets/project-education.jpg";

const projects = [
  {
    title: "PlaceNext",
    description: "Led development of the recruiter-side module in a college placement system used by students, faculty, and companies.",
    techStack: ["Next.js", "TypeScript", "Firebase", "Redis"],
    image: projectWeb,
  },
  {
    title: "ResearchHub",
    description: "Built a full-stack platform for researchers to upload, organize, and manage academic papers",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: projectResearch,
  },
  {
    title: "Knowledge Lane Portal",
    description: "Built a JEE/NEET-focused platform with syllabus tracking, quizzes, question papers, and dashboards",
    techStack: ["React", "Node.js", "MongoDB"],
    image: projectEducation,
  },
  {
    title: "Freelance Projects",
    description: "Developed a full-stack web application for personalized learning and assessment with role-based access control.",
    techStack: ["Flutter", "TypeScript", "Firebase", "Redis"],
    image: projectWeb,
  },
];

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <img
                  src={profileImg}
                  alt="Sahil Ahuja"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/50 animate-float"
                />
              </div>
            </div>

            <div className="space-y-6 animate-slide-up">
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="text-gradient">SAHIL AHUJA</span>
              </h1>
              <h2 className="text-3xl md:text-4xl text-foreground">Software Developer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Software Developer with hands-on experience in building scalable web applications. 
                Proficient in full-stack development, with special enthusiasm for backend systems, 
                clean architecture, and efficient API design. I enjoy solving real-world problems 
                and creating seamless, impactful user experiences.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Carousel */}
        <section className="py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Featured Projects
          </h2>
          <div className="max-w-4xl mx-auto">
            <ProjectCard {...projects[currentProject]} />
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentProject ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
