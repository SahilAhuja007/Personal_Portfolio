import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const response = await axios.post(
        "https://sahil-portfolio-fxkp.onrender.com/send-personal-message",
        { ...formData, mainname: "sahil" }
      );
      toast.success("Message sent successfully!");
      setFormData({ username: "", email: "", message: "" });
    } catch (error) {
      alert("there is an issue sending mail");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="glass-effect rounded-2xl p-8 border border-primary/20 mb-12"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-muted/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-muted/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
