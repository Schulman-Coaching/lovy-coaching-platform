import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerNavigation = {
  programs: [
    { name: "All Courses", href: "/courses" },
    { name: "CRC Certification", href: "/certifications/certified-relationship-coach" },
    { name: "MCRC Certification", href: "/certifications/master-relationship-coach" },
    { name: "Free Resources", href: "/resources" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Approach", href: "/about#approach" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Student Login", href: "/login" },
    { name: "Coach Directory", href: "/directory" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "YouTube", href: "#", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">LC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Lovy Coaching</span>
                <p className="text-xs text-gray-400">Relationship Coach Certification</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Empowering coaches to strengthen marriages through Torah wisdom and proven coaching methodologies.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-rose-400" />
                <a href="mailto:info@lovycoaching.com" className="hover:text-white">
                  info@lovycoaching.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-rose-400" />
                <a href="tel:+1234567890" className="hover:text-white">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>Brooklyn, NY</span>
              </div>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-md">
              <h3 className="text-sm font-semibold leading-6 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Get coaching tips, resources, and program updates delivered to your inbox.
              </p>
            </div>
            <form className="mt-6 md:mt-0 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Lovy Coaching. All rights reserved. Founded by Rabbi Shlomo Lovy & Malky Lovy.
          </p>
        </div>
      </div>
    </footer>
  );
}
