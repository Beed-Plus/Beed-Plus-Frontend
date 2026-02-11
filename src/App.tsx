import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Charts from './pages/Charts'
import Topcreators from './pages/Topcreators'
import Campaigns from './pages/Campaigns'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/charts' element={<Charts />} />
      <Route path='/topcreators' element={<Topcreators />} />
      <Route path='/campaigns' element={<Campaigns />} />
    </Routes>
  )
}

export default App
