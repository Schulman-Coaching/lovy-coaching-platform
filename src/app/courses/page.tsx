import Link from "next/link";
import { Clock, BarChart, BookOpen, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data";

const levelColors = {
  BEGINNER: "bg-green-100 text-green-700",
  INTERMEDIATE: "bg-amber-100 text-amber-700",
  ADVANCED: "bg-rose-100 text-rose-700",
  ALL_LEVELS: "bg-blue-100 text-blue-700",
};

const levelLabels = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  ALL_LEVELS: "All Levels",
};

export const metadata = {
  title: "Courses | Lovy Coaching",
  description: "Explore our comprehensive relationship coaching courses designed to help you become a certified coach.",
};

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Coaching Courses
          </h1>
          <p className="mt-6 text-lg leading-8 text-rose-100 max-w-2xl mx-auto">
            Comprehensive training programs designed to take you from beginner to certified
            relationship coach. Choose the courses that match your goals.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="rounded-full bg-rose-600 px-6 py-2 text-sm font-medium text-white">
            All Courses
          </button>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Core Training
          </button>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Specialized Training
          </button>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Business Development
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              {/* Thumbnail */}
              <div className="aspect-[16/9] bg-gradient-to-br from-rose-200 to-rose-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-rose-600" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      levelColors[course.level]
                    }`}
                  >
                    {levelLabels[course.level]}
                  </span>
                </div>
                {course.salePrice && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">
                      Sale
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-600">{course.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                    <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Features preview */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                  {course.features.length > 2 && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                      +{course.features.length - 2} more
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <BarChart className="mr-1 h-4 w-4" />
                      {course.modules.length} modules
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {course.salePrice ? (
                      <div>
                        <span className="text-sm text-gray-400 line-through">
                          ${course.price}
                        </span>
                        <span className="ml-2 text-xl font-bold text-rose-600">
                          ${course.salePrice}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-gray-900">
                        ${course.price}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-500 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-rose-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-rose-100 max-w-2xl mx-auto">
            Schedule a free consultation call and we&apos;ll help you choose the right
            program for your goals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
          >
            Schedule a Free Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
