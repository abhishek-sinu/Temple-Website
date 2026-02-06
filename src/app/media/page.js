"use client";
import { useState } from "react";

const photoGallery = [
  { src: "/festivals/janmashtami-1.jpg", alt: "Janmashtami" },
  { src: "/festivals/ram-navami-1.jpg", alt: "Ram Navami" },
  { src: "/festivals/chandan-yatra-1.jpg", alt: "Chandan Yatra" },
  { src: "/festivals/govardhan-1.jpg", alt: "Govardhan Puja" },
  { src: "/festivals/radhastami-1.jpg", alt: "Radhastami" },
];

const videoGallery = [
  { id: "QwQpQwQpQwQ", title: "ISKCON Hyderabad - Janmashtami 2023" },
  { id: "1QpQwQpQwQp", title: "ISKCON Hyderabad - Kirtan Night" },
  { id: "2QpQwQpQwQp", title: "ISKCON Hyderabad - Govardhan Puja" },
  { id: "3QpQwQpQwQp", title: "ISKCON Hyderabad - Radhastami" },
];

const socialLinks = [
  { href: "https://www.facebook.com/iskconhyd/", icon: "facebook", color: "bg-blue-600" },
  { href: "https://www.instagram.com/iskconhyd/", icon: "instagram", color: "bg-pink-500" },
  { href: "https://www.youtube.com/@iskconhyderabad", icon: "youtube", color: "bg-red-600" },
];

function SocialIcon({ icon, color }) {
  const icons = {
    facebook: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
    ),
    instagram: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
    ),
    youtube: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ),
  };
  return (
    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${color} shadow`}>{icons[icon]}</span>
  );
}

export default function Media() {
  const [tab, setTab] = useState("photos");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-2 md:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8 text-center leading-tight drop-shadow-lg">Media Gallery</h1>
        <div className="flex justify-center mb-8 gap-4">
          <button onClick={() => setTab("photos")} className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${tab === "photos" ? "bg-blue-600 text-white shadow" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}>Photo Gallery</button>
          <button onClick={() => setTab("videos")} className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${tab === "videos" ? "bg-pink-600 text-white shadow" : "bg-pink-50 text-pink-700 hover:bg-pink-100"}`}>Video Gallery</button>
        </div>
        {/* Photo Gallery */}
        {tab === "photos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {photoGallery.map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" loading="lazy" />
                <div className="p-2 text-center text-blue-900 font-semibold text-lg">{img.alt}</div>
              </div>
            ))}
          </div>
        )}
        {/* Video Gallery */}
        {tab === "videos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {videoGallery.map((vid) => (
              <div key={vid.id} className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col items-center">
                <iframe
                  width="100%"
                  height="220"
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-2xl"
                ></iframe>
                <div className="p-2 text-center text-blue-900 font-semibold text-lg">{vid.title}</div>
              </div>
            ))}
          </div>
        )}
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener" className="hover:scale-110 transition-transform duration-200">
              <SocialIcon icon={link.icon} color={link.color} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
