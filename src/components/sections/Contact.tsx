import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! Our solar experts will contact you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-primary">Start Your Solar Journey Today</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to reduce your bills and help the planet? Fill out the form below for a free, no-obligation solar quote and consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                {[
                  { 
                    icon: <Phone className="h-6 w-6 text-primary" />, 
                    title: "Call Us", 
                    content: "08181655264",
                    sub: "Mon-Sat: 8am - 6pm" 
                  },
                  { 
                    icon: <Mail className="h-6 w-6 text-primary" />, 
                    title: "Email Us", 
                    content: "Row.veetech@gmail.com",
                    sub: "We'll reply within 24 hours" 
                  },
                  { 
                    icon: <MapPin className="h-6 w-6 text-primary" />, 
                    title: "Visit Us", 
                    content: "2 Oguyinka Street, Mafoluku",
                    sub: "Off International Airport Road, By 7&8 Bus Stop, Lagos" 
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="bg-primary/10 p-3 rounded-xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-primary font-medium">{item.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden">
                <Clock className="absolute top-4 right-4 h-24 w-24 text-white/10" />
                <h4 className="font-bold text-xl mb-4 relative z-10">Free Consultation</h4>
                <p className="text-white/80 text-sm mb-6 relative z-10">
                  Not sure where to start? Our experts provide free virtual and in-person energy audits to find your perfect fit.
                </p>
                <Button variant="secondary" className="w-full font-black bg-accent text-primary-foreground hover:bg-accent/90 h-12 rounded-xl" asChild>
                  <Link to="/schedule">Schedule Appointment Now</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Full Name</label>
                      <Input placeholder="John Doe" required className="h-12 bg-gray-50 border-gray-100 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Email Address</label>
                      <Input type="email" placeholder="john@example.com" required className="h-12 bg-gray-50 border-gray-100 focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Phone Number</label>
                      <Input placeholder="+234 000 0000 000" className="h-12 bg-gray-50 border-gray-100 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Inquiry Type</label>
                      <select className="flex h-12 w-full rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                        <option>General Inquiry</option>
                        <option>Installation Quote</option>
                        <option>Maintenance Request</option>
                        <option>Product Information</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Message</label>
                    <Textarea 
                      placeholder="How can we help you today?" 
                      className="min-h-[150px] bg-gray-50 border-gray-100 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-bold group bg-secondary hover:bg-secondary/90 text-white" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center">
                    <MessageSquare className="h-3 w-3 mr-1" /> No credit card required. Private & secure.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl -z-0"></div>
    </section>
  );
}