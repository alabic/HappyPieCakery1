import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-pink-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-10 space-y-10 border-4 border-yellow-300">
        <h1 className="text-5xl font-extrabold text-center text-pink-600 drop-shadow">
          About Happypie Cakery
        </h1>

        <p className="text-gray-800 text-lg">
          Welcome to <span className="font-bold text-yellow-500">Happypie Cakery</span> – where every slice brings a smile! From dreamy cakes to sweet treats, we bake with love, joy, and just the right amount of magic to make every celebration extra special.
        </p>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-yellow-500">Our Sweet Mission</h2>
          <p className="text-gray-800 text-base">
            At Happypie, our mission is to spread happiness one bite at a time. Whether it's a birthday, wedding, or a casual sugar craving, we’re here to turn your moments into memories with our delicious and delightful creations.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-yellow-500">Why You'll Love Us</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>Freshly baked goodies made daily with premium ingredients</li>
            <li>Custom cakes tailored to your sweetest dreams</li>
            <li>Friendly service with a sprinkle of joy</li>
            <li>Colorful, cozy vibe that makes you feel right at home</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-yellow-500">Our Flavorful Vision</h2>
          <p className="text-gray-800 text-base">
            We dream of a world where happiness is shared through frosting, sprinkles, and fluffy layers of cake. At Happypie, we aim to bring people together through the joy of baking — with flavors that spark nostalgia and creativity.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">Come Be a Part of Our Sweet Story</h3>
          <p className="text-gray-800 mb-4">
            Whether you’re looking for a celebration centerpiece or a cozy cupcake for a rainy day, Happypie Cakery is your happy place.
          </p>
          <p>Explore Our Treats 🍰</p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
