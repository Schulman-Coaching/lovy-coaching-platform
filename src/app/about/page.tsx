import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Users, Award, Star, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us | Lovy Coaching",
  description: "Meet Rabbi Shlomo and Malky Lovy, founders of Lovy Coaching. Learn about our mission to strengthen marriages through Torah-based relationship coaching.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Lovy Coaching
          </h1>
          <p className="mt-6 text-lg leading-8 text-rose-100 max-w-2xl mx-auto">
            Empowering coaches to strengthen marriages through Torah wisdom
            and proven coaching methodologies.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
                Our Mission
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Strengthening Jewish Marriages, One Coach at a Time
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Lovy Coaching, we believe that strong marriages are the foundation of
                healthy families and thriving communities. Our mission is to train and
                certify relationship coaches who can make a lasting impact on couples
                throughout the Jewish world.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We combine timeless Torah wisdom with modern coaching techniques to
                create a unique and powerful approach to relationship coaching. Our
                graduates are equipped to help couples communicate better, resolve
                conflicts, and build deeper connections.
              </p>
            </div>
            <div className="mt-16 lg:mt-0">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                <Heart className="h-32 w-32 text-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founders */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
              Our Founders
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Rabbi Shlomo & Malky Lovy
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Rabbi Shlomo */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-3xl">SL</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rabbi Shlomo Lovy</h3>
                  <p className="text-rose-600 font-medium">Co-Founder & Lead Instructor</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Rabbi Shlomo Lovy brings over 15 years of experience in rabbinic
                  counseling and relationship coaching to Lovy Coaching. He received
                  his semicha from a prestigious yeshiva and has dedicated his career
                  to helping couples build Torah-true marriages.
                </p>
                <p>
                  Rabbi Lovy is a certified coach with extensive training in the
                  Gottman Method and other evidence-based approaches. He has counseled
                  hundreds of couples and trained dozens of coaches in his unique
                  methodology.
                </p>
                <p>
                  His warm, empathetic approach and deep understanding of both Torah
                  sources and modern psychology make him an exceptional mentor for
                  aspiring relationship coaches.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                  Certified Coach
                </span>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                  Gottman Trained
                </span>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700">
                  15+ Years Experience
                </span>
              </div>
            </div>

            {/* Malky Lovy */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-3xl">ML</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Malky Lovy</h3>
                  <p className="text-amber-600 font-medium">Co-Founder & Lead Instructor</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Malky Lovy is a master relationship coach and educator who has
                  touched the lives of thousands of women and couples through her
                  teaching and coaching. She brings a unique perspective that
                  combines deep Torah knowledge with practical coaching skills.
                </p>
                <p>
                  With a background in education and psychology, Malky developed
                  many of the innovative training methods used in the Lovy Coaching
                  curriculum. She specializes in communication skills, emotional
                  intelligence, and helping couples navigate life transitions.
                </p>
                <p>
                  Her ability to create a safe, supportive learning environment
                  has made her a beloved mentor to coaches around the world.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Master Coach
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Educator
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Curriculum Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-24" id="approach">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
              Our Approach
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Lovy Coaching Methodology
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique approach integrates Torah wisdom with proven coaching techniques.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="h-14 w-14 rounded-xl bg-rose-100 flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Torah Foundation
              </h3>
              <p className="text-gray-600">
                Every aspect of our training is grounded in Torah values and
                perspectives on marriage. We draw from classical sources to
                provide a foundation that resonates with frum clients.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="h-14 w-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <Star className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Evidence-Based Methods
              </h3>
              <p className="text-gray-600">
                We integrate proven coaching methodologies including the Gottman
                Method, Emotionally Focused Therapy principles, and ICF core
                competencies into our training.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8">
              <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Practical Application
              </h3>
              <p className="text-gray-600">
                Our training emphasizes hands-on practice with role-plays,
                supervised coaching, and real-world case studies to ensure
                you&apos;re ready to help couples from day one.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Kedusha",
                description: "Approaching marriage with holiness and respect for its sacred nature.",
              },
              {
                title: "Emes",
                description: "Commitment to truth and authenticity in all our teaching and coaching.",
              },
              {
                title: "Chesed",
                description: "Leading with kindness and compassion in every interaction.",
              },
              {
                title: "Growth",
                description: "Continuous learning and improvement for ourselves and our students.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "500+", label: "Coaches Trained" },
              { value: "10,000+", label: "Couples Helped" },
              { value: "25+", label: "Countries Reached" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-rose-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-rose-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Join Our Community</h2>
          <p className="mt-4 text-lg text-rose-100 max-w-2xl mx-auto">
            Become part of a supportive community of coaches dedicated to
            strengthening marriages and families.
          </p>
          <Link
            href="/courses"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
          >
            Explore Our Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
