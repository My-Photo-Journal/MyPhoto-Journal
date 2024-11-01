import React from 'react';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import RootLayout from '../../layout/RootLayout';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
<>
    <RootLayout>
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 px-8">
        {/* <img src="./src/assets/images/logo-trans.png" alt="" /> */}
        <h1 className="text-4xl font-bold mb-4">Capture Your Memories, One Photo at a Time</h1>
        <p className="text-lg mb-6">
          Welcome to MyPhoto Journal, the perfect place to document and reflect on your special moments.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold">
          <Link to="/signup">Get Started</Link>
        </button>
      </section>

      <Features />

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journal?</h2>
        <p className="mb-8">Sign up today and begin capturing memories!</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold">
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