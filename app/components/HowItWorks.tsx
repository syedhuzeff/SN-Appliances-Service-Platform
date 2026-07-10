export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Book a Technician",
      description:
        "Fill in your details and book a service in less than a minute.",
    },
    {
      number: "2",
      title: "Technician Visits",
      description:
        "Our experienced technician visits your home at your preferred time.",
    },
    {
      number: "3",
      title: "Repair Completed",
      description:
        "Your washing machine is repaired quickly using genuine spare parts.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Just three simple steps to get your washing machine repaired.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}