"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

interface GPSStatusProps {
  enabled: boolean
  onToggle: (enabled: boolean) => void
  location: { lat: number; lng: number } | null
  onLocationUpdate: (location: { lat: number; lng: number } | null) => void
  isRouteActive: boolean
}

export function GPSStatus({ enabled, onToggle, location, onLocationUpdate, isRouteActive }: GPSStatusProps) {
  const [isRequesting, setIsRequesting] = useState(false)
  const [error, setError] = useState("")
  const [speed, setSpeed] = useState<number | null>(null)

  useEffect(() => {
    let watchId: number | null = null

    if (enabled && isRouteActive) {
      setIsRequesting(true)

      if ("geolocation" in navigator) {
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            const newLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            onLocationUpdate(newLocation)
            setSpeed(position.coords.speed ? Math.round(position.coords.speed * 3.6) : null) // Convert m/s to km/h
            setError("")
            setIsRequesting(false)
          },
          (error) => {
            console.error("GPS Error:", error)
            setError("Failed to get location. Please check GPS permissions.")
            setIsRequesting(false)
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 5000,
          },
        )
      } else {
        setError("GPS not supported on this device")
        setIsRequesting(false)
      }
    } else {
      onLocationUpdate(null)
      setSpeed(null)
    }

    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId)
      }
    }
  }, [enabled, isRouteActive, onLocationUpdate])

  const handleToggleGPS = () => {
    if (!enabled && !isRouteActive) {
      setError("Please start a route first before enabling GPS")
      return
    }

    setError("")
    onToggle(!enabled)
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center justify-between">
          <span>GPS Tracking</span>
          <Badge variant={enabled ? "default" : "secondary"}>{enabled ? "Active" : "Inactive"}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-foreground">GPS Status</span>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${enabled ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></div>
            <span className="text-sm text-muted-foreground">
              {isRequesting ? "Requesting..." : enabled ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {location && (
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Current Location</h4>
            <div className="p-3 bg-muted rounded-lg space-y-1 text-sm">
              <p className="text-muted-foreground">
                Latitude: <span className="font-mono text-foreground">{location.lat.toFixed(6)}</span>
              </p>
              <p className="text-muted-foreground">
                Longitude: <span className="font-mono text-foreground">{location.lng.toFixed(6)}</span>
              </p>
              {speed !== null && (
                <p className="text-muted-foreground">
                  Speed: <span className="font-mono text-foreground">{speed} km/h</span>
                </p>
              )}
            </div>
          </div>
        )}

        {error && (
          <Alert className="border-destructive">
            <AlertDescription className="text-destructive">{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Button
            onClick={handleToggleGPS}
            variant={enabled ? "destructive" : "default"}
            className="w-full"
            disabled={isRequesting}
          >
            {isRequesting ? "Requesting GPS..." : enabled ? "Disable GPS" : "Enable GPS"}
          </Button>

          {!isRouteActive && (
            <p className="text-xs text-muted-foreground text-center">Start a route to enable GPS tracking</p>
          )}
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p>• GPS data is shared with passengers in real-time</p>
          <p>• Location updates every 5 seconds when active</p>
          <p>• Disable GPS when route is complete</p>
        </div>
      </CardContent>
    </Card>
  )
}
