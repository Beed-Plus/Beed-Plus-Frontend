import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Charts from './pages/Charts'
import Topcreators from './pages/Topcreators'
import Campaigns from './pages/Campaigns'
import Top100 from './pages/Top100'
import Category from './pages/Charts/Category'
import Login from './pages/AuthPages/Login'
import Register from './pages/AuthPages/Register'
import Dashboard from './pages/Dashboard'
import Dashboardlayout from './pages/Layouts/Dashboardlayout'
import ForgotPassword from './pages/AuthPages/ForgotPassword'
import ResetPassword from './pages/AuthPages/ForgotPassword/ResetPassword'
import TopHits from './pages/TopHits'

function App() {

  const router = createBrowserRouter([
    {
      index: true,
      Component: Home
    },
    {
      path: "charts",
      Component: Charts,
    },
    {
      path: "charts/top100",
      Component: Top100
    },
    {
      path: "charts/categories/:category",
      Component: Category
    },
    {
      path: "topcreators",
      Component: Topcreators
    },
    {
      path: "campaigns",
      Component: Campaigns
    },
    {
      path: "tophits",
      Component: TopHits
    },
    {
      path: "auth/login",
      Component: Login
    },
    {
      path: "auth/register",
      Component: Register
    },
    {
      path: "auth/forgotpassword",
      Component: ForgotPassword
    },
    {
      path: "auth/resetpassword",
      Component: ResetPassword
    },
    {
      path: "dashboard",
      Component: Dashboardlayout,
      children: [
        {
          index: true,
          Component: Dashboard
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
