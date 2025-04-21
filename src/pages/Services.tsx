
import { Navigation } from "@/components/Navigation";
import { MatrixRain } from "@/components/MatrixRain";
import { Card } from "@/components/ui/card";
import { Shield, Search, Database, Cloud, Lock, Code, Network, FileWarning, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities in your systems and applications."
    },
    {
      icon: Search,
      title: "Security Audits",
      description: "In-depth analysis of your security infrastructure and compliance with industry standards."
    },
    {
      icon: Database,
      title: "Database Security",
      description: "Protection of sensitive data through encryption, access controls, and monitoring."
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Securing cloud infrastructure and applications with industry best practices."
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description: "Implementation of robust authentication and authorization systems."
    },
    {
      icon: Code,
      title: "Secure Code Review",
      description: "Analysis of application source code to identify security vulnerabilities."
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Protection against network-based threats and unauthorized access."
    },
    {
      icon: FileWarning,
      title: "Incident Response",
      description: "Quick and effective response to security incidents and breaches."
    },
    {
      icon: BookOpen,
      title: "Security Training",
      description: "Custom cybersecurity training programs for your organization."
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <MatrixRain />
      <div className="relative z-10 pt-24 container mx-auto px-4">
        <h1 className="text-4xl text-primary font-bold mb-8">Cybersecurity Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 glass hover:scale-105 transition-transform duration-300">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
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

export default Services;
