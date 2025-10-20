import { Button } from '@/components/ui/Button';
import { ArrowRight, Lightbulb, GraduationCap, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ITConsultingNav } from '@/components/ITConsultingNav';
import { getPageSettings } from '@/lib/page-settings';

export const metadata = {
  title: 'IT & Consulting | Innovation Labs, Training, Cybersecurity | NINEPRIME',
  description: 'R&D, hands-on training, and cybersecurity for Africa\'s digital future. We turn AI, blockchain, and renewable energy ideas into secure, scalable systems.',
};

export default async function ITConsultingPage() {
  const pageSettings = await getPageSettings('it-consulting');

  return (
    <>
      <ITConsultingNav />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white py-24 overflow-hidden">
          {pageSettings?.hero_image && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={pageSettings.hero_image}
                alt="IT consulting and technology team"
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
                {pageSettings?.hero_heading || 'IT & Consulting'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {pageSettings?.hero_subheading || 'We help organizations move from idea to impact—combining R&D, workforce upskilling, and robust cybersecurity. From AI pilots and blockchain proofs-of-concept to hands-on training and defensible data governance, our team turns strategy into systems that scale.'}
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/contact?service=it-consulting">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Request a Proposal
                  </Button>
                </Link>
                <Link href="/smart-solutions/it-consulting/innovation-labs">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                    Explore Innovation Labs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Outcomes, not buzzwords', desc: 'We design experiments that become production systems.' },
                { title: 'Skills that stick', desc: 'Training mapped to the work your teams actually do.' },
                { title: 'Security by design', desc: 'Data protection and resilience built into every engagement.' },
                { title: 'Local context, global standards', desc: 'African markets expertise with ISO/NIST best practices.' },
              ].map((pillar) => (
                <div key={pillar.title} className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-700 text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Services at a Glance</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Innovation Labs */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation Labs</h3>
                <p className="text-gray-700 mb-6">
                  Bridging AI, blockchain, and renewable energy to build and test what's next.
                </p>
                <Link href="/smart-solutions/it-consulting/innovation-labs">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400">
                    Explore Innovation Labs <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Capacity Development */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Capacity Development</h3>
                <p className="text-gray-700 mb-6">
                  Professional training in ICT, energy systems, and emerging tech with measurable outcomes.
                </p>
                <Link href="/smart-solutions/it-consulting/capacity-development">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400">
                    See Training Programs <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Cybersecurity */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Cybersecurity & Data Protection</h3>
                <p className="text-gray-700 mb-6">
                  Defensive frameworks, digital assessments, and resilience strategies that meet compliance.
                </p>
                <Link href="/smart-solutions/it-consulting/cybersecurity">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400">
                    Strengthen Security <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How We Work</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Assess', desc: 'Goals, constraints, and data readiness.' },
                { step: '2', title: 'Design', desc: 'Roadmap with quick wins and clear KPIs.' },
                { step: '3', title: 'Implement', desc: 'Pilot → scale, with secure-by-default patterns.' },
                { step: '4', title: 'Enable', desc: 'Train your team and hand over with documentation.' },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{phase.title}</h3>
                  <p className="text-gray-700">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to move from plan to production?</h2>
            <Link href="/contact?service=it-consulting">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Request a Proposal
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
