import { ShieldCheck, House, Wallet, Clock3 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Technicians",
      description: "Skilled professionals with years of repair experience.",
      icon: ShieldCheck,
    },
    {
      title: "Doorstep Service",
      description: "Convenient home service across Bengaluru.",
      icon: House,
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges.",
      icon: Wallet,
    },
    {
      title: "Quick Response",
      description: "Same-day service for most locations.",
      icon: Clock3,
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose SN Appliances?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl shadow-lg p-8 flex gap-5 items-start hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="bg-blue-100 p-4 rounded-full">
                <reason.icon
                  size={32}
                  className="text-blue-600"
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {reason.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}