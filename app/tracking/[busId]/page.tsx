"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { LiveTrackingMap } from "@/components/live-tracking-map"
import { TrackingInfo } from "@/components/tracking-info"
import { InteractiveMapControls } from "@/components/interactive-map-controls"
import { Button } from "@/components/ui/button"

interface BusLocation {
  lat: number
  lng: number
  timestamp: string
  speed: number
  heading: number
}

interface BusTrackingData {
  id: string
  routeNumber: string
  vehicleNumber: string
  driverName: string
  currentStop: string
  nextStop: string
  eta: number
  location: BusLocation
  stops: Array<{
    name: string
    location: { lat: number; lng: number }
    eta: number
    completed: boolean
  }>
  isActive: boolean
  lastUpdate: string
}

export default function BusTrackingPage() {
  const params = useParams()
  const router = useRouter()
  const busId = params.busId as string

  const [trackingData, setTrackingData] = useState<BusTrackingData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [mapControls, setMapControls] = useState({
    followBus: true,
    showRoute: true,
    showTraffic: false,
    zoomLevel: 1,
  })

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockData: BusTrackingData = {
          id: busId,
          routeNumber: "R-101",
          vehicleNumber: "PB-01-AB-1234",
          driverName: "Rajesh Kumar",
          currentStop: "City Center",
          nextStop: "Railway Station",
          eta: 5,
          location: {
            lat: 30.7333,
            lng: 76.7794,
            timestamp: new Date().toISOString(),
            speed: 35,
            heading: 45,
          },
          stops: [
            {
              name: "City Center",
              location: { lat: 30.7333, lng: 76.7794 },
              eta: 0,
              completed: true,
            },
            {
              name: "Railway Station",
              location: { lat: 30.7194, lng: 76.7646 },
              eta: 5,
              completed: false,
            },
            {
              name: "Bus Stand",
              location: { lat: 30.7046, lng: 76.7179 },
              eta: 12,
              completed: false,
            },
            {
              name: "Airport",
              location: { lat: 30.6942, lng: 76.6833 },
              eta: 20,
              completed: false,
            },
          ],
          isActive: true,
          lastUpdate: new Date().toISOString(),
        }

        setTrackingData(mockData)
        setIsConnected(true)
      } catch (err) {
        setError("Failed to load bus tracking data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchBusData()
  }, [busId])

  useEffect(() => {
    if (!trackingData || !isConnected) return

    const interval = setInterval(() => {
      setTrackingData((prev) => {
        if (!prev) return prev

        const newLat = prev.location.lat + (Math.random() - 0.5) * 0.001
        const newLng = prev.location.lng + (Math.random() - 0.5) * 0.001
        const newSpeed = Math.max(0, prev.location.speed + (Math.random() - 0.5) * 10)

        const updatedStops = prev.stops.map((stop) => ({
          ...stop,
          eta: Math.max(0, stop.eta - 0.1),
        }))

        return {
          ...prev,
          location: {
            lat: newLat,
            lng: newLng,
            timestamp: new Date().toISOString(),
            speed: Math.round(newSpeed),
            heading: prev.location.heading + (Math.random() - 0.5) * 10,
          },
          stops: updatedStops,
          eta: Math.max(0, prev.eta - 0.1),
          lastUpdate: new Date().toISOString(),
        }
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [trackingData, isConnected])

  const handleZoomIn = () => {
    setMapControls((prev) => ({ ...prev, zoomLevel: Math.min(prev.zoomLevel + 0.2, 2) }))
  }

  const handleZoomOut = () => {
    setMapControls((prev) => ({ ...prev, zoomLevel: Math.max(prev.zoomLevel - 0.2, 0.5) }))
  }

  const handleCenterOnBus = () => {
    setMapControls((prev) => ({ ...prev, followBus: true }))
  }

  const handleToggleRoute = () => {
    setMapControls((prev) => ({ ...prev, showRoute: !prev.showRoute }))
  }

  const handleToggleTraffic = () => {
    setMapControls((prev) => ({ ...prev, showTraffic: !prev.showTraffic }))
  }

  const handleToggleFollowBus = (enabled: boolean) => {
    setMapControls((prev) => ({ ...prev, followBus: enabled }))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading bus tracking...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !trackingData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Tracking Unavailable</h2>
          <p className="text-muted-foreground mb-6">{error || "Bus tracking data not found"}</p>
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Live Bus Tracking</h1>
            <p className="text-muted-foreground">
              Route {trackingData.routeNumber} • {trackingData.vehicleNumber}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
              ></div>
              <span className="text-sm text-muted-foreground">{isConnected ? "Live" : "Disconnected"}</span>
            </div>
            <Button variant="outline" onClick={() => router.back()}>
              Back
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2">
            <LiveTrackingMap trackingData={trackingData} />
          </div>
          <div>
            <TrackingInfo trackingData={trackingData} isConnected={isConnected} />
          </div>
          <div>
            <InteractiveMapControls
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onCenterOnBus={handleCenterOnBus}
              onToggleRoute={handleToggleRoute}
              onToggleTraffic={handleToggleTraffic}
              onToggleFollowBus={handleToggleFollowBus}
              followBus={mapControls.followBus}
              showRoute={mapControls.showRoute}
              showTraffic={mapControls.showTraffic}
              zoomLevel={mapControls.zoomLevel}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
