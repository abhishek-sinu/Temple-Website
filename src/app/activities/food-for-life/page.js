"use client";
export default function FoodForLife() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <img src="https://picsum.photos/seed/food/800/300" alt="Food For Life" className="w-full h-48 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">Food For Life</h1>
          <p className="text-lg text-gray-700 text-center">Our Food For Life program serves nutritious, sanctified meals to those in need. Join us in our mission to end hunger and spread compassion.</p>
        </div>
      </div>
    </div>
  );
}
