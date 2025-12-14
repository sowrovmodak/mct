import { useState } from 'react';
import { BookOpen, Code, Palette, Gamepad2, Film, ChevronDown } from 'lucide-react';

export default function Programs() {
  const [openSemester, setOpenSemester] = useState<number | null>(null);

  const specializations = [
    {
      icon: Palette,
      title: '3D Animation & VFX',
      description: 'Master 3D modeling, character animation, visual effects, and motion graphics',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Learn game design, Unity/Unreal Engine, AR/VR, and interactive media',
    },
    {
      icon: Code,
      title: 'Web & Interactive Media',
      description: 'Build responsive websites, web apps, and interactive digital experiences',
    },
    {
      icon: Film,
      title: 'Digital Filmmaking',
      description: 'Cinematography, video editing, sound design, and post-production',
    },
  ];

  const semesters = [
    {
      semester: 1,
      courses: [
        'Introduction to Multimedia',
        'Fundamentals of IT',
        'Drawing & Illustration',
        'Digital Photography',
        'English Fundamentals',
        'Mathematics for Creative Technology',
      ],
    },
    {
      semester: 2,
      courses: [
        'Graphic Design Fundamentals',
        'Web Design & Development',
        ' 2D Animation',
        'Audio-Video Editing',
        'Programming Fundamentals',
        'Color Theory & Design',
      ],
    },
    {
      semester: 3,
      courses: [
        '3D Modeling & Animation I',
        'Game Design Fundamentals',
        'UI/UX Design',
        'Motion Graphics',
        'Database Management',
        'Digital Marketing',
      ],
    },
    {
      semester: 4,
      courses: [
        '3D Modeling & Animation II',
        'Game Development with Unity',
        'Visual Effects',
        'Interactive Media Design',
        'Web Application Development',
        'Project Management',
      ],
    },
    {
      semester: 5,
      courses: [
        'Advanced 3D Animation',
        'Mobile Game Development',
        'Augmented Reality',
        'Film Production',
        'Portfolio Development',
        'Internship I',
      ],
    },
    {
      semester: 6,
      courses: [
        'Character Animation',
        'Virtual Reality Development',
        'Compositing & Post-Production',
        'Advanced Web Technologies',
        'Industry Project',
        'Internship II',
      ],
    },
    {
      semester: 7,
      courses: [
        'Advanced Game Design',
        'Real-time Rendering',
        'Creative Entrepreneurship',
        'Thesis/Capstone Project I',
        'Elective I',
        'Elective II',
      ],
    },
    {
      semester: 8,
      courses: [
        'Professional Portfolio',
        'Industry Standards & Practices',
        'Thesis/Capstone Project II',
        'Elective III',
        'Career Development',
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            B.Sc. in Multimedia & Creative Technology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 4-year undergraduate program (132 credits) designed to transform
            creative minds into industry-ready professionals.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Specialization Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{spec.title}</h4>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Semester-wise Curriculum</h3>
          </div>

          <div className="space-y-4">
            {semesters.map((sem) => (
              <div
                key={sem.semester}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all"
              >
                <button
                  onClick={() =>
                    setOpenSemester(openSemester === sem.semester ? null : sem.semester)
                  }
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-900">
                    Semester {sem.semester}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      openSemester === sem.semester ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSemester === sem.semester && (
                  <div className="px-6 py-4 bg-white">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {sem.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-700"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-lg text-gray-900 mb-3">Program Highlights</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Duration:</strong> 4 years (8 semesters)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Total Credits:</strong> 132 credits</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Internships:</strong> Two industry internships included</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Capstone Project:</strong> Year-long industry-standard portfolio project</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
