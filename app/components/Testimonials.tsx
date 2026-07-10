export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Kumar",
      location: "Koramangala",
      review:
        "Excellent service! The technician arrived on time and repaired my washing machine within an hour.",
      rating: "★★★★★",
    },
    {
      name: "Priya Sharma",
      location: "Whitefield",
      review:
        "Very professional and affordable. Highly recommended for washing machine repairs.",
      rating: "★★★★★",
    },
    {
      name: "Arjun Reddy",
      location: "Electronic City",
      review:
        "Quick response and genuine pricing. My machine is working perfectly now.",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by hundreds of happy customers across Bengaluru.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-yellow-500 text-xl mb-3">
                {review.rating}
              </div>

              <p className="text-gray-700 italic">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg text-gray-900">
                  {review.name}
                </h3>

                <p className="text-gray-500">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}