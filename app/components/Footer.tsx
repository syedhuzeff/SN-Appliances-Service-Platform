import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              SN Appliances
            </h2>

            <p className="mt-4 text-gray-300">
              Professional Washing Machine Repair & Service across Bengaluru.
            </p>

            <p className="mt-4 text-gray-400">
              Fast • Reliable • Affordable
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <Link href="/book">Book Technician</Link>
              </li>

            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Service Areas
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Whitefield</li>
              <li>Koramangala</li>
              <li>Electronic City</li>
              <li>HSR Layout</li>
              <li>Marathahalli</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Business Hours
            </h3>

            <p className="text-gray-300">
              Monday - Saturday
            </p>

            <p className="text-gray-300">
              9:00 AM – 8:00 PM
            </p>

            <p className="mt-4 text-green-400 font-semibold">
              ✔ Same Day Service Available
            </p>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <div className="text-center text-gray-400">
          © 2026 SN Appliances. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}