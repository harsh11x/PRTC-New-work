import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">About PRTC</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Punjab Roadways Transportation Corporation represents the pinnacle of modern transportation infrastructure,
            leveraging cutting-edge technology to revolutionize public transit across Punjab.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">
              Enterprise Transportation Intelligence
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established as Punjab's premier transportation authority, PRTC operates the most advanced fleet management
              system in South Asia, serving over 18.7 million daily passengers across 2,847 routes with unprecedented
              efficiency and reliability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our enterprise-grade platform integrates artificial intelligence, machine learning algorithms, and
              real-time data analytics to deliver seamless transportation experiences while maintaining 99.97% system
              uptime and industry-leading safety standards.
            </p>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2,847</div>
                  <div className="text-sm text-muted-foreground">Active Routes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">18.7M</div>
                  <div className="text-sm text-muted-foreground">Daily Passengers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">99.97%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">₹4.8B</div>
                  <div className="text-sm text-muted-foreground">Annual Value</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class transportation services through innovative technology, ensuring safe, reliable,
                and efficient mobility solutions for Punjab's citizens.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To establish Punjab as the global benchmark for intelligent transportation systems, setting new
                standards for operational excellence and passenger experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pioneering next-generation transportation technologies including AI-powered route optimization,
                predictive analytics, and enterprise-grade fleet management systems.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-muted/30 to-background rounded-3xl p-12 border-2 border-primary/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Leadership Team</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our executive leadership combines decades of transportation expertise with cutting-edge technology vision
              to drive PRTC's continued innovation and growth.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">RS</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Rajesh Singh</h4>
                <p className="text-sm text-muted-foreground mb-2">Chief Executive Officer</p>
                <p className="text-xs text-muted-foreground">25+ years transportation industry leadership</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-foreground">PK</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Priya Kaur</h4>
                <p className="text-sm text-muted-foreground mb-2">Chief Technology Officer</p>
                <p className="text-xs text-muted-foreground">AI & Machine Learning Systems Expert</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">AS</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Amit Sharma</h4>
                <p className="text-sm text-muted-foreground mb-2">Chief Operations Officer</p>
                <p className="text-xs text-muted-foreground">Fleet Management & Logistics Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
