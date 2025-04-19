'use client'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const HeroBanner = () => {
  return (
   <main className="relative min-h-auto sm-h-600px">
  <Header/>
    <section className="relative w-full h-auto object-cover overflow-hidden">
      {/* Background Image */}
      <video
        src="/2795171-uhd_3840_2160_25fps.mp4" // ✅ Use your local image in /public folder
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="brightness-75" // dim the background a bit
      ></video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Welcome to <em className="italic font-light red">Technology Hub</em>
          </h1>
          <p className="text-lg md:text-xl">
          Explore the latest trends, tools, and breakthroughs in the world of technology.
          </p>
          <button className="mt-4 px-6 py-3  bg-orange-500 hover:text-orange-600 text-lg font-medium rounded shadow-md transition"> 
            Explore More
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </main>
  )
}
export default HeroBanner
