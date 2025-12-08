"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    href: "/programs",
    children: [
      { name: "All Courses", href: "/courses" },
      { name: "Certifications", href: "/certifications" },
      { name: "Free Resources", href: "/resources" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">LC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Lovy Coaching</span>
                <p className="text-xs text-gray-500">Relationship Coach Certification</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/login"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-rose-600"
            >
              <User className="mr-2 h-4 w-4" />
              Login
            </Link>
            <Link
              href="/enroll"
              className="rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 transition-colors"
            >
              Start Your Journey
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-700 hover:text-rose-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1 text-sm text-gray-600 hover:text-rose-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  href="/login"
                  className="block py-2 text-base font-medium text-gray-700 hover:text-rose-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/enroll"
                  className="block w-full text-center rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
