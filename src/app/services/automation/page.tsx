import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Lightbulb, Shield, Cpu, TrendingDown, Smartphone, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Smart Building & Home Automation | ATSIVA',
  description: 'Transform your building with intelligent automation. Cut costs, enhance security, and boost efficiency.',
};

export default function AutomationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white py-24 overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                SMART AUTOMATION SOLUTIONS
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Intelligent Buildings That Think for Themselves
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Centralize control of lighting, HVAC, security, and energy systems. 
                Reduce costs by 40%, enhance comfort, and operate 24/7 from your smartphone.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-purple-400">40%</div>
                  <div className="text-sm text-gray-600">Energy Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">60%</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-gray-600">Smart Buildings</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact?service=automation">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get Free Assessment
                  </Button>
                </Link>
                <Link href="/portfolio?subcategory=automation">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                    See Projects
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80"
                alt="Smart building automation dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Complete Automation Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Building Automation */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Building & Facility Automation</h3>
              <p className="text-gray-900 mb-6">
                Unified control of lighting, HVAC, elevators, and energy systems through intelligent BMS platforms.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>BMS Integration:</strong> Centralized control of all building systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Energy Monitoring:</strong> Real-time consumption analytics & optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Occupancy Control:</strong> Automated lighting/HVAC based on room usage</span>
                </li>
              </ul>
              <Link href="/contact?solution=building-automation">
                <Button className="w-full">Learn More</Button>
              </Link>
            </div>

            {/* Security Automation */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Security & Surveillance</h3>
              <p className="text-gray-900 mb-6">
                AI-powered surveillance, access control, and integrated alarm systems for complete security.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>AI CCTV:</strong> Facial recognition, motion detection, license plate tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Access Control:</strong> Biometric, RFID, and card-based systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Remote Monitoring:</strong> Cloud dashboards & mobile alerts</span>
                </li>
              </ul>
              <Link href="/contact?solution=security-automation">
                <Button className="w-full bg-red-600 hover:bg-red-700">Learn More</Button>
              </Link>
            </div>

            {/* Smart Spaces */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Home & Office</h3>
              <p className="text-gray-900 mb-6">
                Intelligent spaces with voice control, automated climate, and integrated multimedia.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Voice Control:</strong> Alexa/Google Assistant integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Smart Lighting:</strong> Motion sensors, dimmers, daylight response</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Climate Zones:</strong> Automated thermostats per room</span>
                </li>
              </ul>
              <Link href="/contact?solution=smart-spaces">
                <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
              </Link>
            </div>

            {/* Integrated Infrastructure */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Integrated Smart Infrastructure</h3>
              <p className="text-gray-900 mb-6">
                End-to-end smart ecosystem connecting energy, security, and IT infrastructure.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>IoT Platforms:</strong> Unified dashboards for all systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Command Centers:</strong> Real-time visualization & control</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900"><strong>Custom Integration:</strong> Link to ERP, energy management software</span>
                </li>
              </ul>
              <Link href="/contact?solution=infrastructure">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Automate With ATSIVA?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">40% Cost Reduction</h3>
              <p className="text-gray-800 text-sm">Lower energy, maintenance, and labor costs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Remote Control</h3>
              <p className="text-gray-800 text-sm">Manage everything from your phone, anywhere</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Enhanced Security</h3>
              <p className="text-gray-800 text-sm">24/7 monitoring with instant alerts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Real-Time Insights</h3>
              <p className="text-gray-800 text-sm">Data analytics for smarter decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Perfect For</h2>
          <p className="text-center text-gray-800 mb-12">Industries we serve with automation excellence</p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏢', title: 'Corporate Offices', desc: 'Smart workspaces with BMS' },
              { icon: '🏨', title: 'Hotels & Resorts', desc: 'Guest experience automation' },
              { icon: '🏥', title: 'Healthcare', desc: 'Secure, compliant facilities' },
              { icon: '🏬', title: 'Shopping Malls', desc: 'Centralized management' },
              { icon: '🏫', title: 'Schools & Universities', desc: 'Safe, efficient campuses' },
              { icon: '🏠', title: 'Luxury Homes', desc: 'Full home automation' },
              { icon: '🏭', title: 'Industrial Sites', desc: 'Process automation' },
              { icon: '🏛️', title: 'Government', desc: 'Secure infrastructure' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Automation Packages</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-2 text-white">Smart Home</h3>
              <p className="text-gray-600 mb-6">Residential automation</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Lighting & climate control</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Security cameras & sensors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Voice control integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Mobile app access</span>
                </li>
              </ul>
              <Link href="/contact?package=smart-home">
                <Button className="w-full" variant="outline">Get Quote</Button>
              </Link>
            </div>

            <div className="bg-purple-600 p-8 rounded-xl relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Smart Office</h3>
              <p className="text-white mb-6">Commercial automation</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>BMS for HVAC, lighting, energy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Access control & CCTV</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Energy analytics dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Remote facility management</span>
                </li>
              </ul>
              <Link href="/contact?package=smart-office">
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">Get Quote</Button>
              </Link>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
              <p className="text-gray-600 mb-6">Full infrastructure integration</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Campus-wide BMS & IoT</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Command & control center</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Custom software integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>24/7 monitoring & support</span>
                </li>
              </ul>
              <Link href="/contact?package=enterprise-automation">
                <Button className="w-full" variant="outline">Request Proposal</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Automate Your Building?</h2>
          <p className="text-xl mb-8">Get a free assessment and custom automation proposal</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact?service=automation">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule Assessment
              </Button>
            </Link>
            <Link href="/portfolio?subcategory=automation">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

