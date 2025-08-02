import React from 'react';
import { Heart, Users, Globe, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About HopeForward NGO</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, we are dedicated to creating sustainable positive change in communities around the world.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower communities through education, healthcare, and sustainable development initiatives that create lasting positive impact. We believe in working alongside local communities to build solutions that are culturally appropriate and environmentally sustainable.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              A world where every individual has access to quality education, healthcare, and opportunities for sustainable livelihood, regardless of their geographic location or economic circumstances.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4 text-lg leading-relaxed">
              HopeForward NGO was born from a simple belief: that every person deserves the opportunity to thrive. Founded by a group of passionate volunteers who witnessed firsthand the challenges faced by underserved communities, we started with a single mission - to bridge the gap between need and support.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              What began as local community outreach has grown into a global movement. Over the past decade, we've expanded our reach to 25 countries, touching the lives of over 50,000 individuals through our comprehensive programs in education, healthcare, and sustainable development.
            </p>
            <p className="text-lg leading-relaxed">
              Our approach is rooted in collaboration and respect. We don't just provide aid; we partner with communities to identify their needs, leverage their strengths, and build solutions that will endure long after our programs conclude.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Compassion</h3>
              <p className="text-gray-600 text-sm">Leading with empathy and understanding in all our interactions.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">Maintaining transparency and accountability in everything we do.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">Working together with communities and partners for sustainable change.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">Creating lasting solutions that benefit future generations.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MK</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Meena Kamlesh</h3>
              <p className="text-gray-600 mb-2">Executive Director</p>
              <p className="text-sm text-gray-500">15+ years in international development and community engagement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">NM</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Nitin Maurya</h3>
              <p className="text-gray-600 mb-2">Program Director</p>
              <p className="text-sm text-gray-500">Expert in sustainable development and healthcare initiatives.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AL</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aisha Lwin</h3>
              <p className="text-gray-600 mb-2">Education Coordinator</p>
              <p className="text-sm text-gray-500">Former teacher with passion for educational equity and access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;