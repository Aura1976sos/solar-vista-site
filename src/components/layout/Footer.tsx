import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Send, Share2, Camera } from "lucide-react";

const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/397ba495-3e1d-4df9-88ae-3036bf347267/1779798452315_RowVee_Logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="RowVee Solar Logo" 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
              <span className="text-xl font-bold tracking-tight text-white">
                RowVee <span className="text-accent">Solar</span>
              </span>
            </Link>
            <p className="text-white/80 leading-relaxed">
              RowVee Solar Project is dedicated to accelerating the transition to renewable energy through innovative solar solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-accent transition-colors"><MessageCircle className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-accent transition-colors"><Send className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-accent transition-colors"><Share2 className="h-5 w-5" /></Link>
              <Link to="#" className="hover:text-accent transition-colors"><Camera className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-accent transition-colors text-white/80">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors text-white/80">Our Services</Link></li>
              <li><Link to="/shops" className="hover:text-accent transition-colors text-white/80">Solar Shop</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors text-white/80">Job Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors text-white/80">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/80">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <span>2 Oguyinka Street, Mafoluku, <br />Off International Airport Road, By 7&8 Bus Stop, Lagos</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Phone className="h-5 w-5 text-accent" />
                <span>08181655264</span>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <Mail className="h-5 w-5 text-accent" />
                <span>Row.veetech@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Trust Signals */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Our Partners</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-12 bg-white/10 rounded flex items-center justify-center p-2">
                <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest text-center">SOLAR ASSOCIATION</span>
              </div>
              <div className="h-12 bg-white/10 rounded flex items-center justify-center p-2">
                <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest text-center">ECO CERTIFIED</span>
              </div>
              <div className="h-12 bg-white/10 rounded flex items-center justify-center p-2">
                <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest text-center">LEED PARTNER</span>
              </div>
              <div className="h-12 bg-white/10 rounded flex items-center justify-center p-2">
                <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest text-center">ENERGY STAR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} RowVee Solar Project. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}