import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import CtaSection from '@/components/home/CtaSection';

const REVIEWS_COUNT = 3;

export default function Index() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveReview(p => (p + 1) % REVIEWS_COUNT), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="overflow-x-hidden" style={{ fontFamily: 'Nunito, sans-serif' }}>
        <HeroSection />
        <AboutSection />
        <ReviewsSection activeReview={activeReview} setActiveReview={setActiveReview} />
        <CtaSection />
      </div>
    </Layout>
  );
}
