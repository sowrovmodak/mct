import { Mail, Phone, User } from 'lucide-react';

interface Faculty {
  id: number;
  name: string;
  designation: string;
  email: string;
  phone?: string;
  bio?: string;
  image_url?: string;
  expertise: string[];
}

const facultyData: Faculty[] = [
  {
    id: 1,
    name: 'Dr. Sarah Rahman',
    designation: 'Professor & Head of Department',
    email: 'sarah.rahman@diu.edu.bd',
    phone: '+880 1712-345678',
    bio: 'Dr. Rahman specializes in multimedia systems and interactive design with over 15 years of experience.',
    expertise: ['Multimedia Systems', 'Interactive Design', 'UX Research', 'Digital Media'],
  },
  {
    id: 2,
    name: 'Md. Karim Ahmed',
    designation: 'Associate Professor',
    email: 'karim.ahmed@diu.edu.bd',
    bio: '3D animation and game development expert with industry experience at major studios.',
    expertise: ['3D Animation', 'Game Development', 'Unity', 'Blender'],
  },
  {
    id: 3,
    name: 'Fatima Khan',
    designation: 'Assistant Professor',
    email: 'fatima.khan@diu.edu.bd',
    bio: 'Specializing in video production, cinematography, and digital storytelling.',
    expertise: ['Video Production', 'Cinematography', 'Film Editing', 'Adobe Suite'],
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Faculty
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced educators and industry professionals who are passionate
            about shaping the next generation of creative technologists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center overflow-hidden">
                {member.image_url ? (
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.designation}</p>

                {member.bio && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                )}

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        +{member.expertise.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate educators and industry professionals to join
            our faculty. If you're interested in shaping the future of creative technology
            education, we'd love to hear from you.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:scale-105">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
