
import { Navigation } from "@/components/Navigation";
import { MatrixRain } from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <MatrixRain />
      <div className="relative z-10 pt-24 container mx-auto px-4">
        <h1 className="text-4xl text-primary font-bold mb-8">Contact Me</h1>
        <div className="terminal p-8 rounded-lg">
          <p className="text-muted-foreground mb-4">
            <span className="text-primary">$</span> Initiate secure communication channel
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Send Encrypted Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
