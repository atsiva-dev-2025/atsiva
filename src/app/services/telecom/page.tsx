import { Button } from '@/components/ui/Button';
import { ArrowRight, Radio, Wifi, Globe, Antenna } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Telecom & Connectivity Solutions | ATSIVA',
  description: 'Advanced digital connectivity solutions. Reliable telecom infrastructure for modern businesses.',
};

export default function TelecomPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              TELECOM SOLUTIONS
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Advanced Digital Connectivity for Modern Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Reliable telecom infrastructure, network design, and cutting-edge connectivity solutions 
              powering your digital transformation.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Link href="/contact?service=telecom">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-12">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80"
                alt="Telecom infrastructure network"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Telecom Infrastructure Solutions
          </h2>
          <p className="text-center text-gray-800 mb-12">
            Robust connectivity solutions for businesses across Nigeria
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Antenna className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Network Infrastructure</h3>
              <p className="text-gray-900 mb-4">
                Complete network design, structured cabling, and telecom equipment installation 
                for reliable connectivity.
              </p>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>• Structured cabling systems</li>
                <li>• Network rack installations</li>
                <li>• Fiber optic deployment</li>
                <li>• Equipment housing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Wireless Solutions</h3>
              <p className="text-gray-900 mb-4">
                Enterprise Wi-Fi design, deployment, and management for seamless wireless coverage.
              </p>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>• Enterprise Wi-Fi networks</li>
                <li>• Coverage optimization</li>
                <li>• Access point installation</li>
                <li>• Network monitoring</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Telecom Support</h3>
              <p className="text-gray-900 mb-4">
                Ongoing maintenance, upgrades, and technical support for your telecom infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-800">
                <li>• 24/7 technical support</li>
                <li>• System maintenance</li>
                <li>• Performance optimization</li>
                <li>• Equipment upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon - eSIM */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-yellow-400 text-cyan-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
            COMING SOON
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            Next-Generation eSIM Connectivity
          </h2>
          
          <p className="text-2xl text-white mb-8">
            ATSIVA is partnering with Bilad to bring advanced eSIM technology to Nigeria. 
            Seamless global connectivity for businesses and individuals.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Globe className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Global Coverage</h3>
                <p className="text-white text-sm">Connect anywhere, no physical SIM needed</p>
              </div>
              <div>
                <Wifi className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Instant Activation</h3>
                <p className="text-white text-sm">Deploy connectivity in minutes, not days</p>
              </div>
              <div>
                <Radio className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Enterprise Ready</h3>
                <p className="text-white text-sm">Scalable plans for growing businesses</p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-800/50 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-3">Why eSIM?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-white">✓ No physical SIM cards to manage</p>
                <p className="text-white">✓ Switch carriers instantly</p>
                <p className="text-white">✓ Multiple numbers, one device</p>
              </div>
              <div>
                <p className="text-white">✓ Perfect for IoT & remote teams</p>
                <p className="text-white">✓ Reduced roaming costs</p>
                <p className="text-white">✓ Sustainable, eco-friendly solution</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-white mb-6">
            Be the first to know when we launch. Join our early access list.
          </p>

          <Link href="/contact?interest=esim">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Join Waitlist <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <p className="text-sm text-white mt-6">
            Launching Q2 2025 • Limited early adopter benefits available
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🏢', title: 'Corporate Offices', desc: 'Reliable enterprise connectivity' },
              { icon: '🏭', title: 'Manufacturing', desc: 'Industrial network solutions' },
              { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant networks' },
              { icon: '🏨', title: 'Hospitality', desc: 'Guest Wi-Fi & telecom' },
              { icon: '🏫', title: 'Education', desc: 'Campus-wide connectivity' },
              { icon: '📡', title: 'Data Centers', desc: 'High-performance infrastructure' },
              { icon: '🏬', title: 'Retail', desc: 'POS & customer Wi-Fi' },
              { icon: '🌾', title: 'Remote Sites', desc: 'Off-grid connectivity' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Upgrade Your Connectivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your telecom infrastructure needs and future eSIM opportunities
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact?service=telecom">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Request Consultation
              </Button>
            </Link>
            <Link href="/portfolio?subcategory=telecom">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

