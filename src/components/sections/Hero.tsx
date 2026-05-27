import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-street-light-lagos-b6508863-1779800034713.webp",
    headline: "Brighten Your Streets Sustainably",
    note: "Eco-friendly solar street lighting for safe and well-lit Nigerian communities. Durable, efficient, and cost-effective.",
    badge: "Solar Street Lighting"
  },
  {
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-panels-rooftop-nigeria-0eb41f7c-1779800035608.webp",
    headline: "Harness the Nigerian Sun",
    note: "High-efficiency solar panel installations for ultimate energy independence. Custom designs for every rooftop.",
    badge: "Rooftop Solar Panels"
  },
  {
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-inverter-setup-90627651-1779800033881.webp",
    headline: "Uninterrupted Power Solutions",
    note: "Professional inverter setups to keep your home running 24/7. Say goodbye to noise and expensive fuel.",
    badge: "Smart Inverter Systems"
  },
  {
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-battery-system-3ee67bef-1779800034761.webp",
    headline: "Reliable Energy Storage",
    note: "Premium battery systems ensuring your power stays on even when the sun goes down. Long-lasting lithium solutions.",
    badge: "Advanced Battery Systems"
  },
  {
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/happy-nigerian-family-solar-powered-home-c42d38bf-1779800034955.webp",
    headline: "Joy in Every Powered Moment",
    note: "Join thousands of Nigerian families enjoying 24/7 clean, affordable energy with RowVee Solar installations.",
    badge: "Happy Families"
  }
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full min-h-screen"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="ml-0 h-full min-h-screen">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 h-full relative">
              <div className="relative h-screen w-full flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Increased pt-40 to provide enough margin from the logo area */}
                <div className="container mx-auto px-4 md:px-6 relative z-10 pt-40 md:pt-48">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-accent text-accent-foreground mb-6 shadow-lg uppercase tracking-wider">
                        <Zap className="h-3 w-3 mr-2" /> {slide.badge}
                      </span>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
                        {slide.headline.split(' ').map((word, i) => 
                          word.toLowerCase() === 'clean' || word.toLowerCase() === 'sustainably' || word.toLowerCase() === 'sun' || word.toLowerCase() === 'solutions' || word.toLowerCase() === 'storage' || word.toLowerCase() === 'moment' ? 
                          <span key={i} className="text-accent"> {word} </span> : ` ${word} `
                        )}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium">
                        {slide.note}
                      </p>
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-xl transition-all hover:scale-105" asChild>
                          <Link to="/schedule">
                            Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold text-lg rounded-xl backdrop-blur-sm transition-all" asChild>
                          <Link to="/services">Explore Services</Link>
                        </Button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 hidden md:grid"
                    >
                      {[
                        { icon: <Sun className="h-6 w-6 text-accent" />, label: "25+ Years Warranty" },
                        { icon: <Shield className="h-6 w-6 text-accent" />, label: "Certified Installers" },
                        { icon: <Zap className="h-6 w-6 text-accent" />, label: "0% Down Financing" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-white/90 bg-black/20 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                          <div className="bg-white/10 p-2 rounded-xl">{item.icon}</div>
                          <span className="font-semibold text-sm">{item.label}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}