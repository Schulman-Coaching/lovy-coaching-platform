import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-rose-100 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-100 opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
                Torah-Based Relationship Coaching Certification
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Transform Lives Through{" "}
              <span className="text-rose-600">Relationship Coaching</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Become a certified relationship coach with our comprehensive training program.
              Learn from Rabbi Shlomo and Malky Lovy&apos;s proven methodology that combines
              Torah wisdom with modern coaching techniques to help couples build stronger,
              more fulfilling marriages.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-rose-500 transition-all hover:shadow-xl"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-md ring-1 ring-gray-200 hover:bg-gray-50 transition-all"
              >
                <Play className="mr-2 h-5 w-5 text-rose-600" />
                Watch Introduction
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 ring-2 ring-white flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">500+</span> coaches certified worldwide
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="mt-16 lg:mt-0">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-200 to-rose-300 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="h-24 w-24 mx-auto rounded-full bg-white/80 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-rose-600">LC</span>
                    </div>
                    <h3 className="text-xl font-semibold text-rose-900">
                      Rabbi Shlomo & Malky Lovy
                    </h3>
                    <p className="text-rose-700 mt-2">Founders & Lead Instructors</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ICF Aligned</p>
                    <p className="text-sm text-gray-500">Accredited Training</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 text-xl">★</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                    <p className="text-sm text-gray-500">From 200+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
