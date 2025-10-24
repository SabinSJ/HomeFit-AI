// src/pages/OnBoardingPage.tsx

import { Stepper } from '@/components/stepper/Stepper';
import '@/assets/styles/onBoardingPage.css';

const OnBoardingPage = () => {
  return (
    <div className="onboarding-wrapper">
      <h1 className="onboarding-title">🏋️ Setup Your AI Trainer</h1>
      <Stepper />
    </div>
  );
};

export default OnBoardingPage;