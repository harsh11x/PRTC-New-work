"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PassengerAuth {
  phoneNumber: string
  fullName?: string
  email?: string
  loginTime: string
}

interface PassengerHeaderProps {
  passengerAuth: PassengerAuth
  onLogout: () => void
}

export function PassengerHeader({ passengerAuth, onLogout }: PassengerHeaderProps) {
  return (
    <Card className="border border-border">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Welcome{passengerAuth.fullName ? `, ${passengerAuth.fullName}` : ""}
            </h1>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                Phone: <span className="font-mono">{passengerAuth.phoneNumber}</span>
              </p>
              {passengerAuth.email && (
                <p>
                  Email: <span className="font-mono">{passengerAuth.email}</span>
                </p>
              )}
              <p>Session: {new Date(passengerAuth.loginTime).toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Online</span>
            </div>
            <Button variant="outline" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
