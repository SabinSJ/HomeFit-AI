// src/components/stepper/StepContent.tsx

import type { FormField, StepConfig } from '@/constants/onBoardingSteps';

interface StepContentProps {
  step: StepConfig;
  formData: any;
  onChange: (name: string, value: any) => void;
}

export const StepContent: React.FC<StepContentProps> = ({ step, formData, onChange }) => {
  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'date':
        return (
          <div key={field.name} className="form-group">
            <label className="form-label">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              className="form-input"
              placeholder={field.placeholder}
              required={field.required}
              min={field.min}
              max={field.max}
              value={formData[field.name] || ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
            {field.helpText && <p className="help-text">{field.helpText}</p>}
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.name} className="checkbox-group">
            {field.options?.map((option) => (
              <label key={option.value} className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value={option.value}
                  checked={formData[field.name]?.includes(option.value) || false}
                  onChange={(e) => {
                    const current = formData[field.name] || [];
                    const newValues = e.target.checked
                      ? [...current, option.value]
                      : current.filter((v: string) => v !== option.value);
                    onChange(field.name, newValues);
                  }}
                />
                <span className="checkbox-text">
                  {option.icon && `${option.icon} `}
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        );

      case 'radio':
        return (
          <div key={field.name} className="radio-group">
            {field.options?.map((option) => (
              <div key={option.value} className="radio-card">
                <input
                  type="radio"
                  id={`${field.name}-${option.value}`}
                  name={field.name}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
                <label htmlFor={`${field.name}-${option.value}`}>
                  {option.icon && <div className="radio-icon">{option.icon}</div>}
                  <div className="radio-title">{option.label}</div>
                  {option.description && <div className="radio-desc">{option.description}</div>}
                </label>
              </div>
            ))}
          </div>
        );

      case 'toggle':
        return (
          <div key={field.name} className="toggle-item">
            <div className="toggle-info">
              <h4>
                {field.icon && `${field.icon} `}
                {field.label}
              </h4>
              {field.helpText && <p>{field.helpText}</p>}
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={formData[field.name] ?? field.defaultChecked}
                onChange={(e) => onChange(field.name, e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        );

      case 'select':
        return (
          <div key={field.name} className="form-group">
            <label className="form-label">{field.label}</label>
            <select
              name={field.name}
              className="form-input"
              value={formData[field.name] || ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );

      case 'range':
        return (
          <div key={field.name} className="form-group">
            <label className="form-label">{field.label}</label>
            <input
              type="range"
              name={field.name}
              min={field.min}
              max={field.max}
              value={formData[field.name] || field.defaultValue}
              onChange={(e) => onChange(field.name, Number(e.target.value))}
              className="form-input"
              style={{ padding: '0.5rem' }}
            />
            <p className="help-text" style={{ textAlign: 'center', color: '#8b5cf6', fontWeight: 600 }}>
              {formData[field.name] || field.defaultValue} days
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="content">
      <h2>{step.title}</h2>
      <p>{step.subtitle}</p>

      <div style={{ marginTop: '1.5rem' }}>
        {step.fields.map(renderField)}
      </div>
    </div>
  );
};