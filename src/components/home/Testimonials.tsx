"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
            Success Stories
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Coaches Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hear from certified coaches who have transformed their careers and the lives of countless couples.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-3xl bg-white p-8 shadow-lg sm:p-12">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-rose-100" />
            <div className="relative">
              <blockquote className="text-xl leading-8 text-gray-700 sm:text-2xl sm:leading-9">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
                <div className="ml-auto flex gap-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-rose-100 hover:text-rose-600 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-rose-100 hover:text-rose-600 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-rose-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm line-clamp-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
