"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">LC</span>
            </div>
            <div className="text-left">
              <span className="text-xl font-bold text-gray-900">Lovy Coaching</span>
              <p className="text-xs text-gray-500">Student Portal</p>
            </div>
          </Link>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {isLogin ? "Welcome Back" : "Create Your Account"}
            </h1>
            <p className="mt-2 text-gray-600">
              {isLogin
                ? "Sign in to access your courses and dashboard"
                : "Start your journey to becoming a certified coach"}
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="Last name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pl-12 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  placeholder="your@email.com"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pl-12 pr-12 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pl-12 text-gray-900 focus:border-rose-500 focus:ring-rose-500"
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-rose-600 rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-rose-600 hover:text-rose-500"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 text-rose-600 rounded border-gray-300"
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
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white hover:bg-rose-500 transition-colors"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-rose-600 hover:text-rose-500"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Help Link */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Need help?{" "}
          <Link href="/contact" className="text-rose-600 hover:text-rose-500">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
