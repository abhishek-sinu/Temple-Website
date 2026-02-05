export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 text-center leading-tight">Contact Us</h1>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <p className="text-lg text-blue-800 mb-2"><span className="font-semibold">Address:</span> Survey No, 50, Katraj – Kondhwa Rd, Tilekar Nagar, Kondhwa Budruk, Pune, Maharashtra 411 048</p>
          <p className="text-lg text-blue-800 mb-2"><span className="font-semibold">Email:</span> sevaoffice@iskconpune.in</p>
          <p className="text-lg text-blue-800 mb-2"><span className="font-semibold">Donation Office:</span> +91 838-007-7608</p>
          <p className="text-lg text-blue-800 mb-2"><span className="font-semibold">Guest House:</span> +91 776-790-0900</p>
          <p className="text-lg text-blue-800 mb-2"><span className="font-semibold">General Info:</span> +91 841-184-5000</p>
        </div>
        <form className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          <textarea name="message" rows={4} placeholder="Your Message" className="px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}
