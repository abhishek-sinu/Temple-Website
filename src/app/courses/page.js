"use client";

import { useState } from "react";

const courses = [
  {
    title: "Bhagavad Gita Study",
    description: "Deep dive into the teachings of Bhagavad Gita with guided sessions and discussions.",
    image: "/courses/gita.jpg",
    enrollLink: "https://iskconhyderabad.com/enroll-gita"
  },
  {
    title: "Krishna Conscious Parenting",
    description: "Learn spiritual parenting techniques and values for raising Krishna conscious children.",
    image: "/courses/parenting.jpg",
    enrollLink: "https://iskconhyderabad.com/enroll-parenting"
  },
  {
    title: "Mantra Meditation",
    description: "Experience the power of mantra meditation and learn practical techniques for daily practice.",
    image: "/courses/meditation.jpg",
    enrollLink: "https://iskconhyderabad.com/enroll-meditation"
  },
  {
    title: "Youth Leadership",
    description: "Empowering youth with leadership skills rooted in Vedic wisdom and values.",
    image: "/courses/youth.jpg",
    enrollLink: "https://iskconhyderabad.com/enroll-youth"
  },
  {
    title: "Cooking for Krishna",
    description: "Discover the art of sattvic cooking and offer delicious meals to Krishna.",
    image: "/courses/cooking.jpg",
    enrollLink: "https://iskconhyderabad.com/enroll-cooking"
  }
];

export default function CoursesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-200 font-sans px-2 md:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-900 mb-8 text-center leading-tight drop-shadow-lg">ISKCON Hyderabad Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={course.title} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center">
              <img src={course.image} alt={course.title} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-yellow-300 shadow" />
              <h2 className="text-2xl font-bold text-yellow-800 mb-2 text-center">{course.title}</h2>
              <p className="text-base text-yellow-700 mb-4 text-center">{course.description}</p>
              <a href={course.enrollLink} target="_blank" rel="noopener" className="px-6 py-2 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition text-lg shadow-md">Enroll Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
