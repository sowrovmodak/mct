import { Cpu, Users, Wrench } from 'lucide-react';

interface Lab {
  id: number;
  name: string;
  description: string;
  capacity?: number;
  equipment: string[];
  image_url?: string;
}

const labsData: Lab[] = [
  {
    id: 1,
    name: 'Animation & Graphics Lab',
    description: 'Professional-grade animation studio equipped with high-performance workstations and industry-standard software for 2D/3D animation, motion graphics, and visual effects.',
    capacity: 40,
    equipment: [
      'High-end Graphics Workstations',
      'Adobe Creative Cloud Suite',
      'Autodesk Maya & 3ds Max',
      'Blender 3D',
      'Cinema 4D',
      'Drawing Tablets (Wacom)',
      'Render Farm',
      'Large Format Display',
    ],
  },
  {
    id: 2,
    name: 'Audio & Video Production Studio',
    description: 'State-of-the-art multimedia production facility with professional cameras, lighting, and sound equipment for video production and audio engineering.',
    capacity: 30,
    equipment: [
      'Professional Camera Setup',
      'Studio Lighting Kit',
      'Green Screen',
      'Audio Recording Booth',
      'Mixing Console',
      'Professional Microphones',
      'Video Editing Stations',
      'Adobe Premiere & After Effects',
    ],
  },
  {
    id: 3,
    name: 'Game Development Lab',
    description: 'Dedicated gaming lab with powerful computers and VR equipment for game design, development, and testing across multiple platforms.',
    capacity: 35,
    equipment: [
      'Gaming PCs with RTX Graphics',
      'Unity & Unreal Engine',
      'VR Headsets (Oculus, HTC Vive)',
      'Game Controllers',
      'Development Kits',
      'Multiple Monitors',
      'Game Testing Area',
    ],
  },
];

export default function Labs() {
  return (
    <section id="labs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Labs & Facilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities equipped with industry-standard tools and technology
            to bring your creative vision to life.
          </p>
        </div>

        <div className="space-y-8">
          {labsData.map((lab, index) => (
            <div
              key={lab.id}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div
                  className={`p-8 md:p-12 flex flex-col justify-center ${
                    index % 2 === 0 ? 'order-1' : 'order-2'
                  }`}
                >
                  <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold mb-4">
                    <Cpu className="w-5 h-5" />
                    <span>Lab {index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{lab.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{lab.description}</p>

                  {lab.capacity && (
                    <div className="flex items-center space-x-2 text-gray-700 mb-6">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">
                        Capacity: {lab.capacity} students
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center space-x-2 text-gray-900 font-semibold mb-3">
                      <Wrench className="w-5 h-5 text-blue-600" />
                      <span>Equipment & Resources:</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {lab.equipment.slice(0, 6).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-gray-600"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                      {lab.equipment.length > 6 && (
                        <div className="text-blue-600 font-medium text-sm mt-2">
                          + {lab.equipment.length - 6} more items
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-gradient-to-br from-blue-100 to-cyan-100 p-12 flex items-center justify-center ${
                    index % 2 === 0 ? 'order-2' : 'order-1'
                  }`}
                >
                  <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                    {lab.image_url ? (
                      <img
                        src={lab.image_url}
                        alt={lab.name}
                        className="rounded-2xl shadow-lg object-cover w-full h-full"
                      />
                    ) : (
                      <div className="text-center">
                        <Cpu className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                        <p className="text-blue-900 font-medium">{lab.name}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Want to See Our Labs?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a campus visit or take a virtual tour to explore our world-class
            facilities and see where creativity meets technology.
          </p>
          <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105">
            Schedule Campus Visit
          </button>
        </div>
      </div>
    </section>
  );
}
