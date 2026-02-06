"use client";
import { useState } from "react";
import { festivals } from "./festivalData";

export default function Festivals() {
  const [active, setActive] = useState(0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-2 md:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-8 text-center leading-tight drop-shadow-lg">Festivals & Celebrations</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/3 w-full">
            <div className="bg-white/80 rounded-2xl shadow-lg p-2 md:p-4 sticky top-24">
              <ul className="space-y-1">
                {festivals.map((fest, idx) => (
                  <li key={fest.name}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        active === idx
                          ? "bg-gradient-to-r from-blue-200 to-blue-100 text-blue-900 shadow font-bold scale-105"
                          : "hover:bg-blue-50 text-blue-700"
                      }`}
                      onClick={() => setActive(idx)}
                    >
                      {fest.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Content */}
          <div className="md:w-2/3 w-full flex flex-col items-center">
            <div className="w-full bg-white/90 rounded-2xl shadow-xl p-6 md:p-10 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 text-center">{festivals[active].name}</h2>
              <p className="text-lg text-blue-900 mb-6 text-center leading-relaxed">{festivals[active].description}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {festivals[active].images.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={festivals[active].name + " image " + (i + 1)}
                    className="rounded-xl shadow-lg w-64 h-40 object-cover border-2 border-blue-100 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-100 to-white"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: none; }
              }
              .animate-fade-in { animation: fade-in 0.6s cubic-bezier(.4,0,.2,1); }
            `}</style>
          </div>
        </div>
        <p className="mt-10 text-blue-800 text-center text-lg font-medium">Join us for vibrant celebrations and spiritual joy throughout the year!<br/>Hare Krishna!</p>
      </div>
    </div>
  );
}
