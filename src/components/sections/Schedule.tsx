import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Send, CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Schedule() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate admin email sending
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Consultation Scheduled Successfully!");
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <Link to="/" className="inline-flex items-center text-primary font-bold hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>

          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-[40px] shadow-2xl border border-border overflow-hidden">
              {/* Info Column */}
              <div className="lg:col-span-2 bg-primary p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">Schedule Free Consultation</h1>
                  <p className="text-white/80 text-lg leading-relaxed mb-10">
                    Book a specialized session with our engineers to audit your energy needs and design your perfect solar setup.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-lg"><Clock className="h-5 w-5 text-accent" /></div>
                      <div>
                        <p className="font-bold">Duration</p>
                        <p className="text-sm text-white/60">30 - 45 Minutes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-lg"><Calendar className="h-5 w-5 text-accent" /></div>
                      <div>
                        <p className="font-bold">Availability</p>
                        <p className="text-sm text-white/60">Mon - Sat, 9am - 5pm</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-2 rounded-lg"><MapPin className="h-5 w-5 text-accent" /></div>
                      <div>
                        <p className="font-bold">Format</p>
                        <p className="text-sm text-white/60">On-site or Virtual Visit</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-2 font-bold uppercase tracking-wider">Help Line</p>
                  <p className="text-xl font-bold text-accent">+234 909 6522594</p>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-bold">Full Name</Label>
                      <Input placeholder="John Adeyinka" required className="h-12 border-gray-100 bg-gray-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Email Address</Label>
                      <Input type="email" placeholder="john@example.com" required className="h-12 border-gray-100 bg-gray-50 focus:bg-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-bold">WhatsApp Number</Label>
                      <Input placeholder="09096522594" required className="h-12 border-gray-100 bg-gray-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">State</Label>
                      <Input placeholder="Lagos State" required className="h-12 border-gray-100 bg-gray-50 focus:bg-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-bold">City / Local Govt</Label>
                      <Input placeholder="Ikeja" required className="h-12 border-gray-100 bg-gray-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-bold">Preferred Date</Label>
                      <Input type="date" required className="h-12 border-gray-100 bg-gray-50 focus:bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-bold">Preferred Time Slot</Label>
                    <select className="flex h-12 w-full rounded-md border border-gray-100 bg-gray-50 px-3 py-2 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                      <option>Morning (9:00 AM - 12:00 PM)</option>
                      <option>Afternoon (12:00 PM - 3:00 PM)</option>
                      <option>Evening (3:00 PM - 5:00 PM)</option>
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-secondary text-white font-black text-lg rounded-2xl shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? "Booking..." : (
                      <>Confirm Booking <Send className="h-5 w-5" /></>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    A technical team member will contact you on WhatsApp to confirm the appointment.
                  </p>
                </form>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[40px] shadow-2xl p-12 md:p-20 text-center border border-border"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Calendar Booked!</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Thank you for scheduling your consultation. Your details have been sent to our technical admin team. A RowVee Solar expert will contact you shortly via WhatsApp or Email to confirm your time slot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-white font-bold h-14 px-10 rounded-xl" asChild>
                  <Link to="/">Return to Homepage</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary font-bold h-14 px-10 rounded-xl" asChild>
                  <Link to="/shops">Browse Shop Items</Link>
                </Button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}