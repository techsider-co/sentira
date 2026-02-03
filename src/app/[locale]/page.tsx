import HeroSection from '@/components/HeroSection';
import ProblemStatsSection from '@/components/ProblemStatsSection';
import SolutionFeaturesSection from '@/components/SolutionFeaturesSection';
import AwardsVisionSection from '@/components/AwardsVisionSection';
import ContactFooter from '@/components/ContactFooter';
import HeroHeader from '@/components/HeroHeader';

export default function SentiraLanding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <HeroHeader />
      <HeroSection />
      <ProblemStatsSection />
      <SolutionFeaturesSection />
      <AwardsVisionSection />
      <ContactFooter />
    </div>
  );
}
