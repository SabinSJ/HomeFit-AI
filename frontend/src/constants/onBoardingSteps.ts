export interface FormField {
  type: 'text' | 'email' | 'password' | 'number' | 'date' | 'checkbox' | 'radio' | 'toggle' | 'select' | 'range';
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  min?: number;
  max?: number;
  options?: Array<{
    value: string;
    label: string;
    icon?: string;
    description?: string;
  }>;
  defaultValue?: any;
  defaultChecked?: boolean;
  icon?: string;
}

export interface StepConfig {
  id: number;
  title: string;
  subtitle: string;
  label: string;
  description: string;
  icon?: string;
  fields: FormField[];
}

export const ONBOARDING_STEPS: StepConfig[] = [
  // STEP 1: Personal Info
  {
    id: 1,
    title: 'Create Your Account',
    subtitle: "Let's start with some basic information about you.",
    label: 'Personal Info',
    description: 'Basic details',
    fields: [
      {
        type: 'text',
        name: 'fullName',
        label: 'Full Name',
        placeholder: 'John Doe',
        required: true,
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email Address',
        placeholder: 'john@example.com',
        required: true,
      },
      {
        type: 'text',
        name: 'username',
        label: 'Username',
        placeholder: 'johndoe123',
        required: true,
        helpText: 'This will be your unique identifier',
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: '••••••••',
        required: true,
        helpText: 'At least 8 characters with numbers and symbols',
      },
      {
        type: 'number',
        name: 'height',
        label: 'Height (cm)',
        placeholder: '175',
        min: 100,
        max: 250,
      },
      {
        type: 'number',
        name: 'weight',
        label: 'Weight (kg)',
        placeholder: '70',
        min: 30,
        max: 300,
      },
      {
        type: 'date',
        name: 'dateOfBirth',
        label: 'Date of Birth',
        required: true,
      },
    ],
  },

  // STEP 2: Fitness Goals
  {
    id: 2,
    title: 'What are your fitness goals?',
    subtitle: 'Select all goals that apply to you. This helps us personalize your workout plans.',
    label: 'Fitness Goals',
    description: 'What you want',
    fields: [
      {
        type: 'checkbox',
        name: 'goals',
        label: 'Fitness Goals',
        options: [
          { value: 'muscle', label: 'Build Muscle Mass', icon: '💪' },
          { value: 'weight', label: 'Lose Weight', icon: '🔥' },
          { value: 'strength', label: 'Increase Strength', icon: '⚡' },
          { value: 'endurance', label: 'Improve Endurance', icon: '🏃' },
          { value: 'flexibility', label: 'Enhance Flexibility', icon: '🧘' },
          { value: 'tone', label: 'Tone & Define', icon: '✨' },
        ],
      },
    ],
  },

  // STEP 3: Experience Level
  {
    id: 3,
    title: "What's your experience level?",
    subtitle: 'This helps us recommend the right exercises and intensity for you.',
    label: 'Experience Level',
    description: 'Your background',
    fields: [
      {
        type: 'radio',
        name: 'experience',
        label: 'Experience Level',
        options: [
          { 
            value: 'beginner', 
            label: 'Beginner', 
            icon: '🌱',
            description: 'New to fitness'
          },
          { 
            value: 'intermediate', 
            label: 'Intermediate', 
            icon: '💪',
            description: '6-12 months'
          },
          { 
            value: 'advanced', 
            label: 'Advanced', 
            icon: '🏆',
            description: '1+ years'
          },
          { 
            value: 'expert', 
            label: 'Expert', 
            icon: '⚡',
            description: '3+ years'
          },
        ],
      },
      {
        type: 'range',
        name: 'trainingDays',
        label: 'How many days per week can you train?',
        min: 1,
        max: 7,
        defaultValue: 3,
      },
    ],
  },

  // STEP 4: Preferences
  {
    id: 4,
    title: 'Customize Your Preferences',
    subtitle: 'Fine-tune your experience with these optional settings.',
    label: 'Preferences',
    description: 'Customize settings',
    fields: [
      {
        type: 'toggle',
        name: 'pushNotifications',
        label: 'Push Notifications',
        helpText: 'Get reminders for your workouts',
        icon: '🔔',
        defaultChecked: true,
      },
      {
        type: 'toggle',
        name: 'aiFormCorrection',
        label: 'AI Form Correction',
        helpText: 'Real-time feedback on your technique',
        icon: '🎯',
        defaultChecked: true,
      },
      {
        type: 'toggle',
        name: 'weeklyReports',
        label: 'Weekly Progress Reports',
        helpText: 'Receive email summaries every Monday',
        icon: '📊',
        defaultChecked: false,
      },
      {
        type: 'toggle',
        name: 'musicIntegration',
        label: 'Music Integration',
        helpText: 'Connect your Spotify for workout playlists',
        icon: '🎵',
        defaultChecked: false,
      },
      {
        type: 'toggle',
        name: 'darkMode',
        label: 'Dark Mode',
        helpText: 'Easy on the eyes during night workouts',
        icon: '🌙',
        defaultChecked: true,
      },
      {
        type: 'select',
        name: 'workoutTime',
        label: 'Preferred Workout Time',
        options: [
          { value: 'morning', label: 'Morning (6am - 10am)' },
          { value: 'midday', label: 'Midday (10am - 2pm)' },
          { value: 'afternoon', label: 'Afternoon (2pm - 6pm)' },
          { value: 'evening', label: 'Evening (6pm - 10pm)' },
          { value: 'night', label: 'Night (10pm - 12am)' },
        ],
      },
    ],
  },
];