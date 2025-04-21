
import { Navigation } from "@/components/Navigation";
import { MatrixRain } from "@/components/MatrixRain";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Bug, Network, Cloud, Activity, UserRound } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: ShieldCheck,
      title: "Password Strength Tester",
      description: "A sophisticated tool that evaluates password strength based on length, complexity, and special characters, helping users create more secure passwords."
    },
    {
      icon: Bug,
      title: "Malware Scanner",
      description: "A simple yet effective malware detection tool utilizing YARA rules to identify potential threats and malicious software patterns."
    },
    {
      icon: ShieldCheck,
      title: "Vulnerability Scanner",
      description: "A comprehensive scanner designed to identify security vulnerabilities in web applications and networks, providing detailed reports and remediation suggestions."
    },
    {
      icon: ShieldCheck,
      title: "SQL Injection Detection",
      description: "An intelligent system that monitors and prevents SQL injection attacks by analyzing input patterns and implementing defensive measures."
    },
    {
      icon: ShieldCheck,
      title: "Keylogging Detection",
      description: "An advanced tool that identifies and blocks keylogging software, protecting sensitive information from being captured by malicious programs."
    },
    {
      icon: Network,
      title: "Network Anomaly Detection",
      description: "A sophisticated system that monitors network traffic and identifies unusual patterns or potential security threats in real-time."
    },
    {
      icon: Cloud,
      title: "Cloud Security Management",
      description: "A comprehensive solution for enhancing cloud security posture management, ensuring robust protection for cloud-based assets."
    },
    {
      icon: ShieldCheck,
      title: "Blockchain Security Auditing",
      description: "A specialized tool for analyzing blockchain systems, identifying vulnerabilities, and proposing effective security solutions."
    },
    {
      icon: Activity,
      title: "Advanced Packet Sniffing",
      description: "A powerful network traffic analysis tool designed to detect and analyze potential security threats in real-time."
    },
    {
      icon: UserRound,
      title: "Facial Authentication System",
      description: "A secure, web-based facial recognition system implementing advanced biometric authentication protocols."
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <MatrixRain />
      <div className="relative z-10 pt-24 container mx-auto px-4 pb-12">
        <h1 className="text-4xl text-primary font-bold mb-8">Cybersecurity Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 glass hover:scale-105 transition-transform duration-300 border border-primary/20">
              <project.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <footer className="relative z-10 py-6 px-4 text-center bg-black/20">
        <p className="text-sm text-[#8E9196] font-['Fira_Code']">
          © 1998 Prabin Chaudhary. Engineer. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Projects;
