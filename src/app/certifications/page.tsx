import Link from "next/link";
import { Check, ArrowRight, Award, Clock, BookOpen, Users } from "lucide-react";
import { certifications, courses } from "@/lib/data";

export const metadata = {
  title: "Certifications | Lovy Coaching",
  description: "Earn your professional relationship coaching certification. Choose from our CRC and MCRC certification tracks.",
};

export default function CertificationsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
            Professional Credentials
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Certification Programs
          </h1>
          <p className="mt-6 text-lg leading-8 text-rose-100 max-w-2xl mx-auto">
            Earn recognized credentials that demonstrate your expertise and commitment
            to excellence in relationship coaching.
          </p>
        </div>
      </div>

      {/* Certification Tracks */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`relative rounded-3xl overflow-hidden ${
                index === 1
                  ? "bg-gradient-to-br from-gray-900 to-gray-800"
                  : "bg-gradient-to-br from-rose-50 to-amber-50 ring-1 ring-gray-200"
              }`}
            >
              {/* Header */}
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${
                      index === 1
                        ? "bg-amber-500 text-white"
                        : "bg-rose-600 text-white"
                    }`}
                  >
                    {index === 0 ? "Foundation Level" : "Master Level"}
                  </span>
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      index === 1 ? "bg-amber-500" : "bg-rose-600"
                    }`}
                  >
                    <Award className="h-7 w-7 text-white" />
                  </div>
                </div>

                <h2
                  className={`text-3xl font-bold ${
                    index === 1 ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h2>
                <p
                  className={`mt-4 text-base ${
                    index === 1 ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {cert.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-x-2">
                  {cert.salePrice ? (
                    <>
                      <span
                        className={`text-4xl font-bold ${
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
                      className={`text-4xl font-bold ${
                        index === 1 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      ${cert.price.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div
                  className={`mt-4 flex items-center gap-6 text-sm ${
                    index === 1 ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {cert.duration}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" />
                    {cert.courses.length} courses
                  </span>
                </div>
              </div>

              {/* Requirements */}
              <div className="p-8">
                <h3
                  className={`font-semibold mb-4 ${
                    index === 1 ? "text-white" : "text-gray-900"
                  }`}
                >
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {cert.requirements.map((req) => (
                    <li key={req} className="flex items-start">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          index === 1 ? "text-amber-400" : "text-rose-600"
                        }`}
                      />
                      <span
                        className={`ml-3 text-sm ${
                          index === 1 ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="p-8 pt-0">
                <h3
                  className={`font-semibold mb-4 ${
                    index === 1 ? "text-white" : "text-gray-900"
                  }`}
                >
                  What You&apos;ll Receive
                </h3>
                <ul className="space-y-3">
                  {cert.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
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
              </div>

              {/* CTA */}
              <div className="p-8 pt-0">
                <Link
                  href={`/certifications/${cert.slug}`}
                  className={`flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-semibold transition-all ${
                    index === 1
                      ? "bg-amber-500 text-white hover:bg-amber-400"
                      : "bg-rose-600 text-white hover:bg-rose-500"
                  }`}
                >
                  Learn More & Enroll
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Compare Certifications</h2>
            <p className="mt-4 text-lg text-gray-600">
              See which certification is right for your goals
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    CRC
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    MCRC
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Duration</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">4 months</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">8 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Required Courses</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">5</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Supervised Practice Hours</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">20</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">100</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Mentor Coaching</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">10 hours</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">20 hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Directory Listing</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Featured Listing</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Priority Referrals</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Become a Mentor</td>
                  <td className="px-6 py-4 text-center text-gray-400">—</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Certification Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              Your path from enrollment to certification
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Enroll",
                description: "Choose your certification track and complete enrollment",
              },
              {
                step: "2",
                title: "Learn",
                description: "Complete required courses and training modules",
              },
              {
                step: "3",
                title: "Practice",
                description: "Gain supervised coaching experience with real clients",
              },
              {
                step: "4",
                title: "Certify",
                description: "Pass examinations and receive your credential",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-rose-600 flex items-center justify-center text-2xl font-bold text-white mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-rose-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Certified?</h2>
          <p className="mt-4 text-lg text-rose-100 max-w-2xl mx-auto">
            Take the first step toward becoming a certified relationship coach.
            Schedule a free consultation to discuss your goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enroll"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
            >
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-rose-700 px-8 py-4 text-base font-semibold text-white hover:bg-rose-800 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
