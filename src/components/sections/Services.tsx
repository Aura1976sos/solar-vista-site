import { motion } from "framer-motion";
import { Home, Building2, Battery, ClipboardCheck, ArrowRight, Zap, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Home className="h-10 w-10" />,
    title: "Solar Panels",
    description: "Sales of high-quality solar panels (various capacities). Installation for residential, commercial, and institutional use. Warranty and after-sales support.",
    color: "bg-blue-50 text-primary",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Solar Power Systems",
    description: "Complete off-grid and hybrid solar solutions. Custom system design tailored to client needs. Integration with existing electrical setups.",
    color: "bg-red-50 text-secondary",
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Inverters",
    description: "Supply of durable inverters (different sizes and power ratings). Professional installation and configuration. Maintenance and repair services.",
    color: "bg-yellow-50 text-accent-foreground",
  },
  {
    icon: <Battery className="h-10 w-10" />,
    title: "Battery Storage",
    description: "Sales of deep-cycle batteries for energy storage. Installation and optimization for long-lasting performance. Replacement and recycling services.",
    color: "bg-blue-50 text-primary",
  },
  {
    icon: <ClipboardCheck className="h-10 w-10" />,
    title: "Energy Consulting",
    description: "Site surveys and energy audits. Cost-saving analysis and ROI projections. Advisory on renewable energy adoption.",
    color: "bg-red-50 text-secondary",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Maintenance & Support",
    description: "Routine servicing of solar systems and inverters. Emergency troubleshooting and repairs. Customer support and technical training.",
    color: "bg-yellow-50 text-accent-foreground",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-primary">Comprehensive Solar Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end solar services, from initial consultation and design to professional installation and lifelong maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-bold group-hover:translate-x-2 transition-transform self-start">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to switch to solar?</h3>
            <p className="text-white/80 text-lg max-w-xl">
              Join thousands of happy customers who are saving money and the planet every single day with RowVee Solar.
            </p>
          </div>
          <Button size="lg" className="relative z-10 mt-8 md:mt-0 bg-accent text-primary-foreground font-black hover:bg-accent/90 px-8 py-6 rounded-2xl text-lg shadow-xl" asChild>
            <Link to="/schedule">Schedule Free Consultation Now</Link>
          </Button>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
        </div>
      </div>
    </section>
  );
}