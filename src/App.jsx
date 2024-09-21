
import { Route, Routes } from 'react-router-dom'
import MainPanel from './pages/geek-food/MainPanel'
import Home from './pages/geek-food/Home'
import './App.css'
import Quote from './pages/geek-food/Quote'
import MainHome from './pages/MainHome'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/geek-food' element={<MainPanel />}>
          <Route path='' element={<Home />} />
          <Route path='quote' element={<Quote />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
