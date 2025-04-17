import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Search, Users, Shield, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-app-primary/20 to-app-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-app-text-primary">
                Find Your Perfect Match with <span className="text-app-primary neon-text">FyndBae</span>
              </h1>
              <p className="text-lg text-app-text-secondary md:text-xl">
                Connect with like-minded individuals and discover meaningful relationships in a safe and friendly
                environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button className="bg-app-primary hover:bg-app-primary/80 text-white shadow-neon">Download Now</Button>
                <Button
                  variant="outline"
                  className="border-app-primary text-app-primary hover:bg-app-primary/10 neon-border"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <Image src="/logo3.png" alt="FyndBae Logo" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-app-background">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-app-text-primary">
            Why Choose <span className="text-app-primary">FyndBae</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card flex flex-col items-center text-center p-6 rounded-lg">
              <div className="bg-app-primary/20 p-3 rounded-full mb-4">
                <Search className="h-8 w-8 text-app-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-app-primary">Smart Matching</h3>
              <p className="text-app-text-secondary">
                Our advanced algorithm finds the most compatible matches for you.
              </p>
            </div>
            <div className="glass-card flex flex-col items-center text-center p-6 rounded-lg">
              <div className="bg-app-primary/20 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-app-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-app-primary">Verified Profiles</h3>
              <p className="text-app-text-secondary">All profiles are verified to ensure you're meeting real people.</p>
            </div>
            <div className="glass-card flex flex-col items-center text-center p-6 rounded-lg">
              <div className="bg-app-primary/20 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-app-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-app-primary">Safe & Secure</h3>
              <p className="text-app-text-secondary">Your privacy and security are our top priorities.</p>
            </div>
            <div className="glass-card flex flex-col items-center text-center p-6 rounded-lg">
              <div className="bg-app-primary/20 p-3 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-app-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-app-primary">Easy Communication</h3>
              <p className="text-app-text-secondary">Chat, and connect with your matches seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-app-card/30">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-app-text-primary">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-app-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-app-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-app-text-primary">Rahul & Priya</h3>
                  <p className="text-sm text-app-text-secondary">Matched 8 months ago</p>
                </div>
              </div>
              <p className="text-app-text-secondary">
                "FyndBae helped us find each other when we least expected it. We're now planning our wedding!"
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-app-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-app-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-app-text-primary">Amit & Neha</h3>
                  <p className="text-sm text-app-text-secondary">Matched 1 year ago</p>
                </div>
              </div>
              <p className="text-app-text-secondary">
                "The matching algorithm is incredible! We have so much in common and would never have met otherwise."
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-app-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-app-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-app-text-primary">Vikram & Meera</h3>
                  <p className="text-sm text-app-text-secondary">Matched 6 months ago</p>
                </div>
              </div>
              <p className="text-app-text-secondary">
                "After trying several dating apps, FyndBae was the only one that helped me find a genuine connection."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-app-primary to-app-primary/70 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of singles who have found meaningful connections on FyndBae.
          </p>
          <Button className="bg-white text-app-primary hover:bg-gray-100 shadow-neon-lg">Download FyndBae Today</Button>
        </div>
      </section>
    </div>
  )
}
