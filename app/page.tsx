import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 rounded-3xl bg-primary flex items-center justify-center shadow-2xl border-4 border-primary/20">
                <span className="text-primary-foreground font-bold text-5xl tracking-tight">P</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
              Punjab Roadways Transportation Corporation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance font-medium">
              Next-Generation Transportation Intelligence Platform
            </p>
            <div className="inline-flex items-center px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary-foreground font-semibold text-sm tracking-wide bg-primary px-4 py-1 rounded-full">
                ENTERPRISE TRANSPORTATION SOLUTIONS
              </span>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Advanced Transportation Analytics & Intelligence
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              PRTC leverages cutting-edge AI, machine learning algorithms, and real-time data processing to deliver
              enterprise-grade transportation management solutions that optimize efficiency, reduce operational costs,
              and enhance passenger experience across Punjab's transportation network.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Real-Time Processing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sub-second data processing with 99.97% accuracy using advanced algorithms
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-secondary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Predictive Analytics</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AI-powered forecasting with machine learning optimization models
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Enterprise Mobility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cloud-native architecture with edge computing capabilities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Scale Operations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Supporting 50M+ daily transactions with zero downtime
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">
                Transportation Infrastructure Crisis Analytics
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Enterprise-grade data intelligence reveals critical inefficiencies in Punjab's transportation ecosystem.
                Our advanced analytics platform quantifies operational losses and delivers measurable ROI through
                systematic optimization protocols.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-background via-muted/20 to-muted/40 hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-2 tracking-tight">47.3 MIN</h3>
                  <p className="text-lg font-semibold text-muted-foreground mb-3">Average Daily Delay</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Systematic inefficiencies result in 47.3 minutes of daily productivity loss per passenger across
                    Punjab's transportation network
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/30 bg-gradient-to-br from-background via-muted/20 to-muted/40 hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-2 tracking-tight">₹2.47B</h3>
                  <p className="text-lg font-semibold text-muted-foreground mb-3">Annual Economic Impact</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Quantified economic losses due to transportation inefficiencies, including workforce productivity
                    decline and operational overhead
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/30 bg-gradient-to-br from-background via-muted/20 to-muted/40 hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-foreground mb-2 tracking-tight">173%</h3>
                  <p className="text-lg font-semibold text-muted-foreground mb-3">Peak Capacity Utilization</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Critical overcrowding during peak hours creates safety risks and degrades service quality metrics
                    across the network
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-3xl p-12 border-2 border-primary/20 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  PRTC Enterprise Solution Performance Metrics
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Advanced algorithmic optimization and real-time data processing deliver quantifiable improvements
                  across all operational parameters
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/20 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-foreground">Operational Efficiency Index</span>
                      <span className="text-2xl font-bold text-primary">+347%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 shadow-inner">
                      <div
                        className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 h-4 rounded-full shadow-sm relative overflow-hidden"
                        style={{ width: "97%" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      AI-powered route optimization algorithms reduce average journey time by 34.7 minutes
                    </p>
                  </div>

                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-secondary/20 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-foreground">System Reliability Score</span>
                      <span className="text-2xl font-bold text-secondary">99.97%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 shadow-inner">
                      <div
                        className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 h-4 rounded-full shadow-sm"
                        style={{ width: "99.97%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Enterprise-grade infrastructure ensures 99.97% uptime with redundant failover systems
                    </p>
                  </div>

                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/20 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-foreground">Cost Optimization Impact</span>
                      <span className="text-2xl font-bold text-accent">-₹1.2B</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 shadow-inner">
                      <div
                        className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 h-4 rounded-full shadow-sm"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Predictive maintenance and fleet optimization reduce operational expenditure by ₹1.2B annually
                    </p>
                  </div>
                </div>

                <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 shadow-xl">
                  <h4 className="text-xl font-bold text-foreground mb-6 text-center tracking-tight">
                    Enterprise Performance Evolution Timeline
                  </h4>

                  <div className="relative h-64">
                    <div className="absolute inset-0 flex items-end justify-between px-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="bg-muted w-12 rounded-t-lg shadow-lg border-2 border-primary/20"
                          style={{ height: "60px" }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2 font-medium">2019</span>
                        <span className="text-xs text-foreground font-semibold">32% Efficiency</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div
                          className="bg-muted/80 w-12 rounded-t-lg shadow-lg border-2 border-secondary/20"
                          style={{ height: "85px" }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2 font-medium">2020</span>
                        <span className="text-xs text-foreground font-semibold">45% Efficiency</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div
                          className="bg-muted/60 w-12 rounded-t-lg shadow-lg border-2 border-accent/20"
                          style={{ height: "120px" }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2 font-medium">2021</span>
                        <span className="text-xs text-foreground font-semibold">63% Efficiency</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div
                          className="bg-secondary w-12 rounded-t-lg shadow-lg border-2 border-secondary/30"
                          style={{ height: "160px" }}
                        ></div>
                        <span className="text-xs text-muted-foreground mt-2 font-medium">2022</span>
                        <span className="text-xs text-secondary-foreground font-semibold">78% Efficiency</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div
                          className="bg-primary w-12 rounded-t-lg shadow-lg relative overflow-hidden border-2 border-primary/40"
                          style={{ height: "220px" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60 animate-pulse"></div>
                        </div>
                        <span className="text-xs text-muted-foreground mt-2 font-medium">2024</span>
                        <span className="text-xs text-primary-foreground font-bold bg-primary px-2 py-1 rounded text-[10px]">
                          97% Efficiency
                        </span>
                      </div>
                    </div>

                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">PRTC Enterprise Implementation (2023)</span>{" "}
                      delivered exponential performance improvements across all operational metrics
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2 tracking-tight">18.7M</div>
                  <div className="text-sm font-medium text-muted-foreground">Daily Active Users</div>
                </div>
                <div className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-secondary mb-2 tracking-tight">99.97%</div>
                  <div className="text-sm font-medium text-muted-foreground">System Uptime SLA</div>
                </div>
                <div className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2 tracking-tight">847ms</div>
                  <div className="text-sm font-medium text-muted-foreground">Average API Response</div>
                </div>
                <div className="text-center p-6 bg-background/60 backdrop-blur-sm rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2 tracking-tight">₹4.8B</div>
                  <div className="text-sm font-medium text-muted-foreground">Annual Value Generated</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Real-Time Intelligence</h3>
                <p className="text-muted-foreground">
                  Advanced GPS tracking with machine learning algorithms for precise location analytics and predictive
                  ETAs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-secondary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Fleet Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive route optimization with dynamic scheduling and predictive maintenance protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cloud-Native Architecture</h3>
                <p className="text-muted-foreground">
                  Scalable infrastructure with edge computing capabilities and enterprise-grade security protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t-2 border-primary/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#262626", background: "#262626" }}
                >
                  <span className="text-white font-bold text-lg" style={{ color: "white" }}>
                    P
                  </span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold text-foreground">PRTC</h3>
                  <p className="text-sm text-muted-foreground">Punjab Roadways Transportation Corporation</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Transforming public transportation in Punjab with cutting-edge technology, real-time tracking, and
                unmatched reliability for millions of daily commuters.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
