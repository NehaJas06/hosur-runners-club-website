import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowRight, Users, Heart, Trophy, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import logo from "../../imports/hosur_runners_circular_badge.png";
import runner01 from "../../imports/runner-gallery/runner-01.jpg";
import runner02 from "../../imports/runner-gallery/runner-02.jpg";
import runner03 from "../../imports/runner-gallery/runner-03.jpg";
import runner04 from "../../imports/runner-gallery/runner-04.jpg";
import runner05 from "../../imports/runner-gallery/runner-05.jpg";
import runner06 from "../../imports/runner-gallery/runner-06.jpg";
import runner07 from "../../imports/runner-gallery/runner-07.jpg";
import runner08 from "../../imports/runner-gallery/runner-08.jpg";
import runner09 from "../../imports/runner-gallery/runner-09.jpg";

export function Home() {
  const heroImage = "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uZXJzJTIwZ3JvdXAlMjBqb2dnaW5nJTIwc3VucmlzZXxlbnwxfHx8fDE3ODE2NzgzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const trackImage = "https://images.unsplash.com/photo-1549896869-ca27eeffe4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHJ1bm5pbmclMjB0cmFjayUyMG91dGRvb3J8ZW58MXx8fHwxNzgxNjc4MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const marathonImage = "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJhdGhvbiUyMGNvbW11bml0eSUyMGZpdG5lc3N8ZW58MXx8fHwxNzgxNjc4MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const trailImage = "https://images.unsplash.com/photo-1671906531003-8634ef6d597c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjB0cmFpbCUyMHBhdGh8ZW58MXx8fHwxNzgxNjc4MzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  // Photos from the Hosur Runners Club PDF are used in the hero slideshow.
  const runnerSlides = [runner01, runner02, runner03, runner04, runner05, runner06, runner07, runner08, runner09];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % runnerSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((current) => (current - 1 + runnerSlides.length) % runnerSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % runnerSlides.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section / Hosur Runners Club Slideshow */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {runnerSlides.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Full-screen background keeps the hero filled without cropping the main photo. */}
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Complete original photo stays visible in the center. */}
              <img
                src={image}
                alt={`Hosur Runners Club - slide ${index + 1}`}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066B3]/90 via-[#0066B3]/70 to-black/20" />
        </div>

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-all"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-all"
        >
          <ChevronRight size={28} />
        </button>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl">
            <img src={logo} alt="Hosur Runners Club" className="h-32 w-32 mb-6 drop-shadow-2xl" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              We Run <span className="text-[#FF8C00]">We Rise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Join Hosur's most vibrant running community. A supportive, ego-free environment where every runner matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.strava.com/clubs/1232752"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF8C00] text-white font-semibold rounded-full hover:bg-[#e67d00] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Join the Club <ArrowRight size={20} />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border-2 border-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2">
          {runnerSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-[#FF8C00] to-[#FFA500]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-sm md:text-base opacity-90">Active Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-sm md:text-base opacity-90">Strava Athletes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">∞</div>
              <div className="text-sm md:text-base opacity-90">Kilometers Run</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">Inclusive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Committee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0066B3] rounded-full mb-4">
              <Users size={20} />
              <span className="font-semibold">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Core Committee</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team managing club operations and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Mr. Ashvath Narayana", "President", "Chairman, Advaith International Academy", "#0066B3"],
              ["Kanagaraj P", "General Secretary", "", "#0066B3"],
              ["Suresh Kumar H", "Vice President 1", "", "#0066B3"],
              ["Kalidas R", "Vice President 2", "", "#0066B3"],
              ["Balasundaram", "Vice President 3", "", "#0066B3"],
              ["Boopathi P", "Secretary 1", "", "#00A651"],
              ["Nagabhushan Reddy", "Secretary 2", "", "#00A651"],
              ["Rajesh", "Secretary 3", "", "#00A651"],
              ["Thirupathi M", "Treasurer", "", "#00A651"],
            ].map(([name, role, detail, color]) => (
              <div
                key={name}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4"
                style={{ borderTopColor: color }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: color }}
                >
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">{name}</h3>
                <p className="font-semibold mb-2" style={{ color }}>{role}</p>
                {detail && <p className="text-gray-600">{detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What makes Hosur Runners Club special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-[#0066B3]">
              <div className="bg-gradient-to-br from-[#0066B3] to-[#005094] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#0066B3]">Inclusivity</h3>
              <p className="text-gray-600">Every runner matters, regardless of pace or experience.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-[#FF8C00]">
              <div className="bg-gradient-to-br from-[#FF8C00] to-[#e67d00] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#FF8C00]">Community Spirit</h3>
              <p className="text-gray-600">Building friendships and support beyond the track.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-[#00A651]">
              <div className="bg-gradient-to-br from-[#00A651] to-[#008f46] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Trophy className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#00A651]">Passion for Running</h3>
              <p className="text-gray-600">Celebrating the joy of movement, not competition.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-[#0066B3]">
              <div className="bg-gradient-to-br from-[#0066B3] to-[#005094] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#0066B3]">Health & Wellness</h3>
              <p className="text-gray-600">Promoting fitness and mental well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src={trackImage} alt="Running track" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-6">
                More Than Just Running
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Hosur Runners Club is more than just a running group - it's a community built on passion, inclusivity, and well-being. We believe running is for everyone, regardless of speed, distance, or skill level.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're taking your first steps or chasing a marathon goal, we're here to make the journey enjoyable and meaningful. Together, we run for health, happiness, and harmony.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066B3] text-white font-semibold rounded-full hover:bg-[#005094] transition-all shadow-lg"
              >
                Discover Our Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Plans */}
      <section className="py-20 bg-gradient-to-br from-[#0066B3] to-[#005094] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Initiatives</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're expanding our reach to promote health and wellness across Hosur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-[#FF8C00] text-5xl mb-4">🏥</div>
              <h3 className="font-bold text-2xl mb-3">Hospital Visits</h3>
              <p className="text-gray-200 mb-3">Promote health awareness among doctors with our message: "Healthy doctors = Healthy society."</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-[#FF8C00] text-5xl mb-4">🏢</div>
              <h3 className="font-bold text-2xl mb-3">Corporate Engagement</h3>
              <p className="text-gray-200 mb-3">Partner with companies to encourage employees to join our running community for improved health and productivity.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-[#FF8C00] text-5xl mb-4">🏛️</div>
              <h3 className="font-bold text-2xl mb-3">Government Outreach</h3>
              <p className="text-gray-200 mb-3">Invite officials to join the Hosur Runners Club and promote community health benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Our Community in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us on our journey to fitness and friendship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <img src={marathonImage} alt="Marathon community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-xl">Group Runs & Events</p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <img src={trailImage} alt="Running trail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-xl">Trail Adventures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF8C00] to-[#FFA500]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join 250+ runners in our inclusive community. Every runner matters, regardless of pace or experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.strava.com/clubs/1232752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF8C00] font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join on Strava <ArrowRight size={20} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066B3] text-white font-semibold rounded-full hover:bg-[#005094] transition-all shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
