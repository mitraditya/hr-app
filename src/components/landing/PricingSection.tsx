import React from 'react';
import { Heart, Shield, Zap, Users, Calendar, MapPin, BarChart3, ClipboardCheck, Globe } from 'lucide-react';

interface PricingSectionProps {
  onRegisterClick: () => void;
}

const features = [
  { icon: MapPin, label: 'Selfie-based attendance with GPS' },
  { icon: Calendar, label: 'Leave management & balances' },
  { icon: Users, label: 'Employee directory & profiles' },
  { icon: BarChart3, label: 'Reports & data export' },
  { icon: ClipboardCheck, label: 'Performance reviews' },
  { icon: Globe, label: 'PWA — works on any device' },
  { icon: Shield, label: 'Secure & reliable' },
  { icon: Zap, label: 'No user or employee limits' },
];

const PricingSection: React.FC<PricingSectionProps> = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-dl-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-dl-teal uppercase tracking-wide">A.K. Industries</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-dl-ink mt-3 mb-4">
            Everything You Need. All Included.
          </h2>
          <p className="text-dl-muted text-lg">
            The A.K. Industries HR platform gives every team member full access — attendance tracking, leave management, employee directory, and more.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-dl-teal rounded-3xl p-8 md:p-12 text-center text-dl-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-dl-surface/5 rounded-full -translate-y-1/3 translate-x-1/3" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-dl-surface/5 rounded-full translate-y-1/3 -translate-x-1/3" aria-hidden="true" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-dl-surface/10 rounded-full mb-6">
                <Heart size={14} className="text-dl-surface/90" />
                <span className="text-xs font-bold text-dl-surface/90">All Features Included</span>
              </div>

              <p className="text-dl-surface/80 text-lg mb-4 max-w-md mx-auto">
                All features available to every employee — no hidden tiers, no paywalls, full access from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {features.map((f) => (
            <div key={f.label} className="flex items-start gap-3 bg-dl-ground border border-dl-hair-soft rounded-dl-md p-4">
              <f.icon size={18} className="text-dl-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm font-medium text-dl-ink">{f.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
