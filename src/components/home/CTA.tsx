import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-rose-600 py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="400" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="300" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="2" />
          <circle cx="400" cy="400" r="100" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Lives?
          </h2>
          <p className="mt-6 text-lg leading-8 text-rose-100">
            Join our community of certified relationship coaches and make a lasting
            impact on marriages in your community. Start your journey today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enroll"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-rose-600 shadow-lg hover:bg-rose-50 transition-all"
            >
              Start Your Certification
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-rose-700 px-8 py-4 text-base font-semibold text-white hover:bg-rose-800 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Link>
          </div>
          <p className="mt-6 text-sm text-rose-200">
            Have questions? Contact us at{" "}
            <a href="mailto:info@lovycoaching.com" className="underline hover:text-white">
              info@lovycoaching.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
