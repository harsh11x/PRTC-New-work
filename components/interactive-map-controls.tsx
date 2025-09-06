"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface MapControlsProps {
  onZoomIn: () => void
  onZoomOut: () => void
  onCenterOnBus: () => void
  onToggleRoute: () => void
  onToggleTraffic: () => void
  onToggleFollowBus: (enabled: boolean) => void
  followBus: boolean
  showRoute: boolean
  showTraffic: boolean
  zoomLevel: number
}

export function InteractiveMapControls({
  onZoomIn,
  onZoomOut,
  onCenterOnBus,
  onToggleRoute,
  onToggleTraffic,
  onToggleFollowBus,
  followBus,
  showRoute,
  showTraffic,
  zoomLevel,
}: MapControlsProps) {
  const [mapLayers, setMapLayers] = useState({
    busStops: true,
    traffic: showTraffic,
    route: showRoute,
    landmarks: false,
  })

  const handleLayerToggle = (layer: keyof typeof mapLayers) => {
    setMapLayers((prev) => ({ ...prev, [layer]: !prev[layer] }))

    switch (layer) {
      case "route":
        onToggleRoute()
        break
      case "traffic":
        onToggleTraffic()
        break
    }
  }

  return (
    <Card className="border border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-foreground">Map Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Zoom Controls */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Zoom Level</Label>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onZoomOut}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </Button>
            <div className="flex-1 text-center">
              <Badge variant="outline">{(zoomLevel * 100).toFixed(0)}%</Badge>
            </div>
            <Button variant="outline" size="sm" onClick={onZoomIn}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Quick Actions</Label>
          <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={onCenterOnBus} className="w-full justify-start bg-transparent">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              Center on Bus
            </Button>

            <div className="flex items-center justify-between">
              <Label htmlFor="follow-bus" className="text-sm text-foreground">
                Follow Bus
              </Label>
              <Switch id="follow-bus" checked={followBus} onCheckedChange={onToggleFollowBus} />
            </div>
          </div>
        </div>

        {/* Map Layers */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Map Layers</Label>
          <div className="space-y-3">
            {Object.entries(mapLayers).map(([layer, enabled]) => (
              <div key={layer} className="flex items-center justify-between">
                <Label htmlFor={layer} className="text-sm text-foreground capitalize">
                  {layer === "busStops" ? "Bus Stops" : layer}
                </Label>
                <Switch
                  id={layer}
                  checked={enabled}
                  onCheckedChange={() => handleLayerToggle(layer as keyof typeof mapLayers)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Map Legend */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Legend</Label>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Current Bus Position</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">Completed Stops</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-muted-foreground">Next Stop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-muted-foreground">Upcoming Stops</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-blue-500"></div>
              <span className="text-muted-foreground">Route Path</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
