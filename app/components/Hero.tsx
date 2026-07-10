import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="text-center lg:text-left">

            {/* Premium Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full font-semibold shadow-lg mb-8">
              ⭐ Trusted Washing Machine Service in Bengaluru
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Washing Machine
              <br />
              Repair At Your
              <br />
              Doorstep
            </h1>

            <p className="mt-6 text-xl text-blue-100 max-w-xl">
              Fast, reliable and affordable washing machine repair,
              servicing and installation across Bengaluru by experienced
              technicians.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">

              {/* Book Technician */}
              <Link
                href="/book"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
              >
                📅 Book Technician
              </Link>

              {/* Call Us */}
              <a
                href="tel:9380040940"
                className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300 inline-flex items-center justify-center"
              >
                📞 Call Us
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919380040940?text=Hello%20SN%20Appliances,%20I%20need%20washing%20machine%20repair."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition duration-300 inline-flex items-center justify-center"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=700"
              alt="Washing Machine Repair"
              className="rounded-3xl shadow-2xl w-full max-w-md h-auto"
            />

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">

          <div>
            <h2 className="text-4xl font-bold">1000+</h2>
            <p className="text-blue-100 mt-2">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">8+</h2>
            <p className="text-blue-100 mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">Same Day</h2>
            <p className="text-blue-100 mt-2">Service</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">All Brands</h2>
            <p className="text-blue-100 mt-2">Supported</p>
          </div>

        </div>

      </div>
    </section>
  );
}