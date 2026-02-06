"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Navbar() {
  const [showActivities, setShowActivities] = useState(false);
  const closeTimeout = useRef();
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-50 shadow-md sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <a href="/">
          <img src="/iskcon-logo.png" alt="ISKCON Logo" width={60} height={60} className="shadow-lg rounded" />
        </a>
      </div>
      <ul className="hidden md:flex gap-8 text-lg font-medium text-blue-900 items-center">
        <li><a href="/" className="hover:text-teal-600 font-semibold">Home</a></li>
        <li><a href="/about" className="hover:text-teal-600">About</a></li>
        <li><a href="/temple" className="hover:text-teal-600">Darshan</a></li>
        <li
          className="relative"
          onMouseEnter={() => {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            setShowActivities(true);
          }}
          onMouseLeave={() => {
            closeTimeout.current = setTimeout(() => setShowActivities(false), 120);
          }}
        >
          <style>{`
            .chevron {
              transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
              display: inline-block;
              vertical-align: middle;
            }
            .chevron.open {
              transform: rotate(180deg);
            }
          `}</style>
          <div>
            <button className="hover:text-teal-600 focus:outline-none flex items-center gap-1">
              Activities
              <span className={`chevron${showActivities ? ' open' : ''} ml-1`}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8L10 12L14 8" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {showActivities && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-blue-100 z-50"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  setShowActivities(true);
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(() => setShowActivities(false), 120);
                }}
              >
                <ul className="py-2">
                  <li><Link href="/activities/courses" className="block px-6 py-2 hover:bg-blue-50">Courses</Link></li>
                  <li><Link href="/activities/youth-training" className="block px-6 py-2 hover:bg-blue-50">Youth Training</Link></li>
                  <li><Link href="/activities/food-for-life" className="block px-6 py-2 hover:bg-blue-50">Food For Life</Link></li>
                  <li><Link href="/activities/home-satsang" className="block px-6 py-2 hover:bg-blue-50">Home Satsang</Link></li>
                  <li><Link href="/activities/girls-voice" className="block px-6 py-2 hover:bg-blue-50">Girls’ Voice</Link></li>
                  <li><Link href="/activities/go-seva" className="block px-6 py-2 hover:bg-blue-50">Go Seva</Link></li>
                </ul>
              </div>
            )}
          </div>
        </li>
        <li><a href="/festivals" className="hover:text-teal-600">Festivals</a></li>
        <li><a href="/contact-us" className="hover:text-teal-600">Contact Us</a></li>
        <li><a href="/media" className="hover:text-teal-600">Media</a></li>
        <li><a href="/shop" className="hover:text-teal-600">Shop</a></li>
        <li><a href="/utilities" className="hover:text-teal-600">Utilities</a></li>
      </ul>
      <div className="flex items-center gap-4">
        <a href="/donate" className="border-2 border-teal-400 text-teal-600 font-semibold rounded-full px-8 py-2 hover:bg-teal-50 transition text-lg">DONATE NOW</a>
      </div>
    </nav>
  );
}
