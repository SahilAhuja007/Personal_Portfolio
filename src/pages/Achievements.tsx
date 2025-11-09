import { Award, Trophy, Star } from "lucide-react";
import Footer from "@/components/Footer";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Participant",
    year: "2025",
    description: "Participated in multiple hackathons including SYRUS HACKATHON 2025 at VESIT Mumbai",
    certificate: true,
  },
  {
    icon: Star,
    title: "AI Integration Expert",
    year: "2024",
    description: "Successfully integrated AI solutions using OpenAI and Gemini APIs in web applications",
    certificate: false,
  },
  {
    icon: Award,
    title: "Full-Stack Project Lead",
    year: "2024",
    description: "Led development of college placement system used by students, faculty, and companies",
    certificate: false,
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="text-gradient">Achievements</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="glass-effect rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-primary font-semibold">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
                {achievement.certificate && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm text-primary">✓ Certificate Available</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-2xl mx-auto glass-effect rounded-xl p-8 border border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Upload Your Certificates?
          </h2>
          <p className="text-muted-foreground mb-6">
            Add images of your achievement certificates to showcase your accomplishments
          </p>
          <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 hover:border-primary/50 transition-colors cursor-pointer">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Click to upload certificates</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Achievements;
