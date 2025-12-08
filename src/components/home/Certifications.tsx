import Link from "next/link";
import { Check, ArrowRight, Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            Certification Tracks
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Earn Your Professional Credential
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose the certification path that matches your goals and experience level.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`relative overflow-hidden rounded-3xl p-8 ${
                index === 1
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
                  : "bg-gradient-to-br from-rose-50 to-amber-50 ring-1 ring-gray-200"
              }`}
            >
              {/* Badge */}
              <div
                className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${
                  index === 1
                    ? "bg-amber-500 text-white"
                    : "bg-rose-600 text-white"
                }`}
              >
                {index === 0 ? "Foundation" : "Advanced"}
              </div>

              {/* Icon */}
              <div
                className={`mt-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                  index === 1 ? "bg-amber-500" : "bg-rose-600"
                }`}
              >
                <Award className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3
                className={`mt-6 text-2xl font-bold ${
                  index === 1 ? "text-white" : "text-gray-900"
                }`}
              >
                {cert.title}
              </h3>
              <p
                className={`mt-4 text-base ${
                  index === 1 ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {cert.description}
              </p>

              {/* Duration & Price */}
              <div className="mt-6 flex items-baseline gap-x-2">
                {cert.salePrice ? (
                  <>
                    <span
                      className={`text-3xl font-bold ${
                        index === 1 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      ${cert.salePrice.toLocaleString()}
                    </span>
                    <span
                      className={`text-lg line-through ${
                        index === 1 ? "text-gray-400" : "text-gray-400"
                      }`}
                    >
                      ${cert.price.toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span
                    className={`text-3xl font-bold ${
                      index === 1 ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ${cert.price.toLocaleString()}
                  </span>
                )}
                <span
                  className={`text-sm ${
                    index === 1 ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  / {cert.duration}
                </span>
              </div>

              {/* Benefits */}
              <ul className="mt-8 space-y-3">
                {cert.benefits.slice(0, 5).map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 ${
                        index === 1 ? "text-amber-400" : "text-rose-600"
                      }`}
                    />
                    <span
                      className={`ml-3 text-sm ${
                        index === 1 ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/certifications/${cert.slug}`}
                className={`mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all ${
                  index === 1
                    ? "bg-amber-500 text-white hover:bg-amber-400"
                    : "bg-rose-600 text-white hover:bg-rose-500"
                }`}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
