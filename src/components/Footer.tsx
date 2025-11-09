import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ahujasahil9172@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9172755731</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Links</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                to="/achievements"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Achievements
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              {/* GitHub */}
              <div className="relative group">
                <a
                  href="https://github.com/SahilAhuja007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-xs px-2 py-1 rounded transition-opacity">
                  GitHub
                </span>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href="https://www.linkedin.com/in/sahil-ahuja-370b50271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-xs px-2 py-1 rounded transition-opacity">
                  LinkedIn
                </span>
              </div>

              {/* LeetCode */}
              <div className="relative group">
                <a
                  href="https://leetcode.com/u/Sahilahuja_1234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M256 0C114.624 0 0 114.624 0 256s114.624 256 256 256 256-114.624 256-256S397.376 0 256 0zm88.32 367.36c-4.288 4.288-11.232 4.288-15.52 0l-45.76-45.76c-4.288-4.288-4.288-11.232 0-15.52l66.24-66.24c4.288-4.288 11.232-4.288 15.52 0l45.76 45.76c4.288 4.288 4.288 11.232 0 15.52l-66.24 66.24zM256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128z" />
                  </svg>
                </a>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-xs px-2 py-1 rounded transition-opacity">
                  LeetCode
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 Sahil Ahuja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
