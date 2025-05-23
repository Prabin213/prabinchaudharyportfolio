import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MatrixRain } from "@/components/MatrixRain";
import { TypingEffect } from "@/components/TypingEffect";
import { Shield, Terminal, Code, Globe, Server, Lock, BookOpen } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    { icon: Shield, title: "Penetration Testing", description: "Comprehensive security assessments to identify vulnerabilities" },
    { icon: Terminal, title: "Security Auditing", description: "In-depth analysis of system security configurations" },
    { icon: Code, title: "Secure Code Review", description: "Detailed analysis of application source code for vulnerabilities" },
  ];

  const projects = [
    { title: "Network Security Implementation", description: "Implemented advanced firewall configurations for Fortune 500 company" },
    { title: "Incident Response System", description: "Developed automated incident response system reducing response time by 60%" },
    { title: "Zero Trust Architecture", description: "Designed and implemented zero trust security model for cloud infrastructure" },
  ];

  const skills = [
    { icon: Globe, title: "Network Security" },
    { icon: Server, title: "System Hardening" },
    { icon: Lock, title: "Encryption Protocols" },
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
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <MatrixRain />
      
      <section className="relative z-10 min-h-screen flex items-center justify-center p-6 pt-20">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary animate-glow mb-4">
            <TypingEffect text="Security First, Always." delay={100} />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cybersecurity Expert & Ethical Hacker
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={handleGetInTouch}
          >
            Get In Touch
          </Button>
          
          {/* New Hacking Quotes Section */}
          <div className="mt-8 max-w-2xl mx-auto bg-black/30 p-6 rounded-lg border border-primary/30">
            <h3 className="text-xl font-bold text-primary mb-4">Cybersecurity Insights</h3>
            <div className="space-y-4 font-['Fira_Code'] text-muted-foreground">
              <blockquote className="italic border-l-4 border-primary pl-4">
                "Amateurs hack systems; professionals hack people."
              </blockquote>
              <blockquote className="italic border-l-4 border-primary pl-4">
                "No technology that's connected to the internet is unhackable."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 px-6 pt-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="glass p-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-6 bg-black/20">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Security Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass p-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Security Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="glass p-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="relative z-10 py-20 px-6 bg-black/20">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Cybersecurity Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="glass p-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <course.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">{course.title}</h3>
              <p className="text-muted-foreground">{course.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Security Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="glass p-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Copyright Section */}
      <footer className="relative z-10 py-6 px-4 text-center bg-black/20">
        <p className="text-sm text-[#8E9196] font-['Fira_Code']">
          © 1998 Prabin Chaudhary. Engineer. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
