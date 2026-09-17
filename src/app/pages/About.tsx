import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

export function About() {
  const coreValues = [
    {
      title: "Inclusivity",
      description: "Every runner matters, regardless of pace or experience.",
      icon: Users,
      color: "#0066B3"
    },
    {
      title: "Community Spirit",
      description: "Building friendships and support beyond the track.",
      icon: Users,
      color: "#FF8C00"
    },
    {
      title: "Passion for Running",
      description: "Celebrating the joy of movement, not competition.",
      icon: Award,
      color: "#00A651"
    },
    {
      title: "Health & Wellness",
      description: "Promoting fitness and mental well-being.",
      icon: Target,
      color: "#0066B3"
    },
    {
      title: "Integrity & Respect",
      description: "A space free from ego, politics, and judgment.",
      icon: Award,
      color: "#FF8C00"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0066B3] to-[#005094] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-[#FF8C00]">Our Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              More than just a running group - we're a community built on passion, inclusivity, and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#0066B3] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hosur Runners Club is more than just a running group, it's a community built on passion, inclusivity, and well-being. We believe running is for everyone, regardless of speed, distance, or skill level.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to create a supportive, ego-free environment where runners can connect, grow, and inspire each other. Whether you're taking your first steps or chasing a marathon goal, we were here to make the journey enjoyable and meaningful.
              </p>
              <p className="text-lg text-gray-700 font-semibold text-[#00A651]">
                Together, we run for health, happiness, and harmony.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0066B3] to-[#005094] p-8 rounded-2xl text-white text-center">
                <div className="text-5xl font-bold mb-2">89+</div>
                <div className="text-sm opacity-90">WhatsApp Members</div>
              </div>
              <div className="bg-gradient-to-br from-[#FF8C00] to-[#e67d00] p-8 rounded-2xl text-white text-center">
                <div className="text-5xl font-bold mb-2">250+</div>
                <div className="text-sm opacity-90">Strava Athletes</div>
              </div>
              <div className="col-span-2 bg-gradient-to-br from-[#00A651] to-[#008f46] p-8 rounded-2xl text-white text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Inclusive & Ego-Free</div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-[#0066B3] to-[#005094] p-8 md:p-10 rounded-3xl text-white shadow-xl">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-100">
                To build a vibrant, inclusive running community in Hosur that inspires a lifelong passion for fitness, friendship, and well-being - where every runner feels valued, regardless of pace, distance, or experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FF8C00] to-[#e67d00] p-8 md:p-10 rounded-3xl text-white shadow-xl">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-100">
                Our mission is to foster a supportive and ego-free environment that celebrates the joy of running. We aim to encourage healthy lifestyles, nurture camaraderie, and create opportunities for runners of all levels to connect, grow, and thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                  style={{ borderTop: `4px solid ${value.color}` }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)` }}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Growing stronger together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-[#0066B3]/10 to-[#005094]/10 rounded-2xl">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-2xl text-[#0066B3] mb-2">Monthly Challenges</h3>
              <p className="text-gray-600">Conducted monthly challenges in late 2024, planning to continue in upcoming months</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#FF8C00]/10 to-[#e67d00]/10 rounded-2xl">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-bold text-2xl text-[#FF8C00] mb-2">Record Holder</h3>
              <p className="text-gray-600">Founder Thandeswaran P is an International Book of Records holder</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#00A651]/10 to-[#008f46]/10 rounded-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-bold text-2xl text-[#00A651] mb-2">Club Registration</h3>
              <p className="text-gray-600">Preparing to apply for official club registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Plans */}
      <section className="py-20 bg-gradient-to-br from-[#0066B3] to-[#005094] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Plans</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Expanding our reach to promote health and wellness across Hosur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="font-bold text-2xl mb-3">Hospital Visits</h3>
              <p className="text-gray-200 mb-4">
                <strong>Objective:</strong> Promote health awareness among doctors.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Key Message:</strong> "Healthy doctors = Healthy society."
              </p>
              <p className="text-gray-200">
                <strong>Activities:</strong> Short awareness sessions on fitness and running benefits.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="font-bold text-2xl mb-3">Corporate Engagement</h3>
              <p className="text-gray-200 mb-4">
                <strong>Objective:</strong> Encourage employees to join the runners' community.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Approach:</strong> Partner with HR/Wellness teams for sessions.
              </p>
              <p className="text-gray-200">
                <strong>Key Benefit:</strong> Improved employee health and productivity.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-6xl mb-4">🏛️</div>
              <h3 className="font-bold text-2xl mb-3">Government Officials</h3>
              <p className="text-gray-200 mb-4">
                <strong>Objective:</strong> Invite officials to join the Hosur Runners Club.
              </p>
              <p className="text-gray-200">
                <strong>Strategy:</strong> Highlight community health benefits and promote active lifestyles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
