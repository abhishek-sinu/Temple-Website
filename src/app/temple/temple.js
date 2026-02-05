import Image from "next/image";

export default function Temple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 text-center leading-tight">Deities & Live Darshan</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Radha Vrindavanchandra" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Sri Radha Vrindavanchandra</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Gaura Nitai" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Sri Gaura Nitai</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80" alt="Jagannath Baladev Subhadra" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Sri Jagannath Baladev Subhadra</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Balaji" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Balaji</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Live Darshan</h2>
          <p className="text-blue-800">Watch live darshan of the deities and experience divine blessings from anywhere in the world.</p>
        </div>
      </div>
    </div>
  );
}
