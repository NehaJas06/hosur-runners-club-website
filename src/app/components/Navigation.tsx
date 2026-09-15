import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../imports/hosur_runners_circular_badge.png";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Hosur Runners Club" className="h-16 w-16" />
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-[#0066B3]">HOSUR RUNNERS</div>
              <div className="text-sm text-[#00A651] font-semibold">We Run We Rise</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-2 font-semibold transition-colors ${
                  isActive(link.path)
                    ? "text-[#FF8C00]"
                    : "text-gray-700 hover:text-[#0066B3]"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF8C00] rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="https://www.strava.com/clubs/1232752"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#FF8C00] text-white font-semibold rounded-full hover:bg-[#e67d00] transition-colors shadow-md"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#0066B3]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-semibold rounded-lg mb-1 transition-colors ${
                  isActive(link.path)
                    ? "bg-[#FF8C00] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.strava.com/clubs/1232752"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-4 px-6 py-3 bg-[#0066B3] text-white font-semibold rounded-full text-center hover:bg-[#005094] transition-colors"
            >
              Join Us on Strava
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
