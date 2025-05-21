export default function Home() {
  return (
    <div className="relative">
      {/* Hero Banner Section */}
      <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('img/minimarket.jpg')",
            filter: "brightness(0.85)",
          }}
        ></div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
          <button className="w-12 h-12 rounded-full bg-white bg-opacity-50 flex items-center justify-center transition hover:bg-opacity-75">
            <span className="text-2xl">&larr;</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-white bg-opacity-50 flex items-center justify-center transition hover:bg-opacity-75">
            <span className="text-2xl">&rarr;</span>
          </button>
        </div>

        {/* Main Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif mb-4">
            <span className="block">Organic</span>
            <span className="block mt-2">Food Market</span>
          </h1>
          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-10 transition">
            Order Now
          </button>
        </div>
      </div>

      {/* Feature Icons Section */}
      <div className="bg-white py-6 font-rubik">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 gap-6 px-4">
          {/* Return Policy */}
          <div className="flex items-center p-6 border border-gray-200 rounded-lg shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30 transition duration-300">
            <div className="mr-4">
              <svg
                className="w-12 h-12 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div>
              <h3 className="font-rubik text-gray-800">Return Policy</h3>
              <p className="text-gray-500 font-rubik">Money back guarantee</p>
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center p-6 border border-gray-200 rounded-lg shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30 transition duration-300">
            <div className="mr-4">
              <svg
                className="w-12 h-12 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Free Shipping</h3>
              <p className="text-gray-500">On all orders over $25.00</p>
            </div>
          </div>

          {/* Store Locator */}
          <div className="flex items-center p-6 border border-gray-200 rounded-lg shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30 transition duration-300">
            <div className="mr-4">
              <svg
                className="w-12 h-12 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Store Locator</h3>
              <p className="text-gray-500">Find your nearest store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 ">
        {/* Heading */}
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z"></path>
          </svg>
          <span className="text-green-500 text-sm font-abril">
            Recently Added
          </span>
        </div>

        <div className="flex justify-between items-center mb-8 font-abril">
          <h2 className="text-4xl font-serif text-gray-800 font-AbrilFatFace">
            Top Products
          </h2>

          {/* Category Tab */}
          <div className="hidden md:flex space-x-8 font-rubik">
            <button className="text-sm border-b-2 border-green-500 pb-1 text-green-500 font-medium">
              All
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-800 pb-1">
              Dairy
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-800 pb-1">
              Pantry
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-800 pb-1">
              Meat
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-800 pb-1">
              Fruits
            </button>
            <button className="text-sm text-gray-500 hover:text-gray-800 pb-1">
              Vegetables
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-rubik">
          {/* Product 1 - Lays */}
          <div className="group shadow-lg rounded-lg pb-4 transition-transform duration-300 hover:-translate-y-1">
            <div className="relative mb-4">
              <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-2 py-1">
                Sale
              </div>
              <div className="bg-gray-50 rounded-t-lg overflow-hidden aspect-square">
                <img
                  src="img/lays.jpg"
                  alt="Lays Chips"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Lays</h3>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-center text-gray-600">$1.00</p>
          </div>

          {/* Product 2 - Olive Oil */}
          <div className="group shadow-lg rounded-lg pb-4 transition-transform duration-300 hover:-translate-y-1">
            <div className="relative mb-4">
              <div className="bg-gray-50 rounded-t-lg overflow-hidden aspect-square">
                <img
                  src="img/takis.jpg"
                  alt="Takis"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Takis</h3>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-center text-gray-600">$9.00</p>
          </div>

          {/* Product 3 - Eggs */}
          <div className="group shadow-lg rounded-lg pb-4 transition-transform duration-300 hover:-translate-y-1">
            <div className="relative mb-4">
              <div className="bg-gray-50 rounded-t-lg overflow-hidden aspect-square">
                <img
                  src="img/cheetos.jpg"
                  alt="Eggs"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Cheetos</h3>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-center text-gray-600">$3.00</p>
          </div>
        </div>
      </div>
      {/* Statistic Section */}
      <div className="bg-black bg-opacity-80 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-b border-gray-700 py-8">
          <div>
            <h2 className="text-4xl font-bold">8,080</h2>
            <p className="text-green-400 mt-2">Organic Products Available</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">697</h2>
            <p className="text-green-400 mt-2">Healthy Recipes</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">440</h2>
            <p className="text-green-400 mt-2">Expert Team Members</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">2,870</h2>
            <p className="text-green-400 mt-2">Satisfied Customers</p>
          </div>
        </div>
      </div>

      {/* Highlight Banner Section */}
      <div className="bg-green-500 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-12 px-6 gap-8">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/img/mini2.jpg"
              alt="Minimarket"
              className="w-64 h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="uppercase tracking-wide mb-2">Shopping Store</p>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Rubik" }}
            >
              Organic Food Only
            </h2>
            <p className="text-white text-opacity-90">
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humor or random word.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
