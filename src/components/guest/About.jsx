export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: "url('/img/about-hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center text-white text-center">
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "AbrilFatFace" }}
            >
              About Us
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              <span className="text-green-400">Home</span> / About
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="space-y-6">
          <img
            src="/img/1.png"
            alt="Image 1"
            className="rounded-lg w-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-green-600 uppercase tracking-wide text-sm mb-2">
            Get to Know
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "AbrilFatFace" }}
          >
            We’re Selling Quality Products
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humor or words
            even slightly believable.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humor or words
            even slightly believable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-green-600 text-xl">●</span>
              <div>
                <h4 className="font-semibold">Magnis Dis Nascet</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum is free do sit
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 text-xl">●</span>
              <div>
                <h4 className="font-semibold">Libero id Ege</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum is free do sit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
