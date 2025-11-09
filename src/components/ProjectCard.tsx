import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
}

const ProjectCard = ({ title, description, techStack, image }: ProjectCardProps) => {
  return (
    <div className="glass-effect rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
