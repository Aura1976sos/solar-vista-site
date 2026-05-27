import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Projects",
    href: "/projects",
    submenu: [
      { name: "Portfolio", href: "/projects" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  { name: "Shops", href: "/shops" },
  { name: "Blog", href: "/blog" },
  {
    name: "Contact",
    href: "/contact",
    submenu: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/397ba495-3e1d-4df9-88ae-3036bf347267/1779798452315_RowVee_Logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const isShops = location.pathname === "/shops";

  // Force white background on shops page or when scrolled
  const navBg = (isShops || scrolled) ? "bg-white shadow-md py-2" : "bg-transparent py-4";
  const textColor = (isShops || scrolled) ? "text-foreground" : "text-white";
  const logoInvert = ""; // User requested main logo, no white version

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="RowVee Solar Logo"
              className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${logoInvert}`}
            />
            <span
              className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${
                isShops || scrolled ? "text-primary" : "text-white"
              }`}
            >
              RowVee <span className={isShops || scrolled ? "text-secondary" : "text-accent"}>Solar</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`flex items-center text-sm font-bold transition-colors hover:text-black outline-none ${
                      isShops || scrolled
                        ? (location.pathname.startsWith(link.href) ? "text-primary" : "text-foreground/80")
                        : "text-white/90 hover:text-white"
                    }`}>
                      {link.name} <ChevronDown className="ml-1 h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-none shadow-xl rounded-xl p-2 min-w-[180px] mt-2">
                      {link.submenu.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild className="rounded-lg">
                          <Link to={sub.href} className="w-full text-sm font-bold py-2 px-3 hover:bg-gray-50 hover:text-black transition-colors">
                            {sub.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-bold transition-colors hover:text-black ${
                      isShops || scrolled
                        ? (location.pathname === link.href ? "text-primary" : "text-foreground/80")
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white font-black shadow-lg" asChild>
              <Link to="/schedule">
                <Phone className="mr-2 h-4 w-4" /> Schedule Now
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isShops || scrolled ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b absolute top-full left-0 w-full py-6 px-4 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-2 border-b border-gray-100 pb-2 last:border-0 last:pb-0">
              <Link
                to={link.href}
                className={`block text-lg font-black ${
                  location.pathname === link.href ? "text-primary" : "text-foreground"
                } hover:text-black transition-colors`}
                onClick={() => !link.submenu && setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="pl-4 space-y-2 border-l-4 border-secondary/20 ml-2 mt-2">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className={`block text-base font-bold py-1 ${
                        location.pathname === sub.href ? "text-secondary" : "text-muted-foreground"
                      } hover:text-black transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button className="w-full bg-secondary text-white font-black h-14 text-lg rounded-2xl shadow-xl shadow-secondary/10" asChild>
            <Link to="/schedule" onClick={() => setIsOpen(false)}>Schedule Free Session</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}