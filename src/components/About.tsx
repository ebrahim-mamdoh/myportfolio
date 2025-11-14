import { motion } from "framer-motion";
import { Code2, Database, Palette, Rocket, GitBranch, Zap } from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code2, color: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: Palette, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", icon: Zap, color: "from-yellow-500 to-amber-500" },
  { name: "React", icon: Rocket, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", icon: Code2, color: "from-slate-500 to-gray-500" },
  { name: "APIs", icon: Database, color: "from-green-500 to-emerald-500" },
  { name: "Git/GitHub", icon: GitBranch, color: "from-purple-500 to-pink-500" },
  { name: "React Query", icon: Database, color: "from-red-500 to-rose-500" },
  { name: "Formik/Yup", icon: Code2, color: "from-indigo-500 to-violet-500" },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Frontend Developer with extensive experience in building modern, 
              responsive web applications using React and Next.js. My focus is on creating 
              exceptional user experiences through clean code, thoughtful design, and cutting-edge technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in JavaScript and modern frontend frameworks, I specialize 
              in turning complex requirements into elegant, performant solutions. I'm committed to 
              continuous learning and staying ahead of industry trends to deliver the best possible results.
            </p>
          </motion.div>
        </div>
        
        {/* Skills Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl text-center group cursor-pointer hover-lift"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${skill.color} p-3 group-hover:animate-glow transition-all duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
