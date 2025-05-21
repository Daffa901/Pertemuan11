import products from "../../data/product.json";

export default function Shop() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: 'url("/img/hero-bg.jpg")' }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Products</h1>
          <p className="mt-2">
            <span className="text-green-500">Home</span> / Products
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 space-y-10">
            {/* Search */}
            <div className="flex">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 px-4 py-2 rounded-l"
              />
              <button className="bg-green-500 px-4 py-2 text-white rounded-r">
                🔍
              </button>
            </div>

            {/* Price Filter */}
            <div>
              <h2 className="text-xl font-bold mb-2">Price</h2>
              <input type="range" min={30} max={150} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$30.00</span>
                <span>$150.00</span>
              </div>
              <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded">
                Filter
              </button>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-xl font-bold mb-3">Categories</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Vegetables</li>
                <li>Fresh Fruits</li>
                <li>Dairy Products</li>
                <li>Tomatos</li>
                <li>Oranges</li>
              </ul>
            </div>
          </aside>

          {/* Product Listing */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">Showing 1–9 of {products.length} results</span>
              <select className="border border-gray-300 px-4 py-2 rounded">
                <option>Sort by popular</option>
                <option>Sort by price</option>
                <option>Sort by rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="relative group text-center border border-white rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition"
                >
                  {/* Hover Action Icons */}
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="flex space-x-4">
                      <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                        ❤️
                      </button>
                      <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                        🛒
                      </button>
                    </div>
                  </div>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>

                  {/* Rating Stars */}
                  <div className="text-green-500 mt-1 text-sm">
                    {"★★★★★".slice(0, 5)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
