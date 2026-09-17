import { Facebook, Instagram } from "lucide-react";
import logo from "../../imports/hosur_runners_circular_badge.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0066B3] to-[#005094] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Hosur Runners Club" className="h-20 w-20 mb-4" />
            <p className="text-sm text-gray-200 max-w-xs">
              Building a vibrant, inclusive running community in Hosur that inspires a lifelong passion for fitness, friendship, and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF8C00]">Connect With Us</h3>
            <div className="space-y-2">
              <a
                href="https://www.strava.com/clubs/1232752"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-200 hover:text-white transition-colors"
              >
                Strava (250+ Members)
              </a>
              <a
                href="https://www.facebook.com/share/g/19nHcx7Mki/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-200 hover:text-white transition-colors"
              >
                Facebook Group
              </a>
              <a
                href="https://www.instagram.com/hosurrunnersclub?igsh=MW9od3ZvdHVmbTJ4Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-200 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FF8C00]">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/g/19nHcx7Mki/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/hosurrunnersclub?igsh=MW9od3ZvdHVmbTJ4Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-200">Total Members:</p>
              <p className="font-bold text-[#00A651]">150+</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; 2026 Hosur Runners Club. We Run We Rise.</p>
        </div>
      </div>
    </footer>
  );
}
