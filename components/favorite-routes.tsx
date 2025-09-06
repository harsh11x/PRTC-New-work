"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SearchParams {
  routeNumber?: string
  startStop?: string
  endStop?: string
}

interface FavoriteRoutesProps {
  favorites: string[]
  onRemoveFavorite: (routeNumber: string) => void
  onQuickSearch: (params: SearchParams) => void
}

export function FavoriteRoutes({ favorites, onRemoveFavorite, onQuickSearch }: FavoriteRoutesProps) {
  if (favorites.length === 0) {
    return (
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Favorite Routes</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">
            No favorite routes yet. Add routes to favorites for quick access.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Favorite Routes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {favorites.map((route) => (
          <div key={route} className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{route}</Badge>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onQuickSearch({ routeNumber: route })}
                className="text-xs"
              >
                Search
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveFavorite(route)}
                className="text-xs text-destructive hover:text-destructive"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <div className="text-xs text-muted-foreground mt-4">
          <p>• Click search to quickly find buses on your favorite routes</p>
          <p>• Add routes to favorites by clicking the star icon in search results</p>
        </div>
      </CardContent>
    </Card>
  )
}
