import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: " Frontend instructor",
    organization: "instructor at Mega Team MU.",
    period: "2024 - Present",
    description: "Teaching and mentoring aspiring frontend developers at Mega Team MU, providing practical React/Next.js training, code reviews, and enforcing modern development standards.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "React Developer",
    organization: "nest trade Egy.",
    period: "2022 - 2024",
    description: "Built responsive web applications using React and Next.js. Collaborated with designers to deliver pixel-perfect implementations.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Award,
    title: "MERN Stack Internship",
    organization: "Ministry of Communications and Information Technology",
    period: "2023",
description: "Earned a Certificate of Excellence in the Digital Egypt Pioneers Program (DEPI), sponsored by the Ministry of Communications and Information Technology of Egypt, after completing the React Web Developer track from April to October 2024.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Computer Science Degree",
    organization: "Higher Technological Institute",
    period: "2020 - 2024",
    description: "Graduated with honors. Specialized in web development and software engineering principles.",
    color: "from-green-500 to-emerald-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 ring-4 ring-background z-10" />
                  
                  {/* Content Card */}
                  <div className="ml-16 md:ml-0 md:w-5/12 glass-card p-6 rounded-xl hover-lift">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${exp.color} mb-4`}>
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
