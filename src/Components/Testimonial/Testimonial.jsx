import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Happy Homeowner",
    message:
      "Thanks to this amazing team, I found my dream home in just two weeks! Highly professional and supportive throughout the process.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "First-time Buyer",
    message:
      "They made buying my first home a breeze. Clear communication and genuine advice made all the difference!",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Michael Lee",
    title: "Investor",
    message:
      "I was able to find great investment properties with their help. Highly recommend their service to any investor.",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
