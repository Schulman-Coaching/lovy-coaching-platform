import Link from "next/link";
import { ArrowRight, Heart, Star, Users } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-rose-100 to-amber-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-32 w-32 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                    <Heart className="h-16 w-16 text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Rabbi Shlomo & Malky Lovy
                  </h3>
                  <p className="text-gray-600 mt-2">Founders & Lead Instructors</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-rose-600">15+</p>
                      <p className="text-xs text-gray-500">Years</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-rose-600">500+</p>
                      <p className="text-xs text-gray-500">Coaches</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-rose-600">10K+</p>
                      <p className="text-xs text-gray-500">Couples</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-rose-600 p-6 text-white shadow-xl">
              <Star className="h-8 w-8 mb-2" />
              <p className="text-sm font-medium">Torah-Based</p>
              <p className="text-xs opacity-80">Coaching Methodology</p>
            </div>

            <div className="absolute -top-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
              <Users className="h-8 w-8 text-amber-500 mb-2" />
              <p className="text-sm font-medium text-gray-900">Expert Training</p>
              <p className="text-xs text-gray-500">Decades of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="mt-16 lg:mt-0">
            <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
              About Our Founders
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Rabbi Shlomo & Malky Lovy
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With over 15 years of experience in relationship coaching and marriage enrichment,
              Rabbi Shlomo and Malky Lovy have dedicated their lives to strengthening Jewish marriages
              and training the next generation of relationship coaches.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Their unique approach integrates Torah wisdom with proven coaching methodologies,
              creating a powerful framework that resonates with couples seeking to build
              marriages grounded in kedusha and mutual respect.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-rose-600">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Deep Torah Knowledge</h4>
                  <p className="text-gray-600 text-sm">
                    Grounded in authentic Jewish teachings on marriage and relationships
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-rose-600">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Training</h4>
                  <p className="text-gray-600 text-sm">
                    Certified in leading coaching methodologies and approaches
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-rose-600">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Practical Experience</h4>
                  <p className="text-gray-600 text-sm">
                    Thousands of hours coaching couples and training coaches
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-rose-500 transition-all"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
