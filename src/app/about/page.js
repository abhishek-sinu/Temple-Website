import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 font-sans px-0 md:px-0 py-0">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 gap-10 md:gap-20 bg-white/80 shadow-2xl rounded-b-3xl overflow-hidden">
        <div className="flex-1 flex flex-col justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-lg">About ISKCON</h1>
          <p className="text-lg md:text-xl text-blue-800 mb-6 font-medium max-w-2xl">
            The International Society for Krishna Consciousness (ISKCON), otherwise known as the Hare Krishna movement, includes five hundred major centers, temples and rural communities, nearly one hundred affiliated vegetarian restaurants, thousands of namahattas or local meeting groups, a wide variety of community projects, and millions of congregational members worldwide. Although less than fifty years on the global stage, ISKCON has expanded widely since its founding by His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda in New York City in 1966.
          </p>
        </div>
        <div className="flex-1 flex justify-center z-0">
          <div className="relative w-full max-w-md aspect-[4/3]">
              <Image src="/google-logo.png" alt="Google Logo" width={48} height={48} className="mx-auto mb-4" />
              <Image src="/about.png" alt="ISKCON Deities" fill className="rounded-3xl shadow-2xl object-cover border-4 border-blue-200" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 -z-10" />
      </section>

      {/* Philosophy Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-12 md:py-20">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Our Philosophy</h2>
          <p className="text-lg text-gray-800 mb-4">
            ISKCON belongs to the Gaudiya-Vaishnava sampradāya, a monotheistic tradition within the Vedic or Hindu culture. Philosophically it is based on the Sanskrit texts <span className="font-semibold text-blue-700">Bhagavad-gītā</span> and the <span className="font-semibold text-blue-700">Bhagavat Purana</span>, or <span className="font-semibold text-blue-700">Srimad Bhagavatam</span>. These are the historic texts of the devotional bhakti yoga tradition, which teaches that the ultimate goal for all living beings is to reawaken their love for God, or Lord Krishna, the “all-attractive one”.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            God is known across the world by many names including Allah, Jehovah, Yahweh, Rama, etc. ISKCON devotees chant God’s names in the form of the maha-mantra, or the great prayer for deliverance:
          </p>
          <div className="bg-blue-50 rounded-xl shadow p-4 md:p-6 mb-4 text-center text-xl md:text-2xl font-bold text-blue-900 tracking-wide">
            Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare<br />
            Hare Rama Hare Rama, Rama Rama, Hare Hare
          </div>
          <p className="text-lg text-gray-800 mb-4">
            ISKCON’s founder, Srila Prabhupada, has drawn appreciation from scholars and religious leaders alike for his remarkable achievement in presenting India’s Vaishnava spiritual culture in a relevant manner to contemporary Western and worldwide audiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-8 md:py-12">
        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-800 mb-4">
            The term “Hare Krishna”, or The Hare Krishna Movement™ Organization, formally The International Society for Krishna Consciousness (ISKCON), is the orthodox core of Hinduism. It was registered in the West (in New York) in July 1966, but dates back over 5000 years. Lord Chaitanya Mahaprabhu (1486-1532) popularized the movement all over India. Hinduism is the world’s third largest religion with over 900 million adherents, second to Christianity and Islam. The principal scriptures are The Bhagavad-gita (The Song of God), and the Shrimad Bhagavatam (the story of the Personality of Godhead Shri Krishna Bhagavan). Krishnas believe in one God.
          </p>
          <ul className="list-disc list-inside text-blue-900 text-lg mb-4 pl-4">
            <li>By sincerely cultivating true spiritual science, we can be free from anxiety and come to a state of pure, unending, blissful consciousness in this lifetime.</li>
            <li>We are not our bodies but eternal, spirit souls, parts and parcels of God (Krishna). As such, we are all brothers, and Krishna is ultimately our common father. We accept the process of transmigration of the soul (reincarnation).</li>
            <li>Krishna is eternal, all-knowing, omnipresent, all-powerful, and all-attractive. He is the seed-giving father of all living beings, and He is the sustaining energy of the entire cosmic creation. He is the same God as The Father, Allah, Buddha and Jehovah.</li>
            <li>The Absolute Truth is contained in the Vedas, the oldest scriptures in the world. The essence of the Vedas is found in the Bhagavad-gita, a literal record of Krishna’s words.</li>
            <li>One can learn the Vedic knowledge from a genuine spiritual master — one who has no selfish motives and whose mind is firmly fixed on Krishna.</li>
            <li>Before one eats, one offers to the Lord (Krishna) the food that sustains all humans; then Krishna becomes the offering and purifies the offered.</li>
            <li>One performs all actions as offerings to Krishna and does nothing for one’s own sense gratification.</li>
            <li>The recommended means for achieving the mature stage of love of God in this age of Kali, or quarrel, is to chant the holy names of the Lord. The easiest method for most people is to chant the Hare Krishna mantra.</li>
          </ul>
          <div className="bg-white rounded-xl shadow p-4 md:p-6 text-center text-lg md:text-xl font-semibold text-blue-800">
            Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare
          </div>
        </div>
      </section>

      {/* Community & Innovation Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-8 md:py-12">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Innovating for Krishna</h2>
            <p className="text-lg text-gray-800 mb-4">
              Members of ISKCON practice bhakti-yoga in their homes and also worship in temples. They also promote bhakti-yoga, or Krishna Consciousness, through festivals, the performing arts, yoga seminars, public chanting, and the distribution of the society’s literatures. ISKCON members have also opened hospitals, schools, colleges, eco-villages, free food distribution projects, and other institutions as a practical application of the path of devotional yoga.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Our movement is dedicated to finding new, creative ways to serve Krishna and humanity—whether through technology, sustainable living, or the arts. We invite you to join us in this journey of devotion and innovation.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/about1.png" alt="ISKCON Community" width={320} height={220} className="rounded-2xl shadow-lg object-cover border-2 border-blue-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
