'use client'

import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 w-full bg-gray-800 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0">
        <p className="text-sm">
          &copy; {currentYear} Next Boilerplate Ai. All rights reserved.
        </p>
        <nav className="flex space-x-6">
          <Link href="/privacy" className="hover:text-mint-3 text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-mint-3 text-sm">
            Terms of Service
          </Link>
        </nav>
        <div className="flex space-x-4">
          {/* Social media icons or other footer elements can be added here */}
        </div>
      </div>
    </footer>
  )
}
