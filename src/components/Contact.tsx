import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Globe, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Mail, label: "Email", url: "mailto:ebrahimmamdoh3@gmail.com", color: "hover:text-red-500" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ebrahim-mamdouh-431070296/", color: "hover:text-blue-500" },
  { icon: Github, label: "GitHub", url: "https://github.com/ebrahim-mamdoh", color: "hover:text-purple-500" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a564c041-e931-4207-b683-6a8e84f354f9",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "ebrahimmamdoh3@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 w-full flex flex-col">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <div className="mt-auto">
                <Button 
                  type="submit" 
                  variant="gradient"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through any of these channels.
              </p>
              
              <div className="space-y-4 flex-grow flex flex-col justify-center">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-background/30 border border-border/50 hover:border-primary/50 transition-all duration-300 ${link.color}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
