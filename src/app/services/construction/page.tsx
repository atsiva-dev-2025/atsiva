import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Building, Hammer, HardHat, Wrench } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Construction Services | ATSIVA',
  description: 'Complete construction solutions from design to delivery. Residential, commercial, and infrastructure projects.',
};

export default function ConstructionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-gray-900 text-white py-24 overflow-hidden">
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
              <div className="inline-block bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                CONSTRUCTION SOLUTIONS
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Building Excellence from Foundation to Finish
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive construction services spanning design, engineering, execution, and maintenance. 
                Delivering quality projects on time, every time.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact?service=construction">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio?subcategory=construction">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
                alt="Construction site with modern building"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Complete Construction Solutions
          </h2>
          <p className="text-center text-gray-800 mb-12">
            End-to-end services from concept to completion
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Design & Engineering */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Design & Engineering</h3>
              <p className="text-gray-900 mb-6">
                Professional planning and engineering services ensuring structural integrity and optimal functionality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Architectural design & 3D modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Structural engineering calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Site surveys & feasibility studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Building permits & approvals</span>
                </li>
              </ul>
            </div>

            {/* Construction */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Construction & Build</h3>
              <p className="text-gray-900 mb-6">
                Expert execution of residential, commercial, and public buildings with quality craftsmanship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">New building construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Renovation & remodeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Structural repairs & upgrades</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Project management & supervision</span>
                </li>
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                <HardHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Infrastructure Works</h3>
              <p className="text-gray-900 mb-6">
                Civil engineering and site development for robust infrastructure projects.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Earthworks & land leveling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Drainage & water management systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Road construction & paving</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Concrete foundations & slabs</span>
                </li>
              </ul>
            </div>

            {/* MEP & Finishing */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">MEP & Finishing Works</h3>
              <p className="text-gray-900 mb-6">
                Complete mechanical, electrical, plumbing, and interior/exterior finishing services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Electrical installations & wiring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Plumbing & sanitation systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Interior finishing (tiles, paint, flooring)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900">Exterior works & landscaping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Projects We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Residential</h3>
              <p className="text-gray-800 mb-4">
                Custom homes, apartments, villas, and housing estates built to your specifications.
              </p>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• Single-family homes</li>
                <li>• Apartment buildings</li>
                <li>• Luxury villas</li>
                <li>• Housing developments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Commercial</h3>
              <p className="text-gray-800 mb-4">
                Office buildings, retail spaces, hotels, and mixed-use developments.
              </p>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• Office complexes</li>
                <li>• Shopping centers</li>
                <li>• Hotels & hospitality</li>
                <li>• Warehouses</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Public & Industrial</h3>
              <p className="text-gray-800 mb-4">
                Schools, hospitals, government buildings, and industrial facilities.
              </p>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>• Educational facilities</li>
                <li>• Healthcare centers</li>
                <li>• Government projects</li>
                <li>• Industrial plants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose ATSIVA Construction?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-800 text-sm">Premium materials & certified craftsmen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">On-Time Delivery</h3>
              <p className="text-gray-800 text-sm">Strict project timelines & milestones</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">End-to-End Service</h3>
              <p className="text-gray-800 text-sm">From design to maintenance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Post-Completion Support</h3>
              <p className="text-gray-800 text-sm">Maintenance & warranty services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Construction Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Site visit & project requirements' },
              { step: '2', title: 'Design', desc: 'Architectural plans & cost estimate' },
              { step: '3', title: 'Execution', desc: 'Construction & quality control' },
              { step: '4', title: 'Handover', desc: 'Final inspection & documentation' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and detailed project proposal
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact?service=construction">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Request Quote
              </Button>
            </Link>
            <Link href="/portfolio?subcategory=construction">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
