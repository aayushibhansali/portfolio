import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
      onMouseMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      {/* Cursor Glow */}
      <div
        className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          transform: `translate(${position.x / 20}px, ${position.y / 20}px)`,
        }}
      ></div>

      {/* Floating Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 animate-float top-20 left-20"></div>

      {/* Content */}
      <div className="text-center px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-fadeUp">
          Hi, I’m Aayushi 👋
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-6 animate-fadeUp [animation-delay:0.2s]">
          I design and build modern web experiences
        </p>

        <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition animate-fadeUp [animation-delay:0.4s]">
          View My Work
        </button>
      </div>
    </div>
  );
}

export default App;
