import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, BarChart, Check, Play, Download, Users, Award, ArrowRight } from "lucide-react";
import { courses } from "@/lib/data";

const levelLabels = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  ALL_LEVELS: "All Levels",
};

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} | Lovy Coaching`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
                  {course.category}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
                  {levelLabels[course.level]}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {course.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-rose-100">
                {course.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-rose-100">
                <span className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  {course.duration}
                </span>
                <span className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5" />
                  {course.modules.length} modules
                </span>
                <span className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  500+ enrolled
                </span>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-rose-600 ml-1" />
                  </div>
                </div>
                <div className="text-center mb-6">
                  {course.salePrice ? (
                    <div>
                      <span className="text-lg text-gray-400 line-through">
                        ${course.price}
                      </span>
                      <span className="ml-3 text-4xl font-bold text-gray-900">
                        ${course.salePrice}
                      </span>
                      <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        Save ${course.price - course.salePrice}
                      </span>
                    </div>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                  )}
                </div>
                <Link
                  href="/enroll"
                  className="block w-full rounded-full bg-rose-600 py-4 text-center text-lg font-semibold text-white hover:bg-rose-500 transition-colors"
                >
                  Enroll Now
                </Link>
                <p className="mt-4 text-center text-sm text-gray-500">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
              <div className="prose prose-rose max-w-none text-gray-600">
                {course.longDescription?.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* What You'll Learn */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Module {moduleIndex + 1}: {module.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {module.lessons.length} lessons
                        </p>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="px-6 py-3 flex items-center gap-3">
                          <Play className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="mt-16 lg:mt-0">
            {/* Course Includes */}
            <div className="rounded-2xl bg-gray-50 p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">This Course Includes</h3>
              <ul className="space-y-3">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-rose-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor */}
            <div className="rounded-2xl bg-gray-50 p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Your Instructors</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rabbi Shlomo Lovy</p>
                  <p className="text-sm text-gray-500">Lead Instructor</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ML</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Malky Lovy</p>
                  <p className="text-sm text-gray-500">Lead Instructor</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• No prior coaching experience required</li>
                <li>• Passion for helping couples</li>
                <li>• Commitment to complete all coursework</li>
                <li>• Access to computer/tablet with internet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Continue Your Journey</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((c) => c.slug !== course.slug)
              .slice(0, 3)
              .map((relatedCourse) => (
                <Link
                  key={relatedCourse.id}
                  href={`/courses/${relatedCourse.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <p className="text-sm font-medium text-rose-600">
                    {relatedCourse.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                    {relatedCourse.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {relatedCourse.description}
                  </p>
                  <div className="mt-4 flex items-center text-rose-600 text-sm font-medium">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
