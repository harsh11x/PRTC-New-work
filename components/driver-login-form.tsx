"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export function DriverLoginForm() {
  const [formData, setFormData] = useState({
    licenseNumber: "",
    vehicleNumber: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Driver login form submitted", formData)
    setIsLoading(true)
    setError("")

    // Basic validation
    if (!formData.licenseNumber || !formData.vehicleNumber) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    // Simulate API call
    try {
      console.log("[v0] Starting authentication process")
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (formData.licenseNumber === "admin" && formData.vehicleNumber === "admin123") {
        console.log("[v0] Admin login successful")
        // Store admin session
        localStorage.setItem(
          "driverAuth",
          JSON.stringify({
            licenseNumber: formData.licenseNumber,
            vehicleNumber: formData.vehicleNumber,
            loginTime: new Date().toISOString(),
          }),
        )
        console.log("[v0] Redirecting to driver dashboard")
        try {
          await router.push("/driver/dashboard")
        } catch (navError) {
          console.log("[v0] Router.push failed, using window.location", navError)
          window.location.href = "/driver/dashboard"
        }
      }
      // Mock authentication - in real app, this would validate against database
      else if (formData.licenseNumber.length >= 8 && formData.vehicleNumber.length >= 6) {
        console.log("[v0] Regular driver login successful")
        // Store driver session (in real app, use proper auth)
        localStorage.setItem(
          "driverAuth",
          JSON.stringify({
            licenseNumber: formData.licenseNumber,
            vehicleNumber: formData.vehicleNumber,
            loginTime: new Date().toISOString(),
          }),
        )

        try {
          await router.push("/driver/dashboard")
        } catch (navError) {
          console.log("[v0] Router.push failed, using window.location", navError)
          window.location.href = "/driver/dashboard"
        }
      } else {
        console.log("[v0] Invalid credentials")
        setError("Invalid license number or vehicle number")
      }
    } catch (err) {
      console.log("[v0] Login error:", err)
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-center text-foreground">Driver Credentials</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="licenseNumber" className="text-foreground">
              Driver's License Number
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
              Vehicle Number
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

          {error && (
            <Alert className="border-destructive">
              <AlertDescription className="text-destructive">{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>

          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              Demo Admin: <span className="font-mono font-semibold text-primary">admin</span> /{" "}
              <span className="font-mono font-semibold text-primary">admin123</span>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
