import { motion } from "framer-motion";
import { Play, Image as ImageIcon, ExternalLink, ZoomIn, Film, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const galleryItems = [
  {
    type: "video",
    title: "Full Estate Solar Installation",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-street-light-lagos-b6508863-1779800034713.webp",
    category: "Public Sector",
    desc: "A walkthrough of our latest street lighting and community power project in a Lagos residential estate.",
    duration: "2:45"
  },
  {
    type: "image",
    title: "Lekki Residential Hub",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/nigerian-family-solar-house-e3b39c98-1779799226275.webp",
    category: "Residential",
    desc: "Detailed close-up of a complete 10KVA hybrid solar setup for a luxury 5-bedroom duplex."
  },
  {
    type: "video",
    title: "Client Testimonial: The Adeyemi's",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/happy-nigerian-family-solar-powered-home-c42d38bf-1779800034955.webp",
    category: "Success Story",
    desc: "Hear how RowVee Solar transformed this family's energy reliability during the rainy season.",
    duration: "1:30"
  },
  {
    type: "image",
    title: "Ikeja Tech Hub Power Wall",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-inverter-setup-90627651-1779800033881.webp",
    category: "Commercial",
    desc: "Neat and professional wall-mounted inverter and battery management for a high-traffic office."
  },
  {
    type: "image",
    title: "Industrial Storage Unit",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-battery-system-3ee67bef-1779800034761.webp",
    category: "Industrial",
    desc: "Scalable lithium battery bank installation for a manufacturing production facility."
  },
  {
    type: "video",
    title: "Commercial Mini-Grid Setup",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/project-solar-farm-d1f2527c-1779797459914.webp",
    category: "Commercial",
    desc: "Dynamic footage showing the installation process of a 50KW mini-grid for a retail complex.",
    duration: "3:15"
  }
];

export default function Gallery() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-accent text-accent-foreground mb-6 h-8 px-4 text-sm font-bold uppercase border-none">Completed Jobs Media</Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Past Jobs Gallery</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explore actual videos and pictures of our high-quality solar installations across Nigeria. Transparency in every job.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[40px] bg-muted shadow-xl aspect-[4/3] border-4 border-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Type Indicator (Always visible) */}
                <div className="absolute top-6 right-6 z-10">
                  {item.type === 'video' ? (
                    <div className="bg-red-600 text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-black shadow-lg">
                      <Film className="h-3 w-3 fill-white" /> {item.duration}
                    </div>
                  ) : (
                    <div className="bg-white text-primary px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-black shadow-lg">
                      <ImageIcon className="h-3 w-3" /> Photo
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-sm">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-white text-[10px] font-black uppercase tracking-widest opacity-80">
                      <CheckCircle2 className="h-3 w-3 text-secondary" /> Verified Job
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-black mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-8 line-clamp-2 leading-relaxed">{item.desc}</p>
                  
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-black rounded-2xl h-14 flex-grow text-lg shadow-xl">
                      {item.type === 'video' ? <Play className="h-5 w-5 mr-3 fill-primary" /> : <ZoomIn className="h-5 w-5 mr-3" />} 
                      {item.type === 'video' ? 'Watch Clip' : 'Expand Photo'}
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-black rounded-2xl h-14 w-14 p-0 shadow-xl">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Video Play Icon Indicator for Non-hover mobile */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center group-hover:hidden md:flex">
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/30 shadow-2xl">
                      <Play className="h-10 w-10 text-white fill-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-20 text-center">
            <Button size="lg" className="bg-secondary text-white font-black px-16 h-20 text-xl rounded-[32px] shadow-2xl shadow-secondary/20 hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              Load More Past Jobs <Film className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Collage CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[60px] overflow-hidden min-h-[500px] flex items-center p-8 md:p-20 shadow-2xl border-8 border-white/5">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-installation-gallery-collage-69801048-1779800764887.webp" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" 
              alt="Installation Collage" 
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-[4px]"></div>
            <div className="relative z-10 max-w-3xl text-white">
              <Badge className="bg-secondary text-white mb-6 border-none h-8 px-4 font-bold uppercase">Quality Assurance</Badge>
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Clean energy you can see and trust.</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Join the hundreds of Nigerians who have switched to RowVee Solar. Our job gallery is updated weekly with new successful installations.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground font-black px-12 h-20 text-xl rounded-[32px] shadow-2xl shadow-accent/20 hover:scale-105 transition-transform" asChild>
                <Link to="/contact">Book Your Own Installation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}