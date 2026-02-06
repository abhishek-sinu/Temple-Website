"use client";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-2 md:px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 text-center leading-tight drop-shadow-lg">Contact ISKCON Hyderabad</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Info & Map */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-2">Temple Address</h2>
              <p className="text-lg text-blue-800 mb-2">Hare Krishna Golden Temple, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg text-blue-800 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z"/></svg>
                  </span>
                  <span className="font-semibold">Email:</span>
                  <span>hyderabad@iskcon.in</span>
                </div>
                <div className="flex items-center gap-2 text-lg text-blue-800 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.12.45 2.33.68 3.48.68a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.15.23 2.36.68 3.48a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
                  </span>
                  <span className="font-semibold">Phone:</span>
                  <span>+91 40-2331-9999</span>
                </div>
                <div className="flex items-center gap-2 text-lg text-blue-800 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 7V4a2 2 0 00-2-2H7a2 2 0 00-2 2v3H2v13a2 2 0 002 2h16a2 2 0 002-2V7h-3zm-2 0H7V4h10v3zm3 13H4V9h16v11zm-8-5a2 2 0 110-4 2 2 0 010 4z"/></svg>
                  </span>
                  <span className="font-semibold">Guest House:</span>
                  <span>+91 40-2331-9998</span>
                </div>
                <div className="flex items-center gap-2 text-lg text-blue-800 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <text x="6" y="19" fontSize="20" fontWeight="bold" fill="#fff">₹</text>
                    </svg>
                  </span>
                  <span className="font-semibold">Donation Office:</span>
                  <span>+91 40-2331-9997</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-blue-700 mb-1">Temple Timings</h3>
                <ul className="text-blue-700 text-base list-disc list-inside">
                  <li>Mangala Arati: 4:30 AM</li>
                  <li>Darshan Arati: 7:00 AM</li>
                  <li>Raj Bhog Arati: 12:00 PM</li>
                  <li>Sandhya Arati: 7:00 PM</li>
                  <li>Temple closes: 8:30 PM</li>
                </ul>
              </div>
              <div className="mt-4 flex gap-4">
                <a href="https://www.facebook.com/iskconhyd/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg></a>
                <a href="https://www.instagram.com/iskconhyd/" target="_blank" rel="noopener" className="text-pink-500 hover:text-pink-700"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37c-.967.967-1.24 2.14-1.298 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.058 1.277.331 2.45 1.298 3.417.967.967 2.14 1.24 3.417 1.298C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.331 3.417-1.298.967-.967 1.24-2.14 1.298-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.331-2.45-1.298-3.417-.967-.967-2.14-1.24-3.417-1.298C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg></a>
                <a href="https://www.youtube.com/@iskconhyderabad" target="_blank" rel="noopener" className="text-red-600 hover:text-red-800"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg mt-4">
              <iframe
                src="https://www.google.com/maps?q=ISKCON+Hyderabad&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ISKCON Hyderabad Location"
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <form className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col gap-4">
              <h2 className="text-xl font-bold text-blue-800 mb-2">Send Us a Message</h2>
              <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              <textarea name="message" rows={4} placeholder="Your Message" className="px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-10 text-blue-800 text-lg font-medium">
          <span className="font-bold">Hare Krishna! We look forward to serving you at ISKCON Hyderabad.</span>
        </div>
      </div>
    </div>
  );
}
