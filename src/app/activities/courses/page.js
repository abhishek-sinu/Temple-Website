"use client";
const courses = [
  {
    title: "Bhagavad Gita Study",
    description:
      "A comprehensive study of the Bhagavad Gita with guided discussions and practical applications.",
    color: "bg-gradient-to-r from-blue-200 to-blue-100",
    image: "https://picsum.photos/seed/spiritual/400/200",
  },
  {
    title: "Mantra Meditation",
    description:
      "Learn the art of mantra meditation for inner peace and spiritual growth. Includes group chanting sessions.",
    color: "bg-gradient-to-r from-purple-200 to-pink-100",
    image: "https://picsum.photos/seed/meditation/400/200",
  },
  {
    title: "Vedic Lifestyle",
    description:
      "Discover the principles of Vedic living, including diet, daily routines, and holistic wellness.",
    color: "bg-gradient-to-r from-yellow-200 to-orange-100",
    image: "https://picsum.photos/seed/wellness/400/200",
  },
  {
    title: "Children's Spiritual Camp",
    description:
      "Fun and engaging activities for children to learn about Krishna consciousness and values.",
    color: "bg-gradient-to-r from-green-200 to-teal-100",
    image: "https://picsum.photos/seed/children/400/200",
  },
  {
    title: "Youth Leadership",
    description:
      "Empowering youth with leadership skills rooted in spiritual values and service.",
    color: "bg-gradient-to-r from-pink-200 to-red-100",
    image: "https://picsum.photos/seed/youth/400/200",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">Courses Offered</h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Explore our spiritual and educational courses designed for all ages and backgrounds. Join us to deepen your understanding of Krishna consciousness and Vedic wisdom.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {courses.map((course, idx) => (
             <div
               key={idx}
               className={`rounded-2xl shadow-lg p-6 flex flex-col justify-between ${course.color}`}
             >
               <img
                 src={course.image}
                 alt={course.title + " image"}
                 className="w-full h-40 object-cover rounded-xl mb-4 border border-blue-100"
               />
               <div>
                 <h2 className="text-2xl font-semibold text-blue-900 mb-2">{course.title}</h2>
                 <p className="text-gray-700 mb-4">{course.description}</p>
               </div>
               <button
                 className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200 shadow-md"
                 onClick={() => alert(`Enroll for: ${course.title}`)}
               >
                 Enroll
               </button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
