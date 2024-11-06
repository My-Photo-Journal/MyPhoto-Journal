// Testimonials.js
import React from 'react';

const testimonialsData = [
  {
    name: 'John Doe',
    testimonial: 'Snap Diary has transformed how I capture and share my memories. I love the collage feature!',
  },
  {
    name: 'Jane Smith',
    testimonial: 'The user interface is so intuitive! I can easily organize my entries by events.',
  },
  {
    name: 'Alex Johnson',
    testimonial: 'I appreciate the privacy options. It feels great to have control over my entries.',
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 bg-gray-50" >
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
            key={index}
          >
            <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
            <p className="mt-4 font-semibold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;