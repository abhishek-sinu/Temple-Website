import Image from "next/image";

export default function Temple() {
  const heroSlides = [
    {
      title: "Explore the history and teachings of Lord Krishna & Guru Parampara",
      img: "/hero-image-11.jpeg",
    },
    {
      title: "Seek Blessings of Srimati Radharani and Lord Krishna",
      img: "/hero-image-6.jpeg",
    },
    {
      title: "Grace of Lord Jagannath",
      img: "/hero-image-4.jpeg",
    },
    {
      title: "Srila Prabhupada's Divine Presence",
      img: "/hero-image-15.jpeg",
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 text-center leading-tight">Deities & Live Darshan</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Image src="/hero-image-11.jpeg" alt="Radha Vrindavanchandra" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Sri Gaura Nitai </span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/hero-image-6.jpeg" alt="Gaura Nitai" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Sri Jagannath Baladev Subhadra Sudarshan</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/hero-image-4.jpeg" alt="Jagannath Baladev Subhadra" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Sri Radha Madan Mohan</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/Radha MadanMohan.jpeg" alt="Srila Prabhupada" width={300} height={200} className="rounded-2xl mb-2 shadow-xl object-cover" />
            <span className="text-blue-800 font-semibold">Sri Sri Radha Madan Mohan</span>
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
