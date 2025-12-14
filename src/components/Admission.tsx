import { GraduationCap, FileCheck, Calendar, Award } from 'lucide-react';

interface AdmissionProps {
  onApplyClick: () => void;
}

export default function Admission({ onApplyClick }: AdmissionProps) {
  const eligibilityCriteria = [
    {
      title: 'SSC & HSC / Equivalent',
      requirements: [
        'Minimum GPA 2.50 in both SSC & HSC separately (including additional subjects)',
        'Or minimum GPA 2.00 in one exam and 3.00 in another',
        'For O & A Level: Minimum 5 subjects with B grade in both O & A Level',
      ],
    },
    {
      title: 'Diploma Holders',
      requirements: [
        'Minimum CGPA 2.50 in 4-year Diploma',
        'Eligible for credit transfer up to 36 credits',
        'Relevant diploma in Computer, Graphics, or related fields preferred',
      ],
    },
    {
      title: 'Foreign Students',
      requirements: [
        'Equivalent to HSC or 12 years of schooling',
        'Valid passport and student visa',
        'English proficiency certificate (IELTS/TOEFL) recommended',
      ],
    },
  ];

  const admissionProcess = [
    {
      step: '1',
      title: 'Online Application',
      description: 'Fill out the application form and submit required documents',
    },
    {
      step: '2',
      title: 'Admission Test',
      description: 'Appear for written test and creative aptitude assessment',
    },
    {
      step: '3',
      title: 'Interview',
      description: 'Portfolio review and interview with department faculty',
    },
    {
      step: '4',
      title: 'Enrollment',
      description: 'Complete payment and enrollment formalities',
    },
  ];

  return (
    <section id="admission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admission Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Bangladesh's leading Multimedia & Creative Technology program. Applications
            are open for Spring and Fall semesters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Spring 2025</h3>
            <p className="text-blue-100 mb-4">Applications Open</p>
            <p className="text-sm">Deadline: January 31, 2025</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fall 2025</h3>
            <p className="text-blue-100 mb-4">Applications Open Soon</p>
            <p className="text-sm">Deadline: August 31, 2025</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Scholarships</h3>
            <p className="text-blue-100 mb-4">Merit & Need-Based</p>
            <p className="text-sm">Up to 100% Tuition Waiver</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Eligibility Criteria
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{criteria.title}</h4>
                <ul className="space-y-2">
                  {criteria.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Admission Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {admissionProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Take the first step towards your creative career. Apply now and join a community
            of innovators and creators.
          </p>
          <button
            onClick={onApplyClick}
            className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Apply Online Now</span>
            <GraduationCap className="w-5 h-5" />
          </button>
          <p className="mt-6 text-sm text-gray-300">
            Need help? Contact our admission office at{' '}
            <a href="mailto:admission@diu.edu.bd" className="underline hover:text-white">
              admission@diu.edu.bd
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
