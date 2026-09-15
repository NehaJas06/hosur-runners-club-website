import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Award, Users, Medal } from "lucide-react";

export function Team() {
  const coreCommittee = [
    {
      name: "Dr. S. Vijay Baskaran",
      position: "President",
      role: "Executive Director, Kauvery Hospitals, Hosur",
      category: "leadership"
    },
    {
      name: "Kanagaraj P",
      position: "Vice President",
      category: "leadership"
    },
    {
      name: "Suresh Kumar H",
      position: "Secretary 1",
      category: "administration"
    },
    {
      name: "Boopathi P",
      position: "Secretary 2",
      category: "administration"
    },
    {
      name: "Thirupathi M",
      position: "Treasurer",
      category: "administration"
    },
    {
      name: "Mohana Krishnan A R",
      position: "Public Relation Management",
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
      name: "Mohana Krishnan A R",
      position: "Co-Founder",
      category: "founder"
    },
    {
      name: "Manoharan N",
      position: "Co-Founder",
      category: "founder"
    }
  ];

  const coreTeamMembers = [
    "Kanagaraj P",
    "Manoharan N",
    "Suresh Kumar H",
    "Mohana Krishnan A R",
    "Thandeswaran P",
    "Thirupathi M"
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

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FF8C00]/10 px-6 py-2 rounded-full mb-4">
              <Award className="text-[#FF8C00]" size={24} />
              <span className="text-[#FF8C00] font-semibold">Founding Members</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066B3] mb-4">The Visionaries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The pioneers who started the Hosur Runners Club movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FF8C00] to-[#e67d00] p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award size={40} />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-center">{founder.name}</h3>
                <p className="text-center text-lg mb-2 font-semibold">{founder.position}</p>
                {founder.achievement && (
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <p className="text-center text-sm bg-white/20 px-4 py-2 rounded-full">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreTeamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#00A651] to-[#008f46] p-6 rounded-2xl text-white text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <p className="font-semibold text-sm">{member}</p>
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
              <div className="text-6xl font-bold mb-2">73</div>
              <div className="text-xl mb-2">Strava Athletes</div>
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
