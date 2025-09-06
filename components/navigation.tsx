"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#1f2937", color: "white" }}
              >
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-foreground">PRTC</h1>
                <p className="text-xs text-muted-foreground">Punjab Roadways</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Support
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>

            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>

            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
