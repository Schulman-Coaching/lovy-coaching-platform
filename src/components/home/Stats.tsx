const stats = [
  { id: 1, value: "500+", label: "Certified Coaches" },
  { id: 2, value: "10,000+", label: "Couples Helped" },
  { id: 3, value: "98%", label: "Satisfaction Rate" },
  { id: 4, value: "15+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="bg-rose-600 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Coaches Worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-rose-100">
              Join hundreds of certified coaches making a difference in marriages every day.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <dt className="text-base leading-7 text-rose-100">{stat.label}</dt>
                <dd className="mt-2 text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
