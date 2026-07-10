export default function FAQ() {
  const faqs = [
    {
      question: "Do you provide same-day service?",
      answer:
        "Yes. Same-day service is available in most areas of Bengaluru depending on technician availability.",
    },
    {
      question: "Which washing machine brands do you repair?",
      answer:
        "We repair Samsung, LG, IFB, Whirlpool, Bosch, Godrej, Panasonic, Haier and most major brands.",
    },
    {
      question: "Is there a visiting charge?",
      answer:
        "Yes. Visiting charges may apply after the technician visits your location. The final repair cost will be explained before any work begins.",
    },
    {
      question: "Do you provide genuine spare parts?",
      answer:
        "Yes. We use quality spare parts whenever replacement is required.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Everything you need to know before booking a technician.
        </p>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-gray-100 rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

              <p className="text-gray-700 mt-3">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}