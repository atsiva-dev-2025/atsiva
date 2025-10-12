import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Target, Users, Award, Lightbulb, Sun, Cpu, Radio, Hammer } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About ATSIVA | Leading the Future of Energy & Smart Solutions',
  description: 'Pioneering sustainable energy, intelligent automation, and digital infrastructure across Nigeria.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
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
              Powering Nigeria's Sustainable Future
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              ATSIVA is a multi-disciplinary technology and energy company transforming how businesses 
              and communities access power, connectivity, and intelligent infrastructure.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Work With Us
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                  Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-900 text-lg leading-relaxed">
                To deliver innovative, sustainable, and reliable energy solutions that empower businesses, 
                homes, and communities across Nigeria. We bridge the gap between traditional infrastructure 
                and smart technology, creating resilient systems that drive economic growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-900 text-lg leading-relaxed">
                To be West Africa's leading provider of integrated energy and smart solutions, recognized 
                for excellence, innovation, and commitment to sustainability. We envision a future where 
                every Nigerian business and household has access to clean, affordable, and uninterrupted power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Core Values</h2>
          <p className="text-center text-gray-800 mb-12">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Innovation</h3>
              <p className="text-gray-800 text-sm">
                Constantly evolving with cutting-edge technology and forward-thinking solutions
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Integrity</h3>
              <p className="text-gray-800 text-sm">
                Transparent, honest, and accountable in every project and partnership
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Sustainability</h3>
              <p className="text-gray-800 text-sm">
                Committed to eco-friendly practices and reducing carbon footprints
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Excellence</h3>
              <p className="text-gray-800 text-sm">
                Delivering superior quality and exceeding expectations on every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Do</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              ATSIVA operates at the intersection of energy, technology, and infrastructure, 
              providing comprehensive solutions across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Renewable Energy */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Renewable Energy</h3>
              <p className="text-gray-900 mb-4">
                Solar installations, battery storage, and hybrid energy systems for homes and businesses.
              </p>
              <ul className="space-y-2 text-sm text-gray-900 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" />
                  Residential Solar Systems
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" />
                  Commercial Solar Installations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" />
                  Battery Backup Solutions
                </li>
              </ul>
              <Link href="/services/residential-solar">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            {/* Smart Solutions */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Automation</h3>
              <p className="text-gray-900 mb-4">
                Intelligent building systems, security, and IoT integration for modern spaces.
              </p>
              <ul className="space-y-2 text-sm text-gray-900 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  Building Management Systems
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  Security & Surveillance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  Smart Home/Office Solutions
                </li>
              </ul>
              <Link href="/services/automation">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            {/* Telecom */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Telecom Solutions</h3>
              <p className="text-gray-900 mb-4">
                Network infrastructure, wireless solutions, and next-generation eSIM connectivity.
              </p>
              <ul className="space-y-2 text-sm text-gray-900 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-600" />
                  Network Infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-600" />
                  Enterprise Wi-Fi Systems
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-600" />
                  eSIM Technology (Coming Soon)
                </li>
              </ul>
              <Link href="/services/telecom">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            {/* Construction */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Construction</h3>
              <p className="text-gray-900 mb-4">
                Full-cycle construction services from design to delivery for all project types.
              </p>
              <ul className="space-y-2 text-sm text-gray-900 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600" />
                  Residential & Commercial Buildings
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600" />
                  Infrastructure Development
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600" />
                  MEP & Finishing Works
                </li>
              </ul>
              <Link href="/services/construction">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            {/* Energy Storage */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Battery Storage</h3>
              <p className="text-gray-900 mb-4">
                Advanced battery systems for 24/7 power availability and grid independence.
              </p>
              <ul className="space-y-2 text-sm text-gray-900 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Lithium-ion Battery Banks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Backup Power Solutions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Load Management Systems
                </li>
              </ul>
              <Link href="/services/battery-storage">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>

            {/* Integrated Solutions */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Integrated Solutions</h3>
              <p className="text-gray-900 mb-4">
                Holistic systems combining energy, automation, and infrastructure for maximum efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-900 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  Smart Estates & Campuses
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  Command & Control Centers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  Custom Enterprise Solutions
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full">Discuss Your Needs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">12+</div>
              <div className="text-blue-100">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50MW+</div>
              <div className="text-blue-100">Solar Capacity Installed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ATSIVA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose ATSIVA?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Expertise</h3>
              <p className="text-gray-800">
                Over a decade of experience delivering complex energy and technology projects 
                across residential, commercial, and industrial sectors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Turnkey Solutions</h3>
              <p className="text-gray-800">
                End-to-end service from consultation and design through installation, 
                commissioning, and ongoing maintenance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Client-Centric</h3>
              <p className="text-gray-800">
                Dedicated account managers, 24/7 support, and flexible financing options 
                tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how ATSIVA can power your business with clean energy, 
            smart technology, and reliable infrastructure.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get in Touch
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                View Our Work <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
