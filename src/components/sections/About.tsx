import { motion } from "framer-motion";
import { CheckCircle, Award, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Sustainability",
    description: "We are committed to preserving our planet and Nigeria's natural resources for future generations.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "Leveraging the latest solar technology optimized for Nigeria's unique tropical climate.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community",
    description: "Empowering local communities with affordable energy independence and creating green jobs.",
  },
];

export function About() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/nigerian-solar-engineer-working-41a61f78-1779799226119.webp" 
                alt="Nigerian Solar Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-xl z-20 text-center hidden md:block border-l-4 border-secondary">
              <span className="text-4xl font-bold text-primary">15+</span>
              <p className="text-sm font-medium text-gray-600 mt-1">Years in Nigeria</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">About RowVee Solar</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-primary">Pioneering a Greener, Brighter Future for Nigeria</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At RowVee Solar Project, our mission is to make solar energy accessible, affordable, and understandable for every Nigerian home and business. We are building the path to a reliable, sustainable future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-xl flex items-center text-primary">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2" /> Our Mission
                </h3>
                <p className="text-muted-foreground text-sm">
                  To accelerate Nigeria's transition to renewable energy through high-performance installations.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl flex items-center text-primary">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2" /> Our Vision
                </h3>
                <p className="text-muted-foreground text-sm">
                  A Nigeria where every roof generates clean energy, ending power instability once and for all.
                </p>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 gap-6">
              <h3 className="font-bold text-2xl mb-2 text-primary">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="p-6 bg-muted/50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-primary/20">
                    <div className="mb-4">{value.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}