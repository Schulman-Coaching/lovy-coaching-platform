import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Testimonials | Lovy Coaching",
  description: "Read success stories from our certified relationship coaches and learn how Lovy Coaching transformed their careers.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Success Stories
          </h1>
          <p className="mt-6 text-lg leading-8 text-rose-100 max-w-2xl mx-auto">
            Hear from our certified coaches about their journey and how Lovy Coaching
            transformed their careers and the lives of the couples they serve.
          </p>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 p-12">
            <Quote className="absolute top-8 left-8 h-16 w-16 text-rose-200" />
            <div className="relative">
              <blockquote className="text-2xl leading-relaxed text-gray-700 mb-8">
                &ldquo;{testimonials[0].content}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">
                    {testimonials[0].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonials[0].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[0].role} • {testimonials[0].location}
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Testimonials Grid */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                    <span className="text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
            <p className="mt-4 text-lg text-gray-600">
              The numbers speak for themselves
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { value: "98%", label: "Satisfaction Rate" },
              { value: "500+", label: "Coaches Certified" },
              { value: "10,000+", label: "Couples Helped" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-gray-50 p-8">
                <p className="text-4xl font-bold text-rose-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonials Placeholder */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Video Testimonials</h2>
            <p className="mt-4 text-lg text-gray-600">
              Watch our coaches share their experiences
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-2xl bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <span className="text-rose-600 text-2xl ml-1">▶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-rose-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Write Your Success Story?
          </h2>
          <p className="mt-4 text-lg text-rose-100 max-w-2xl mx-auto">
            Join hundreds of certified coaches who have transformed their careers
            and the lives of couples in their communities.
          </p>
          <Link
            href="/courses"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
