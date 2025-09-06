import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Enterprise Support</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive technical support and documentation for PRTC's enterprise transportation platform. Access
            resources, troubleshooting guides, and expert assistance for optimal system performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Documentation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprehensive API documentation, integration guides, and technical specifications for developers and
                system administrators.
              </p>
              <Button
                variant="outline"
                className="w-full border-2 border-primary/20 hover:border-primary/40 bg-transparent"
              >
                Access Documentation
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-secondary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">24/7 Technical Support</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Round-the-clock technical assistance from certified PRTC engineers for critical system issues and
                emergency support.
              </p>
              <Button
                variant="outline"
                className="w-full border-2 border-secondary/20 hover:border-secondary/40 bg-transparent"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Training & Resources</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional training programs, certification courses, and educational resources for optimal platform
                utilization.
              </p>
              <Button
                variant="outline"
                className="w-full border-2 border-accent/20 hover:border-accent/40 bg-transparent"
              >
                View Training
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    How do I integrate PRTC APIs into my application?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our comprehensive API documentation provides step-by-step integration guides, authentication
                    protocols, and code examples for seamless platform integration. Enterprise customers receive
                    dedicated technical support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    What are the system requirements for PRTC platform?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    PRTC operates on cloud-native architecture with minimal local requirements. Standard web browsers,
                    stable internet connectivity, and GPS-enabled devices for location services are sufficient for full
                    functionality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3">How is real-time data accuracy maintained?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our enterprise platform employs advanced machine learning algorithms, redundant data validation, and
                    multi-source verification to ensure 99.97% accuracy in real-time location and ETA calculations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Enterprise Support Metrics</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-background/60 rounded-lg border border-primary/20">
                  <span className="text-foreground font-medium">Average Response Time</span>
                  <span className="text-2xl font-bold text-primary">&lt; 15 min</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-background/60 rounded-lg border border-secondary/20">
                  <span className="text-foreground font-medium">Issue Resolution Rate</span>
                  <span className="text-2xl font-bold text-secondary">99.2%</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-background/60 rounded-lg border border-accent/20">
                  <span className="text-foreground font-medium">Customer Satisfaction</span>
                  <span className="text-2xl font-bold text-accent">4.9/5</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-background/60 rounded-lg border border-primary/20">
                  <span className="text-foreground font-medium">System Uptime SLA</span>
                  <span className="text-2xl font-bold text-primary">99.97%</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
                <h4 className="text-lg font-bold text-foreground mb-3">Enterprise Priority Support</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Dedicated support channels, priority escalation, and direct access to senior technical engineers for
                  mission-critical transportation operations.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Upgrade to Enterprise
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-br from-muted/30 to-background rounded-3xl p-12 border-2 border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Need Additional Support?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our enterprise support team is available 24/7 to assist with technical issues, integration challenges, and
            system optimization for your transportation operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Contact Enterprise Support
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 hover:border-primary/40 px-8 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
