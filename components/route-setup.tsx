"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

interface RouteData {
  startingPoint: string
  endPoint: string
  stops: string[]
  startTime: string
  isActive: boolean
}

interface RouteSetupProps {
  onRouteStart: (route: RouteData) => void
}

export function RouteSetup({ onRouteStart }: RouteSetupProps) {
  const [startingPoint, setStartingPoint] = useState("")
  const [endPoint, setEndPoint] = useState("")
  const [currentStop, setCurrentStop] = useState("")
  const [stops, setStops] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const addStop = () => {
    if (currentStop.trim() && !stops.includes(currentStop.trim())) {
      setStops([...stops, currentStop.trim()])
      setCurrentStop("")
    }
  }

  const removeStop = (index: number) => {
    setStops(stops.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!startingPoint.trim()) {
      setError("Please enter a starting point")
      setIsLoading(false)
      return
    }

    if (!endPoint.trim()) {
      setError("Please enter an end point")
      setIsLoading(false)
      return
    }

    if (stops.length < 1) {
      setError("Please add at least 1 intermediate stop")
      setIsLoading(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const routeData: RouteData = {
        startingPoint: startingPoint.trim(),
        endPoint: endPoint.trim(),
        stops,
        startTime: new Date().toISOString(),
        isActive: true,
      }

      onRouteStart(routeData)
    } catch (err) {
      setError("Failed to start route. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Setup Route</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="startingPoint" className="text-foreground">
              Starting Point
            </Label>
            <Input
              id="startingPoint"
              type="text"
              placeholder="e.g., Chandigarh Bus Stand, Railway Station"
              value={startingPoint}
              onChange={(e) => setStartingPoint(e.target.value)}
              className="bg-input border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endPoint" className="text-foreground">
              End Point
            </Label>
            <Input
              id="endPoint"
              type="text"
              placeholder="e.g., Ludhiana Central, Amritsar Junction"
              value={endPoint}
              onChange={(e) => setEndPoint(e.target.value)}
              className="bg-input border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stops" className="text-foreground">
              Add Intermediate Stops
            </Label>
            <div className="flex gap-2">
              <Input
                id="stops"
                type="text"
                placeholder="Enter stop name"
                value={currentStop}
                onChange={(e) => setCurrentStop(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addStop())}
                className="bg-input border-border flex-1"
              />
              <Button type="button" onClick={addStop} variant="outline">
                Add
              </Button>
            </div>
          </div>

          {stops.length > 0 && (
            <div className="space-y-2">
              <Label className="text-foreground">Intermediate Stops ({stops.length})</Label>
              <div className="flex flex-wrap gap-2 p-3 bg-muted rounded-lg">
                {stops.map((stop, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">{index + 1}.</span>
                    {stop}
                    <button
                      type="button"
                      onClick={() => removeStop(index)}
                      className="ml-1 text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {startingPoint && endPoint && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Route Preview:</p>
              <p className="text-sm font-medium">
                {startingPoint} → {stops.length > 0 && `${stops.join(" → ")} → `}
                {endPoint}
              </p>
            </div>
          )}

          {error && (
            <Alert className="border-destructive">
              <AlertDescription className="text-destructive">{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Starting Route..." : "Start Route"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
