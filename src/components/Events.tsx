import { useState } from 'react';
import { Calendar, Newspaper, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  category: string;
  image_url?: string;
}

interface News {
  id: number;
  title: string;
  content: string;
  published_date: string;
  author: string;
  image_url?: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: 'Annual Tech Fest 2025',
    description: 'Join us for our biggest technology festival featuring workshops, competitions, and exhibitions.',
    event_date: '2025-03-15',
    category: 'Festival',
  },
  {
    id: 2,
    title: 'Game Development Workshop',
    description: 'Learn Unity and game design from industry professionals. Hands-on project-based learning.',
    event_date: '2025-02-20',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Animation Showcase',
    description: 'Students present their best 2D and 3D animation projects. Open to public viewing.',
    event_date: '2025-04-10',
    category: 'Exhibition',
  },
];

const newsData: News[] = [
  {
    id: 1,
    title: 'MCT Students Win National Design Competition',
    content: 'Our students secured first place in the Bangladesh Digital Innovation Challenge 2024.',
    published_date: '2024-12-01',
    author: 'Admin',
  },
  {
    id: 2,
    title: 'New VR Lab Opens at MCT Department',
    content: 'State-of-the-art virtual reality facility now available for student projects and research.',
    published_date: '2024-11-15',
    author: 'Admin',
  },
  {
    id: 3,
    title: 'Alumni Success Story: Game Developer at Ubisoft',
    content: 'Former MCT student shares journey from DIU to international gaming industry.',
    published_date: '2024-11-01',
    author: 'Admin',
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState<'events' | 'news'>('events');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events & News
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, workshops, competitions, and achievements
            at the MCT department.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'events'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Events
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'news'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Newspaper className="w-5 h-5 inline mr-2" />
              News
            </button>
          </div>
        </div>

        {activeTab === 'events' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center overflow-hidden">
                  {event.image_url ? (
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Calendar className="w-16 h-16 text-white" />
                  )}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(event.event_date)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'news' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center overflow-hidden">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Newspaper className="w-16 h-16 text-white" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{formatDate(item.published_date)}</span>
                    <span className="text-blue-600 font-medium">{item.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                  <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105">
            View All {activeTab === 'events' ? 'Events' : 'News'}
          </button>
        </div>
      </div>
    </section>
  );
}
