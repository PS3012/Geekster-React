
import { Route, Routes } from 'react-router-dom'
import MainPanel from './pages/geek-food/MainPanel'
import Home from './pages/geek-food/Home'
import './App.css'
import Quote from './pages/geek-food/Quote'

function App() {
  return (
    <>

      <Routes>
        <Route path='/geek-food' element={<MainPanel />}>
          <Route path='' element={<Home />} />
          <Route path='quote' element={<Quote />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
