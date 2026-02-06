"use client";
export default function HomeSatsang() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img src="https://picsum.photos/seed/satsang/800/300" alt="Home Satsang" className="w-full h-48 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">Home Satsang</h1>
          <p className="text-lg text-gray-700 text-center">Experience the joy of spiritual gatherings at home. Learn how to host or join a satsang and connect with a community of devotees.</p>
        </div>
      </div>
    </div>
  );
}
