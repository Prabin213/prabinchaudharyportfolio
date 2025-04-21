import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MatrixRain } from "@/components/MatrixRain";
import { TypingEffect } from "@/components/TypingEffect";
import { Shield, Terminal, Code, Globe, Server, Lock, BookOpen, Bug, Database, Network, Key, Virus, ServerCrash } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    { icon: Shield, title: "Penetration Testing", description: "Comprehensive security assessments to identify vulnerabilities in your systems", dangerLevel: "High Risk" },
    { icon: Bug, title: "Security Auditing", description: "Deep system vulnerability analysis and exploitation testing", dangerLevel: "Critical" },
    { icon: Virus, title: "Malware Analysis", description: "Reverse engineering and behavioral analysis of malicious code", dangerLevel: "Extreme" },
  ];

  const projects = [
    { icon: ServerCrash, title: "Network Breach Simulation", description: "Simulated cyber attacks on Fortune 500 infrastructure" },
    { icon: Database, title: "Database Infiltration", description: "Identifying and exploiting database vulnerabilities" },
    { icon: Network, title: "Zero-Day Discovery", description: "Detection of unknown security vulnerabilities" },
  ];

  const skills = [
    { icon: Key, title: "Cryptography" },
    { icon: Terminal, title: "System Exploitation" },
    { icon: Lock, title: "Security Protocols" },
  ];

  const courses = [
    { 
      icon: BookOpen, 
      title: "Ethical Hacking Fundamentals", 
      description: "Learn the basics of ethical hacking and penetration testing" 
    },
    { 
      icon: Terminal, 
      title: "Advanced Network Security", 
      description: "Deep dive into network security protocols and defense strategies" 
    },
    { 
      icon: Shield, 
      title: "Cybersecurity Certification Prep", 
      description: "Comprehensive preparation for industry-standard cybersecurity certifications" 
    }
  ];

  const handleGetInTouch = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#1A1F2C]">
      <Navigation />
      <MatrixRain />
      
      <section className="relative z-10 min-h-screen flex items-center justify-center p-6 pt-20">
        <div className="text-center space-y-6">
          <div className="mb-8">
            <Terminal className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary animate-glow mb-4">
            <TypingEffect text="SYSTEM BREACH DETECTED" delay={100} />
          </h1>
          <p className="text-lg md:text-xl text-[#0FA0CE] font-mono max-w-2xl mx-auto">
            {"</"} Elite Security Systems Engineer {"/>"}
          </p>
          <Button 
            className="bg-[#0FA0CE] hover:bg-[#0FA0CE]/80 text-white font-mono"
            onClick={handleGetInTouch}
          >
            <Terminal className="mr-2 h-4 w-4" /> Initialize Connection
          </Button>
          
          <div className="mt-8 max-w-2xl mx-auto neo-blur p-6 rounded-lg border border-[#0FA0CE]/30">
            <h3 className="text-xl font-bold text-[#0FA0CE] mb-4 font-mono">[System Log]</h3>
            <div className="space-y-4 font-mono text-[#8E9196]">
              <p className="border-l-4 border-[#0FA0CE] pl-4">
                > Accessing mainframe...
              </p>
              <p className="border-l-4 border-[#0FA0CE] pl-4">
                > Security protocols: ACTIVATED
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0FA0CE] font-mono">[Technical Arsenal]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="neo-blur p-6 animate-fade-in hover:border-[#0FA0CE] transition-colors duration-300" 
                  style={{ animationDelay: `${index * 200}ms` }}>
              <skill.icon className="w-12 h-12 text-[#0FA0CE] mb-4" />
              <h3 className="text-xl font-bold mb-2 font-mono">{skill.title}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-6 bg-black/40">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0FA0CE] font-mono">[Security Operations]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="neo-blur p-6 animate-fade-in hover:border-[#0FA0CE] transition-colors duration-300" 
                  style={{ animationDelay: `${index * 200}ms` }}>
              <project.icon className="w-12 h-12 text-[#0FA0CE] mb-4" />
              <h3 className="text-xl font-bold mb-4 font-mono">{project.title}</h3>
              <p className="text-[#8E9196] font-mono">{project.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0FA0CE] font-mono">[Security Services]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="neo-blur p-6 animate-fade-in hover:border-[#0FA0CE] transition-colors duration-300" 
                  style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex justify-between items-start mb-4">
                <service.icon className="w-12 h-12 text-[#0FA0CE]" />
                <span className="text-red-500 font-mono text-sm">{service.dangerLevel}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-mono">{service.title}</h3>
              <p className="text-[#8E9196] font-mono">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="relative z-10 py-20 px-6 bg-black/40">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0FA0CE] font-mono">[Training Modules]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="neo-blur p-6 animate-fade-in hover:border-[#0FA0CE] transition-colors duration-300" 
                  style={{ animationDelay: `${index * 200}ms` }}>
              <course.icon className="w-12 h-12 text-[#0FA0CE] mb-4" />
              <h3 className="text-xl font-bold mb-4 font-mono">{course.title}</h3>
              <p className="text-[#8E9196] font-mono">{course.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Copyright Section */}
      <footer className="relative z-10 py-6 px-4 text-center bg-black/40">
        <p className="text-sm text-[#8E9196] font-mono">
          © 1998 Prabin Chaudhary. Engineer. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
