"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

interface LiveTrackingMapProps {
  trackingData: BusTrackingData
}

export function LiveTrackingMap({ trackingData }: LiveTrackingMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 30.7333, lng: 76.7794 })
  const [zoomLevel, setZoomLevel] = useState(1)
  const [followBus, setFollowBus] = useState(true)
  const [showRoute, setShowRoute] = useState(true)
  const [mapStyle, setMapStyle] = useState<"default" | "satellite">("default")

  useEffect(() => {
    // Follow bus if enabled
    if (followBus) {
      setMapCenter({
        lat: trackingData.location.lat,
        lng: trackingData.location.lng,
      })
    }
  }, [trackingData.location, followBus])

  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 0.2, 0.5))
  }

  const handleCenterOnBus = () => {
    setMapCenter({
      lat: trackingData.location.lat,
      lng: trackingData.location.lng,
    })
    setFollowBus(true)
  }

  const handleMapClick = (e: React.MouseEvent) => {
    if (!mapRef.current) return

    const rect = mapRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Convert click position to lat/lng (simplified calculation)
    const newLat = mapCenter.lat + (rect.height / 2 - y) / (rect.height * zoomLevel * 100)
    const newLng = mapCenter.lng + (x - rect.width / 2) / (rect.width * zoomLevel * 100)

    setMapCenter({ lat: newLat, lng: newLng })
    setFollowBus(false)
  }

  // Calculate positions relative to map center and zoom
  const getScreenPosition = (lat: number, lng: number) => {
    const x = 50 + (lng - mapCenter.lng) * zoomLevel * 1000
    const y = 50 - (lat - mapCenter.lat) * zoomLevel * 1000
    return { x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) }
  }

  const busPosition = getScreenPosition(trackingData.location.lat, trackingData.location.lng)

  return (
    <Card className="border border-border h-[500px]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground flex items-center gap-2">
            <span>Interactive Map</span>
            <Badge variant="default" className="bg-green-600">
              Live Tracking
            </Badge>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant={mapStyle === "default" ? "default" : "outline"}
              size="sm"
              onClick={() => setMapStyle("default")}
            >
              Map
            </Button>
            <Button
              variant={mapStyle === "satellite" ? "default" : "outline"}
              size="sm"
              onClick={() => setMapStyle("satellite")}
            >
              Satellite
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div
          ref={mapRef}
          className="w-full h-[420px] relative overflow-hidden rounded-b-lg cursor-pointer"
          onClick={handleMapClick}
        >
          {/* Enhanced map background */}
          <div
            className={`absolute inset-0 transition-all duration-300 ${
              mapStyle === "satellite"
                ? "bg-gradient-to-br from-green-800 via-green-700 to-green-900"
                : "bg-gradient-to-br from-gray-100 to-gray-200"
            }`}
          >
            {/* Enhanced grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div
                    key={i}
                    className={`border ${mapStyle === "satellite" ? "border-green-600" : "border-gray-300"}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Route path visualization */}
            {showRoute && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Draw route line connecting stops */}
                {trackingData.stops.map((stop, index) => {
                  if (index === trackingData.stops.length - 1) return null
                  const currentPos = getScreenPosition(stop.location.lat, stop.location.lng)
                  const nextPos = getScreenPosition(
                    trackingData.stops[index + 1].location.lat,
                    trackingData.stops[index + 1].location.lng,
                  )
                  return (
                    <line
                      key={index}
                      x1={`${currentPos.x}%`}
                      y1={`${currentPos.y}%`}
                      x2={`${nextPos.x}%`}
                      y2={`${nextPos.y}%`}
                      stroke="url(#routeGradient)"
                      strokeWidth="3"
                      strokeDasharray={stop.completed ? "none" : "5,5"}
                    />
                  )
                })}
              </svg>
            )}

            {/* Bus position with enhanced animation */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
              style={{
                left: `${busPosition.x}%`,
                top: `${busPosition.y}%`,
                transform: `translate(-50%, -50%) rotate(${trackingData.location.heading}deg)`,
              }}
            >
              <div className="relative">
                {/* Bus direction indicator */}
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping"></div>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                {/* Bus info tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
                  <div className="text-center">
                    <div className="font-semibold">{trackingData.vehicleNumber}</div>
                    <div className="text-xs opacity-90">{trackingData.location.speed} km/h</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                </div>
              </div>
            </div>

            {/* Enhanced route stops */}
            {trackingData.stops.map((stop, index) => {
              const position = getScreenPosition(stop.location.lat, stop.location.lng)
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                  }}
                >
                  <div className="relative">
                    {/* Stop marker */}
                    <div
                      className={`w-6 h-6 rounded-full border-3 shadow-lg transition-all duration-200 group-hover:scale-110 ${
                        stop.completed
                          ? "bg-green-500 border-green-600"
                          : stop.name === trackingData.nextStop
                            ? "bg-yellow-500 border-yellow-600 animate-pulse"
                            : "bg-white border-gray-400"
                      }`}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        {stop.completed ? (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                        )}
                      </div>
                    </div>

                    {/* Stop info tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-border rounded px-2 py-1 text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <div className="font-medium">{stop.name}</div>
                      <div className="text-muted-foreground">
                        {stop.completed ? "Completed" : `ETA: ${Math.round(stop.eta)} min`}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Map controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg shadow-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleZoomIn}
                  className="w-10 h-10 rounded-t-lg rounded-b-none border-b border-border"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleZoomOut}
                  className="w-10 h-10 rounded-b-lg rounded-t-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Additional controls */}
            <div className="absolute bottom-4 right-4 space-y-2">
              <Button
                variant={followBus ? "default" : "outline"}
                size="sm"
                onClick={handleCenterOnBus}
                className="bg-background/90 backdrop-blur-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Center on Bus
              </Button>

              <Button
                variant={showRoute ? "default" : "outline"}
                size="sm"
                onClick={() => setShowRoute(!showRoute)}
                className="bg-background/90 backdrop-blur-sm w-full"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                {showRoute ? "Hide Route" : "Show Route"}
              </Button>
            </div>

            {/* Map info overlay */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 space-y-2 shadow-lg">
              <div className="text-sm">
                <p className="text-muted-foreground">Current Speed</p>
                <p className="font-semibold text-foreground">{trackingData.location.speed} km/h</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Zoom Level</p>
                <p className="font-semibold text-foreground">{(zoomLevel * 100).toFixed(0)}%</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Last Update</p>
                <p className="font-mono text-xs text-foreground">
                  {new Date(trackingData.location.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>

            {/* Compass */}
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center shadow-lg">
              <div
                className="w-12 h-12 relative transition-transform duration-300"
                style={{ transform: `rotate(${trackingData.location.heading}deg)` }}
              >
                <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
