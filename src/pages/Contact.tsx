
import { Navigation } from "@/components/Navigation";
import { MatrixRain } from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, User, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    // This is where we'll integrate email functionality later
    toast.info("Email functionality will be added soon!");
    reset();
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Navigation />
      <MatrixRain />
      <div className="relative z-10 pt-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Information */}
          <Card className="p-6 glass">
            <h1 className="text-4xl text-primary font-bold mb-4">PRABIN CHAUDHARY</h1>
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground">Role: Cyber Security Engineer</p>
              <p className="text-muted-foreground">Location: Dubai, UAE</p>
              <p className="text-muted-foreground">Email: hmsprabin25@gmail.com</p>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-6 glass">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    className="pl-10"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    className="pl-10"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Textarea
                    id="message"
                    {...register("message", { required: true })}
                    className="pl-10"
                    placeholder="Your message"
                    rows={4}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
