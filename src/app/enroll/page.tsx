"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, CreditCard, Lock, Calendar } from "lucide-react";
import { courses, certifications } from "@/lib/data";

export default function EnrollPage() {
  const [step, setStep] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    goals: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const allPrograms = [
    ...certifications.map((c) => ({
      id: c.id,
      type: "certification",
      title: c.title,
      price: c.salePrice || c.price,
      originalPrice: c.salePrice ? c.price : null,
      duration: c.duration,
    })),
    ...courses.map((c) => ({
      id: c.id,
      type: "course",
      title: c.title,
      price: c.salePrice || c.price,
      originalPrice: c.salePrice ? c.price : null,
      duration: c.duration,
    })),
  ];

  const selectedProgramData = allPrograms.find((p) => p.id === selectedProgram);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Start Your Certification
          </h1>
          <p className="mt-6 text-lg leading-8 text-rose-100 max-w-2xl mx-auto">
            Take the first step toward becoming a certified relationship coach.
            Complete the enrollment form below.
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-4">
          {[
            { num: 1, label: "Select Program" },
            { num: 2, label: "Your Information" },
            { num: 3, label: "Payment" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div
                className={`flex items-center justify-center h-10 w-10 rounded-full ${
                  step >= s.num
                    ? "bg-rose-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > s.num ? <Check className="h-5 w-5" /> : s.num}
              </div>
              <span
                className={`ml-2 text-sm font-medium ${
                  step >= s.num ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {s.label}
              </span>
              {i < 2 && (
                <div
                  className={`w-16 h-0.5 mx-4 ${
                    step > s.num ? "bg-rose-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-24">
        {/* Step 1: Select Program */}
        {step === 1 && (
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Select Your Program
            </h2>
            <p className="text-gray-600 mb-8">
              Choose the certification or course you&apos;d like to enroll in.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Certification Programs</h3>
              {certifications.map((cert) => (
                <label
                  key={cert.id}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    selectedProgram === cert.id
                      ? "border-rose-600 bg-rose-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="program"
                      value={cert.id}
                      checked={selectedProgram === cert.id}
                      onChange={() => setSelectedProgram(cert.id)}
                      className="h-5 w-5 text-rose-600"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{cert.title}</p>
                      <p className="text-sm text-gray-500">{cert.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {cert.salePrice ? (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          ${cert.price.toLocaleString()}
                        </span>
                        <span className="ml-2 text-lg font-bold text-rose-600">
                          ${cert.salePrice.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">
                        ${cert.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </label>
              ))}

              <h3 className="font-semibold text-gray-900 mt-8">Individual Courses</h3>
              {courses.map((course) => (
                <label
                  key={course.id}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    selectedProgram === course.id
                      ? "border-rose-600 bg-rose-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="program"
                      value={course.id}
                      checked={selectedProgram === course.id}
                      onChange={() => setSelectedProgram(course.id)}
                      className="h-5 w-5 text-rose-600"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{course.title}</p>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {course.salePrice ? (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          ${course.price}
                        </span>
                        <span className="ml-2 text-lg font-bold text-rose-600">
                          ${course.salePrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">
                        ${course.price}
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <button
              onClick={() => selectedProgram && setStep(2)}
              disabled={!selectedProgram}
              className="mt-8 w-full flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white hover:bg-rose-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}

        {/* Step 2: Information */}
        {step === 2 && (
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Information
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us a bit about yourself and your coaching goals.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(3);
              }}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="IL">Israel</option>
                  <option value="AU">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Coaching Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                >
                  <option value="">Select your experience level</option>
                  <option value="none">No experience</option>
                  <option value="informal">Informal coaching/mentoring</option>
                  <option value="some">Some formal training</option>
                  <option value="certified">Already certified in another area</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  What are your coaching goals?
                </label>
                <textarea
                  name="goals"
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  placeholder="Tell us why you want to become a relationship coach..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-full border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white hover:bg-rose-500 transition-colors"
                >
                  Continue to Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && selectedProgramData && (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Payment Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Payment Details
              </h2>
              <p className="text-gray-600 mb-8">
                Complete your enrollment with secure payment.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 pl-12 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                    />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 text-rose-600 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="/terms" className="text-rose-600 hover:text-rose-500">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-rose-600 hover:text-rose-500">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 rounded-full border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white hover:bg-rose-500 transition-colors"
                  >
                    <Lock className="mr-2 h-5 w-5" />
                    Complete Enrollment
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
                <div className="border-b pb-4 mb-4">
                  <p className="font-medium text-gray-900">
                    {selectedProgramData.title}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {selectedProgramData.duration}
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  {selectedProgramData.originalPrice && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Original Price</span>
                      <span className="text-gray-400 line-through">
                        ${selectedProgramData.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      {selectedProgramData.originalPrice ? "Sale Price" : "Price"}
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${selectedProgramData.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-rose-600">
                      ${selectedProgramData.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="h-4 w-4" />
                  Secure 256-bit SSL encryption
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  30-day money-back guarantee. If you&apos;re not satisfied, we&apos;ll
                  refund your payment in full.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
