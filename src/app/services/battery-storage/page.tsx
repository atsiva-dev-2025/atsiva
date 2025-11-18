import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Battery, Zap, Clock, Shield, TrendingUp, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getPageSettings } from '@/lib/page-settings';

export const metadata = {
  title: 'Battery Storage Solutions | NINEPRIME - 24/7 Power Backup',
  description: 'Reliable battery backup systems for homes and businesses. Store solar energy, protect against outages, and achieve energy independence.',
};

export default async function BatteryStoragePage() {
  const pageSettings = await getPageSettings('battery-storage');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white py-24 overflow-hidden">
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
                ENERGY STORAGE SOLUTIONS
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {pageSettings?.hero_heading || 'Never Experience Power Outages Again'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {pageSettings?.hero_subheading || 'Store solar energy and enjoy uninterrupted 24/7 power supply with NINEPRIME\'s advanced lithium battery storage systems. Perfect for homes and businesses.'}
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-600">Power Supply</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">15 Years</div>
                  <div className="text-sm text-gray-600">Battery Life</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-sm text-gray-600">Backup Guarantee</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact?service=battery-storage">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolio?subcategory=battery-storage">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                    View Installations <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={pageSettings?.hero_image || 'https://images.unsplash.com/photo-1639302610362-4c86747e8680?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cmljJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1200&q=80'}
                alt="Electric car charging with battery storage"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">
                Tired of Frequent Power Cuts?
              </h2>
              <ul className="space-y-4 text-gray-900">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Unreliable grid power disrupting daily activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Expensive diesel generators with high running costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Solar panels underutilized without energy storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>No backup power during nighttime or emergencies</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">NINEPRIME Battery Storage Delivers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span><strong>24/7 power availability</strong> day and night</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span><strong>Seamless automatic switching</strong> in milliseconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span><strong>Maximum solar efficiency</strong> with energy storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Battery Storage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Why Add Battery Storage?
          </h2>
          <p className="text-center text-gray-800 mb-12">
            Maximize your solar investment and achieve true energy independence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Power</h3>
              <p className="text-gray-800">
                Use stored solar energy at night and during outages for continuous power supply.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Maximize Solar ROI</h3>
              <p className="text-gray-800">
                Store excess solar energy instead of losing it, increasing system efficiency by 80%.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Protect Appliances</h3>
              <p className="text-gray-800">
                Prevent damage from power surges and voltage fluctuations with stable backup power.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Energy Independence</h3>
              <p className="text-gray-800">
                Reduce reliance on unreliable grid and expensive diesel generators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Battery Storage Packages
          </h2>
          <p className="text-center text-gray-800 mb-12">
            Choose the right capacity for your home or business
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Basic */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-6 h-6 text-blue-600" />
                <div className="text-sm font-semibold text-blue-600">RESIDENTIAL</div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">5kWh</h3>
              <p className="text-gray-900 mb-6">Ideal for apartments & small homes</p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="text-sm text-gray-800">Backup Duration</div>
                <div className="text-2xl font-bold text-blue-600">4-6 hours</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">5kWh lithium battery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">3.5kW hybrid inverter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Powers lights, fans, TV, fridge</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Monitoring app included</span>
                </li>
              </ul>

              <Link href="/contact?package=battery-5kwh">
                <Button className="w-full">Get Quote</Button>
              </Link>
            </div>

            {/* Residential Standard */}
            <div className="bg-purple-600 text-white rounded-xl shadow-2xl p-8 border-4 border-purple-700 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-6 h-6" />
                <div className="text-sm font-semibold text-white">RESIDENTIAL</div>
              </div>
              <h3 className="text-3xl font-bold mb-2">10kWh</h3>
              <p className="text-white mb-6">Perfect for medium-sized homes</p>
              
              <div className="bg-purple-700 p-4 rounded-lg mb-6">
                <div className="text-sm text-white">Backup Duration</div>
                <div className="text-2xl font-bold">8-12 hours</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>10kWh lithium battery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>5kW hybrid inverter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Powers entire home including AC</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Smart energy management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>Free installation & training</span>
                </li>
              </ul>

              <Link href="/contact?package=battery-10kwh">
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Commercial/Large Home */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Battery className="w-6 h-6 text-purple-600" />
                <div className="text-sm font-semibold text-purple-600">COMMERCIAL</div>
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">20kWh+</h3>
              <p className="text-gray-900 mb-6">For large homes & businesses</p>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <div className="text-sm text-gray-800">Backup Duration</div>
                <div className="text-2xl font-bold text-purple-600">12-24 hours</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">20kWh+ modular batteries</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">10kW+ three-phase inverter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Powers full facility 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Advanced monitoring & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Priority support & maintenance</span>
                </li>
              </ul>

              <Link href="/contact?package=battery-commercial">
                <Button className="w-full">Request Proposal</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Advanced Lithium Battery Technology
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Lithium Over Lead-Acid?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">3x Longer Lifespan</div>
                    <div className="text-gray-300">15+ years vs 3-5 years for lead-acid</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">50% More Efficient</div>
                    <div className="text-gray-300">95% charge efficiency vs 70% for lead-acid</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">70% Lighter Weight</div>
                    <div className="text-gray-300">Easier installation, less structural load</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">Zero Maintenance</div>
                    <div className="text-gray-300">No water topping, no acid spills, no fumes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">Deeper Discharge</div>
                    <div className="text-gray-300">Use 90% capacity vs 50% for lead-acid</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Safety Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>Built-in fire suppression system</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>Overcharge & over-discharge protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>Temperature monitoring & cooling</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>Short circuit protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>IP65 weatherproof rating</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span>Remote monitoring & diagnostics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            How Battery Storage Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: 'Solar Charges Battery', 
                desc: 'During daytime, solar panels charge your battery and power your home'
              },
              { 
                step: '2', 
                title: 'Store Excess Energy', 
                desc: 'Surplus solar energy is stored in the battery for later use'
              },
              { 
                step: '3', 
                title: 'Use at Night', 
                desc: 'Battery powers your home at night or during cloudy weather'
              },
              { 
                step: '4', 
                title: 'Grid Backup', 
                desc: 'System switches to grid only when battery is low (optional)'
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-900">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Battery Storage FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                How long do lithium batteries last?
              </summary>
              <p className="mt-3 text-gray-900">
                Our lithium batteries are rated for 6,000+ charge cycles, translating to 15+ years 
                of daily use.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Can I add batteries to my existing solar system?
              </summary>
              <p className="mt-3 text-gray-900">
                Yes! We can retrofit battery storage to most existing solar installations. 
                Our engineers will assess your current system and recommend compatible batteries.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                What size battery do I need?
              </summary>
              <p className="mt-3 text-gray-900">
                It depends on your daily energy consumption and desired backup duration. 
                As a rule of thumb: 5kWh for 4-6 hours backup, 10kWh for 8-12 hours, 
                20kWh+ for 24-hour backup. We provide free energy audits to size correctly.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Are lithium batteries safe indoors?
              </summary>
              <p className="mt-3 text-gray-900">
                Absolutely. Modern lithium batteries (LiFePO4) have multiple safety features 
                including fire suppression, overcharge protection, and temperature control. 
                They're safe for indoor or outdoor installation.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                What maintenance do batteries require?
              </summary>
              <p className="mt-3 text-gray-900">
                Lithium batteries are virtually maintenance-free. We recommend annual inspections 
                to check connections and update firmware. No water topping or cleaning required.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-lg cursor-pointer text-gray-900">
                Can batteries work without solar panels?
              </summary>
              <p className="mt-3 text-gray-900">
                Yes. Batteries can charge from the grid during off-peak hours and discharge 
                during peak tariff times, saving money even without solar panels.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Achieve True Energy Independence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Never worry about power outages again. Get your free battery storage 
            consultation and custom quote today.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">Free</div>
                <div className="text-sm text-gray-300">Energy Audit</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">24hrs</div>
                <div className="text-sm text-gray-300">Quote Delivery</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=battery-storage">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/portfolio?subcategory=battery-storage">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Installations <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-300 mt-6">
            ✓ No obligation • ✓ Custom sizing • ✓ Expert consultation
          </p>
        </div>
      </section>
    </div>
  );
}

