"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { DriverHeader } from "@/components/driver-header"
import { RouteSetup } from "@/components/route-setup"
import { ActiveRoute } from "@/components/active-route"
import { GPSStatus } from "@/components/gps-status"

interface DriverAuth {
  licenseNumber: string
  vehicleNumber: string
  loginTime: string
}

interface RouteData {
  routeNumber: string
  stops: string[]
  startTime: string
  isActive: boolean
}

export default function DriverDashboard() {
  const [driverAuth, setDriverAuth] = useState<DriverAuth | null>(null)
  const [currentRoute, setCurrentRoute] = useState<RouteData | null>(null)
  const [gpsEnabled, setGpsEnabled] = useState(false)
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const authData = localStorage.getItem("driverAuth")
    if (!authData) {
      router.push("/driver/login")
      return
    }

    try {
      const parsedAuth = JSON.parse(authData) as DriverAuth
      setDriverAuth(parsedAuth)
    } catch (error) {
      console.error("Invalid auth data:", error)
      router.push("/driver/login")
    }

    // Check for existing route
    const routeData = localStorage.getItem("driverRoute")
    if (routeData) {
      try {
        const parsedRoute = JSON.parse(routeData) as RouteData
        setCurrentRoute(parsedRoute)
      } catch (error) {
        console.error("Invalid route data:", error)
      }
    }
  }, [router])

  const handleRouteStart = (routeData: RouteData) => {
    setCurrentRoute(routeData)
    localStorage.setItem("driverRoute", JSON.stringify(routeData))
  }

  const handleRouteEnd = () => {
    setCurrentRoute(null)
    localStorage.removeItem("driverRoute")
    setGpsEnabled(false)
    setLocation(null)
  }

  const handleLogout = () => {
    localStorage.removeItem("driverAuth")
    localStorage.removeItem("driverRoute")
    router.push("/")
  }

  if (!driverAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <DriverHeader driverAuth={driverAuth} onLogout={handleLogout} />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            {!currentRoute ? (
              <RouteSetup onRouteStart={handleRouteStart} />
            ) : (
              <ActiveRoute
                route={currentRoute}
                onRouteEnd={handleRouteEnd}
                gpsEnabled={gpsEnabled}
                location={location}
              />
            )}
          </div>

          <div className="space-y-6">
            <GPSStatus
              enabled={gpsEnabled}
              onToggle={setGpsEnabled}
              location={location}
              onLocationUpdate={setLocation}
              isRouteActive={!!currentRoute}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
