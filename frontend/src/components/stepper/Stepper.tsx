// src/components/stepper/Stepper.tsx

import { useState } from 'react';
import { ONBOARDING_STEPS } from '@/constants/onBoardingSteps';
import { StepContent } from './StepContent';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import '@/assets/styles/stepper.css';

export const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < ONBOARDING_STEPS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log('Form submitted:', formData);
      alert('🎉 Setup Complete!');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progress = ((currentStep - 1) / (ONBOARDING_STEPS.length - 1)) * 100;

  console.log('progress', progress)

  return (
    <div className="stepper-container">
      <div className="stepper" style={{ '--progress': `${progress}%` } as React.CSSProperties}>
        {ONBOARDING_STEPS.map((step, index) => (
          <div
            key={step.id}
            className={`step ${
              index + 1 < currentStep ? 'completed' : 
              index + 1 === currentStep ? 'active' : ''
            }`}
          >
            <div className="step-circle">
              <span className="step-number">{step.id}</span>
            </div>
            <div>
              <div className="step-label">{step.label}</div>
              <div className="step-description">{step.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Content dinamic */}
      <StepContent
        step={ONBOARDING_STEPS[currentStep - 1]}
        formData={formData}
        onChange={handleChange}
      />

      {/* Buttons */}
      <div className="buttons">
        <button
          className="btn-back"
          onClick={prevStep}
          disabled={currentStep === 1}
          style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <button className="btn-next" onClick={nextStep}>
          <span>{currentStep === ONBOARDING_STEPS.length ? 'Finish' : 'Continue'}</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};