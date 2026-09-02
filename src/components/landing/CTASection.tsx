import React from 'react';
import { LogIn } from 'lucide-react';

interface CTASectionProps {
  onRegisterClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onRegisterClick: _onRegisterClick }) => {
  return (
    <section className="py-20 md:py-28 bg-dl-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-dl-teal rounded-3xl overflow-hidden px-6 py-16 sm:px-12 sm:py-20 text-center">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-dl-surface/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-dl-surface/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-dl-surface mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-dl-surface/80 max-w-xl mx-auto mb-8">
              Log in to the A.K. Industries HR portal to manage attendance, leave, and employee records.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/login"
                className="w-full sm:w-auto px-8 py-4 bg-dl-surface text-dl-teal font-bold text-sm rounded-dl-lg hover:bg-dl-ground transition-colors shadow-dl-2 flex items-center justify-center gap-2"
              >
                <LogIn size={18} /> Login to Your Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
