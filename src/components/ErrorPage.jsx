export default function ErrorPage({ errorCode, errorTitle, errorDescription }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A237E] text-white p-6">
        <div className="bg-[#1A237E] rounded-lg max-w-5xl w-full text-center md:text-left flex flex-col md:flex-row items-center">
          {/* Left - Text Section */}
          <div className="md:w-1/2 px-4">
            <h1 className="text-7xl md:text-8xl font-extrabold mb-4">{errorCode}</h1>
            <h2 className="text-3xl font-semibold mb-2">{errorTitle}</h2>
            <p className="text-lg mb-6">{errorDescription}</p>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition"
            >
              Back To Home
            </a>
          </div>
  
          {/* Right - Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="/img/framee.png"
              alt={`Error ${errorCode}`}
              className="w-[800px] md:w-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    );
  }
  