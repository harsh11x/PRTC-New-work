import { Navigation } from "@/components/navigation"
import { PassengerSignupForm } from "@/components/passenger-signup-form"
import Link from "next/link"

export default function PassengerSignupPage() {
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
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Passenger Signup</h1>
          <p className="text-muted-foreground">Create your account to track buses</p>
        </div>

        <PassengerSignupForm />

        <div className="text-center mt-6">
          <p className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link href="/passenger/login" className="text-primary hover:underline font-medium">
              Login here
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
