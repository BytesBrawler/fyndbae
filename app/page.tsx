import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Search, Users, Shield, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
                Find Your Perfect Match with <span className="text-red-500">FyndBae</span>
              </h1>
              <p className="text-lg text-gray-600 md:text-xl">
                Connect with like-minded individuals and discover meaningful relationships in a safe and friendly
                environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button className="bg-red-500 hover:bg-red-600 text-white">Download Now</Button>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
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
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose FyndBae?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Search className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">Our advanced algorithm finds the most compatible matches for you.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">All profiles are verified to ensure you're meeting real people.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Your privacy and security are our top priorities.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
              <p className="text-gray-600">Chat, and connect with your matches seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Rahul & Priya</h3>
                  <p className="text-sm text-gray-500">Matched 8 months ago</p>
                </div>
              </div>
              <p className="text-gray-600">
                "FyndBae helped us find each other when we least expected it. We're now planning our wedding!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Amit & Neha</h3>
                  <p className="text-sm text-gray-500">Matched 1 year ago</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The matching algorithm is incredible! We have so much in common and would never have met otherwise."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Vikram & Meera</h3>
                  <p className="text-sm text-gray-500">Matched 6 months ago</p>
                </div>
              </div>
              <p className="text-gray-600">
                "After trying several dating apps, FyndBae was the only one that helped me find a genuine connection."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-500 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of singles who have found meaningful connections on FyndBae.
          </p>
          <Button className="bg-white text-red-500 hover:bg-gray-100">Download FyndBae Today</Button>
        </div>
      </section>
    </div>
  )
}
