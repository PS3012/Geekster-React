
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainHome from './pages/MainHome'
import MainPanel from './pages/geek-food/MainPanel'
import Home from './pages/geek-food/Home'
import Quote from './pages/geek-food/Quote'
import ParagraphGenerator from './pages/paragraphGenerator/ParagraphGenerator'
import EducationPlanner from './pages/educationPlanner/EducationPlanner'
import GroceryBud from './pages/groceryBud/GroceryBud'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import './App.css'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/geek-food' element={<MainPanel />}>
          <Route path='' element={<Home />} />
          <Route path='quote' element={<Quote />} />
        </Route>
        <Route path='/paragraph-generator' element={<ParagraphGenerator />} />
        <Route path='/education-planner' element={<EducationPlanner />} />
        <Route path='/grocery-bud' element={<GroceryBud />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
