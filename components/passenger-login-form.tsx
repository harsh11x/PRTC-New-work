"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export function PassengerLoginForm() {
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [formData, setFormData] = useState({
    phoneNumber: "",
    otp: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Passenger phone form submitted", formData)
    setIsLoading(true)
    setError("")

    if (formData.phoneNumber === "admin" && step === "phone") {
      console.log("[v0] Admin passenger login")
      // Skip OTP for admin, go directly to dashboard
      localStorage.setItem(
        "passengerAuth",
        JSON.stringify({
          phoneNumber: formData.phoneNumber,
          loginTime: new Date().toISOString(),
        }),
      )
      console.log("[v0] Redirecting to passenger dashboard")
      try {
        await router.push("/passenger/dashboard")
      } catch (navError) {
        console.log("[v0] Router.push failed, using window.location", navError)
        window.location.href = "/passenger/dashboard"
      }
      setIsLoading(false)
      return
    }

    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      setError("Please enter a valid phone number")
      setIsLoading(false)
      return
    }

    // Simulate sending OTP
    try {
      console.log("[v0] Sending OTP")
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("[v0] OTP sent, moving to OTP step")
      setStep("otp")
    } catch (err) {
      console.log("[v0] OTP send error:", err)
      setError("Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] OTP form submitted", formData)
    setIsLoading(true)
    setError("")

    if (!formData.otp || formData.otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP")
      setIsLoading(false)
      return
    }

    // Simulate OTP verification
    try {
      console.log("[v0] Verifying OTP")
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock OTP verification (in real app, verify with backend)
      if (formData.otp === "123456") {
        console.log("[v0] OTP verification successful")
        // Store passenger session
        localStorage.setItem(
          "passengerAuth",
          JSON.stringify({
            phoneNumber: formData.phoneNumber,
            loginTime: new Date().toISOString(),
          }),
        )

        console.log("[v0] Redirecting to passenger dashboard")
        try {
          await router.push("/passenger/dashboard")
        } catch (navError) {
          console.log("[v0] Router.push failed, using window.location", navError)
          window.location.href = "/passenger/dashboard"
        }
      } else {
        console.log("[v0] Invalid OTP")
        setError("Invalid OTP. Please try again.")
      }
    } catch (err) {
      console.log("[v0] OTP verification error:", err)
      setError("Verification failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-center text-foreground">
          {step === "phone" ? "Enter Phone Number" : "Verify OTP"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {step === "phone" ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-foreground">
                Mobile Number
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

            {error && (
              <Alert className="border-destructive">
                <AlertDescription className="text-destructive">{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                Admin Access: <span className="font-mono font-semibold text-primary">admin</span> (direct login)
              </p>
            </div>
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
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              <Button type="button" variant="ghost" className="w-full" onClick={() => setStep("phone")}>
                Change Phone Number
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Demo OTP: <span className="font-mono font-semibold text-primary">123456</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Admin Access: <span className="font-mono font-semibold text-primary">admin</span> (no OTP needed)
              </p>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
