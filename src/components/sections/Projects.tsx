import { motion } from "framer-motion";
import { TreeDeciduous, Zap, CloudOff, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const projects = [
  {
    title: "Lekki Residential Installation",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/nigerian-family-solar-house-e3b39c98-1779799226275.webp",
    metrics: { energy: "12,000 kWh/yr", co2: "8.5 Tons", trees: "140 Trees" },
    client: "The Adeyemi Family",
    clientAvatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/nigerian-woman-testimonial-928fcdad-1779799226433.webp",
    quote: "RowVee Solar made the entire process so easy. Our electric bill is now practically zero even with the grid issues!",
  },
  {
    title: "Ikeja Business Hub",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/project-solar-farm-d1f2527c-1779797459914.webp",
    metrics: { energy: "450,000 kWh/yr", co2: "320 Tons", trees: "5,200 Trees" },
    client: "Chief Olumide, CEO of TechHub Lagos",
    clientAvatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/nigerian-man-testimonial-dd69cf0e-1779799226582.webp",
    quote: "A game-changer for our operational costs. We no longer rely on expensive diesel generators for our daily business operations.",
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Work in Nigeria</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-primary">Successful Installations</h2>
          <p className="text-muted-foreground text-lg">
            Explore how we've helped Nigerian homeowners and businesses achieve energy independence and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group flex flex-col"
            >
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                  Verified Project
                </div>
              </div>
              <div className="p-8 flex flex-grow flex-col">
                <h3 className="text-2xl font-bold mb-6 text-primary">{project.title}</h3>
                
                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Energy Saved</p>
                    <p className="text-xs font-black text-primary">{project.metrics.energy}</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-2xl">
                    <CloudOff className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-[10px] font-bold text-gray-500 uppercase">CO₂ Reduced</p>
                    <p className="text-xs font-black text-secondary">{project.metrics.co2}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-2xl">
                    <TreeDeciduous className="h-6 w-6 text-accent-foreground mx-auto mb-2" />
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Trees Saved</p>
                    <p className="text-xs font-black text-accent-foreground">{project.metrics.trees}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-auto relative pl-6 border-l-4 border-secondary py-2 bg-gray-50/50 rounded-r-xl p-6">
                  <div className="flex mb-4 items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                      <AvatarImage src={project.clientAvatar} alt={project.client} />
                      <AvatarFallback>{project.client[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex mb-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="h-3 w-3 text-accent fill-accent" />
                        ))}
                      </div>
                      <p className="text-sm font-bold text-primary">{project.client}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700 text-sm">"{project.quote}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}