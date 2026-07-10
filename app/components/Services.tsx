import { Wrench, Sparkles, House } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Washing Machine Repair",
      description: "Expert repair services for all major washing machine brands.",
      icon: Wrench,
    },
    {
      title: "Regular Maintenance",
      description: "Keep your washing machine running efficiently with periodic servicing.",
      icon: Sparkles,
    },
    {
      title: "Installation",
      description: "Professional washing machine installation at your doorstep.",
      icon: House,
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center mb-6">
                <service.icon
                  size={50}
                  className="text-blue-600"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}