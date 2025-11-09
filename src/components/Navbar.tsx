import { NavLink } from "./NavLink";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-gradient">
            PORTFOLIO
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              AboutMe
            </NavLink>
            <NavLink
              to="/achievements"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Achievements
            </NavLink>
            <NavLink
              to="/skills"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-medium"
            >
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
