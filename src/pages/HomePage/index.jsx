import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

const HomePage = () => {
  return (
<>
    <Navbar />
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 px-8">
        <h1 className="text-4xl font-bold mb-4">Capture Your Memories, One Photo at a Time</h1>
        <p className="text-lg mb-6">
          Welcome to MyPhoto Journal, the perfect place to document and reflect on your special moments.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold">
          <a href="/signup">Get Started</a>
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Organize by Events</h3>
            <p>Group your entries by events to make memories easy to revisit.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Collage Layout</h3>
            <p>Choose between single or collage layout for multiple photos.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Personal Dashboard</h3>
            <p>Get quick access to recent and favorite entries from your dashboard.</p>
          </div>
        </div>
      </section>

      <Features />

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journal?</h2>
        <p className="mb-8">Sign up today and begin capturing memories!</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold">
          <a href="/signup">Sign Up Now</a>
        </button>
      </section>
    </div>
    <Testimonials />
    <Footer />
    </>
  );
};


export default HomePage;