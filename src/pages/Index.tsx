
import { useState, useEffect } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ComparisonSection from '@/components/ComparisonSection';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import WaitlistForm from '@/components/WaitlistForm';
import { LightbulbIcon, ClockIcon, Rocket, FileText, UserCheck, ChartBar, Save, LayoutDashboard } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl text-blue-600">WinDeck</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#waitlist" className="btn-primary">Join the Waitlist</a>
          </nav>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="section-container pt-16 md:pt-24 lg:pt-32">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full animate-fade-in-slow">AI-Powered Proposal Generator</span>
            <h1 className="heading-xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Win more clients with AI-powered proposals — in under 60 seconds.
            </h1>
            <p className="subheading mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Turn your client notes into stunning proposals without touching a doc.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <a href="#waitlist" className="btn-primary">
                Join the Waitlist
              </a>
              <button className="btn-secondary">
                See How It Works
              </button>
            </div>
            
            <div className="mt-12 md:mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-20 bottom-0 z-10"></div>
              <div className="glass-card p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden opacity-0 animate-slide-up" style={{ animationDelay: "400ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728" 
                  alt="WinDeck Dashboard" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-container">
        <SectionHeading 
          title="Trusted by consultants worldwide" 
          subtitle="Join hundreds of consultants and agencies who are saving time and winning more clients."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            quote="Saved me 3 hours per proposal. I used to dread writing proposals, now I look forward to it."
            author="Alex Morgan"
            role="Freelance Strategist"
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            delay={100}
          />
          <TestimonialCard 
            quote="Looks like I paid a designer. I didn't. My win rate has gone up by 30% since using WinDeck."
            author="Sarah Chen"
            role="Solo Consultant"
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            delay={200}
          />
          <TestimonialCard 
            quote="My clients are impressed with how professional my proposals look now. Game changer."
            author="James Wilson"
            role="Agency Owner"
            avatar="https://randomuser.me/api/portraits/men/67.jpg"
            delay={300}
          />
        </div>
      </section>

      {/* Old Way vs New Way */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="There's a better way to create proposals" 
            subtitle="See how WinDeck transforms your proposal process."
            centered
          />
          <ComparisonSection 
            leftTitle="The old way"
            leftDescription="Hours of writing, messy templates, inconsistent branding, forgetting important details, and stress about pricing."
            rightTitle="The new way with WinDeck"
            rightDescription="60-second generation, professionally designed templates, consistent branding, AI-suggested pricing, and proposals that close deals."
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-container">
        <SectionHeading 
          title="Proposal writing kills your flow." 
          subtitle="Every consultant knows the pain of stopping creative work to write proposals."
          centered
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={ClockIcon}
            title="Time Drain"
            description="The average proposal takes 3+ hours to create, edit, and finalize."
            delay={100}
          />
          <FeatureCard 
            icon={FileText}
            title="Template Hell"
            description="Reusing old proposals means mistakes, outdated info, and inconsistent branding."
            delay={200}
          />
          <FeatureCard 
            icon={ChartBar}
            title="Pricing Anxiety"
            description="Second-guessing your rates leads to underpricing and lost revenue."
            delay={300}
          />
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Proposals that close deals." 
            subtitle="Built to help consultants stand out and win faster."
            centered
            subtitleClassName="text-blue-100"
          />
          <div className="max-w-2xl mx-auto">
            <div className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2400&h=1600" 
                alt="WinDeck in action" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-4xl font-bold mb-2">87%</div>
                <p className="text-blue-100">Reduction in proposal creation time</p>
              </div>
              <div className="flex flex-col items-center text-center opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="text-4xl font-bold mb-2">35%</div>
                <p className="text-blue-100">Average increase in proposal win rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section-container">
        <SectionHeading 
          title="Everything you need to win more clients" 
          subtitle="Powerful features designed specifically for consultants."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={LightbulbIcon}
            title="Instant AI Generation"
            description="Transform your notes into complete proposals in seconds with our AI engine."
            delay={100}
          />
          <FeatureCard 
            icon={UserCheck}
            title="Client Personalization"
            description="Automatically customize each proposal to your client's specific needs and pain points."
            delay={200}
          />
          <FeatureCard 
            icon={FileText}
            title="PDF Export"
            description="Download beautiful, branded PDFs ready to send to clients with one click."
            delay={300}
          />
          <FeatureCard 
            icon={ChartBar}
            title="Pricing Suggestion"
            description="Get AI-powered pricing recommendations based on scope and market rates."
            delay={400}
          />
          <FeatureCard 
            icon={Save}
            title="Save & Reuse Templates"
            description="Create your own template library to maintain consistency and save even more time."
            delay={500}
          />
          <FeatureCard 
            icon={LayoutDashboard}
            title="Simple Dashboard"
            description="Track all your proposals and win rates in one clean, intuitive interface (coming soon)."
            delay={600}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Simple, transparent pricing" 
            subtitle="No complicated tiers. One plan with everything you need."
            centered
          />
          <div className="max-w-md mx-auto glass-card p-8 md:p-10 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="text-center">
              <div className="mb-2">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-600 ml-1">/mo</span>
              </div>
              <p className="text-gray-600 mb-6">Billed monthly, cancel anytime</p>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block mb-6">
                Early access offer: 50% off for first 3 months
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited AI proposal generation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>PDF export & custom branding</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Template library access</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI pricing recommendations</span>
              </div>
            </div>
            <a href="#waitlist" className="btn-primary w-full block text-center">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="section-container">
        <SectionHeading 
          title="Be first in line when we launch" 
          subtitle="Early access users will get 50% off for the first 3 months and priority support."
          centered
        />
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">WinDeck</div>
              <p className="mb-4 max-w-md">Crafted for closers. Your new unfair advantage.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#waitlist" className="hover:text-white transition-colors">Join Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>© {new Date().getFullYear()} WinDeck. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
