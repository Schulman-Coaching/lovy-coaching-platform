import { BookOpen, Users, Clock, Target, Award, Heart } from "lucide-react";

const features = [
  {
    name: "Torah-Based Approach",
    description:
      "Our methodology is grounded in Torah wisdom and Jewish values, providing a unique and authentic framework for relationship coaching.",
    icon: BookOpen,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
  {
    name: "Expert Instruction",
    description:
      "Learn from Rabbi Shlomo and Malky Lovy, who bring decades of combined experience in relationship coaching and marriage enrichment.",
    icon: Users,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    name: "Flexible Learning",
    description:
      "Study at your own pace with our online platform. Access video lessons, resources, and community support anytime, anywhere.",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    name: "Practical Training",
    description:
      "Gain hands-on experience through role-plays, supervised practice sessions, and real-world case studies.",
    icon: Target,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    name: "Recognized Certification",
    description:
      "Earn credentials that demonstrate your expertise and open doors to coaching opportunities in the Jewish community and beyond.",
    icon: Award,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    name: "Ongoing Support",
    description:
      "Join a supportive community of coaches with access to mentorship, continuing education, and professional development.",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our comprehensive program provides all the training, tools, and support you need
            to become an effective relationship coach.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="group relative">
                <div className="rounded-2xl bg-gray-50 p-8 transition-all hover:bg-white hover:shadow-lg">
                  <dt className="flex items-center gap-x-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgColor}`}
                    >
                      <feature.icon
                        className={`h-7 w-7 ${feature.color}`}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </span>
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
