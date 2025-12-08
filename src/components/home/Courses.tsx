import Link from "next/link";
import { Clock, BarChart, ArrowRight } from "lucide-react";
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

export default function Courses() {
  const featuredCourses = courses.filter((course) => course.isFeatured);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
            Our Programs
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start Your Coaching Journey
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive courses designed to take you from beginner to certified professional coach.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              {/* Thumbnail */}
              <div className="aspect-[16/9] bg-gradient-to-br from-rose-200 to-rose-300 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                    <span className="text-2xl font-bold text-rose-600">
                      {course.title.charAt(0)}
                    </span>
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
                  <div className="text-right">
                    {course.salePrice ? (
                      <div>
                        <span className="text-sm text-gray-400 line-through">
                          ${course.price}
                        </span>
                        <span className="ml-2 text-lg font-bold text-rose-600">
                          ${course.salePrice}
                        </span>
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">
                        ${course.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-rose-500 transition-all"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
