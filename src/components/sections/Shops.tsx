import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap, Shield, CheckCircle2, Cable, Wrench, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const shopItems = [
  {
    category: "Solar Panels",
    items: [
      {
        name: "550W Jinko Monocrystalline Solar Panel",
        price: "₦145,000",
        originalPrice: "₦165,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-panel-product-90cafdc8-1779800764744.webp",
        rating: 4.9,
        badge: "Top Seller",
        desc: "High-efficiency Tier 1 panels with 25-year warranty. Perfect for heavy-duty residential use."
      },
      {
        name: "400W Canadian Solar Poly Panel",
        price: "₦110,000",
        originalPrice: "₦125,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-products-grid-1c4c7349-1779800764533.webp",
        rating: 4.8,
        desc: "Reliable performance for residential and street lighting applications."
      }
    ]
  },
  {
    category: "Hybrid Inverters",
    items: [
      {
        name: "5KVA Felicity Hybrid Inverter",
        price: "₦850,000",
        originalPrice: "₦920,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-inverter-product-1b66663a-1779800766226.webp",
        rating: 5.0,
        badge: "Smart Home Ready",
        desc: "Advanced pure sine wave technology with built-in charger and Wi-Fi monitoring."
      },
      {
        name: "3.5KVA Luminous Inverter System",
        price: "₦420,000",
        originalPrice: "₦480,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-inverter-setup-90627651-1779800033881.webp",
        rating: 4.7,
        desc: "Durable household backup for lighting and standard electronics."
      }
    ]
  },
  {
    category: "Energy Storage (Batteries)",
    items: [
      {
        name: "10KWH Felicity Lithium Battery",
        price: "₦1,850,000",
        originalPrice: "₦2,100,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-battery-product-1deda527-1779800764039.webp",
        rating: 4.9,
        badge: "10yr Life",
        desc: "Lithium Iron Phosphate (LiFePO4) with high depth of discharge and 4000+ cycles."
      },
      {
        name: "200AH tubular Deep Cycle Battery",
        price: "₦285,000",
        originalPrice: "₦320,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-battery-system-3ee67bef-1779800034761.webp",
        rating: 4.6,
        desc: "Robust tubular design for reliable long-term energy storage."
      }
    ]
  },
  {
    category: "Solar Accessories",
    items: [
      {
        name: "60A MPPT Charge Controller",
        price: "₦85,000",
        originalPrice: "₦95,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-products-grid-1c4c7349-1779800764533.webp",
        rating: 4.8,
        desc: "High-efficiency tracking for maximum energy harvest from your panels."
      },
      {
        name: "Solar Cable 10mm (Per Roll)",
        price: "₦120,000",
        originalPrice: "₦135,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-panel-product-90cafdc8-1779800764744.webp",
        rating: 4.7,
        desc: "UV-resistant, high-conduction DC cables for outdoor solar wiring."
      },
      {
        name: "Aluminum Mounting Rails (Full Set)",
        price: "₦45,000",
        originalPrice: "₦55,000",
        image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/24b49359-ceac-418b-802f-3994368da351/solar-installation-gallery-collage-69801048-1779800764887.webp",
        rating: 4.9,
        desc: "Anti-corrosion mounting structure for all roof types."
      }
    ]
  }
];

export default function Shops() {
  return (
    <div className="bg-background">
      {/* Hero Header */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-accent text-accent-foreground mb-6 h-8 px-4 text-sm font-bold uppercase tracking-widest border-none">
              Trusted Products Home and Abroad
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6">RowVee Solar Shop</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Premium solar accessories at competitive Nigerian pricing. Build your energy independence with industry-leading brands from Europe, Asia, and Nigeria.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-border">
              <div className="bg-primary/10 p-3 rounded-xl text-primary"><Shield className="h-6 w-6" /></div>
              <div><h4 className="font-bold text-sm">Genuine Parts</h4><p className="text-xs text-muted-foreground">Original Warranty</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-border">
              <div className="bg-secondary/10 p-3 rounded-xl text-secondary"><Zap className="h-6 w-6" /></div>
              <div><h4 className="font-bold text-sm">Best Prices</h4><p className="text-xs text-muted-foreground">Market-Leading Rates</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-border">
              <div className="bg-accent/10 p-3 rounded-xl text-accent-foreground"><CheckCircle2 className="h-6 w-6" /></div>
              <div><h4 className="font-bold text-sm">Expert Pick</h4><p className="text-xs text-muted-foreground">Engineer Approved</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-border">
              <div className="bg-primary/10 p-3 rounded-xl text-primary"><ShoppingBag className="h-6 w-6" /></div>
              <div><h4 className="font-bold text-sm">Delivery</h4><p className="text-xs text-muted-foreground">Nationwide Logistics</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
          {shopItems.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-4">
                <h2 className="text-3xl font-black text-primary flex items-center gap-3">
                  <span className="w-12 h-1 bg-secondary rounded-full"></span>
                  {category.category}
                </h2>
                <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5">View All Items →</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden bg-muted/20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {item.badge && (
                        <Badge className="absolute top-6 left-6 bg-secondary text-white font-black border-none px-3 py-1 shadow-lg">
                          {item.badge}
                        </Badge>
                      )}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black flex items-center shadow-lg">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" /> {item.rating}
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">
                        {item.desc}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground line-through font-medium opacity-60">{item.originalPrice}</p>
                          <p className="text-2xl font-black text-primary tracking-tight">{item.price}</p>
                        </div>
                        <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-2xl h-14 px-8 font-black shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
                          Order Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Sizing Callout */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[50px] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-accent mb-6 border-white/20 h-10 px-6 rounded-full font-bold">Custom Energy Audits</Badge>
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Unsure of what system size you need?</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Our technical engineers offer free energy audits to determine exactly how many panels, batteries, and which inverter capacity fits your home or office perfectly.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground font-black px-12 h-18 text-xl rounded-3xl hover:scale-105 transition-transform" asChild>
                  <Link to="/schedule">Schedule My Audit</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white font-black px-12 h-18 text-xl rounded-3xl hover:bg-white/10" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] -ml-40 -mb-40"></div>
          </div>
        </div>
      </section>
    </div>
  );
}