"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SearchParams {
  startStop?: string
  endStop?: string
}

interface BusSearchProps {
  onSearch: (params: SearchParams) => void
  isSearching: boolean
}

export function BusSearch({ onSearch, isSearching }: BusSearchProps) {
  const [startStop, setStartStop] = useState("")
  const [endStop, setEndStop] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (startStop.trim() || endStop.trim()) {
      onSearch({
        startStop: startStop.trim() || undefined,
        endStop: endStop.trim() || undefined,
      })
    }
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Find Your Bus</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="startStop" className="text-foreground">
              From (Starting Point)
            </Label>
            <Input
              id="startStop"
              type="text"
              placeholder="e.g., Chandigarh Bus Stand, Railway Station"
              value={startStop}
              onChange={(e) => setStartStop(e.target.value)}
              className="bg-input border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endStop" className="text-foreground">
              To (Destination)
            </Label>
            <Input
              id="endStop"
              type="text"
              placeholder="e.g., Ludhiana Central, Amritsar Junction"
              value={endStop}
              onChange={(e) => setEndStop(e.target.value)}
              className="bg-input border-border"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSearching || (!startStop.trim() && !endStop.trim())}>
            {isSearching ? "Searching..." : "Search Buses"}
          </Button>
        </form>

        <div className="mt-4 text-xs text-muted-foreground space-y-1">
          <p>• Enter starting point and destination to find available buses</p>
          <p>• You can search with just starting point or destination</p>
          <p>• Results show real-time bus locations and ETAs</p>
        </div>
      </CardContent>
    </Card>
  )
}
