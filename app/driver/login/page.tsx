import { Navigation } from "@/components/navigation"
import { DriverLoginForm } from "@/components/driver-login-form"
import Link from "next/link"

export default function DriverLoginPage() {
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Driver Login</h1>
          <p className="text-muted-foreground">Access your driver dashboard</p>
        </div>

        <DriverLoginForm />

        <div className="text-center mt-6">
          <p className="text-muted-foreground text-sm">
            New driver?{" "}
            <Link href="/driver/register" className="text-primary hover:underline font-medium">
              Register here
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
