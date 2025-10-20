import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Code, Database, Zap, Cloud, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ITConsultingNav } from '@/components/ITConsultingNav';
import { getPageSettings } from '@/lib/page-settings';

export const metadata = {
  title: 'Capacity Development | Professional ICT & Tech Training | NINEPRIME',
  description: 'Professional training in ICT, energy systems, and emerging tech. Hands-on bootcamps and academy tracks with measurable outcomes.',
};

export default async function CapacityDevelopmentPage() {
  const pageSettings = await getPageSettings('capacity-development');

  return (
    <>
      <ITConsultingNav />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
          {pageSettings?.hero_image && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={pageSettings.hero_image}
                alt="Professional training and capacity development"
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
                {pageSettings?.hero_heading || 'Capacity Development'}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl">
                {pageSettings?.hero_subheading || 'Professional training in ICT, energy systems, and emerging tech.'}
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Link href="/contact?service=capacity-development">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Request Training Proposal
                  </Button>
                </Link>
                <Link href="/smart-solutions/it-consulting/cybersecurity">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                    View Security Training
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
              We build skills that stick. Programs are mapped to real roles—network engineers, energy managers, 
              data analysts, security teams—and delivered through hands-on projects. Every course includes assessments, 
              labs, and post-training support so your team applies learning on day one.
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Training Programs</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">ICT & Cloud Foundations</h3>
                <p className="text-gray-800">
                  Networking, Linux, virtualization, cloud services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Database className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data & AI Fundamentals</h3>
                <p className="text-gray-800">
                  Data pipelines, analytics, applied machine learning.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Zap className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Systems</h3>
                <p className="text-gray-800">
                  Solar design, microgrid monitoring, smart metering.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Cloud className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">DevOps & Automation</h3>
                <p className="text-gray-800">
                  CI/CD, containers, infrastructure as code, observability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Shield className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Security Essentials</h3>
                <p className="text-gray-800">
                  Secure configuration, incident basics, identity & access.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">Custom Tracks</h3>
                <p className="text-blue-100 mb-4">
                  Tailored programs for your industry, tools, and team.
                </p>
                <Link href="/contact?service=custom-training">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Request Custom Training
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Training Formats</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bootcamps</h3>
                <p className="text-gray-800 mb-6">
                  3–5 days, project-based intensive training.
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Hands-on labs daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Real-world scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-blue-600 bg-blue-50 p-8 rounded-xl">
                <div className="text-xs font-bold text-blue-600 mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Academy Tracks</h3>
                <p className="text-gray-800 mb-6">
                  6–12 weeks, role-based progression programs.
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Structured curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Weekly assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>Capstone project</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Workshops</h3>
                <p className="text-gray-800 mb-6">
                  1–2 days, strategy and governance focused.
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Leadership insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Strategic planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Compliance overview</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Structured curriculum + labs',
                'Instructor-led sessions (on-site/virtual)',
                'Capstone project and evaluation',
                'Certificates of completion + skills report',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Training Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-900 font-medium">Professionals Trained</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-900 font-medium">Completion Rate</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">4.8/5</div>
                <div className="text-gray-900 font-medium">Average Rating</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="text-4xl font-bold text-yellow-600 mb-2">85%</div>
                <div className="text-gray-900 font-medium">Apply Skills Immediately</div>
              </div>
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
                  Can we customize a track?
                </summary>
                <p className="mt-3 text-gray-800">
                  Yes. We tailor modules to your sector, tools, and data. We work with you to understand 
                  your specific needs and build a curriculum that addresses your team's skill gaps.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  Do you certify?
                </summary>
                <p className="mt-3 text-gray-800">
                  We provide completion certificates and prep for vendor/industry certs. Our training aligns 
                  with certification requirements from AWS, Microsoft, CompTIA, and others.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  What's the maximum class size?
                </summary>
                <p className="mt-3 text-gray-800">
                  We recommend 12-20 participants for optimal hands-on engagement. For larger groups, 
                  we can provide multiple sessions or hybrid formats.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                  Do you provide post-training support?
                </summary>
                <p className="mt-3 text-gray-800">
                  Yes. All programs include 30 days of Q&A support via email/Slack, plus optional follow-up 
                  coaching sessions at discounted rates.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Enroll Your Team Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Invest in skills that deliver immediate ROI and long-term competitive advantage.
            </p>
            <Link href="/contact?service=capacity-development">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Request Training Proposal <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
