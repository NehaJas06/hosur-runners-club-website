import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Award, Users, Medal, User } from "lucide-react";

export function Team() {
  const coreCommittee = [
    {
      name: "Mr. Ashvath Narayana",
      position: "President",
      role: "Chairman, Advaith International Academy",
      category: "leadership"
    },
    {
      name: "Kanagaraj P",
      position: "General Secretary",
      category: "leadership"
    },
    {
      name: "Suresh Kumar H",
      position: "Vice President 1",
      category: "leadership"
    },
    {
      name: "Kalidas R",
      position: "Vice President 2",
      category: "leadership"
    },
    {
      name: "Balasundaram",
      position: "Vice President 3",
      category: "leadership"
    },
    {
      name: "Boopathi P",
      position: "Secretary 1",
      category: "administration"
    },
    {
      name: "Nagabhushan Reddy",
      position: "Secretary 2",
      category: "administration"
    },
    {
      name: "Rajesh",
      position: "Secretary 3",
      category: "administration"
    },
    {
      name: "Thirupathi M",
      position: "Treasurer",
      category: "administration"
    }
  ];

  const founders = [
    {
      name: "Thandeswaran P",
      position: "Founder",
      achievement: "International Book of Records Holder",
      category: "founder"
    },
    {
      name: "Mr. Ashvath Narayana",
      position: "President",
      achievement: "Chairman, Advaith International Academy",
      category: "founder"
    }
  ];

  const coreTeamMembers = [
    { name: "Thandeswaran P", position: "Founder" },
    { name: "Mr. Ashvath Narayana", position: "President" },
    { name: "Kanagaraj P", position: "General Secretary" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0066B3] to-[#005094] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-[#FF8C00]">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Dedicated individuals working together to build Hosur's premier running community.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-white via-white to-[#FFF7ED]">
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#0066B3]/5" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#FF8C00]/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#FF8C00]/10 px-5 py-2 rounded-full mb-3">
              <Award className="text-[#FF8C00]" size={20} />
              <span className="text-[#FF8C00] font-semibold">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Our <span className="text-[#FF8C00]">Founder</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The vision that started our journey
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="w-full max-w-md bg-white rounded-3xl border border-[#FF8C00]/30 shadow-xl p-7 md:p-8 text-center"
              >
                <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB347] to-[#FF8C00] flex items-center justify-center shadow-md">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">{founder.name}</h3>
                <p className="text-[#FF8C00] font-bold text-lg mb-4">{founder.position}</p>
                {founder.achievement && (
                  <div className="border-t border-[#FF8C00]/25 pt-4">
                    <p className="text-sm text-gray-700 bg-[#FF8C00]/10 px-4 py-2 rounded-full">
                      {founder.achievement}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0066B3]/10 px-6 py-2 rounded-full mb-4">
              <Users className="text-[#0066B3]" size={24} />
              <span className="text-[#0066B3] font-semibold">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Core Committee</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team managing club operations and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCommittee.map((member, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 ${
                  member.category === "leadership"
                    ? "border-t-4 border-[#0066B3]"
                    : "border-t-4 border-[#00A651]"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    member.category === "leadership"
                      ? "bg-gradient-to-br from-[#0066B3] to-[#005094]"
                      : "bg-gradient-to-br from-[#00A651] to-[#008f46]"
                  }`}
                >
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">{member.name}</h3>
                <p
                  className={`font-semibold mb-2 ${
                    member.category === "leadership" ? "text-[#0066B3]" : "text-[#00A651]"
                  }`}
                >
                  {member.position}
                </p>
                {member.role && <p className="text-sm text-gray-600">{member.role}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#00A651]/10 px-6 py-2 rounded-full mb-4">
              <Medal className="text-[#00A651]" size={24} />
              <span className="text-[#00A651] font-semibold">Active Contributors</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">Core Team Members</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key members who keep our community running strong
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {coreTeamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full max-w-xs bg-gradient-to-br from-[#00A651] to-[#008f46] p-6 rounded-2xl text-white text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="text-white" size={24} />
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs mt-1">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Growing Community</h2>
            <p className="text-xl text-gray-100">
              Join our vibrant and inclusive running family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-6xl font-bold mb-2">89+</div>
              <div className="text-xl mb-2">WhatsApp Members</div>
              <p className="text-gray-100 text-sm">Active community members staying connected</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-6xl font-bold mb-2">150+</div>
              <div className="text-xl mb-2">Members</div>
              <p className="text-gray-100 text-sm">Runners tracking their progress together</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-6xl font-bold mb-2">100%</div>
              <div className="text-xl mb-2">Inclusive</div>
              <p className="text-gray-100 text-sm">Every runner welcomed and valued</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-6">
            Want to Be Part of Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for passionate runners who want to contribute to our community. Join us today and help us grow!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.strava.com/clubs/1232752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF8C00] text-white font-semibold rounded-full hover:bg-[#e67d00] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join on Strava
            </a>
            <a
              href="https://www.instagram.com/hosurrunnersclub?igsh=MW9od3ZvdHVmbTJ4Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066B3] text-white font-semibold rounded-full hover:bg-[#005094] transition-all shadow-lg"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
