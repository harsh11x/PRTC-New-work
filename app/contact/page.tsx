import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Contact PRTC</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Connect with our enterprise support team for inquiries, partnerships, or technical assistance. Our dedicated
            professionals are available 24/7 to ensure seamless transportation operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Get in Touch</h2>

            <div className="space-y-8 mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Enterprise Helpline</h3>
                    <p className="text-muted-foreground">+91-172-2740-8000</p>
                    <p className="text-sm text-muted-foreground">24/7 Technical Support</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Email Support</h3>
                    <p className="text-muted-foreground">enterprise@prtc.gov.in</p>
                    <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent-foreground"
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
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Headquarters</h3>
                    <p className="text-muted-foreground">PRTC Complex, Sector 17</p>
                    <p className="text-sm text-muted-foreground">Chandigarh, Punjab 160017</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">&lt; 2 hrs</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">99.8%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Enterprise Inquiry Form</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <Input placeholder="Enter your full name" className="border-2 border-muted focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Organization</label>
                    <Input
                      placeholder="Company/Department name"
                      className="border-2 border-muted focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your.email@domain.com"
                      className="border-2 border-muted focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input placeholder="+91 XXXXX XXXXX" className="border-2 border-muted focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Inquiry Type</label>
                  <select className="w-full p-3 border-2 border-muted rounded-md focus:border-primary bg-background text-foreground">
                    <option>Technical Support</option>
                    <option>Partnership Inquiry</option>
                    <option>Enterprise Solutions</option>
                    <option>API Integration</option>
                    <option>General Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Please provide detailed information about your inquiry..."
                    className="border-2 border-muted focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                  Submit Enterprise Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
