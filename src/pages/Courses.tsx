
import { Navigation } from "@/components/Navigation";
import { MatrixRain } from "@/components/MatrixRain";
import { Card } from "@/components/ui/card";
import { Book, BookOpen, GraduationCap, Library } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Ethical Hacking Fundamentals",
      description: "Learn the basics of ethical hacking and penetration testing",
      level: "Beginner"
    },
    {
      icon: GraduationCap,
      title: "Advanced Network Security",
      description: "Deep dive into network security protocols and defense strategies",
      level: "Intermediate"
    },
    {
      icon: Library,
      title: "Cybersecurity Certification Prep",
      description: "Comprehensive preparation for industry-standard cybersecurity certifications",
      level: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <MatrixRain />
      <div className="relative z-10 pt-24 container mx-auto px-4">
        <h1 className="text-4xl text-primary font-bold mb-8">Cybersecurity Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="glass p-6 transform transition-all hover:scale-105">
              <course.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              <div className="text-sm text-primary">Level: {course.level}</div>
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

export default Courses;
