"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export function PassengerSignupForm() {
  const [step, setStep] = useState<"details" | "otp">("details")
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    otp: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!formData.fullName || !formData.phoneNumber) {
      setError("Please fill in all required fields")
      setIsLoading(false)
      return
    }

    if (formData.phoneNumber.length < 10) {
      setError("Please enter a valid phone number")
      setIsLoading(false)
      return
    }

    // Simulate sending OTP
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStep("otp")
    } catch (err) {
      setError("Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!formData.otp || formData.otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP")
      setIsLoading(false)
      return
    }

    // Simulate OTP verification and account creation
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock OTP verification (in real app, verify with backend)
      if (formData.otp === "123456") {
        // Store passenger session
        localStorage.setItem(
          "passengerAuth",
          JSON.stringify({
            phoneNumber: formData.phoneNumber,
            fullName: formData.fullName,
            email: formData.email,
            loginTime: new Date().toISOString(),
          }),
        )

        router.push("/passenger/dashboard")
      } else {
        setError("Invalid OTP. Please try again.")
      }
    } catch (err) {
      setError("Signup failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-center text-foreground">
          {step === "details" ? "Create Account" : "Verify Phone Number"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {step === "details" ? (
          <form onSubmit={handleDetailsSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                className="bg-input border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-foreground">
                Mobile Number *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                className="bg-input border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email (Optional)
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="bg-input border-border"
              />
            </div>

            {error && (
              <Alert className="border-destructive">
                <AlertDescription className="text-destructive">{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending OTP..." : "Create Account"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-foreground">
                Enter OTP
              </Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter 6-digit OTP"
                value={formData.otp}
                onChange={(e) => setFormData((prev) => ({ ...prev, otp: e.target.value }))}
                className="bg-input border-border text-center text-lg tracking-widest"
                maxLength={6}
                required
              />
              <p className="text-sm text-muted-foreground">OTP sent to {formData.phoneNumber}</p>
            </div>

            {error && (
              <Alert className="border-destructive">
                <AlertDescription className="text-destructive">{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Verify & Create Account"}
              </Button>

              <Button type="button" variant="ghost" className="w-full" onClick={() => setStep("details")}>
                Change Details
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Demo OTP: <span className="font-mono font-semibold">123456</span>
              </p>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
