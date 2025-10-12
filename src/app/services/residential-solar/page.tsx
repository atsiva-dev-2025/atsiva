import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Zap, Shield, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const metadata = {
  title: 'Residential Solar Solutions | ATSIVA',
  description: 'Clean, affordable solar energy for your home. Save up to 70% on electricity bills.',
};

export default function ResidentialSolarPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
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
              <h1 className="text-5xl font-bold mb-6">
                Power Your Home with Clean Solar Energy
              </h1>
              <p className="text-xl text-white mb-8">
                Join thousands of Nigerian homeowners saving up to 70% on electricity bills 
                with ATSIVA's premium residential solar solutions.
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolio?subcategory=residential-solar">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    View Projects <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1680302170840-ad9b1256f40e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxyZXNpZGVudGlhbCUyMGhvbWUlMjBzb2xhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1200&q=80"
                alt="Residential home with solar panels"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Residential Solar?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Save Up to 70%</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Slash your electricity bills and protect yourself from rising NEPA tariffs.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Power Supply</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Say goodbye to power outages. Enjoy uninterrupted electricity day and night.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">25-Year Warranty</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Premium panels with industry-leading warranties and local after-sales support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Tiers */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Solar Packages</h2>
          <p className="text-center text-gray-800 mb-12 text-lg">
            Choose the perfect system for your home's energy needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Basic</h3>
              <p className="text-gray-700 mb-4 text-lg">For small homes & apartments</p>
              <div className="text-5xl font-bold mb-6 text-gray-900">3.5kW</div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">8 Solar Panels (450W each)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">3.5kW Hybrid Inverter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">5kWh Battery Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Installation & Training</span>
                </li>
              </ul>

              <Link href="/contact?package=basic">
                <Button className="w-full">Get Quote</Button>
              </Link>
            </div>

            {/* Standard Package */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-2xl p-8 border-4 border-blue-500 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>
              <h3 className="text-3xl font-bold mb-2">Standard</h3>
              <p className="text-blue-100 mb-4 text-lg">For medium-sized homes</p>
              <div className="text-6xl font-bold mb-6">5kW</div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>12 Solar Panels (450W each)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>5kW Hybrid Inverter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>10kWh Battery Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Premium Installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>2-Year Maintenance</span>
                </li>
              </ul>

              <Link href="/contact?package=standard">
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Premium</h3>
              <p className="text-gray-700 mb-4 text-lg">For large homes & villas</p>
              <div className="text-5xl font-bold mb-6 text-gray-900">10kW</div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">24 Solar Panels (450W each)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">10kW Hybrid Inverter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">20kWh Battery Storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Smart Monitoring System</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">5-Year Full Maintenance</span>
                </li>
              </ul>

              <Link href="/contact?package=premium">
                <Button className="w-full">Get Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Consultation', desc: 'We assess your energy needs and home' },
              { step: '2', title: 'Custom Design', desc: 'Get a tailored solar solution & quote' },
              { step: '3', title: 'Installation', desc: '2-3 days professional installation' },
              { step: '4', title: 'Go Solar', desc: 'Start saving immediately!' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-800">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                How much can I save with solar?
              </summary>
              <p className="mt-3 text-gray-800">
                Most homeowners save 60-70% on monthly electricity bills. A typical 5kW system 
                pays for itself in 3-5 years and continues saving for 25+ years.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                What happens during power outages?
              </summary>
              <p className="mt-3 text-gray-800">
                Your solar system with battery backup automatically kicks in during grid failures, 
                providing uninterrupted power to your home.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                How long does installation take?
              </summary>
              <p className="mt-3 text-gray-800">
                Most residential installations are completed in 2-3 days, including wiring, 
                panel mounting, and system testing.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-white mb-8">
            Get a free consultation and custom quote for your home today
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/portfolio?subcategory=residential-solar">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                See Real Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


