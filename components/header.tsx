"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-app-card/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image src="/logo3.png" alt="FyndBae Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-app-primary">FyndBae</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-app-text-primary hover:text-app-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-app-text-primary hover:text-app-primary font-medium transition-colors">
              About
            </Link>
            <Link
              href="/features"
              className="text-app-text-primary hover:text-app-primary font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="text-app-text-primary hover:text-app-primary font-medium transition-colors"
            >
              Contact
            </Link>
            <Link href="/terms" className="text-app-text-primary hover:text-app-primary font-medium transition-colors">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-app-text-primary hover:text-app-primary font-medium transition-colors"
            >
              Privacy
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-app-primary hover:bg-app-primary/80 text-white">Download App</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-app-text-primary hover:bg-app-surface/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-app-card/90 backdrop-blur-md border-t border-white/10 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-app-text-primary hover:text-app-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-app-text-primary hover:text-app-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/features"
              className="text-app-text-primary hover:text-app-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="text-app-text-primary hover:text-app-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-app-text-primary hover:text-app-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-app-text-primary hover:text-app-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Button className="bg-app-primary hover:bg-app-primary/80 text-white w-full">Download App</Button>
          </div>
        </div>
      )}
    </header>
  )
}
