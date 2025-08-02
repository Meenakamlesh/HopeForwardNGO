import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: '',
        availability: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Join Our Volunteer Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to make a difference? Join thousands of volunteers who are helping us create positive change around the world.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg">
              Your volunteer application has been submitted successfully. We'll get back to you within 48 hours.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6">
              <h2 className="text-2xl font-bold text-white">Volunteer Application Form</h2>
              <p className="text-blue-100 mt-2">Help us understand your interests and availability</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Skills & Interests *
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  required
                  rows="4"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your skills, experience, and areas of interest (e.g., teaching, healthcare, technology, fundraising, etc.)"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your availability</option>
                  <option value="few-hours-week">A few hours per week</option>
                  <option value="few-hours-month">A few hours per month</option>
                  <option value="weekends">Weekends only</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="full-time">Full-time volunteer</option>
                  <option value="special-events">Special events only</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Is there anything else you'd like us to know about your interest in volunteering?"
                />
              </div>

              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Volunteer Opportunities */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-600">Remote Teaching</h3>
              <p className="text-gray-600 mb-4">Help students around the world through online tutoring and educational support.</p>
              <div className="text-sm text-gray-500">
                <p>• Flexible schedule</p>
                <p>• 2-4 hours per week</p>
                <p>• Teaching experience preferred</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-green-600">Healthcare Support</h3>
              <p className="text-gray-600 mb-4">Assist with health awareness campaigns and medical outreach programs.</p>
              <div className="text-sm text-gray-500">
                <p>• Medical background helpful</p>
                <p>• Weekend commitment</p>
                <p>• Local and international opportunities</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-purple-600">Fundraising & Events</h3>
              <p className="text-gray-600 mb-4">Help organize events and campaigns to support our various programs.</p>
              <div className="text-sm text-gray-500">
                <p>• Creative and organized individuals</p>
                <p>• Event planning experience plus</p>
                <p>• Seasonal opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;