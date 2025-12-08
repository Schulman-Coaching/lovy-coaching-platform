"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-rose-100 max-w-2xl mx-auto">
            Have questions about our programs? We&apos;re here to help you start
            your journey as a relationship coach.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you have questions about enrollment, want to learn more about
              our certification programs, or need guidance on which path is right
              for you, we&apos;re here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@lovycoaching.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-sm text-gray-500">Mon-Thu: 9am-5pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Brooklyn, NY</p>
                  <p className="text-sm text-gray-500">All programs available online</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Monday - Thursday: 9am - 5pm EST</p>
                  <p className="text-gray-600">Friday: 9am - 1pm EST</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 rounded-2xl bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faq" className="text-rose-600 hover:text-rose-500">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="/courses" className="text-rose-600 hover:text-rose-500">
                    Browse Our Courses
                  </a>
                </li>
                <li>
                  <a href="/certifications" className="text-rose-600 hover:text-rose-500">
                    Certification Programs
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-rose-600 hover:text-rose-500">
                    About Our Founders
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16 lg:mt-0">
            <div className="rounded-3xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you soon.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                      >
                        <option value="">Select a topic</option>
                        <option value="enrollment">Program Enrollment</option>
                        <option value="certification">Certification Questions</option>
                        <option value="courses">Course Information</option>
                        <option value="payment">Payment & Pricing</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white hover:bg-rose-500 transition-colors"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Call CTA */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prefer to Talk?
          </h2>
          <p className="text-gray-600 mb-8">
            Schedule a free 15-minute consultation call with our team to discuss
            your goals and find the right program for you.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white hover:bg-rose-500 transition-colors"
          >
            Schedule a Free Call
          </a>
        </div>
      </div>
    </div>
  );
}
