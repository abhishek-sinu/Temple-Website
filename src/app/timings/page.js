export default function Timings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-300 font-sans px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-6 text-center">Temple Timings & Daily Schedule</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">Darshan Timings</h2>
            <ul className="list-disc list-inside text-yellow-800">
              <li>Morning: 4:30 am to 5:00 am</li>
              <li>7:30 am to 12:00 pm</li>
              <li>Evening: 12:30 pm to 1:00 pm</li>
              <li>4:30 pm to 6:30 pm</li>
              <li>7:00 pm to 8:00 pm</li>
              <li>8:30 pm to 8:45 pm</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">Daily Programs</h2>
            <ul className="list-disc list-inside text-yellow-800">
              <li>04:30 am Maṅgala-Ārati</li>
              <li>04:55 am Narasiṃha-Ārati</li>
              <li>05:05 am Tulasī Ārati</li>
              <li>05.20 am Japa Meditation</li>
              <li>07:30 am Sringar Darśan</li>
              <li>07:45 am Guru-Pūjā</li>
              <li>08:10 am Śrīmad-Bhāgavatam Class</li>
              <li>12:30 pm Bhoga Ārati</li>
              <li>04:30 pm Vaikalika Bhoga Ārati</li>
              <li>06.50 pm Tulasī Ārati</li>
              <li>07:00 pm Gaura Ārati</li>
              <li>08:30 pm Śayana Ārati</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
