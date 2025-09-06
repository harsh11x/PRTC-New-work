"use client"

import { useState, useEffect, useCallback } from "react"

interface BusLocation {
  lat: number
  lng: number
  timestamp: string
  speed: number
  heading: number
}

interface TrackingUpdate {
  busId: string
  location: BusLocation
  currentStop: string
  nextStop: string
  eta: number
  isActive: boolean
}

export function useRealTimeTracking(busId: string) {
  const [isConnected, setIsConnected] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<TrackingUpdate | null>(null)
  const [error, setError] = useState<string | null>(null)

  const connect = useCallback(() => {
    // In a real app, this would establish WebSocket connection
    // For demo, we'll simulate with intervals
    setIsConnected(true)
    setError(null)

    const interval = setInterval(() => {
      // Simulate receiving tracking update
      const update: TrackingUpdate = {
        busId,
        location: {
          lat: 30.7333 + (Math.random() - 0.5) * 0.01,
          lng: 76.7794 + (Math.random() - 0.5) * 0.01,
          timestamp: new Date().toISOString(),
          speed: Math.floor(Math.random() * 60),
          heading: Math.floor(Math.random() * 360),
        },
        currentStop: "City Center",
        nextStop: "Railway Station",
        eta: Math.max(1, Math.floor(Math.random() * 15)),
        isActive: true,
      }

      setLastUpdate(update)
    }, 3000)

    return () => {
      clearInterval(interval)
      setIsConnected(false)
    }
  }, [busId])

  const disconnect = useCallback(() => {
    setIsConnected(false)
  }, [])

  useEffect(() => {
    const cleanup = connect()
    return cleanup
  }, [connect])

  return {
    isConnected,
    lastUpdate,
    error,
    connect,
    disconnect,
  }
}
