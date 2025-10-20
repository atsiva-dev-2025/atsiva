import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Brain, Network, Zap, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ITConsultingNav } from '@/components/ITConsultingNav';
import { getPageSettings } from '@/lib/page-settings';

export const metadata = {
  title: 'Innovation Labs | AI, Blockchain & Energy Tech R&D | NINEPRIME',
  description: 'Turn bold ideas into working prototypes. AI, blockchain, and renewable energy with secure, cloud-ready architecture.',
};

export default async function InnovationLabsPage() {
  const pageSettings = await getPageSettings('innovation-labs');

  return (
    <>
      <ITConsultingNav />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-24 overflow-hidden">
          {pageSettings?.hero_image && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={pageSettings.hero_image}
                alt="Innovation lab with AI and technology"
                fill
                className="object-cover"
              />
            </div>
          )}
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {pageSettings?.hero_heading || 'Innovation Labs'}
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl">
                {pageSettings?.hero_subheading || 'Bridging AI, Blockchain, and Renewable Energy into next-gen African technologies.'}
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Link href="/contact?service=innovation-labs">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    Start a Discovery Sprint
                  </Button>
                </Link>
                <Link href="/smart-solutions/it-consulting/capacity-development">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                    View Training Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our Innovation Labs turn bold ideas into working prototypes. We fuse AI, blockchain, and renewable energy 
              with secure, cloud-ready architecture—validating performance, cost, compliance, and user value before you scale. 
              Each engagement ends with a build-ready blueprint and a measurable path to impact.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What We Do</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI & Data</h3>
                <p className="text-gray-700">
                  Forecasting, NLP chat/agent use-cases, computer vision, MLOps.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <Network className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Blockchain & Digital Identity</h3>
                <p className="text-gray-700">
                  Smart contracts, asset/token rails, verifiable credentials.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <Zap className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Energy Tech</h3>
                <p className="text-gray-700">
                  Smart metering, microgrid control, solar performance analytics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <Layers className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Edge & IoT</h3>
                <p className="text-gray-700">
                  Sensor integration, gateways, telemetry pipelines, dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Engagement Models</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-200 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Discovery Sprint</h3>
                <p className="text-gray-700 mb-6">
                  Problem framing, feasibility, proof-of-value.
                </p>
              </div>

              <div className="border-2 border-purple-600 bg-purple-50 p-8 rounded-xl">
                <div className="text-xs font-bold text-purple-600 mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Pilot Build</h3>
                <p className="text-gray-700 mb-6">
                  Prototype with real data, security guardrails, success KPIs.
                </p>
              </div>

              <div className="border-2 border-gray-200 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Scale-Up</h3>
                <p className="text-gray-700 mb-6">
                  Production roadmap, cost model, partner selection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Outcomes You Can Expect</h2>
            <ul className="space-y-4">
              {[
                'Validated prototype and technical architecture',
                'Risk and compliance notes (privacy, safety, reliability)',
                'ROI model and go-to-production plan',
                'Transfer of code, documentation, and training',
              ].map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-bold text-lg cursor-pointer text-gray-900">
                  How do we pick the right use case?
                </summary>
                <p className="mt-3 text-gray-700">
                  We score ideas on value, data readiness, and delivery risk—then prototype the top one.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg">
                <summary className="font-bold text-lg cursor-pointer text-gray-900">
                  Can you work with our team?
                </summary>
                <p className="mt-3 text-gray-700">
                  Yes. We co-build and set up repos, CI/CD, and documentation.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Start a Discovery Sprint</h2>
            <Link href="/contact?service=innovation-labs">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
