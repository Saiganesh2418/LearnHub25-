import React from 'react';
import { Mail, Users, Shield, Star } from 'lucide-react';

const Team = () => {
  const founders = [
    {
      name: 'Mshree',
      role: 'Founder',
      email: 'mshree26092007@gmail.com',
      description: 'Passionate about democratizing education and making quality learning accessible to everyone.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Saiganesh',
      role: 'Founder',
      email: 'Saiganeshyalamanchidurgarao@gmail.com',
      description: 'Technology enthusiast focused on building innovative solutions for online learning.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const admins = [
    { name: 'Ashutosh', role: 'Community Admin' },
    { name: 'Akshaya', role: 'Content Admin' },
    { name: 'Sai Ram Tummuri', role: 'Technical Admin' },
    { name: 'Aalok Sharrma', role: 'Operations Admin' },
    { name: 'Pranjal', role: 'Support Admin' },
    { name: 'Om Gharate', role: 'Community Admin' }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals working tirelessly to provide you with the best learning experience 
            and support throughout your educational journey.
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Founders</h3>
            <p className="text-gray-600">The visionaries behind LearnHub's mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${founder.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {founder.name}
                  </h4>
                  
                  <p className={`text-transparent bg-gradient-to-r ${founder.color} bg-clip-text font-semibold mb-4`}>
                    {founder.role}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {founder.description}
                  </p>
                  
                  <a
                    href={`mailto:${founder.email}`}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {founder.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Administrative Team</h3>
            <p className="text-gray-600">Dedicated administrators ensuring smooth operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admins.map((admin, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {admin.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {admin.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {admin.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Dedicated Team</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>Excellence Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;