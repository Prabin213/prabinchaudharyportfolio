
import { Navigation } from "@/components/Navigation";
import { MatrixRain } from "@/components/MatrixRain";

const Services = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <MatrixRain />
      <div className="relative z-10 pt-24 container mx-auto px-4">
        <h1 className="text-4xl text-primary font-bold mb-8">Cybersecurity Services</h1>
        {/* Add your services content here */}
      </div>
    </div>
  );
};

export default Services;
