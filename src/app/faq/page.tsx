"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqs } from "@/lib/data";

const additionalFaqs = [
  {
    question: "How do I access my courses after enrolling?",
    answer: "After enrollment, you'll receive login credentials to access our student portal. All your courses, materials, and progress tracking are available through your personalized dashboard."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund, no questions asked."
  },
  {
    question: "Are the courses self-paced or scheduled?",
    answer: "Our courses are primarily self-paced, allowing you to learn on your own schedule. However, we also offer weekly live Q&A sessions and group coaching calls at scheduled times."
  },
  {
    question: "What technology do I need to participate?",
    answer: "You'll need a computer or tablet with reliable internet access. Our platform works on all modern browsers. For live sessions, you'll need a microphone and optionally a webcam."
  },
  {
    question: "Is the certification recognized internationally?",
    answer: "Our certification is recognized within the coaching community and aligns with ICF core competencies. Many of our graduates successfully coach clients worldwide."
  },
  {
    question: "Can I coach before completing certification?",
    answer: "Yes, we encourage supervised coaching practice during your training. You'll begin working with practice clients under supervision as part of your certification requirements."
  }
];

const allFaqs = [...faqs, ...additionalFaqs];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-rose-100 max-w-2xl mx-auto">
            Find answers to common questions about our coaching certification programs.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
        <div className="space-y-4">
          {allFaqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-7">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-3xl bg-gray-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help! Reach out to our team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white hover:bg-rose-500 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:info@lovycoaching.com"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Email: info@lovycoaching.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
