import React from 'react';
import { 
  BookOpen, GraduationCap, Briefcase, 
  Video, Code, Users 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Free Education',
      description: 'Access to comprehensive educational resources and materials across various domains.',
      features: ['Interactive content', 'Self-paced learning', 'Expert-curated materials'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'Free Courses',
      description: 'Structured courses designed by industry experts to help you master new skills.',
      features: ['Industry-relevant curriculum', 'Hands-on projects', 'Certification upon completion'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Free Internships',
      description: 'Real-world internship opportunities with leading companies and organizations.',
      features: ['Professional experience', 'Mentorship programs', 'Career guidance'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Video,
      title: 'Free Webinars',
      description: 'Live interactive sessions with industry leaders and subject matter experts.',
      features: ['Live Q&A sessions', 'Networking opportunities', 'Recording access'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Code,
      title: 'Free Bootcamps',
      description: 'Intensive training programs designed to fast-track your learning journey.',
      features: ['Accelerated learning', 'Project-based approach', 'Job placement support'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: '24/7 community support with peer learning and expert guidance.',
      features: ['Peer-to-peer learning', 'Expert mentorship', 'Collaborative projects'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of free educational services designed to help you 
            learn, grow, and succeed in your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful learners who have already started their journey with LearnHub. 
              All our services are completely free and designed to help you succeed.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;