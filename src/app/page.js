
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTelegramPlane, FaWordpress, FaTripadvisor, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-24 gap-10 md:gap-20 z-0">
        <div className="flex-1 z-10">
          <span className="text-lg text-gray-500 mb-2 block">Since 1976</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">Explore the history and teachings of Lord Krishna & Guru Parampara</h1>
        </div>
        <div className="flex-1 flex justify-center z-0">
          <Image src="/temple-hero.jpg" alt="Temple" width={500} height={350} className="rounded-2xl shadow-xl object-cover" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20 z-0">
          <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Temple Background" fill className="object-cover" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex justify-center py-8">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-8 px-8 py-8 max-w-4xl w-full">
          <div className="text-center">
            <span className="text-5xl font-bold text-pink-500">500</span>
            <div className="text-gray-700 font-medium">CRORE MEALS SERVED<br />AROUND THE WORLD</div>
          </div>
          <div className="text-center">
            <span className="text-5xl font-bold text-pink-500">43+</span>
            <div className="text-gray-700 font-medium">CRORE MEALS SERVED<br />SINCE COVID 19 LOCKDOWN</div>
          </div>
          <div className="text-center">
            <span className="text-5xl font-bold text-pink-500">50</span>
            <div className="text-gray-700 font-medium">YEARS OF SERVICE<br />TO HUMANITY</div>
          </div>
        </div>
      </section>

      {/* Hospitality Section */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Experience Divine Hospitality</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a href="https://govindas.iskconpune.com/" target="_blank" rel="noopener" className="bg-white rounded-2xl shadow-lg px-12 py-8 flex flex-col items-center w-full md:w-96 hover:bg-blue-100 transition">
            <span className="text-5xl mb-4">🏬</span>
            <span className="text-2xl font-bold text-gray-900">Govindas Restaurant</span>
          </a>
          <a href="https://guesthouse.iskconpune.com/banquetandrooms/" target="_blank" rel="noopener" className="bg-white rounded-2xl shadow-lg px-12 py-8 flex flex-col items-center w-full md:w-96 hover:bg-blue-100 transition">
            <span className="text-5xl mb-4">🏠</span>
            <span className="text-2xl font-bold text-gray-900">Guest House</span>
          </a>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Make a Donation</h2>
        <span className="text-pink-500 italic font-medium block mb-2">Srila Prabhupada said,</span>
        <p className="text-lg text-gray-700 mb-4">“Charity should only be given to propagate Krishna Consciousness all over the world.”</p>
        <p className="text-gray-500 mb-8">No matter small or big, Krishna sees your Heart, whether you want to serve him or not.</p>
        <a href="/donate" className="border-2 border-pink-400 text-pink-500 font-semibold rounded-full px-8 py-3 hover:bg-pink-50 transition text-lg inline-block">DONATE NOW</a>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-12 flex flex-col md:flex-row items-center gap-8 bg-[url('/mandala-bg.png')] bg-no-repeat bg-left-top bg-cover">
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 w-full md:w-2/3 mb-8 md:mb-0">
          <span className="text-pink-500 font-bold text-lg">Hare Krishna!</span>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Daily Schedule</h2>
          <ul className="text-lg text-gray-900 mb-6">
            <li>04:30 AM – 05:30 AM Mangala Aarti</li>
            <li>07:30 AM – 08:00 AM Sringara Aarti & Guru Puja</li>
            <li>08:00 AM – 09:00 AM Srimad Bhagavatam discourse in English</li>
            <li>08:30 AM – 11:55 AM Live Darshan</li>
            <li>12:30 PM – 01:10 PM Raj-bhog Offering</li>
            <li>01:10 PM – 04:30 PM Darshan Closes</li>
            <li>04:30 PM – 06:30 PM Darshan Remain Open</li>
            <li>07:00 PM – 08:00 PM Gaura Sandhya Arati & Darshan Remain Open</li>
            <li>08:30 PM – 8:45 PM Last Darshan for the Day</li>
            <li>09:45 PM – 04:30 AM Deities Rest. Darshan Closed</li>
          </ul>
          <a href="/timings" className="bg-green-600 text-white font-semibold rounded px-6 py-3 hover:bg-green-700 transition">LEARN MORE</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/temple-schedule.jpg" alt="Temple Schedule" width={400} height={400} className="rounded-2xl shadow-xl object-cover" />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            {/* Google Review Summary Card */}
            <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-2xl px-10 py-8 border-4 border-blue-200 relative min-w-[270px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" className="w-14 h-14 mb-3 drop-shadow-lg" />
              <span className="text-3xl font-extrabold text-blue-900 mb-2 tracking-wide">EXCELLENT</span>
              <span className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </span>
              <span className="text-black font-medium text-lg">Based on <span className="font-bold">24,599 reviews</span></span>
              <span className="text-3xl text-blue-600 mt-3 font-bold tracking-wide">Google</span>
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">4.9/5</span>
            </div>
            {/* Example reviews */}
            <div className="flex gap-6 overflow-x-auto w-full md:w-auto py-2">
              {/* Review Card 1 */}
              <div className="bg-white rounded-3xl shadow-xl px-8 py-6 min-w-[270px] border-2 border-blue-100 flex flex-col">
                <span className="font-bold text-black text-lg mb-1">Roshni Singh</span>
                <span className="block text-gray-500 text-xs mb-2">30 January 2023</span>
                <span className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </span>
                <a href="#" className="block text-blue-600 text-xs mb-2 hover:underline">Google</a>
                <p className="mt-1 text-gray-700 text-sm italic">"Whenever I feel low or need some peace, every Sunday I go here. Beautiful and peaceful place!"</p>
              </div>
              {/* Review Card 2 */}
              <div className="bg-white rounded-3xl shadow-xl px-8 py-6 min-w-[270px] border-2 border-blue-100 flex flex-col">
                <span className="font-bold text-black text-lg mb-1">Smildon Nicolas</span>
                <span className="block text-gray-500 text-xs mb-2">30 January 2023</span>
                <span className="flex items-center mb-1">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                </span>
                <a href="#" className="block text-blue-600 text-xs mb-2 hover:underline">Google</a>
                <p className="mt-1 text-gray-700 text-sm italic">"Nice place, peaceful environment. Would recommend to friends!"</p>
              </div>
              {/* Review Card 3 */}
              <div className="bg-white rounded-3xl shadow-xl px-8 py-6 min-w-[270px] border-2 border-blue-100 flex flex-col">
                <span className="font-bold text-black text-lg mb-1">Gunjan Jain</span>
                <span className="block text-gray-500 text-xs mb-2">30 January 2023</span>
                <span className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </span>
                <a href="#" className="block text-blue-600 text-xs mb-2 hover:underline">Google</a>
                <p className="mt-1 text-gray-700 text-sm italic">"This user only left a rating."</p>
              </div>
              {/* Review Card 4 */}
              <div className="bg-white rounded-3xl shadow-xl px-8 py-6 min-w-[270px] border-2 border-blue-100 flex flex-col">
                <span className="font-bold text-black text-lg mb-1">Smita Patil</span>
                <span className="block text-gray-500 text-xs mb-2">30 January 2023</span>
                <span className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </span>
                <a href="#" className="block text-blue-600 text-xs mb-2 hover:underline">Google</a>
                <p className="mt-1 text-gray-700 text-sm italic">"This user only left a rating."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white pt-12 pb-4 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Donate */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/iskcon-logo.png" alt="ISKCON Logo" width={100} height={100} className="mb-4" />
            <p className="mb-4 text-center md:text-left text-gray-300">Your support will help us continue our mission of spreading Krishna Consciousness, hope, and happiness across the world. Donate now!</p>
            <a href="/donate" className="bg-pink-500 text-white font-semibold rounded-full px-8 py-3 hover:bg-pink-600 transition mb-4 border-2 border-green-400">DONATE NOW <span className="ml-2">❤️</span></a>
          </div>
          {/* Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-2">CONTACTS</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><span className="text-pink-400">📍</span> 123 Random Street, Example City, Wonderland 123456</li>
              <li><span className="text-pink-400">✉️</span> hello@randommail.com</li>
              <li><span className="text-pink-400">📞</span> Donation Office: +99 123-456-7890, +99 987-654-3210</li>
              <li><span className="text-pink-400">🏨</span> Guest House: +99 555-123-4567</li>
              <li><span className="text-pink-400">📱</span> For All Information: +99 111-222-3333</li>
            </ul>
          </div>
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-2">ABOUT</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="/about" className="hover:text-pink-400">Our Story</a></li>
              <li><a href="/contact-us" className="hover:text-pink-400">Meet the Team</a></li>
              <li><a href="/temple" className="hover:text-pink-400">Random Facts</a></li>
            </ul>
          </div>
          {/* Donate Now Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">DONATE NOW</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="/donations/alpha" className="hover:text-pink-400">Alpha Project</a></li>
              <li><a href="/donations/beta" className="hover:text-pink-400">Beta Initiative</a></li>
              <li><a href="/donations/gamma" className="hover:text-pink-400">Gamma Fund</a></li>
              <li><a href="/donations/delta" className="hover:text-pink-400">Delta Drive</a></li>
              <li><a href="/donations/epsilon" className="hover:text-pink-400">Epsilon Support</a></li>
            </ul>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-8 text-3xl">
          <a href="https://twitter.com/ISKCONPune" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="https://facebook.com/ISKCONNVCC" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="https://www.google.com/maps/place/ISKCON+NVCC+Pune/" target="_blank" rel="noopener" aria-label="Location" className="hover:text-green-500"><FaMapMarkerAlt /></a>
          <a href="https://instagram.com/iskconnvccpune/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-pink-400"><FaInstagram /></a>
          <a href="https://youtube.com/@ISKCONNVCCPune" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-red-500"><FaYoutube /></a>
          <a href="https://t.me/iskconpuneofficial" target="_blank" rel="noopener" aria-label="Telegram" className="hover:text-blue-400"><FaTelegramPlane /></a>
          <a href="https://en.m.wikipedia.org/wiki/ISKCON_Temple,_Pune" target="_blank" rel="noopener" aria-label="WordPress" className="hover:text-gray-400"><FaWordpress /></a>
          <a href="https://www.tripadvisor.in/Attraction_Review-g297654-d3838598-Reviews-ISKCON_NVCC_Temple-Pune_Pune_District_Maharashtra.html" target="_blank" rel="noopener" aria-label="Tripadvisor" className="hover:text-yellow-400"><FaTripadvisor /></a>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-800 pt-4">
          <div className="mb-2">
            <a href="/terms-of-use" className="hover:text-pink-400">Terms of use</a>
            <span className="mx-2">|</span>
            <a href="/privacy-policy" className="hover:text-pink-400">Privacy Policy</a>
          </div>
          <div>
            Copyright © 2026 ISKCON. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
