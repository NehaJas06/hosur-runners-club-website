import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Facebook, Instagram, MapPin, Users, Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0066B3] to-[#005094] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-[#FF8C00]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Join our community or reach out to learn more about Hosur Runners Club.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-[#0066B3] mb-6">Connect With Us</h2>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you! Whether you're interested in joining our runs, have questions about the club, or want to collaborate, we're here to help.
              </p>

              {/* Social Links */}
              <div className="space-y-6">
                <a
                  href="https://www.strava.com/clubs/1232752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#FF8C00] to-[#e67d00] rounded-2xl text-white hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Join us on Strava</h3>
                    <p className="text-gray-100 text-sm mb-2">Connect with 250+ members</p>
                    <p className="text-sm opacity-90">strava.com/clubs/1232752</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/share/g/19nHcx7Mki/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#0066B3] to-[#005094] rounded-2xl text-white hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <Facebook size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Facebook Community</h3>
                    <p className="text-gray-100 text-sm mb-2">Join our Facebook group</p>
                    <p className="text-sm opacity-90">facebook.com/hosurrunnersclub</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/hosurrunnersclub?igsh=MW9od3ZvdHVmbTJ4Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#00A651] to-[#008f46] rounded-2xl text-white hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Follow on Instagram</h3>
                    <p className="text-gray-100 text-sm mb-2">Stay updated with our latest runs</p>
                    <p className="text-sm opacity-90">@hosurrunnersclub</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#0066B3]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#0066B3] p-3 rounded-full">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#0066B3] mb-2">Location</h3>
                    <p className="text-gray-700">Hosur, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#FF8C00]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#FF8C00] p-3 rounded-full">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#FF8C00] mb-2">Community Size</h3>
                    <p className="text-gray-700 mb-2">89+ Members on WhatsApp</p>
                    <p className="text-gray-700">150+ Athletes on Strava</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#00A651]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#00A651] p-3 rounded-full">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#00A651] mb-2">Get Involved</h3>
                    <p className="text-gray-700 mb-3">
                      Interested in partnerships, collaborations, or joining our team?
                    </p>
                    <p className="text-gray-700">
                      Reach out through our social media channels or join us on Strava to connect with our community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0066B3] to-[#005094] p-8 rounded-2xl text-white">
                <h3 className="font-bold text-2xl mb-3">Run With Us!</h3>
                <p className="text-gray-100 mb-4">
                  Every runner matters, regardless of pace or experience. Join us for our next group run and experience the inclusive, supportive community we've built.
                </p>
                <p className="text-[#FF8C00] font-semibold text-lg">We Run We Rise 🏃‍♂️</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contacts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Key Contacts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach out to our leadership team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0066B3]">
              <h3 className="font-bold text-xl text-[#0066B3] mb-2">President</h3>
              <p className="text-gray-800 font-semibold mb-1">Mr. Ashvath Narayana</p>
              <p className="text-gray-600 text-sm">Chairman, Advaith International Academy</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FF8C00]">
              <h3 className="font-bold text-xl text-[#FF8C00] mb-2">Founder</h3>
              <p className="text-gray-800 font-semibold mb-1">Thandeswaran P</p>
              <p className="text-gray-600 text-sm">International Book of Records Holder</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#00A651]">
              <h3 className="font-bold text-xl text-[#00A651] mb-2">General Secretary</h3>
              <p className="text-gray-800 font-semibold mb-1">Kanagaraj P</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] p-12 rounded-3xl text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Take the first step towards a healthier, more connected life. Join Hosur Runners Club today!
            </p>
            <a
              href="https://www.strava.com/clubs/1232752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF8C00] font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Us on Strava
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
