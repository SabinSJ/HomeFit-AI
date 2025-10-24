import React from 'react';

import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import DemoSection from '../components/landing/DemoSection';
import SocialProofSection from '../components/landing/SocialProofSection';
import FinalCtaSection from '../components/landing/FinalCtaSection';

const SettingsPage: React.FC = () => {
    const demoRef = React.useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: any) => {
        ref.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
        });
    };

    return (
        <>
            <HeroSection demoRef={demoRef} scrollToSection={scrollToSection}/>
            <FeaturesSection />
            <DemoSection demoRef={demoRef} />
            <SocialProofSection />
            <FinalCtaSection />
        </>
    );
};

export default SettingsPage;