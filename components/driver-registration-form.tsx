"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export function DriverRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    licenseNumber: "",
    vehicleNumber: "",
    phoneNumber: "",
    email: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Basic validation
    if (!formData.fullName || !formData.licenseNumber || !formData.vehicleNumber || !formData.phoneNumber) {
      setError("Please fill in all required fields")
      setIsLoading(false)
      return
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock registration success
      setSuccess(true)

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/driver/login")
      }, 2000)
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="border border-border">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Registration Successful!</h3>
          <p className="text-muted-foreground">Redirecting to login page...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-center text-foreground">Driver Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <Label htmlFor="licenseNumber" className="text-foreground">
              Driver's License Number *
            </Label>
            <Input
              id="licenseNumber"
              type="text"
              placeholder="Enter your license number"
              value={formData.licenseNumber}
              onChange={(e) => setFormData((prev) => ({ ...prev, licenseNumber: e.target.value }))}
              className="bg-input border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicleNumber" className="text-foreground">
              Vehicle Number *
            </Label>
            <Input
              id="vehicleNumber"
              type="text"
              placeholder="Enter your vehicle number"
              value={formData.vehicleNumber}
              onChange={(e) => setFormData((prev) => ({ ...prev, vehicleNumber: e.target.value }))}
              className="bg-input border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-foreground">
              Phone Number *
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
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
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
