import React from 'react';
import { GraduationCap, Users, Trophy, Handshake } from 'lucide-react';

const Impact = () => {
  const impactData = [
    {
      icon: GraduationCap,
      number: '25+',
      label: 'Expert Courses',
      color: 'text-red-500 bg-red-100'
    },
    {
      icon: Users,
      number: '100K+',
      label: 'Active Learners',
      color: 'text-blue-500 bg-blue-100'
    },
    {
      icon: Trophy,
      number: '95%',
      label: 'Success Rate',
      color: 'text-yellow-500 bg-yellow-100'
    },
    {
      icon: Handshake,
      number: '50+',
      label: 'Industry Partners',
      color: 'text-green-500 bg-green-100'
    }
  ];

  const partners = [
    'Microsoft', 'Google', 'ISRO', 'Letsupgrade', 'Cisco', 'Amazon', 'IBM', 'Meta'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to be democratizing education and empowering learners worldwide 
            with practical skills for real-world success.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                <item.icon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {item.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-700 font-medium"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;