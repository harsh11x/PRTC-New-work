import { Navigation } from "@/components/navigation"
import { PassengerLoginForm } from "@/components/passenger-login-form"
import Link from "next/link"

export default function PassengerLoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-md mx-auto px-4 py-20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Passenger Login</h1>
          <p className="text-muted-foreground">Track buses in real-time</p>
        </div>

        <PassengerLoginForm />

        <div className="text-center mt-6">
          <p className="text-muted-foreground text-sm">
            New passenger?{" "}
            <Link href="/passenger/signup" className="text-primary hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </div>

        <div className="text-center mt-4">
          <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
