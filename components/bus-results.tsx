"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

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

interface SearchParams {
  routeNumber?: string
  startStop?: string
  endStop?: string
}

interface BusResultsProps {
  results: BusInfo[]
  searchParams: SearchParams
  favoriteRoutes: string[]
  onAddFavorite: (routeNumber: string) => void
  onRemoveFavorite: (routeNumber: string) => void
}

export function BusResults({
  results,
  searchParams,
  favoriteRoutes,
  onAddFavorite,
  onRemoveFavorite,
}: BusResultsProps) {
  const hasSearched = Object.keys(searchParams).length > 0

  if (!hasSearched) {
    return (
      <Card className="border border-border">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Search for Buses</h3>
          <p className="text-muted-foreground">Use the search form above to find buses by route number or stops.</p>
        </CardContent>
      </Card>
    )
  }

  if (results.length === 0) {
    return (
      <Card className="border border-border">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No Buses Found</h3>
          <p className="text-muted-foreground">
            No active buses match your search criteria. Try searching with different parameters.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Found {results.length} bus{results.length !== 1 ? "es" : ""}
        </h3>
        {searchParams.routeNumber && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Route:</span>
            <Badge variant="outline">{searchParams.routeNumber}</Badge>
          </div>
        )}
      </div>

      {searchParams.startStop || searchParams.endStop ? (
        <Alert>
          <AlertDescription>
            Showing buses with stops matching:{" "}
            {[searchParams.startStop, searchParams.endStop].filter(Boolean).join(" → ")}
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="space-y-4">
        {results.map((bus) => (
          <Card key={bus.id} className="border border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-foreground flex items-center gap-2">
                  <span>Route {bus.routeNumber}</span>
                  <Badge variant="default" className="bg-green-600">
                    Active
                  </Badge>
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    favoriteRoutes.includes(bus.routeNumber)
                      ? onRemoveFavorite(bus.routeNumber)
                      : onAddFavorite(bus.routeNumber)
                  }
                >
                  <svg
                    className={`w-4 h-4 ${favoriteRoutes.includes(bus.routeNumber) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Vehicle Number</p>
                  <p className="font-mono text-foreground">{bus.vehicleNumber}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Driver</p>
                  <p className="text-foreground">{bus.driverName}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current Location</span>
                  <Badge variant="secondary" className="text-xs">
                    ETA: {bus.eta} min
                  </Badge>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-semibold text-foreground">{bus.currentStop}</p>
                  <p className="text-sm text-muted-foreground">Next: {bus.nextStop}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">Route Stops</h4>
                <div className="flex flex-wrap gap-1">
                  {bus.stops.map((stop, index) => (
                    <Badge key={index} variant={stop === bus.currentStop ? "default" : "outline"} className="text-xs">
                      {stop}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => window.open(`/tracking/${bus.id}`, "_blank")}
                >
                  Track on Map
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Get Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
