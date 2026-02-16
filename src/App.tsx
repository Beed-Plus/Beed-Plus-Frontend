import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Charts from './pages/Charts'
import Topcreators from './pages/Topcreators'
import Campaigns from './pages/Campaigns'
import Top100 from './pages/Charts/Top100'

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
      path: "topcreators",
      Component: Topcreators
    },
    {
      path: "campaigns",
      Component: Campaigns
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
