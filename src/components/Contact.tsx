import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Send, User, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const [isSubmitting, setIsSubmitting] = useState({
    feedback: false,
    registration: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    feedback: null,
    registration: null
  });

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(prev => ({ ...prev, feedback: true }));
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setSubmitStatus(prev => ({ ...prev, feedback: 'success' }));
        setFeedbackForm({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus(prev => ({ ...prev, feedback: 'error' }));
      }
    } catch (error) {
      setSubmitStatus(prev => ({ ...prev, feedback: 'error' }));
    } finally {
      setIsSubmitting(prev => ({ ...prev, feedback: false }));
      setTimeout(() => setSubmitStatus(prev => ({ ...prev, feedback: null })), 5000);
    }
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(prev => ({ ...prev, registration: true }));
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setSubmitStatus(prev => ({ ...prev, registration: 'success' }));
        setRegistrationForm({ name: '', email: '', phone: '', course: '' });
      } else {
        setSubmitStatus(prev => ({ ...prev, registration: 'error' }));
      }
    } catch (error) {
      setSubmitStatus(prev => ({ ...prev, registration: 'error' }));
    } finally {
      setIsSubmitting(prev => ({ ...prev, registration: false }));
      setTimeout(() => setSubmitStatus(prev => ({ ...prev, registration: null })), 5000);
    }
  };

  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/C4nx8YithWz7QNjiMsoB2F', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your learning journey? Contact us or join our community. 
            We're here to help you achieve your educational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Community Email</p>
                    <a href="mailto:Learnhubcommunity2025@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      Learnhubcommunity2025@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">WhatsApp Community</p>
                    <button
                      onClick={handleWhatsAppJoin}
                      className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200"
                    >
                      Join Our Community
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Response Time</p>
                    <p className="text-gray-900 font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white animate-fade-in-up shadow-lg">
              <h4 className="text-lg font-semibold mb-3">Join Our Community</h4>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                Connect with fellow learners, get instant support, and stay updated with the latest opportunities.
              </p>
              <button
                onClick={handleWhatsAppJoin}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                Join WhatsApp Group
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registration Form */}
            <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Registration Form</h3>
              </div>
              
              {/* 
                =======================================================================
                This is a working contact form. To receive email, 
                Replace YOUR_ACCESS_KEY_HERE with your actual Access Key.
                Create Access Key here 👉 https://web3forms.com/
                =======================================================================
              */}
              
              <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleRegistrationSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="8c8cc4fe-bb2d-4a1b-ac29-2c814fef79af" />
                <input type="hidden" name="subject" value="New Registration from LearnHub" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                
                <div className="space-y-1">
                  <label htmlFor="reg-name" className="block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="reg-name"
                    name="name"
                    required
                    value={registrationForm.name}
                    onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="reg-email" className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    name="email"
                    required
                    value={registrationForm.email}
                    onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="reg-phone" className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="reg-phone"
                    name="phone"
                    value={registrationForm.phone}
                    onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="reg-course" className="block text-sm font-semibold text-gray-700">
                    Interested Course
                  </label>
                  <select
                    id="reg-course"
                    name="course"
                    value={registrationForm.course}
                    onChange={(e) => setRegistrationForm({...registrationForm, course: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {submitStatus.registration === 'success' && (
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 text-sm font-medium">Registration submitted successfully!</span>
                  </div>
                )}

                {submitStatus.registration === 'error' && (
                  <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-800 text-sm font-medium">Failed to submit. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting.registration}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-200 flex items-center justify-center transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting.registration ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <User className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting.registration ? 'Submitting...' : 'Register Now'}
                </button>
              </form>
            </div>

            {/* Feedback Form */}
            <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Feedback Form</h3>
              </div>
              
              {/* 
                =======================================================================
                This is a working contact form. To receive email, 
                Replace YOUR_ACCESS_KEY_HERE with your actual Access Key.
                Create Access Key here 👉 https://web3forms.com/
                =======================================================================
              */}
              
              <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleFeedbackSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="890ee9df-6009-4904-b0b9-a980bfbc30cc" />
                <input type="hidden" name="subject" value="New Feedback from LearnHub" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                
                <div className="space-y-1">
                  <label htmlFor="feedback-name" className="block text-sm font-semibold text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="feedback-name"
                    name="name"
                    required
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="feedback-email" className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="feedback-email"
                    name="email"
                    required
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="feedback-message" className="block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="feedback-message"
                    name="message"
                    required
                    rows={4}
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                    placeholder="Share your feedback, suggestions, or questions with us..."
                  />
                </div>

                {submitStatus.feedback === 'success' && (
                  <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 text-sm font-medium">Feedback submitted successfully!</span>
                  </div>
                )}

                {submitStatus.feedback === 'error' && (
                  <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-800 text-sm font-medium">Failed to submit. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting.feedback}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting.feedback ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting.feedback ? 'Sending...' : 'Send Feedback'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;