import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      aria-label="Homepage"
    >
      <div className="text-center max-w-3xl px-6 animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Hi, I’m <span className="text-yellow-300">Sunny Kumar</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Fullstack Developer | MERN | Next.js | PHP | Python Django | Scalable Web Apps
        </p>
        <a
          href="#projects"
          className="inline-block px-10 py-4 bg-white text-indigo-700 font-bold text-lg rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Home;
