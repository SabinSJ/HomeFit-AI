export interface NavigationItem {
  path: string
  icon: string
  label: string
}

export const navigationItems = [
  {
    path: '/',
    icon: '🏠',
    label: 'Home',
  },
  {
    path: '/workouts',
    icon: '🏋️',
    label: 'Workouts',
  },
  {
    path: '/progress',
    icon: '📈',
    label: 'Progress',
  },
  {
    path: '/history',
    icon: '📚',
    label: 'History',
  },
  {
    path: '/ai-coach',
    icon: '🤖',
    label: 'AI Coach',
  },
]