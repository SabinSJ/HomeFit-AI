import { createBrowserRouter, Navigate } from 'react-router-dom'

// Layouts
import MainLayout from '../layouts/MainLayout'
import LandingLayout from '../layouts/LandingLayout'

// Pages
import LandingPage from '../pages/LandingPage'
import OnBoardingPage from '../pages/OnBoardingPage'
import DashboardPage from '../pages/DashboardPage'
import WorkoutsPage from '../pages/WorkoutsPage'
import ProgressPage from '../pages/ProgressPage'
// import HistoryPage from '../pages/HistoryPage'
// import AICoachPage from '../pages/AICoachPage'
import SettingsPage from '../pages/SettingsPage'
// import SquatsPage from '../pages/SquatsPage'
// import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  // Landing (fără sidebar)
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element: <OnBoardingPage />,
      },
    ],
  },

  // Main app (cu sidebar)
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'workouts',
        element: <WorkoutsPage />,
      },
      {
        path: 'progress',
        element: <ProgressPage />,
      },
    //   {
    //     path: 'history',
    //     element: <HistoryPage />,
    //   },
    //   {
    //     path: 'ai-coach',
    //     element: <AICoachPage />,
    //   },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },

  // Workout pages (cu sidebar)
//   {
//     path: '/workout',
//     element: <MainLayout />,
//     children: [
//       {
//         path: 'squats',
//         element: <SquatsPage />,
//       },
//     ],
//   },

  // 404
//   {
//     path: '*',
//     element: <NotFoundPage />,
//   },
])