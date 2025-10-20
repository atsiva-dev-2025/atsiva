import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, TrendingDown, Zap, Award, Building2, Calculator, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getPageSettings } from '@/lib/page-settings';

export const metadata = {
  title: 'Commercial Solar Solutions | NINEPRIME - Reduce Operating Costs',
  description: 'Enterprise solar installations for businesses. Cut energy costs by 70%, improve sustainability, and boost your bottom line.',
};

export default async function CommercialSolarPage() {
  const pageSettings = await getPageSettings('commercial-solar');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24 overflow-hidden">
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
              <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ENTERPRISE SOLAR SOLUTIONS
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {pageSettings?.hero_heading || 'Cut Energy Costs by 70% and Future-Proof Your Business'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {pageSettings?.hero_subheading || 'Join 200+ Nigerian businesses reducing operating costs, ensuring 24/7 uptime, and meeting ESG targets with NINEPRIME\'s commercial solar solutions.'}
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-400">₦50M+</div>
                  <div className="text-sm text-gray-600">Total Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">200+</div>
                  <div className="text-sm text-gray-600">Businesses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact?type=commercial">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Request Proposal
                  </Button>
                </Link>
                <Link href="/portfolio?subcategory=commercial-solar">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                    View Projects <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={pageSettings?.hero_image || 'https://plus.unsplash.com/premium_photo-1742418064842-c929972db9e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWwlMjBzb2xhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1200&q=80'}
                alt="Industrial warehouses with solar panels on the roof"
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
                Is Rising Energy Cost Eating Your Profit?
              </h2>
              <ul className="space-y-4 text-gray-900">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Energy bills consuming 30-40% of operating costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Unreliable grid power causing downtime and losses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Diesel generators draining budgets and damaging equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">✗</span>
                  <span>Pressure to meet sustainability and ESG commitments</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">NINEPRIME Solar Delivers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span><strong>70% cost reduction</strong> on energy expenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span><strong>24/7 power guarantee</strong> with battery backup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span><strong>3-5 year ROI</strong> with 25-year system life</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span><strong>Carbon neutral operations</strong> for ESG reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Cut Your Energy Costs by 70%?
          </h2>
          <p className="text-xl text-white mb-8">
            Join 200+ businesses already saving millions with NINEPRIME commercial solar solutions.
            Get your free energy audit and custom proposal today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?type=commercial">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Request Free Proposal
              </Button>
            </Link>
            <Link href="/portfolio?subcategory=commercial-solar">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Case Studies <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-white mt-6">
            ✓ No obligation • ✓ Custom ROI analysis • ✓ Same-day response
          </p>
        </div>
      </section>
    </div>
  );
}

