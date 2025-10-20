import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Shield, Lock, FileSearch, AlertTriangle, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ITConsultingNav } from '@/components/ITConsultingNav';
import { getPageSettings } from '@/lib/page-settings';

export const metadata = {
  title: 'Cybersecurity & Data Protection | NDPR Compliance | NINEPRIME',
  description: 'Defensive frameworks, security assessments, and data protection strategies. ISO 27001, NIST CSF, and NDPR compliance support.',
};

export default async function CybersecurityPage() {
  const pageSettings = await getPageSettings('cybersecurity');

  return (
    <>
      <ITConsultingNav />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-red-900 to-orange-900 text-white py-24 overflow-hidden">
          {pageSettings?.hero_image && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={pageSettings.hero_image}
                alt="Cybersecurity and data protection"
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
                {pageSettings?.hero_heading || 'Cybersecurity & Data Protection'}
              </h1>
              <p className="text-xl text-red-100 max-w-3xl">
                {pageSettings?.hero_subheading || 'Defensive frameworks, digital assessment, and resilience strategies.'}
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Link href="/contact?service=cybersecurity">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    Request Security Assessment
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

        {/* Positioning */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-800 leading-relaxed">
              Security underpins everything we build. We assess risks, harden your environment, and establish governance 
              that meets regulatory expectations. Our approach aligns with recognized frameworks (e.g., ISO 27001, NIST CSF) 
              and regional regulations such as NDPR, helping you protect data, ensure uptime, and respond with confidence.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Security Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <FileSearch className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Assessment</h3>
                <p className="text-gray-800 mb-4">
                  Architecture review, configuration baselines, vulnerability scans.
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• Infrastructure audit</li>
                  <li>• Penetration testing</li>
                  <li>• Security posture review</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <Lock className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection & Privacy</h3>
                <p className="text-gray-800 mb-4">
                  Policies, records of processing, DPIAs, retention and access controls.
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• NDPR compliance</li>
                  <li>• GDPR readiness</li>
                  <li>• Data mapping</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Defensive Engineering</h3>
                <p className="text-gray-800 mb-4">
                  Identity & access, network segmentation, endpoint protection, logging/SIEM.
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• IAM implementation</li>
                  <li>• Network hardening</li>
                  <li>• Security monitoring</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Incident Readiness</h3>
                <p className="text-gray-800 mb-4">
                  Playbooks, tabletop exercises, backup & recovery testing.
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• Response planning</li>
                  <li>• Crisis simulation</li>
                  <li>• DR testing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <ClipboardCheck className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Enablement</h3>
                <p className="text-gray-800 mb-4">
                  Gap analysis, remediation roadmap, audit support.
                </p>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• ISO 27001 support</li>
                  <li>• NIST CSF alignment</li>
                  <li>• Audit preparation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">Custom Security Programs</h3>
                <p className="text-red-100 mb-4">
                  Tailored security strategy for your industry and risk profile.
                </p>
                <Link href="/contact?service=custom-security">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Request Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What You Receive</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Deliverables</h3>
                <ul className="space-y-4">
                  {[
                    'Risk register and prioritized remediation plan',
                    'Hardening guidelines and control configurations',
                    'Incident response playbooks and training',
                    'Security monitoring dashboards',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Deliverables</h3>
                <ul className="space-y-4">
                  {[
                    'Updated security policies and data maps',
                    'Executive summary for boards and regulators',
                    'Compliance gap analysis report',
                    'Budget and resource recommendations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Framework Alignment */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frameworks We Support</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">ISO 27001</div>
                <p className="text-sm text-gray-800">Information Security Management</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">NIST CSF</div>
                <p className="text-sm text-gray-800">Cybersecurity Framework</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">NDPR</div>
                <p className="text-sm text-gray-800">Nigeria Data Protection</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">GDPR</div>
                <p className="text-sm text-gray-800">EU Data Protection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Security Process</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Assess', desc: 'Current state, risks, and quick wins' },
                { step: '2', title: 'Plan', desc: 'Prioritized roadmap with timelines' },
                { step: '3', title: 'Implement', desc: 'Deploy controls and train teams' },
                { step: '4', title: 'Monitor', desc: 'Ongoing support and improvement' },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-800">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  Do you "do the fixes" or only audit?
                </summary>
                <p className="mt-3 text-gray-800">
                  Both. We can implement controls and train your team. Our engagements are flexible—we can do 
                  pure assessment, implementation, or full managed security depending on your needs and resources.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  How fast can we start?
                </summary>
                <p className="mt-3 text-gray-800">
                  We begin with a scope call and provide a phased plan that tackles quick wins first. Most assessments 
                  can start within 1-2 weeks of agreement.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  What about NDPR compliance specifically?
                </summary>
                <p className="mt-3 text-gray-800">
                  We help organizations achieve and maintain NDPR compliance through data audits, policy development, 
                  consent management implementation, and preparation for NITDA audits. We also assist with Data Protection 
                  Officer (DPO) responsibilities.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  Do you offer ongoing managed security?
                </summary>
                <p className="mt-3 text-gray-800">
                  Yes. We offer monthly retainers for continuous monitoring, quarterly assessments, incident response 
                  support, and compliance maintenance. Contact us for a custom managed security proposal.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Secure Your Organization Today</h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait for a breach. Start with a comprehensive security assessment.
            </p>
            <Link href="/contact?service=cybersecurity">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Request Security Assessment <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
