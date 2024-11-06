import React from 'react';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import RootLayout from '../../layout/RootLayout';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <RootLayout>
        <div className="pt-64">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            src="/public/videos/hp-vid.mp4"
            autoPlay
            loop
            muted
          ></video>

          {/* Hero Section */}
          <section className="relative text-white text-center py-20 px-8" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <h1 className="text-5xl font-bold mb-4">Capture Your Memories, One Photo at a Time</h1>
            <p className="text-2xl mb-6">
              Welcome to Snap Diary, the perfect place to document and reflect on your special moments.
            </p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded font-semibold">
              <Link to="/signup">Get Started</Link>
            </button>
          </section>

          <Features />

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-16 px-8 text-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journal?</h2>
            <p className="text-xl mb-8">Sign up today and begin capturing memories!</p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded font-semibold">
              <Link to="/signup">Sign Up Now</Link>
            </button>
          </section>
        </div>
        <Testimonials />
        {/* <Footer /> */}
      </RootLayout>
    </>
  );
};

export default HomePage;
