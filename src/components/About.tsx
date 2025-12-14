import { Target, Eye, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To nurture creative minds and equip students with cutting-edge technical skills, preparing them to excel in the rapidly evolving multimedia and creative technology industry.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be a leading center of excellence in multimedia education, recognized for innovation, industry partnerships, and producing world-class creative professionals.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description:
        'We foster a culture of experimentation and innovation, encouraging students to push boundaries and create groundbreaking work in animation, gaming, VFX, and digital media.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description:
        'Our programs are designed in collaboration with industry leaders, ensuring graduates possess the skills and portfolio needed for immediate career success.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About MCT Department
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Department of Multimedia & Creative Technology at Daffodil International
            University is a pioneering program that bridges the gap between artistic
            creativity and technological innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Why Choose MCT?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Hands-On Learning',
                description:
                  'Learn by doing with access to professional-grade equipment and software used in the industry.',
              },
              {
                title: 'Expert Faculty',
                description:
                  'Learn from industry veterans and academics with real-world experience in multimedia production.',
              },
              {
                title: 'Career Support',
                description:
                  'Benefit from internship opportunities, portfolio development, and job placement assistance.',
              },
              {
                title: 'State-of-the-Art Facilities',
                description:
                  'Five specialized labs equipped with the latest technology for animation, gaming, VR, and design.',
              },
              {
                title: 'Industry Connections',
                description:
                  'Regular workshops, guest lectures, and partnerships with leading studios and companies.',
              },
              {
                title: 'Creative Community',
                description:
                  'Join a vibrant community of artists, designers, developers, and innovators.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <h4 className="font-semibold text-lg mb-2 text-cyan-300">{item.title}</h4>
                <p className="text-gray-200 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
