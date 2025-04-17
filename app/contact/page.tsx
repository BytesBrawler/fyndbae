import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-app-text-primary">
          Contact <span className="text-app-primary">Us</span>
        </h1>

        <div className="glass-card rounded-lg p-6 md:p-8 mb-8">
          <p className="text-app-text-secondary mb-6">Last updated on 06-04-2025 11:37:37</p>

          <h2 className="text-xl font-semibold mb-4 text-app-primary">
            You may contact us using the information below:
          </h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <MapPin className="h-5 w-5 text-app-primary" />
              </div>
              <div>
                <p className="font-medium text-app-text-primary">Merchant Legal entity name:</p>
                <p className="text-app-text-secondary">SURINDER KUMAR</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <MapPin className="h-5 w-5 text-app-primary" />
              </div>
              <div>
                <p className="font-medium text-app-text-primary">Registered Address:</p>
                <p className="text-app-text-secondary">SHOP NO.3, SUBHASH MARKET, ROHTAK, HARYANA, PIN: 124001</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <MapPin className="h-5 w-5 text-app-primary" />
              </div>
              <div>
                <p className="font-medium text-app-text-primary">Operational Address:</p>
                <p className="text-app-text-secondary">SHOP NO.3, SUBHASH MARKET, ROHTAK, HARYANA, PIN: 124001</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <Phone className="h-5 w-5 text-app-primary" />
              </div>
              <div>
                <p className="font-medium text-app-text-primary">Telephone No:</p>
                <p className="text-app-text-secondary">9220964395</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-3 mt-1">
                <Mail className="h-5 w-5 text-app-primary" />
              </div>
              <div>
                <p className="font-medium text-app-text-primary">E-Mail ID:</p>
                <p className="text-app-text-secondary">findmycrush5@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4 text-app-primary">Send Us a Message</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-app-text-primary mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-app-surface border border-white/10 rounded-md focus:ring-app-primary focus:border-app-primary text-app-text-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-app-text-primary mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-app-surface border border-white/10 rounded-md focus:ring-app-primary focus:border-app-primary text-app-text-primary"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-app-text-primary mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 bg-app-surface border border-white/10 rounded-md focus:ring-app-primary focus:border-app-primary text-app-text-primary"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-app-text-primary mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-app-surface border border-white/10 rounded-md focus:ring-app-primary focus:border-app-primary text-app-text-primary"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-app-primary text-white font-medium rounded-md hover:bg-app-primary/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
