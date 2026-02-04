import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 text-center leading-tight">About ISKCON</h1>
        <p className="text-lg text-blue-800 mb-8 text-center">
          ISKCON (International Society for Krishna Consciousness) is a global spiritual movement founded in 1966, dedicated to sharing the teachings of Lord Krishna and the Vedic scriptures. Our center is a vibrant hub for spiritual growth, community service, and cultural celebration.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Impact</h2>
            <ul className="list-disc list-inside text-blue-800">
              <li>Millions of meals served globally</li>
              <li>Charity and food programs for the needy</li>
              <li>Spiritual education and community support</li>
              <li>Festivals and celebrations throughout the year</li>
            </ul>
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="ISKCON" width={300} height={200} className="mx-auto rounded-2xl shadow-xl object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
