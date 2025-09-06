"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { PassengerHeader } from "@/components/passenger-header"
import { BusSearch } from "@/components/bus-search"
import { BusResults } from "@/components/bus-results"
import { FavoriteRoutes } from "@/components/favorite-routes"

interface PassengerAuth {
  phoneNumber: string
  fullName?: string
  email?: string
  loginTime: string
}

interface SearchParams {
  routeNumber?: string
  startStop?: string
  endStop?: string
}

interface BusInfo {
  id: string
  routeNumber: string
  vehicleNumber: string
  driverName: string
  currentStop: string
  nextStop: string
  eta: number // minutes
  location: { lat: number; lng: number }
  stops: string[]
  isActive: boolean
}

export default function PassengerDashboard() {
  const [passengerAuth, setPassengerAuth] = useState<PassengerAuth | null>(null)
  const [searchParams, setSearchParams] = useState<SearchParams>({})
  const [searchResults, setSearchResults] = useState<BusInfo[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [favoriteRoutes, setFavoriteRoutes] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const authData = localStorage.getItem("passengerAuth")
    if (!authData) {
      router.push("/passenger/login")
      return
    }

    try {
      const parsedAuth = JSON.parse(authData) as PassengerAuth
      setPassengerAuth(parsedAuth)
    } catch (error) {
      console.error("Invalid auth data:", error)
      router.push("/passenger/login")
    }

    // Load favorite routes
    const favorites = localStorage.getItem("favoriteRoutes")
    if (favorites) {
      try {
        setFavoriteRoutes(JSON.parse(favorites))
      } catch (error) {
        console.error("Invalid favorites data:", error)
      }
    }
  }, [router])

  const handleSearch = async (params: SearchParams) => {
    setSearchParams(params)
    setIsSearching(true)

    // Simulate API call to search buses
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock bus data - in real app, this would come from API
      const mockBuses: BusInfo[] = [
        {
          id: "bus-1",
          routeNumber: params.routeNumber || "R-101",
          vehicleNumber: "PB-01-AB-1234",
          driverName: "Rajesh Kumar",
          currentStop: "City Center",
          nextStop: "Railway Station",
          eta: 5,
          location: { lat: 30.7333, lng: 76.7794 },
          stops: ["City Center", "Railway Station", "Bus Stand", "Airport"],
          isActive: true,
        },
        {
          id: "bus-2",
          routeNumber: params.routeNumber || "R-101",
          vehicleNumber: "PB-01-CD-5678",
          driverName: "Suresh Singh",
          currentStop: "Mall Road",
          nextStop: "City Center",
          eta: 12,
          location: { lat: 30.7194, lng: 76.7646 },
          stops: ["Mall Road", "City Center", "Railway Station", "Bus Stand"],
          isActive: true,
        },
        {
          id: "bus-3",
          routeNumber: params.routeNumber || "R-102",
          vehicleNumber: "PB-01-EF-9012",
          driverName: "Amit Sharma",
          currentStop: "University",
          nextStop: "Hospital",
          eta: 8,
          location: { lat: 30.7046, lng: 76.7179 },
          stops: ["University", "Hospital", "Market", "Station"],
          isActive: true,
        },
      ]

      // Filter based on search params
      let filteredBuses = mockBuses
      if (params.routeNumber) {
        filteredBuses = filteredBuses.filter((bus) => bus.routeNumber.includes(params.routeNumber!))
      }
      if (params.startStop || params.endStop) {
        filteredBuses = filteredBuses.filter((bus) => {
          const hasStart =
            !params.startStop || bus.stops.some((stop) => stop.toLowerCase().includes(params.startStop!.toLowerCase()))
          const hasEnd =
            !params.endStop || bus.stops.some((stop) => stop.toLowerCase().includes(params.endStop!.toLowerCase()))
          return hasStart && hasEnd
        })
      }

      setSearchResults(filteredBuses)
    } catch (error) {
      console.error("Search failed:", error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleAddFavorite = (routeNumber: string) => {
    if (!favoriteRoutes.includes(routeNumber)) {
      const newFavorites = [...favoriteRoutes, routeNumber]
      setFavoriteRoutes(newFavorites)
      localStorage.setItem("favoriteRoutes", JSON.stringify(newFavorites))
    }
  }

  const handleRemoveFavorite = (routeNumber: string) => {
    const newFavorites = favoriteRoutes.filter((route) => route !== routeNumber)
    setFavoriteRoutes(newFavorites)
    localStorage.setItem("favoriteRoutes", JSON.stringify(newFavorites))
  }

  const handleLogout = () => {
    localStorage.removeItem("passengerAuth")
    localStorage.removeItem("favoriteRoutes")
    router.push("/")
  }

  if (!passengerAuth) {
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

      <main className="max-w-6xl mx-auto px-4 py-8">
        <PassengerHeader passengerAuth={passengerAuth} onLogout={handleLogout} />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <BusSearch onSearch={handleSearch} isSearching={isSearching} />
            <BusResults
              results={searchResults}
              searchParams={searchParams}
              favoriteRoutes={favoriteRoutes}
              onAddFavorite={handleAddFavorite}
              onRemoveFavorite={handleRemoveFavorite}
            />
          </div>

          <div className="space-y-6">
            <FavoriteRoutes
              favorites={favoriteRoutes}
              onRemoveFavorite={handleRemoveFavorite}
              onQuickSearch={handleSearch}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
