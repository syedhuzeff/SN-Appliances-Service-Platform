export default function Brands() {
  const brands = [
    "Samsung",
    "LG",
    "IFB",
    "Whirlpool",
    "Bosch",
    "Godrej",
    "Haier",
    "Panasonic",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Brands We Service
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We repair and service all major washing machine brands.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-gray-100 rounded-xl shadow-md p-8 text-center hover:bg-blue-700 hover:text-white transition duration-300"
            >
              <h3 className="text-2xl font-semibold">
                {brand}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}