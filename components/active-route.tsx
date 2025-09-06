"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface RouteData {
  routeNumber: string
  stops: string[]
  startTime: string
  isActive: boolean
}

interface ActiveRouteProps {
  route: RouteData
  onRouteEnd: () => void
  gpsEnabled: boolean
  location: { lat: number; lng: number } | null
}

export function ActiveRoute({ route, onRouteEnd, gpsEnabled, location }: ActiveRouteProps) {
  const [currentStopIndex, setCurrentStopIndex] = useState(0)
  const [routeDuration, setRouteDuration] = useState("")
  const [isEnding, setIsEnding] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const startTime = new Date(route.startTime)
      const now = new Date()
      const duration = now.getTime() - startTime.getTime()

      const hours = Math.floor(duration / (1000 * 60 * 60))
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((duration % (1000 * 60)) / 1000)

      setRouteDuration(
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [route.startTime])

  const handleNextStop = () => {
    if (currentStopIndex < route.stops.length - 1) {
      setCurrentStopIndex(currentStopIndex + 1)
    }
  }

  const handlePreviousStop = () => {
    if (currentStopIndex > 0) {
      setCurrentStopIndex(currentStopIndex - 1)
    }
  }

  const handleEndRoute = async () => {
    setIsEnding(true)
    // Simulate ending route
    await new Promise((resolve) => setTimeout(resolve, 1500))
    onRouteEnd()
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center justify-between">
          <span>Active Route: {route.routeNumber}</span>
          <Badge variant="default" className="bg-green-600">
            Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Duration</p>
            <p className="font-mono text-lg text-foreground">{routeDuration}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Total Stops</p>
            <p className="font-mono text-lg text-foreground">{route.stops.length}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Current Stop</h4>
            <span className="text-sm text-muted-foreground">
              {currentStopIndex + 1} of {route.stops.length}
            </span>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-lg font-semibold text-foreground">{route.stops[currentStopIndex]}</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handlePreviousStop}
              disabled={currentStopIndex === 0}
              className="flex-1 bg-transparent"
            >
              Previous Stop
            </Button>
            <Button
              variant="outline"
              onClick={handleNextStop}
              disabled={currentStopIndex === route.stops.length - 1}
              className="flex-1 bg-transparent"
            >
              Next Stop
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">All Stops</h4>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {route.stops.map((stop, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 rounded text-sm ${
                  index === currentStopIndex
                    ? "bg-primary text-primary-foreground"
                    : index < currentStopIndex
                      ? "bg-muted text-muted-foreground line-through"
                      : "bg-card text-card-foreground"
                }`}
              >
                <span className="font-mono text-xs">{index + 1}.</span>
                <span>{stop}</span>
                {index === currentStopIndex && (
                  <Badge variant="secondary" className="ml-auto text-xs">
                    Current
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        {!gpsEnabled && (
          <Alert className="border-yellow-500 bg-yellow-50">
            <AlertDescription className="text-yellow-800">
              GPS tracking is disabled. Enable GPS to share your location with passengers.
            </AlertDescription>
          </Alert>
        )}

        <Button variant="destructive" onClick={handleEndRoute} disabled={isEnding} className="w-full">
          {isEnding ? "Ending Route..." : "End Route"}
        </Button>
      </CardContent>
    </Card>
  )
}
