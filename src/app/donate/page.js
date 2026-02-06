export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-300 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-6 text-center">Make a Donation</h1>
        <p className="text-lg text-yellow-800 mb-8 text-center">“Charity should only be given to propagate Krishna Consciousness all over the world.”<br/>No matter small or big, Krishna sees your Heart, whether you want to serve him or not.</p>
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Donation Options</h2>
          <ul className="list-disc list-inside text-yellow-800">
            <li><a href="/food-donation" className="text-yellow-700 underline">Annadan | Sesame Seeds | Groceries</a></li>
            <li><a href="/tula-daan-seva" className="text-yellow-700 underline">Tula Daan</a></li>
            <li><a href="/deep-daan-seva" className="text-yellow-700 underline">Deep Daan</a></li>
            <li><a href="/sponsor-puja" className="text-yellow-700 underline">Sponsor Lord Balaji and His Consorts Puja</a></li>
          </ul>
        </div>
        <a href="#" className="px-8 py-3 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition text-lg font-semibold block mx-auto w-max">Donate Online</a>
      </div>
    </div>
  );
}