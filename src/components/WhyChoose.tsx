import React from 'react';
import { 
  Zap, Users, GraduationCap, Clock, 
  BookOpen, Target, Headphones, CheckCircle,
  Heart, Lightbulb, Globe
} from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Hands-on projects and real-world applications that make learning engaging and practical.',
      color: 'text-orange-500 bg-orange-100'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in their respective fields.',
      color: 'text-blue-500 bg-blue-100'
    },
    {
      icon: GraduationCap,
      title: 'Industry Recognition',
      description: 'Certificates recognized by top companies and valued in the job market.',
      color: 'text-purple-500 bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with lifetime access to all course materials.',
      color: 'text-green-500 bg-green-100'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Covering everything from basics to advanced concepts in a structured manner.',
      color: 'text-blue-500 bg-blue-100'
    },
    {
      icon: Target,
      title: 'Career-Focused',
      description: 'Skills and projects designed specifically to make you job-ready.',
      color: 'text-red-500 bg-red-100'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock support from our dedicated team and community.',
      color: 'text-gray-500 bg-gray-100'
    },
    {
      icon: CheckCircle,
      title: 'Certification',
      description: 'Receive verified certificates upon successful completion of courses.',
      color: 'text-green-500 bg-green-100'
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Mission Focused',
      description: 'Empowering learners with practical skills for real-world success.',
      color: 'text-purple-500 bg-purple-100'
    },
    {
      icon: Heart,
      title: 'Student First',
      description: 'Every decision we make prioritizes our learners\' success and growth.',
      color: 'text-red-500 bg-red-100'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'Constantly evolving our curriculum to match industry demands.',
      color: 'text-yellow-500 bg-yellow-100'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Building a worldwide network of skilled professionals.',
      color: 'text-blue-500 bg-blue-100'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LearnHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge curriculum, expert guidance, and industry-relevant projects 
            to help you achieve your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;