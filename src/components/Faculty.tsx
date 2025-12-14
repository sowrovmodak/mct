import { Mail, Phone, User } from 'lucide-react';

interface Faculty {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone?: string;
  cellPhone?: string;
  bio?: string;
  imageUrl?: string;
  specialization: string[];
  personalWebpage?: string;
}

const facultyData: Faculty[] = [
  {
    id: 'f1',
    name: 'Mr. Md. Salah Uddin',
    designation: 'Assistant Professor and Head',
    email: 'headmct@daffodilvarsity.edu.bd',
    phone: 'Ext.40100',
    cellPhone: '01847334769',
    imageUrl: 'https://i.ibb.co.com/zhLjJS05/salah-uddin.jpg',
    specialization: ['Structured and OOP Programming', 'Multimedia Authoring', 'Database', 'Game Theory', 'Script Programming', 'Web Engine'],
    personalWebpage: 'https://faculty.daffodilvarsity.edu.bd/profile/mct/salah-mct.html',
  },
  {
    id: 'f2',
    name: 'Prof. Dr. Md Kabirul Islam',
    designation: 'Professor & Dean',
    email: 'kislam@daffodilvarsity.edu.bd',
    phone: '9138234-5, Ext. 157',
    cellPhone: '01819382879',
    imageUrl: 'https://i.ibb.co.com/v435bSPF/29c07d00e8a21ecc5596d98e93279885.jpg',
    specialization: ['ICT for Development', 'E-learning and M-learning', 'Teacher Development', 'Research Culture Development'],
    personalWebpage: 'https://faculty.daffodilvarsity.edu.bd/profile/mct/kislam.html',
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
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
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

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.specialization.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.specialization.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        +{member.specialization.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email.split(',')[0].trim()}`}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email.split(',')[0].trim()}</span>
                  </a>
                  {member.cellPhone && (
                    <a
                      href={`tel:${member.cellPhone.split(',')[0].trim()}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{member.cellPhone.split(',')[0].trim()}</span>
                    </a>
                  )}
                  {member.personalWebpage && (
                    <a
                      href={member.personalWebpage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Full Profile →
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
