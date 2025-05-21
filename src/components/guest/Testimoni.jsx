import testimonials from "../../data/testimonials.json";

export default function Testimoni() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimoni Pengguna</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl shadow-md p-6 text-center"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 border border-gray-200"
              />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
