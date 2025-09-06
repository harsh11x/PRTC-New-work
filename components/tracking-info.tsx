"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

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

interface TrackingInfoProps {
  trackingData: BusTrackingData
  isConnected: boolean
}

export function TrackingInfo({ trackingData, isConnected }: TrackingInfoProps) {
  const formatETA = (minutes: number) => {
    if (minutes < 1) return "Arriving now"
    if (minutes < 60) return `${Math.round(minutes)} min`
    const hours = Math.floor(minutes / 60)
    const mins = Math.round(minutes % 60)
    return `${hours}h ${mins}m`
  }

  return (
    <div className="space-y-4">
      {/* Bus Info Card */}
      <Card className="border border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-foreground">Bus Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Route</p>
              <p className="font-semibold text-foreground">{trackingData.routeNumber}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Vehicle</p>
              <p className="font-mono text-foreground">{trackingData.vehicleNumber}</p>
            </div>
            <div className="col-span-2">
              <p className="text-muted-foreground">Driver</p>
              <p className="font-semibold text-foreground">{trackingData.driverName}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge variant="default" className="bg-green-600">
                Active
              </Badge>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">
                Current: <span className="text-foreground font-medium">{trackingData.currentStop}</span>
              </p>
              <p className="text-muted-foreground">
                Next: <span className="text-foreground font-medium">{trackingData.nextStop}</span>
              </p>
              <p className="text-muted-foreground">
                ETA: <span className="text-foreground font-medium">{formatETA(trackingData.eta)}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Route Progress Card */}
      <Card className="border border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-foreground">Route Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {trackingData.stops.map((stop, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      stop.completed
                        ? "bg-green-500"
                        : stop.name === trackingData.nextStop
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                    }`}
                  ></div>
                  {index < trackingData.stops.length - 1 && (
                    <div className={`w-0.5 h-6 ${stop.completed ? "bg-green-500" : "bg-gray-300"}`}></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-sm font-medium ${
                        stop.completed
                          ? "text-green-600 line-through"
                          : stop.name === trackingData.nextStop
                            ? "text-foreground"
                            : "text-muted-foreground"
                      }`}
                    >
                      {stop.name}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {stop.completed ? "Completed" : formatETA(stop.eta)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Connection Status */}
      {!isConnected && (
        <Alert className="border-yellow-500 bg-yellow-50">
          <AlertDescription className="text-yellow-800">
            Connection lost. Trying to reconnect to live tracking...
          </AlertDescription>
        </Alert>
      )}

      {/* Action Buttons */}
      <div className="space-y-2">
        <Button variant="outline" className="w-full bg-transparent">
          Set Arrival Notification
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          Share Location
        </Button>
      </div>

      {/* Live Updates Info */}
      <Card className="border border-border">
        <CardContent className="p-4">
          <div className="text-xs text-muted-foreground space-y-1">
            <p className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live updates every 3 seconds
            </p>
            <p>Last update: {new Date(trackingData.lastUpdate).toLocaleTimeString()}</p>
            <p>GPS accuracy: ±5 meters</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
