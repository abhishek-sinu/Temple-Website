export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 text-center leading-tight">Temple Media</h1>
        <ul className="list-disc list-inside text-blue-800 text-lg">
          <li>Photo Gallery</li>
          <li>Video Gallery</li>
          <li>Social Media Links</li>
        </ul>
        <div className="mt-8 text-center">
          <a href="https://www.facebook.com/ISKCONNVCC" className="text-blue-700 underline mx-2">Facebook</a>
          <a href="https://www.instagram.com/iskconnvccpune/" className="text-blue-700 underline mx-2">Instagram</a>
          <a href="https://www.youtube.com/@ISKCONNVCCPune" className="text-blue-700 underline mx-2">YouTube</a>
        </div>
      </div>
    </div>
  );
}
